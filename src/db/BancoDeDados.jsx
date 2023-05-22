import { initializeApp } from 'firebase/app';
import { collection, writeBatch, doc, getDocs, getFirestore, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react'
import { media_final, media_prova, media_tarefa } from '../Cursos';

//dados do banco firebase
const firebaseapp = initializeApp({
    apiKey: "AIzaSyBohZe48d0kBpMkjTl5Z8OvvXkinO9ewNI",
    authDomain: "pi-firebase-fcf48.firebaseapp.com",
    projectId: "pi-firebase-fcf48",
});

//faz conexão com o banco
const db = getFirestore(firebaseapp);
const useCollectionRef = collection(db, "usuarios");

export const ListaUsuarios = () => {

    //variavel que recebera a lista de usuarios
    const [users, setUsers] = useState([]);

    useEffect(() => {

        //transforma os dados do banco numa array
        const getUsers = async () => {
            const data = await getDocs(useCollectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

        }
        getUsers();

    }, [])

    return users
}

export const VerificaHistorico = (id, sub_colecao) => {

    const [notas, setNotas] = useState();

    useEffect(() => {

        const parentDocRef = doc(useCollectionRef, id);
        const subCollectionRef = collection(parentDocRef, sub_colecao);

        // adiciona listener para a subcoleção
        const unsubscribe = onSnapshot(subCollectionRef, (subCollectionSnapshot) => {
            const subCollectionDocs = subCollectionSnapshot.docs;

            setNotas(
                subCollectionDocs.map((doc) => {
                    const data = doc.data();
                    return {
                        disciplinas: doc.id,
                        P1: data.P1,
                        P2: data.P2,
                        PI: data.PI,
                        T1: data.T1,
                        T2: data.T2,
                    };
                })
            );
        });

        // retorna função de cleanup para remover o listener quando o componente for desmontado
        return () => unsubscribe();
    },
        [id, sub_colecao]
    );

    return notas ? notas : [];
};
export const ConsultarHistorico = async (id) => {
    // documento usuário
    const parentDocRef = doc(useCollectionRef, id);
    // sub-coleção disciplinas 
    const subCollectionRef = collection(parentDocRef, "disciplinas");

    try {
        // consulta de todos os documentos da sub-coleção
        const subCollectionSnapshot = await getDocs(subCollectionRef);
        // array com todos os campos de cada documento, incluindo o nome do documento
        const notas = subCollectionSnapshot.docs.map((doc) => ({
            id: doc.id, // nome do documento
            ...doc.data() // campos do documento
        }));
        return notas;
    } catch (error) {
        console.error("Erro ao consultar o histórico:", error);
        return [];
    }
};

export const AtualizarNotas = async (id, data, materia) => {

    const parentDocRef = doc(useCollectionRef, id);
    // Obtém uma referência para a subcoleção
    const subCollectionRef = collection(parentDocRef, "disciplinas");

    // Obtém os documentos da subcoleção
    const subCollectionSnapshot = await getDocs(subCollectionRef);
    console.log(subCollectionSnapshot)
    // Cria um objeto batch para agrupar as operações de atualização
    const batchUpdate = writeBatch(db);


    // Obtém a referência para o documento atual
    const docRef = doc(subCollectionRef, materia);

    // Define os dados que você deseja atualizar
    const newData = { P1: data.P1, P2: data.P2, T1: data.T1, T2: data.T2, PI: data.PI, MP: media_prova(data.P1, data.P2), MT: media_tarefa(data.T1, data.T2), MF: media_final(materia, data.P1, data.P2, data.T1, data.T2, data.PI) };

    // Adiciona a operação de atualização ao batch
    batchUpdate.update(docRef, newData);
    // Executa o batch para aplicar as atualizações
    await batchUpdate.commit();
}


