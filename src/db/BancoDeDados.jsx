import { initializeApp } from 'firebase/app';
import { collection, deleteDoc, doc, getDocs, getFirestore, setDoc, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react'


//dados do banco firebase
const firebaseapp = initializeApp({
    apiKey: "AIzaSyBohZe48d0kBpMkjTl5Z8OvvXkinO9ewNI",
    authDomain: "pi-firebase-fcf48.firebaseapp.com",
    projectId: "pi-firebase-fcf48",
});

//faz conexão com o banco
const db = getFirestore(firebaseapp);
const useCollectionRef = collection(db, "usuarios");

export const VerificarConta = () => {
    for (let i = 0; i < users.length; i++) {
        if (data.email === users[i].id && data.senha === users[i].senha) {
            localStorage.setItem("loginStatus", true);
            localStorage.setItem("curso", users[i].curso)
            VerificarCurso(users[i].curso);
            return;
        }
    }
}
export const VerificarCurso = () => {
    if (curso === "Ciência da Computação") return navigate("/Ciência_da_Computação")

    else if (curso === "Sistema da Informação") return navigate("/Sistema_da_Informação")

    else if (curso === "Design") return navigate("/Design")

    else if (curso === "Engenharia") return navigate("/Engenharia")

    else if (curso === "Administração") return navigate("/Administração")
}
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

export const VerificaHistorico = (email, materia) => {

    const [notas, setNotas] = useState([]);

    useEffect(() => {

        const parentDocRef = doc(useCollectionRef, email);
        const subCollectionRef = collection(parentDocRef, materia);

        // adiciona listener para a subcoleção
        const unsubscribe = onSnapshot(subCollectionRef, (subCollectionSnapshot) => {
            const subCollectionDocs = subCollectionSnapshot.docs;

            setNotas(
                subCollectionDocs
                    .filter(doc => doc.data().P1 !== undefined)
                    .map(doc => {
                        const data = doc.data();
                        return {
                            id: doc.id,
                            P1: data.P1,
                        };
                    })
            );
        });

        // retorna função de cleanup para remover o listener quando o componente for desmontado
        return () => unsubscribe();
    }, [])

    if (notas.length !== 0) {
        return notas;
    }
}