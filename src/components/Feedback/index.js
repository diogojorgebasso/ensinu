import React, { useState } from 'react';
import { SafeAreaView, TouchableOpacity, Modal, Text, TextInput, View, KeyboardAvoidingView } from 'react-native';

import firebase from '../../services/firebaseConnection'

import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

export default function Feedback() {

const [modalVisible, setModalVisible] = useState(false);
const [modalVisible2, setModalVisible2] = useState(false);
const [type, Settype] = useState('')

const [description, setDescription] = useState('');

function Feed() {
    setModalVisible(true)
}

function close(){
    Settype('Cor')
    setModalVisible(false)
    setModalVisible2(true)  
}

function close1(){
    Settype('Alinhamento de itens')
    setModalVisible(false)
    setModalVisible2(true)  
}

function close2(){
    Settype('Linguagem')
    setModalVisible(false)
    setModalVisible2(true)  
}

function close3(){
    Settype('Botões')
    setModalVisible(false)
    setModalVisible2(true)  
}

function close4(){
    Settype('Outro')
    setModalVisible(false)
    setModalVisible2(true)  
}

async function Support1(){
    let support = await firebase.database().ref('Feedback');
    let chave = support.push().key;

    support.child(chave).set({
        Tipo: type,
        Auxiliar: description,
        Estrelas: value
    })
    setModalVisible2(false)
    setDescription('')
}


const [icon, setIcon] = useState('staro')
const [icon1, setIcon1] = useState('staro')
const [icon2, setIcon2] = useState('staro')
const [icon3, setIcon3] = useState('staro')
const [icon4, setIcon4] = useState('staro')
const [color, setColor] = useState('#f5da42')
const [value, setValue] = useState(0)

function opinion1(){
    setIcon('star')
    setIcon1('staro')
    setIcon2('staro')
    setIcon3('staro')
    setIcon4('staro')
    setValue(1)
}

function opinion2(){
    setIcon('star')
    setIcon1('star')
    setIcon2('staro')
    setIcon3('staro')
    setIcon4('staro')
    setValue(2)
}

function opinion3(){
    setIcon('star')
    setIcon1('star')
    setIcon2('star')
    setIcon3('staro')
    setIcon4('staro')
    setValue(3)
}

function opinion4(){
    setIcon('star')
    setIcon1('star')
    setIcon2('star')
    setIcon3('star')
    setIcon4('staro')
    setValue(4)
}

function opinion5(){
    setIcon('star')
    setIcon1('star')
    setIcon2('star')
    setIcon3('star')
    setIcon4('star')
    setValue(5)
}

function support2(){
    setModalVisible2(false)
}

 return (
   <>  
   <SafeAreaView style={{ marginLeft: '4%',
    marginTop: '2%'
}}>
       <TouchableOpacity onPress={Feed}>
            <MaterialCommunityIcons name="comment-question" size={30} color="#5C2A71" />
       </TouchableOpacity>
   </SafeAreaView>

   <Modal
   visible={modalVisible}
   transparent={true}
   animationType={"slide"}
   >

       <SafeAreaView style={{ alignItems: "center", justifyContent: "center", marginTop: 150}}>

       <TouchableOpacity onPress={() => {
        setModalVisible(false)
      }}style={{ width: 60, height: 60, backgroundColor: '#5c2a71', marginBottom: 10, alignItems: 'center', flexDirection: 'column', justifyContent: "center", borderRadius: 30,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,}}>
        <Text style={{fontSize: 30, color: '#fff' }}>X</Text>
      </TouchableOpacity>  

      

            <SafeAreaView style={{ backgroundColor: '#fff', width: 330, height: 370, borderRadius: 20, shadowColor: "#000", flexDirection: "column",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5, justifyContent: "flex-end"}}>

            <Text style={{fontSize: 18, fontWeight: 'bold', marginLeft: 20, marginRight: 20, marginBottom: 30, color: '#5c2a71'}}>
            {`Caso tenha algum feedback para dar ou crítica, por favor, selecione o tópico correspondente.`}
            </Text>

            <SafeAreaView style={{ marginLeft: 25, marginBottom: 25, }}>
                
                <TouchableOpacity style={{ marginBottom: 10 }} onPress={close} >

                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#0A7AAC' }}>
                        Cor
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ marginBottom: 10 }} onPress={close1} >
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#0A7AAC' }}>
                        Alinhamento de itens
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ marginBottom: 10 }} onPress={close2} >
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#0A7AAC' }}>
                        Linguagem
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ marginBottom: 10 }} onPress={close3}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#0A7AAC' }}>
                        Botões
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ marginBottom: 10 }} onPress={close4}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#0A7AAC' }}>
                        Outro
                    </Text>
                </TouchableOpacity>

            </SafeAreaView>

            </SafeAreaView>

       </SafeAreaView>
        
   </Modal>

   <Modal
   visible={modalVisible2}
   transparent={true}
   animationType={"slide"}
   >

       <SafeAreaView style={{ alignItems: "center", justifyContent: "center", marginTop: 150}}>
