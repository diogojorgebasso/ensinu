import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Modal, SafeAreaView, TouchableOpacity, Keyboard, Alert, FlatList, ActivityIndicator, Platform } from 'react-native';

import { format } from 'date-fns';

import { Wrapper, Header, Logo, Title, PageName, Container, ContainerScroll, Card, SubjectTitle, SubjectInfo, AddContainer, AreaInput, Input, Input2, Input3, InputContainer, SubmitButton, 
  SubmitText } from './styles'

import { Entypo } from '@expo/vector-icons';

import { AuthContext } from '../../contexts/auth'

import TarefasList from '../../components/TarefasList'
import Picker from '../../components/Picker';
import PickerSub from '../../components/PickerSub';
import PickerGra from '../../components/PickerGra';
import DatePicker from '../../components/DatePicker'

import firebase from '../../services/firebaseConnection'

import { AntDesign } from '@expo/vector-icons';
import { UserInterfaceIdiom } from 'expo-constants';
import { ScrollView } from 'react-native-gesture-handler';

export default function Tasks() {
  const [modalVisible, setModalVisible] = useState(false);

     const { user } = useContext(AuthContext);

  const [show, setShow] = useState(false)

  const [list, setList] = useState([])
  const [type, setType] = useState(null);
  const [subject, setSubject] = useState('');
  const [grade, setGrade] = useState(null)
  const [work, setWork] = useState('');
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');
  const [send, setSend] = useState('');

  const [newDate, setNewDate] = useState(new Date())

  const [loading, setLoading] = useState(true);

  const data = new Date()

  function handleSubmit() {
    Keyboard.dismiss()
    if(type === null || work === ''){
      alert('Preencha todos os campos')
      return;
    }
    Alert.alert('Confirmando dados:',
                `Tipo: ${type} - Série: ${grade} - Tarefa: ${work} - Data e hora: ${date} até ${hour}`,
                [
                  {
                    text: 'Cancelar',
                    style: 'Cancel'
                  },
                  {
                    text: 'Continuar',
                    onPress: () => handleAdd()
                  },
                ]
                
    )

  }

  async function handleAdd(){
    if(format(newDate, 'dd/MM/yy') != format(new Date(), 'dd/MM/yy')){
      let helpers = await firebase.database().ref('tarefas');
      let chave = helpers.push().key;
  
      helpers.child(grade).child(chave).set({
        tipo: type,
        serie: grade,
        frente: subject,
        tarefas: work,
        forma: send,
        dia: date,
        hora: hour,
        date: format(new Date(), 'dd/MM/yy')
      })
    }else if(format(newDate, 'dd/MM/yy') == format(new Date(), 'dd/MM/yy')){
      let helpers = await firebase.database().ref('tarefas');
      let chave = helpers.push().key;
  
      helpers.child(grade).child(chave).set({
        tipo: type,
        serie: grade,
        frente: subject,
        tarefas: work,
        forma: send,
        dia: date,
        hora: hour,
        date: format(newDate, 'dd/MM/yy')
      });
      
      


    }

    if(format(newDate, 'dd/MM/yy') != format(new Date(), 'dd/MM/yy')){
      let helpers = await firebase.database().ref('Professores');
      let chave = helpers.push().key;
  
      helpers.child(user.uid).child(chave).set({
        tipo: type,
        serie: grade,
        frente: subject,
        tarefas: work,
        forma: send,
        dia: date,
        hora: hour,
        date: format(new Date(), 'dd/MM/yy')
      })
    }else if(format(newDate, 'dd/MM/yy') == format(new Date(), 'dd/MM/yy')){
      let helpers = await firebase.database().ref('Professores');
      let chave = helpers.push().key;
  
      helpers.child(user.uid).child(chave).set({
        tipo: type,
        serie: grade,
        frente: subject,
        tarefas: work,
        forma: send,
        dia: date,
        hora: hour,
        date: format(newDate, 'dd/MM/yy')
      });
      
      


    }

    setModalVisible(false)
    setDate('')
    setSubject('')
    setType('')
    setGrade('');
    setSubject('');
    setWork('');
    setHour('');
  }


useEffect(()=>{
  async function dados(){
    await firebase.database().ref('tarefas').child('3º ano').orderByChild('date')
    .equalTo(format(newDate, 'dd/MM/yy')).limitToLast(10)
    .on('value', (snapshot)=> {
      setList([]);

      snapshot.forEach((childItem) => {
        let list = {
          key: childItem.key,
          tipo: childItem.val().tipo,
          serie: childItem.val().serie,
          frente: childItem.val().frente,
          tarefas: childItem.val().tarefas,
          forma: childItem.val().forma,
          dia: childItem.val().dia,
          hora: childItem.val().hora,
          date: childItem.val().date,
        };

        setList(oldArray => [...oldArray, list].reverse());
      })
      setLoading(false);

    })

  }
    
  dados();

}, [newDate])

function handleShowPicker(){
  setShow(true);
}

function handleClose(){
  setShow(false);
}

const onChange = (date) => {
  setShow(Platform.OS === 'ios');
  setNewDate(date);
  console.log(date);
} 
  
 return (
    <Wrapper>

<Header>
          <Logo source={require('../../images/logo.png')}/>
          <Title>Colégio e Curso Planck</Title>
          <View style={{marginLeft: '3.5%', marginTop: '8.5%'}}>
             <TouchableOpacity onPress={handleShowPicker} >
                <Entypo name="calendar" size={25} color="#5c2a71" />
             </TouchableOpacity>
          </View>  
      </Header>

      {loading ? 
      (
        <View style={{marginTop: 200}}>
          <ActivityIndicator color="#121212" size={120} />
        </View>
      ) :
      (
        <FlatList
        keyExtractor={item => item.key}
        data={list}
        renderItem={ ({item}) => ( <TarefasList data={item} /> )  }
        />
      )
      }


      <View style={{position: "absolute", marginLeft: '80%', marginTop: '160%'}}>
        <AddContainer
          onPress={() => {
            setModalVisible(true);
          }}>
          <Text style={{ fontSize: 40, color: '#fff', marginTop: -5}}>+</Text>
        </AddContainer>
      </View>








      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}>

        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>


        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <AntDesign name="left" size={32} color="#5C2A71" style={{ marginTop: 10, marginLeft: 5,}}/>
          </TouchableOpacity>
          <Text style={{ fontSize: 20, color: '#5C2A71', fontWeight: 'bold', marginLeft: 125, marginTop: 12}}>Adicionar</Text>
        </View>


<ScrollView>

          <Container>
          <InputContainer>

            <View style={{ marginBottom: -15 }}>

                  <Picker onChange={setType}/>

            </View>


            <View style={{ marginBottom: -15 }}>

              <PickerSub onChange={setSubject}/>

            </View>

            <View style={{ marginBottom: 18 }}>

              <PickerGra onChange={setGrade}/>

            </View>

            <AreaInput>
              <Input3
              placeholder="Descrição"
              autoCorrect={false}
              autoCapitalize="none"
              multiline={true}
              value={work}
              onChangeText={ (text) => setWork(text) }
              />
            </AreaInput>
            <AreaInput>
            <Input
              placeholder="Forma de entrega"
              autoCorrect={false}
              autoCapitalize="none"
              value={send}
              onChangeText={ (text) => setSend(text) }
              />
            </AreaInput>
            <AreaInput>
            <Input2
              placeholder="Dia"
              autoCorrect={false}
              autoCapitalize="none"
              value={date}
              onChangeText={ (text) => setDate(text) }
              />
              <Input2
              placeholder="Hora"
              autoCorrect={false}
              autoCapitalize="none"
              value={hour}
              onChangeText={ (text) => setHour(text) }
              />
            </AreaInput>

            


          </InputContainer>  

            <SubmitButton onPress={handleSubmit}>
              <SubmitText>Pronto</SubmitText>
            </SubmitButton>
          </Container>  
          </ScrollView>

        </SafeAreaView>

      </Modal>

      {show && (
        <DatePicker
        onClose={handleClose}
        date={newDate}
        onChange={onChange}
        />
      )}


    </Wrapper>
  );
}