import React, { useState, useEffect, useContext, useLayoutEffect } from 'react';
import { View, Text, Modal, SafeAreaView, TouchableOpacity, Keyboard, Alert } from 'react-native';

import { FontAwesome5, AntDesign } from '@expo/vector-icons';

import { AuthContext } from '../../contexts/auth'

import firebase from '../../services/firebaseConnection'

import { Wrapper, Header, Logo, Title, PageName, Container, ContainerScroll, Card, SubjectTitle, SubjectInfo, SubjectInfo2,
  SubmitText } from './styles'

export default function TarefasList({ data }) {
  const { user } = useContext(AuthContext)
  const [helpers1, setHelpers1] = useState([])
  const [helpers2, setHelpers2] = useState([])
  const [icon, setIcon] = useState("questioncircleo")


  useEffect(() => {
      async function dados2(){
        await firebase.database().ref('Doubted').orderByChild('id').equalTo(user.uid).on('value', (snapshot)=> {
          setHelpers2([])
  
          snapshot.forEach((chilItem) => {
            let data = {
              key: chilItem.val().key,
              id: chilItem.val().id,
              task: chilItem.val().taskId,
              help: chilItem.val().help
            };
  
            setHelpers2(data);
            console.log(helpers2)
          })
        })
  
      }
      dados2()


  }, [])

  useEffect(() => {

    async function dados5() {
      await firebase.database().ref('Doubts').orderByChild('tipo').equalTo(data.frente).on('value', (snapshot)=> {
        setHelpers1([]);

        snapshot.forEach((chilItem) => {
          let data = {
            key: chilItem.val().tipo,
            help: chilItem.val().ajudas,
          };

          setHelpers1(data);
        })
        console.log(helpers1)


      })
    }

    dados5()

  }, [])


    useEffect(() => {
      async function dados3(){
        if(helpers2.id === undefined){
          setIcon('questioncircleo')
        }else{
          setIcon('questioncircle')
        }
      }

      dados3()
    }, [])

    async function uploadDoubt(){
      if(helpers2.id === undefined){
        setIcon('questioncircle')
        let sugestions = await firebase.database().ref('Doubts');
    
        sugestions.child(data.frente).update({
  
          ajudas:  helpers1.help + 1
  
        })
        
  
            let help = await firebase.database().ref('Doubted');
      
            help.child(data.key + '_' + user.uid).set({
      
              id: user.uid,
              taskId: data.key,
              help: data.key + '_' + user.uid
      
            })

            
      }else{
        setIcon('questioncircleo')
        let sugestions = await firebase.database().ref('Doubts');
    
        sugestions.child(data.frente).update({
  
          ajudas: helpers1.help - 1 
  
        })
  
            let help = await firebase.database().ref('Doubted');
      
            help.child(data.key + '_' + user.uid).remove()
      }
      
    }

    return(
        <ContainerScroll>
            <Container style={{ marginBottom: 5 }}>
                <Card>
                    <SubjectTitle>{data.frente}</SubjectTitle>
                    <View style={{ marginTop: 20, marginLeft: '5%' }}>
                        <SubjectInfo tipo={data.tipo}>- {data.tarefas}</SubjectInfo>
                          <View style={{ marginTop: '6%'}}> 
                            <SubjectInfo2> Forma de entrega: {data.forma}</SubjectInfo2>
                            <SubjectInfo2> Data de entrega: {data.dia} até ás {data.hora}</SubjectInfo2>
                         </View>   
                          <TouchableOpacity style={{ position: 'absolute', right: 60, bottom: 45, }} onPress={uploadDoubt}>
                            <AntDesign name={icon} size={40} color="#5c2a71" />
                          </TouchableOpacity>
                    </View>
                </Card>
            </Container>
        </ContainerScroll>
    )
}