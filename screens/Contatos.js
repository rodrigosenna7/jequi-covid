import React ,{useEffect} from 'react';
import { StyleSheet, Text, View, Linking, TouchableOpacity, BackHandler,Alert,ScrollView  } from 'react-native';
import { Entypo, FontAwesome,Fontisto,Feather } from '@expo/vector-icons';
import {styles} from '../assets/style/Styles';
import Menutopo from '../assets/components/Menutopo';

export default function Contatos ({ navigation }){

   const whatsappDC = () => {
        Linking.openURL('https://api.whatsapp.com/send/?phone=5533998364120&text=');
      };
   
   const foneDC = () => {
        Linking.openURL('tel:+553337411543');
      };
   const foneHSM = () => {
        Linking.openURL('tel:+553337411151');
      };
   const foneSMS = () => {
        Linking.openURL('tel:+553337411431');
      };

    const samu = () => {
    Linking.openURL('tel:192');
    };
      

    return(
        <View style={[styles.container, styles.containertop, styles.light]}>
            <Menutopo title='Contatos' navigation={navigation}/>
            <ScrollView style={{marginTop:15}}>
            <View style={{flex:1, width:'100%', alignItems:'stretch', justifyContent:'space-evenly', backgroundColor:'#E8F1F2'}}>
            <View style={styles.blocoLight}>

                <TouchableOpacity
                    onPress={() => {samu()}}
                    style={styles.btnDark} 
                >
                    <Entypo style={styles.iconDark} name="old-phone"/>
                        <View style={{paddingLeft:10}}>
                            <Text style={styles.subTitledark}>SAMU</Text>
                            <Text style={styles.txtDark}>Ligar</Text>
                        </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {foneSMS()}}
                    style={styles.btnDark}
                >
                    <Entypo style={styles.iconDark} name="old-phone"/>
                        <View style={{paddingLeft:10}}>
                            <Text style={styles.subTitledark}>Secretaria de Saúde</Text>
                            <Text style={styles.txtDark} >Ligar</Text>
                        </View>
                </TouchableOpacity>
                 
                <TouchableOpacity
                    onPress={() => {foneHSM()}}
                    style={styles.btnDark} 
                >
                    <Entypo style={styles.iconDark} name="old-phone"/>
                        <View style={{paddingLeft:10}}>
                            <Text style={styles.subTitledark}>Hospital São Miguel</Text>
                            <Text style={styles.txtDark}>Ligar</Text>
                        </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {whatsappDC()}}
                    style={styles.btnDark}
                >
                    <Fontisto style={styles.iconDark} name="whatsapp"  />
                    <View style={{paddingLeft:10}}>
                        <Text style={styles.subTitledark}>Disk Covid</Text>
                        <Text style={styles.txtDark}>Enviar mensagem</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {foneDC()}}
                    style={styles.btnDark}
                >
                    <Entypo style={styles.iconDark} name="old-phone" />
                        <View style={{paddingLeft:10}}>
                            <Text style={styles.subTitledark}>Disk Covid</Text>
                            <Text style={styles.txtDark}>Ligar</Text>
                        </View>
                </TouchableOpacity>

            </View>

            </View>
            </ScrollView>
        </View>
    );
}