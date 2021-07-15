import React from 'react';
import { Text, View,ScrollView  } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import {styles} from '../../style/Styles';

export default function Protecao (){


    return(    
        <View style={[styles.container, styles.modalight]}>
            <ScrollView> 
                <View style={styles.blocoLight}>
                    <FontAwesome5 style={{textAlign:'center'}} name="head-side-mask" size={60} color="#13293D" />
                    <Text style={styles.titleDark}>Como se proteger do COVID-19?</Text>
                    <Text style={styles.txtDark}>Para evitar a propagação da COVID-19, faça o seguinte:</Text>
                    <Text style={styles.txtDark}>+ Lave suas mãos com frequência. Use sabão e água ou álcool em gel</Text>
                    <Text style={styles.txtDark}>+ Mantenha uma distância segura de pessoas que estiverem tossindo ou espirrando.Use máscara quando não for possível manter o distanciamento físico.</Text>
                    <Text style={styles.txtDark}>+ Não toque nos olhos, no nariz ou na boca. </Text>
                    <Text style={styles.txtDark}>+ Cubra seu nariz e boca com o braço dobrado ou um lenço ao tossir ou expirar.</Text>
                    <Text style={styles.txtDark}>+ Fique em casa se você se sentir indisposto. </Text>
                    <Text style={styles.txtDark}>+ Procure atendimento médico se tiver febre, tosse e dificuldade para respirar.</Text>
                </View>
            </ScrollView>
          
        </View>
    );
}
