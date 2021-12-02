import React, {useRef, useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { WebView } from 'react-native-webview';

export default function Phrase({data}) {

    const modalizeRef = useRef(null)

    function onOpen(){
        setModalVisible(true)
    }

    const [modalVisible, setModalVisible] = useState(false);
    
    let url = data.wiki
 return (
     <>
     <TouchableOpacity onPress={onOpen}>
     <View style={{ alignItems: "center", marginTop: 15}}>
    <View style={{borderWidth: 1, width: '90%', borderColor: '#5c2a71', borderRadius: 15, height: 80,}}>
    <View style={{ marginLeft: 15, marginTop: 5}}>   
        <Text style={{ fontSize: 18, color: '#5c2a71', fontStyle: 'italic'}}>{data.frase}</Text>
        <Text style={{ color: '#5c2a71', fontWeight: "bold", marginTop: 3, }}>{data.nome}</Text>
   </View>
   </View>
   </View>
   </TouchableOpacity>

   <Modal
             animationIn={"slideInUp"}
             isVisible={modalVisible}
             onSwipeComplete={() => setModalVisible(false)}
             swipeDirection='down'
             style={{marginTop: 30, }}
   >
            <WebView
                source={{ uri: url }}
                style={{ marginTop: 20 }}
                />
   </Modal>
          


   </>
  );
}