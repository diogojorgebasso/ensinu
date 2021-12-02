import React, { useState, useEffect, useContext} from 'react';
import { View, Text, Modal, Button, TouchableHighlight, Alert, 
  SafeAreaView, Keyboard, FlatList, ActivityIndicator, ScrollView, TouchableWithoutFeedback} from 'react-native';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import firebase from '../../services/firebaseConnection'

import Trending from '../../components/Trending'

import { Foundation } from '@expo/vector-icons';

import { AuthContext } from '../../contexts/auth'

import List from '../../components/List'

import { Wrapper, Header, Logo, Title,
  Container,
  SubmitButton, SubmitText,  
  AddContainer, InfoContainer, Information, InputContainer, Input, Input2, Input3, AreaInput, } from './styles'
import { TouchableOpacity } from 'react-native';

export default function Connectivity() {

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);

  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');
  const [subject, setSubject] = useState('');
  const [topics, setTopics] = useState('');
  const [number, setNumber] = useState('');
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');
  const [link, setLink] = useState('');
  const [front, setFront] = useState('');

  const { user } = useContext(AuthContext);


  const [helpers, setHelpers] = useState([]);
  const [loading, setLoading] = useState(true);




  useEffect(()=> {

    async function dados(){

      
      await firebase.database().ref('helpers').orderByChild('dia').on('value', (snapshot)=> {
        setHelpers([]);

        snapshot.forEach((chilItem) => {
          let data = {
            key: chilItem.key,
            nome: chilItem.val().nome,
            serie: chilItem.val().serie,
            frente: chilItem.val().frente,
            topicos: chilItem.val().topicos,
            numero: chilItem.val().numero,
            dia: chilItem.val().dia,
            hora: chilItem.val().hora,
            link: chilItem.val().link1,
            linkp: chilItem.val().linkP,
            linkC: chilItem.val().linkC,
            id: chilItem.val().id,
          };

          setHelpers(oldArray => [...oldArray, data]);
        })
      setLoading(false)

      })

    }

    dados();



  }, []);

  function close(){
    setModalVisible2(!modalVisible2)
  }


  
  async function handleSubmit(){

      let helpers = await firebase.database().ref('helpers');
      let chave = helpers.push().key;
    
        helpers.child(chave).set({
        nome: helpers1.nome,
        serie: grade,
        frente: subject,
        topicos: topics,
        numero: number,
        dia: date,
        hora: hour,
        link1: link,
        //linkP: user.portfolio,
        //linkC: user.classe,
        id: user.uid
      });


      
      setName('');
      setGrade('');
      setSubject('');
      setTopics('');
      setNumber('');
      setDate('');
      setHour('');
      setLink('');
      setModalVisible(!modalVisible)

  }

  const [helpers1, setHelpers1] = useState([]);

  useEffect(()=> {

    async function dados4(){

      
      await firebase.database().ref('users').orderByChild('uid').equalTo(user.uid).on('value', (snapshot)=> {
        setHelpers1([]);

        snapshot.forEach((chilItem) => {
          let data = {
            key: chilItem.key,
            nome: chilItem.val().nome,
            id: chilItem.val().uid,
          };

          setHelpers1(data);
        })
      setLoading(false)

      })

    }

    dados4();


  }, []);

  const [helpers2, setHelpers2] = useState([])

  useEffect(() => {

    async function dados5() {
      await firebase.database().ref('Doubts').orderByChild('ajudas').startAt(1).on('value', (snapshot)=> {
        setHelpers2([]);

        snapshot.forEach((chilItem) => {
          let data = {
            key: chilItem.val().tipo,
            help: chilItem.val().ajudas,
          };

          setHelpers2(oldArray => [...oldArray, data].reverse());
        })
      setLoading(false)

      })
    }

    dados5()

  }, [])


  async function handleDelete(data){
    await firebase.database().ref('helpers').child(data.key).remove();
  }
   function handleKeyDown(e){
    if(e.nativeEvent.key == "Enter"){
      Keyboard.dismiss();
  }
   }
  

 return (
    <Wrapper>
      <Header>
        <Logo source={require('../../images/logo.png')}/>
          <Title>Colégio e Curso Planck</Title>
      </Header>


      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>


          <View style={{ flexDirection: 'row' }}>
            <TouchableHighlight
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <AntDesign name="left" size={32} color="#5C2A71" style={{ marginTop: 10, marginLeft: 5,}}/>
            </TouchableHighlight>
            <Text style={{ fontSize: 20, color: '#5C2A71', fontWeight: 'bold', marginLeft: 125, marginTop: 12}}>Adicionar</Text>
          </View>



          <ScrollView
            showsHorizontalScrollIndicator={false}
          >
            <Container>
            <InputContainer>

              <AreaInput>
                <Input2
                placeholder="Série"
                autoCorrect={false}
                autoCapitalize="none"
                value={grade}
                onChangeText={ (text) => setGrade(text) }
                />
                <Input2
                placeholder="frente"
                autoCorrect={false}
                autoCapitalize="none"
                value={subject}
                onChangeText={ (text) => setSubject(text) }
                />
              </AreaInput>

              <AreaInput>
                <Input3
                placeholder="Tópicos abordados (max. 5)"
                autoCorrect={false}
                autoCapitalize="none"
                value={topics}
                multiline={true}
                onChangeText={ (text) => setTopics(text) }
                keyboardType="default"
                returnKeyType="done"
                onKeyPress={handleKeyDown}
            />
            
              </AreaInput>

              <AreaInput>
                <Input
                placeholder="Numero de Celular (opcional)"
                autoCorrect={false}
                autoCapitalize="none"
                value={number}
                onChangeText={ (text) => setNumber(text) }
                keyboardType = "number-pad"
                />
              </AreaInput>

              <AreaInput>
              <Input2
                placeholder="Dia - Ex: (D/M)"
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

              <AreaInput>
                <Input
                placeholder="Agende um link do meet"
                autoCorrect={false}
                autoCapitalize="none"
                value={link}
                onChangeText={ (text) => setLink(text) }
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


      {loading ? 
      (
        <ActivityIndicator color="#121212" size={45} />
      ) :
      (
        <>
      <InfoContainer style={{ flexDirection: 'row', marginTop: 15 }}>
        <Information style={{ marginRight: 0 }}>Conectividade</Information>
          <TouchableOpacity  onPress={() => setModalVisible2(true)} style={{ position: "absolute", right: 40 }}>
            <Foundation name="graph-trend" size={40} color="#5c2a71" />
          </TouchableOpacity>  
      </InfoContainer>
      <View style={{ marginTop: 0 }}>
        <FlatList
        keyExtractor={item => item.key}
        data={helpers}
        renderItem={ ({item}) => ( <List data={item} deleteItem={handleDelete}/> )  }
        />
      </View>
        </>
      )
      }



      <Modal
        visible={modalVisible2}  
      >
        <SafeAreaView>
          <TouchableOpacity style={{ flexDirection: "row", marginLeft: 15, marginTop: 15  }} onPress={() => setModalVisible2(false)}>
            <AntDesign name="closesquareo" size={40} color="#5c2a71" />
            <Text style={{ fontSize: 30, fontWeight: "bold", color: '#5c2a71', marginLeft: '7%' }} >DÚVIDAS GERAIS</Text>
          </TouchableOpacity>

        <View style={{ marginTop: 5 }}>
          <FlatList
            keyExtractor={item => item.key}
            data={helpers2}
            renderItem={ ({item}) => ( <Trending data={item} /> )  }
          />
        </View>



        </SafeAreaView>
      </Modal>




      
      <View style={{position: "absolute", marginLeft: '80%', marginTop: '160%'}}>
        <AddContainer
          onPress={() => {
            setModalVisible(true);
          }}>
          <Text style={{ fontSize: 40, color: '#fff', marginTop: -5}}>+</Text>
        </AddContainer>
      </View>

    </Wrapper>
  );
}