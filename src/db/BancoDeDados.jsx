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

export const VerificaHistorico = (id, materia) => {

    const [notas, setNotas] = useState();
      
    useEffect(() => {

        const parentDocRef = doc(useCollectionRef, id);
        const subCollectionRef = collection(parentDocRef, materia);
      
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
        [id, materia]
    );
      
    return notas ? notas : [];
};
  
  
  
  
  