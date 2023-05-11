import { initializeApp } from 'firebase/app';
import { collection, deleteDoc, doc, getDocs, getFirestore, setDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react'

//dados do banco firebase
const firebaseapp = initializeApp({
        apiKey: "AIzaSyBt-jfOZdmMNuDQryRXOjTd3ZW0cXseURE",
        authDomain: "testando-firebase-b99d0.firebaseapp.com",
        projectId: "testando-firebase-b99d0",
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
        setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
      
    }
    getUsers();

    },[])

    return users
}