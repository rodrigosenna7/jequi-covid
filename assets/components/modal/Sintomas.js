import React from 'react';
import { Text, View, ScrollView  } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import {styles} from '../../style/Styles';

export default function Sintomas (){


    return(    
        <View style={[styles.container, styles.modalight]}>
            <ScrollView> 
            <View style={styles.blocoLight}>
                <MaterialIcons style={{textAlign:'center'}} name="sick" size={60} color="#13293D" />
                <Text style={styles.titleDark}>Quais os sintomas?</Text>
                <Text style={styles.subTitledark}>Os sintomas mais comuns da COVID-19 são:</Text>
                <Text style={styles.txtDark}>+ Cansaço </Text>
                <Text style={styles.txtDark}>+ Tosse seca</Text>
                <Text style={styles.subTitledark}>Alguns pacientes podem apresentar:</Text>
                <Text style={styles.txtDark}>+ Dores</Text>
                <Text style={styles.txtDark}>+ Congestão nasal</Text> 
                <Text style={styles.txtDark}>+ Dor de cabeça</Text> 
                <Text style={styles.txtDark}>+ Conjuntivite</Text>
                <Text style={styles.txtDark}>+ Dor de garganta</Text>
                <Text style={styles.txtDark}>+ Diarreia</Text>
                <Text style={styles.txtDark}>+ Perda de paladar ou olfato</Text>
                <Text style={styles.txtDark}>+ Erupção cutânea na pele ou descoloração dos dedos das mãos ou dos pés.</Text>
            </View>
            </ScrollView>
          
        </View>
    );
}

