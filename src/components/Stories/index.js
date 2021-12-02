import React, { useState, useRef, useContext, useEffect } from 'react';
import {View, ImageBackground, Image, TouchableOpacity, Text, ScrollView, FlatList } from 'react-native'
import firebase from '../../services/firebaseConnection'

import { AuthContext } from '../../contexts/auth'


import {  
    Container, 
    Option, 
    Label, 
    Stories, 
    Img, 
    Img2, }
    from './styles'

    import Modal from 'react-native-modal';

export default function Story({ data, userId }) {

  const { user } = useContext(AuthContext);


  const modalizeRef = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);

  async function Viewed(){
    let uid = user.uid
    let helpers = await firebase.database().ref('views');
    let chave = helpers.push().key;

      helpers.child(data.key).child(uid).set({
        id: user.uid
      })
      
}

const [helpers2, setHelpers2] = useState([])

useEffect(() => {
  async function dados6(){
    await firebase.database().ref('views').child(data.key).orderByChild('id').equalTo(user.uid).on('value', (snapshot)=> {
      setHelpers2([])

      snapshot.forEach((chilItem) => {
        let data = {
          key: chilItem.val().key,
          id: chilItem.val().id,
        };

        setHelpers2(data);
        console.log(helpers2)
      })
    })

  }

  dados6()


}, [helpers2])


  useEffect(() => {
    
    
   async function watched(){
      if(helpers2.id == user.uid){
        setColor('#D3D3D3')
        setColor2('#868686')
        setOpacity(0.5)
      }
    }

    watched()

  },[helpers2.id])



  const uri = data.img

  function OpenModal(){
    setModalVisible(true);
    if(color == '#C020CE'){
     setColor('#D3D3D3')
     setColor2('#868686')
     setOpacity(0.5)
    }
    Viewed()
  }

  function CloseModal(){
    setModalVisible(false)
  }

  const [color, setColor] = useState('#C020CE')
  const [color2, setColor2] = useState('#FFBD57')
  const [opacity, setOpacity] = useState(1)


 return (
  <Container
  >
  
  <Option onPress={OpenModal}>
      <Stories colors={ [color, color2]} >
        <Img 
        style={{ opacity: opacity }}
        source={{ uri: data.img}}></Img>
      </Stories>
    <Label>@{data.nome}</Label>
    
    <Modal 
          animationIn={"slideInUp"}
          isVisible={modalVisible}
          onSwipeComplete={() => setModalVisible(false)}
          swipeDirection='down'
          style={{margin: 0, }}>
            

            <View style={{ }}>
                <Image source={{ uri: data.img}} style={{ width: '100%', height: '92%', opacity: 1 }}/>
               <View style={{ position: "relative" }}>
               <Img2 
          style={{ marginTop: '-150%', marginLeft: '7%'}}
          source={{ uri: data.img}}></Img2>  
               </View> 
               <View style={{ position: "relative" }}>
               <Label
                style={{ marginTop: '-150%', marginLeft: '18%', fontSize: 23}}
                >@{data.name}</Label>
               </View> 
            </View>
    </Modal>

  </Option>

 </Container>  
  );
}