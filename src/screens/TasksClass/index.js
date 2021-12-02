import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Modal, SafeAreaView, TouchableOpacity, Keyboard, Alert, FlatList, ActivityIndicator, Platform } from 'react-native';

import { format } from 'date-fns';

import { AuthContext } from '../../contexts/auth'

import { Wrapper, Header, Logo, Title, PageName, Container, ContainerScroll, Card, SubjectTitle, SubjectInfo, AddContainer, AreaInput, Input, Input2, Input3, InputContainer, SubmitButton, 
  SubmitText } from './styles'

import { Entypo } from '@expo/vector-icons';

import TarefasList from '../../components/TarefasList'
import Picker from '../../components/Picker';
import PickerSub from '../../components/PickerSub';
import DatePicker from '../../components/DatePicker'

import firebase from '../../services/firebaseConnection'

import { AntDesign } from '@expo/vector-icons';

export default function Tasks() {
  const [modalVisible, setModalVisible] = useState(false);

  const { user } = useContext(AuthContext);

  const [show, setShow] = useState(false)

  const [list, setList] = useState([])
  const [type, setType] = useState(null);
  const [subject, setSubject] = useState(null);
  const [grade, setGrade] = useState(null)
  const [work, setWork] = useState('');
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');
  const [send, setSend] = useState('');

  const [newDate, setNewDate] = useState(new Date())

  const [loading, setLoading] = useState(true);

useEffect(()=>{
  async function dados(){

    await firebase.database().ref('tarefas').child(user.Série).orderByChild('date')
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
          <View style={{marginLeft: '3.5%', marginTop: '10.5%'}}>
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
        <View style={{ flex: 1}}>
        <FlatList
        keyExtractor={item => item.key}
        data={list}
        renderItem={ ({item}) => ( <TarefasList data={item} /> )  }
        />
        </View>
      )
      }


     

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