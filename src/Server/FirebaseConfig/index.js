
// Import the functions you need from the SDKs you need
import  {initializeApp} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {getDatabase, set, ref} from 'firebase/database'
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

export const auth = getAuth()
const database = getDatabase();

export const verificaSeUsuarioEstaLogado = () => {
    if(auth.currentUser != null){
        console.log("Possui usuario")
        return true
    }else{
        console.log("Nenhum Usuario Logado")
        return false
    }
}
export const verificaSeUsuarioEstaDeslogado = () => {
    if(auth.currentUser != null){
        console.log("Possui usuario")
        return false
    }else{
        console.log("Nenhum Usuario Logado")
        return true
    }
}
export const listenerVerificaUsuarioLogado = () => {
    onAuthStateChanged(auth, (user) =>{
        if(user){
            return true
        }else{
            return false
        }
    })
}

export const criaContaUsuario = (email, senha, nome) => {
    createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            // Conta Criada
            const user = userCredential.user
            criandoUsuarioDatabase(user.uid, user.email, nome)
        })
        .catch((erro) => {
            if(erro){
                const errorCode = erro.code;
                switch (errorCode){
                    case 'auth/invalid-email':
                        alert('Digite um valor de e-mail valido! Ex) ...@gmail.com')
                        break
                    case 'auth/email-already-exists':
                        alert('Já existe um usuario com este e-mail!')
                        break
                    case 'auth/weak-password':
                        alert('Digite uma senha com no minimo 6 digitos')
                        break        
                    default:
                        alert('Erro Prencha todos os Campos de Forma Correta')
                        break                             
                }
                console.log(errorCode)
                return errorCode                
            }
        })
}
export const logandoUsuario = (email, senha) => {
    signInWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {

        })
        .catch((erro) => {
            if(erro){
                const errorCode = erro.code;
                switch (errorCode){
                    case 'auth/user-not-found':
                        alert('Não há registro de usuário existente correspondente ao identificador fornecido.')
                        break
                    case 'auth/invalid-email':
                        alert('Digite um valor de e-mail valido! Ex) ...@gmail.com')
                        break
                    case 'auth/wrong-password' :
                        alert('Senha Incorreta, tente de novo!')
                        break   
                    default:
                        alert('Erro Prencha todos os Campos de Forma Correta')
                        break       
                }
                console.log(errorCode)
                return errorCode                
            }
        })
}
export const logOutUser = () => {
    signOut(auth)
}

export const criandoUsuarioDatabase = (uidUser, emailUser, nameUser) =>{
    set(ref(database, 'usuarios/' + uidUser),
        {
            nome: nameUser,
            email: emailUser,
        }
    )
}
/*
function writeUserData(userId, name, email, imageUrl) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}
*/ 
export default app