<View style={{ flexDirection: 'row' }}>
<TouchableOpacity onPress={Support1} 
       style={{ width: 60, height: 60, backgroundColor: '#5c2a71', marginBottom: 15, alignItems: 'center', flexDirection: 'column', justifyContent: "center", borderRadius: 30,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5, marginRight: 25,}}>
        <MaterialCommunityIcons name="check-bold" size={30} color="#FFF" />
      </TouchableOpacity>  

      <TouchableOpacity onPress={support2} 
       style={{ width: 60, height: 60, backgroundColor: '#5c2a71', marginBottom: 15, alignItems: 'center', flexDirection: 'column', justifyContent: "center", borderRadius: 30,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,}}>
        <MaterialCommunityIcons name="close" size={40} color="#FFF" />
      </TouchableOpacity> 
</View>
 
      <ScrollView>

            <SafeAreaView style={{ backgroundColor: '#fff', width: 330, height: 370, borderRadius: 20, shadowColor: "#000", flexDirection: "column",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5, justifyContent: "flex-end"}}>

        

            <Text style={{fontSize: 18, fontWeight: 'bold', marginLeft: 20, marginRight: 20, marginBottom: 25, color: '#5c2a71'}}>
            {`Escreva aqui, o mais precisamente possível sua dúvida:`}
            </Text>

            <View style={{ alignItems: "center", flexDirection: "row", justifyContent: "center",
        marginBottom: 15, }}>
            
            <TouchableOpacity onPress={opinion1}>
                <AntDesign name={icon} size={25} color={color} />
            </TouchableOpacity>

            <TouchableOpacity onPress={opinion2}>
                <AntDesign name={icon1} size={25} color={color} />
            </TouchableOpacity>

            <TouchableOpacity onPress={opinion3}>
                <AntDesign name={icon2} size={25} color={color} />
            </TouchableOpacity>

            <TouchableOpacity onPress={opinion4}>
                <AntDesign name={icon3} size={25} color={color} />
            </TouchableOpacity>

            <TouchableOpacity onPress={opinion5}>
                <AntDesign name={icon4} size={25} color={color} />
            </TouchableOpacity>



            </View>

            <SafeAreaView style={{alignItems: "center", marginBottom: 20,  }}>
                <TextInput
                value={description}
                onChangeText={ (text) => setDescription(text)}
                placeholder={'Digite aqui'}
                placeholderTextColor={'#5c2a71'}
                multiline={true}
                style={{ backgroundColor: '#ccc', width: '90%', height: 200, fontSize: 18, color: '#5c2a71', marginTop:10, paddingLeft: 15, paddingTop: 15, borderRadius: 12, borderWidth: 3, borderColor: '#5c2a71' }}
                >
                
                </TextInput>                
            </SafeAreaView>
            
            </SafeAreaView>
            </ScrollView>
       </SafeAreaView>
        
   </Modal>
  </> 
  );
}