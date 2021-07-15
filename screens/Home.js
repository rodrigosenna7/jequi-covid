import React ,{useEffect, useState} from 'react';
import { Text, View, TouchableOpacity, Modal} from 'react-native';
import { FontAwesome5,Fontisto, Ionicons, MaterialIcons   } from '@expo/vector-icons';
import {styles} from '../assets/style/Styles';
import Menutopo from '../assets/components/Menutopo';
import Prontuario from '../assets/components/modal/Prontuario';
import Sintomas from '../assets/components/modal/Sintomas';
import Covid from '../assets/components/modal/Covid';
import Protecao from '../assets/components/modal/Protecao';
import Teste from '../assets/components/modal/Teste';
import Vacinas from '../assets/components/modal/Vacinas';
import Cuidados from '../assets/components/modal/Cuidados';

export default function Home ({navigation}){

    const [sintomas, setSintomas] = useState(false);
    const [prontuario, setProntuario] = useState(false);
    const [covid, setCovid] = useState(false);
    const [protecao, setProtecao] = useState(false);
    const [teste, setTeste] = useState(false);
    const [vacinas, setVacinas] = useState(false);
    const [cuidados, setCuidados] = useState(false);
    
      
    return(    
       <View style={[styles.container, styles.containertop]}>
           <Menutopo title='Home' navigation={navigation}/>
            
        

        <View style={{flexDirection:'row', marginTop:25}}>
           <View style={styles.btnHome}>
                <TouchableOpacity style={styles.buttonMenu} 
                    onPress={() => {setCovid(!covid);}}
                >
                    <MaterialIcons style={{textAlign:'center'}} name="coronavirus" size={60} color="#13293D" />
                    <Text style={styles.txtbtnDark}>O que é Covid-19</Text>
                </TouchableOpacity>
           </View>
            
           <View style={styles.btnHome}>
                <TouchableOpacity style={styles.buttonMenu} 
                    onPress={() => {setSintomas(!sintomas);}}
                >
                    <MaterialIcons style={{textAlign:'center'}} name="sick" size={60} color="#13293D" />
                    <Text style={styles.txtbtnDark}>Quais os sintomas?</Text>
                </TouchableOpacity>
           </View>
        </View>

           <View style={{flexDirection:'row'}}>
                <View style={styles.btnHome}>
                        <TouchableOpacity style={styles.buttonMenu} 
                            onPress={() => {setProtecao(!protecao);}}
                        >
                            <FontAwesome5 style={{textAlign:'center'}} name="head-side-mask" size={60} color="#13293D" />
                            <Text style={styles.txtbtnDark}>Como se prevenir?</Text>
                        </TouchableOpacity>
                </View>

                <View style={styles.btnHome}>
                        <TouchableOpacity style={styles.buttonMenu} 
                            onPress={() => {setCuidados(!cuidados);}}
                        >
                            <FontAwesome5 style={{textAlign:'center'}} name="hand-holding-heart" size={60} color="#13293D" />
                            <Text style={styles.txtbtnDark}>Fui contaminado! E agora?</Text>
                        </TouchableOpacity>
                </View>
            </View>

        <View style={{flexDirection:'row'}}>
           <View style={styles.btnHome}>
                <TouchableOpacity style={styles.buttonMenu} 
                    onPress={() => {setTeste(!teste);}}
                >
                    <Fontisto style={{textAlign:'center'}} name="blood-test" size={60} color="#13293D" />
                    <Text style={styles.txtbtnDark}>Quando testar?</Text>
                </TouchableOpacity>
           </View>

           <View style={styles.btnHome}>
                <TouchableOpacity style={styles.buttonMenu} 
                    onPress={() => {setVacinas(!vacinas);}}
                >
                    <Fontisto style={{textAlign:'center'}} name="injection-syringe" size={60} color="#13293D" />
                    <Text style={styles.txtbtnDark}>Sobre as vacinas</Text>
                </TouchableOpacity>
           </View>
        </View>
        
        <View style={[styles.btnHome, {width:'80%'}]}>
                <TouchableOpacity style={styles.buttonMenu} 
                    onPress={() => {setProntuario(!prontuario);}}
                >
                    <Fontisto style={{textAlign:'center'}} name="prescription" size={60} color="#13293D"/>
                    <Text style={styles.txtbtnDark}>Prontuário</Text>
                </TouchableOpacity>
        </View>

           <Modal animationType='slide' visible={sintomas}>
                <TouchableOpacity style={styles.buttonMenu} 
                   onPress={() => {setSintomas(!sintomas);}}
                >
                <Ionicons name="ios-backspace" size={30} color={'#13293D'} />
                </TouchableOpacity>
                <Sintomas/>
           </Modal>

           <Modal animationType='slide' visible={prontuario}>
                <TouchableOpacity style={styles.buttonMenu} 
                   onPress={() => {setProntuario(!prontuario);}}
                >
                <Ionicons name="ios-backspace" size={30} color={'#13293D'} />
                </TouchableOpacity>
                <Prontuario/>
           </Modal>

           <Modal animationType='slide' visible={covid}>
                <TouchableOpacity style={styles.buttonMenu} 
                   onPress={() => {setCovid(!covid);}}
                >
                <Ionicons name="ios-backspace" size={30} color={'#13293D'} />
                </TouchableOpacity>
                <Covid/>
           </Modal>

           <Modal animationType='slide' visible={protecao}>
                <TouchableOpacity style={styles.buttonMenu} 
                   onPress={() => {setProtecao(!protecao);}}
                >
                <Ionicons name="ios-backspace" size={30} color={'#13293D'} />
                </TouchableOpacity>
                <Protecao/>
           </Modal>

           <Modal animationType='slide' visible={teste}>
                <TouchableOpacity style={styles.buttonMenu} 
                   onPress={() => {setTeste(!teste);}}
                >
                <Ionicons name="ios-backspace" size={30} color={'#13293D'} />
                </TouchableOpacity>
                <Teste/>
           </Modal>

           <Modal animationType='slide' visible={vacinas}>
                <TouchableOpacity style={styles.buttonMenu} 
                   onPress={() => {setVacinas(!vacinas);}}
                >
                <Ionicons name="ios-backspace" size={30} color={'#13293D'} />
                </TouchableOpacity>
                <Vacinas/>
           </Modal>

           <Modal animationType='slide' visible={cuidados}>
                <TouchableOpacity style={styles.buttonMenu} 
                   onPress={() => {setCuidados(!cuidados);}}
                >
                <Ionicons name="ios-backspace" size={30} color={'#13293D'} />
                </TouchableOpacity>
                <Cuidados/>
           </Modal>
            
        </View>
        
    );
}
