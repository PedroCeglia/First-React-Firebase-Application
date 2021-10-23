
// Import the functions you need from the SDKs you need
import  {initializeApp} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from 'firebase/auth'
import {getDatabase, set, ref, update} from 'firebase/database'
import {getStorage} from 'firebase/storage'
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

export const database = getDatabase();
export const storage = getStorage();

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
export function alterarNome(authRef, nome, databaseRef){
    updateProfile(authRef.currentUser, {
    displayName: nome
    }).then(() => {
    // Profile updated!
    alteraNomeDatabase(authRef.currentUser, nome, databaseRef)
    // ...
    }).catch((error) => {
    // An error occurred
    // ...
    });
}

export const criaContaUsuario = (email, senha, nome) => {
    createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            // Conta Criada
            const user = userCredential.user
            alterarNome(auth, nome)
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
export function alteraNomeDatabase(user, nameUser, dataRef){
    update(ref(database,`usuarios/${user.uid}`),{
        nome:nameUser
    })
}
/*
function writeNewPost(uid, username, picture, title, body) {
  const db = getDatabase();

  // A post entry.
  const postData = {
    author: username,
    uid: uid,
    body: body,
    title: title,
    starCount: 0,
    authorPic: picture
  };

  // Get a key for a new Post.
  const newPostKey = push(child(ref(db), 'posts')).key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  const updates = {};
  updates['/posts/' + newPostKey] = postData;
  updates['/user-posts/' + uid + '/' + newPostKey] = postData;

  return update(ref(db), updates);
}
 */
export default app