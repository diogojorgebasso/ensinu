import React, { useState, createContext, useEffect } from 'react';
import firebase from '../services/firebaseConnection';
import { AsyncStorage } from 'react-native'

export const AuthContext = createContext({});

function AuthProvider({ children }){
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [creator, setCreator] = useState(null)
    
    useEffect(() => {
        async function loadStorage() {
            const storageUser = await AsyncStorage.getItem('Auth_user');

            if(storageUser){
                setUser(JSON.parse(storageUser))
                setLoading(false);
            }

            setLoading(false);
        }

        loadStorage();
    }, [])

    



    //Funcao para logar o usuário
    async function signIn(email,password){
        await firebase.auth().signInWithEmailAndPassword(email, password)
        .then(async (value) => {
            let uid = value.user.uid;
            await firebase.database().ref('users').child(uid).once('value')
            .then((snapshot) => {
                let data = {
                    uid: uid,
                    nome: snapshot.val().nome,
                    email: value.user.email,
                    Tipo: snapshot.val().Tipo,
                    Série: snapshot.val().Série,
                    Matéria: snapshot.val().Matéria,
                    classe: snapshot.val().classe,
                    portfolio: snapshot.val().portfolio,
                }

                setUser(data);
                storageUser(data);
            })
        })
        .catch((error) => {
            alert(error.code);
            if (error.code ==='auth/wrong-password'){
                alert('Senha errada, por favor, digite a certa.')
            }
            if (error.code ==='auth/user-not-found'){
                alert('Não encontramos o email informado. Por favor, digite novamente. ')
            }
            if (error.code ==='auth/invalid-email'){
                alert('Não encontramos o email informado. Por favor, digite novamente. ')
            }
        });
    }


    //deslogar usuário
    async function signOut(){
        await firebase.auth().signOut();
        await AsyncStorage.clear()
        .then(() => {
            setUser(null);
        })
    } 

    async function signUp(email, password, nome){
                    await firebase.auth().createUserWithEmailAndPassword(email,password)
                    .then(async (value)=>{
                        let uid = value.user.uid;
                        await firebase.database().ref('users').child(uid).set({
                            nome: nome,
                            Tipo:  'aluno',
                            Série: '2º ano',
                            Matéria: 'Álgebra',
                            classe: 'https://classroom.google.com/c/MTQ4MTY5MDkwMDMx?cjc=zjpo2of',
                            portfolio: 'https://sites.google.com/view/ensinu'
                        })
                        .then(()=>{
                            let data = {
                                uid: uid,
                                nome: nome,
                                Tipo: 'aluno',
                                email: value.user.email,
                                Série: '2º ano',
                                Matéria: 'Álgebra',
                                classe: 'https://classroom.google.com/c/MTQ4MTY5MDkwMDMx?cjc=zjpo2of',
                                portfolio: 'https://sites.google.com/view/ensinu'
                            };
                            setUser(data);
                            storageUser(data);
                        })
                        .catch((error) => {
                            alert(error.code);
                            if (error.code === 'auth/email-already-exists'){
                                alert('Cada usuário tem um email exclusivo. Poderia reinserir, por favor.')
                            }
                            if (error.code === 'auth/internal-error'){
                                alert('Um erro ocorreu no servidor, digite email e senha novamente, se o erro persistir, entre em contato conosco.')
                            }
                            if (error.code === 'auth/invalid-argument'){
                                alert('Um argumento inválido foi fornecido a um método do Authentication. A mensagem de erro precisa conter informações adicionais.')
                            }
                            if (error.code === 'auth/session-cookie-expired'){
                                alert('O cookie da sessão expirou. Digite novamente o email.')
                            }
                        });
                    })
            }
        
    



    async function storageUser(data){
        await AsyncStorage.setItem('Auth_user', JSON.stringify(data));
    }

    return(
     <AuthContext.Provider value={{ signed: !!user , user, loading, signUp, signIn, signOut}}>
         {children}
     </AuthContext.Provider>   
    );
}

export default AuthProvider;