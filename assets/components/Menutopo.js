import React ,{useEffect, useState} from 'react';
import { Text, View, TouchableOpacity, Modal, Linking } from 'react-native';
import { Entypo, Ionicons   } from '@expo/vector-icons';
import {styles} from '../style/Styles';

export default function Menutopo (props){

    const [modalVisible, setModalVisible] = useState(false);

    const termos = () => {
        Linking.openURL('https://jequionline.000webhostapp.com/');
        };

    return(    
       <View style={styles.topo}>
            <TouchableOpacity style={styles.buttonNews}>
                <Ionicons name="ios-notifications-circle" size={30} color="#E8F1F2" />
            </TouchableOpacity>
           <Text style={styles.title}>{props.title}</Text>
           <TouchableOpacity style={styles.buttonMenu} 
               onPress={() => {
                setModalVisible(!modalVisible);
            }}
           >
            <Ionicons name="information-circle" size={30} color={'#E8F1F2'} />
           </TouchableOpacity>
           
           
           <Modal
                animationType='slide'
                visible={modalVisible}
                
           >
                <TouchableOpacity style={styles.buttonMenu} 
                   onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                <Ionicons name="ios-backspace" size={30} color={'#13293D'} />
                </TouchableOpacity>
                
                <View style={styles.blocoDark}>
                    <TouchableOpacity
                        onPress={() => {termos()}}
                        style={styles.btnDark}
                    >
                        <View style={{paddingLeft:10}}>
                            <Text style={styles.txtLight} >Termos de uso</Text>
                        </View>
                    </TouchableOpacity>
                </View>
           </Modal>
        </View>
        
    );
}