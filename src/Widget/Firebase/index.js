
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_k45UQA_2SxL9vso1dYahzxHBfdGHQRI",
  authDomain: "whatsapp-ff587.firebaseapp.com",
  databaseURL: "https://whatsapp-ff587-default-rtdb.firebaseio.com",
  projectId: "whatsapp-ff587",
  storageBucket: "whatsapp-ff587.appspot.com",
  messagingSenderId: "279979451692",
  appId: "1:279979451692:web:e29edd6fce9011847eb889"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export const verificaSeUsuarioEstaLogado = () => {
    if(auth.currentUser != null){
        console.log("Possui usuario")
        return true
    }else{
        console.log("Nenhum Usuario Logado")
        return false
    }
}
export const criaContaUsuario = (email, senha, nome) => {
    createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            // Conta Criada
            const user = userCredential.user
            user.displayName(nome)
        })
        .catch(() => {})
}
export const logandoUsuario = (email, senha) => {
    signInWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {

        })
        .catch(() => {})
}
export const logoutUser = () => {
    signOut(auth)
}

export default app