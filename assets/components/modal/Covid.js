import React from 'react';
import { Text, View,ScrollView  } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import {styles} from '../../style/Styles';

export default function Covid (){


    return(    
        <View style={[styles.container, styles.modadark]}>
            <ScrollView> 
            <View style={styles.blocoDark}>
                <MaterialIcons style={{textAlign:'center'}} name="coronavirus" size={60} color="#E8F1F2" />
                <Text style={styles.titleLight}>O que é Covid-19?</Text>
                <Text style={styles.txtLight}>
                    COVID-19 é a doença causada por um novo coronavírus denominado SARS-CoV-2. 
                    A OMS tomou conhecimento deste novo vírus em 31 de dezembro de 2019, após um 
                    relatório de um grupo de casos de 'pneumonia viral' em Wuhan, na República Popular 
                    da China.
                </Text>

                <Text style={styles.txtLight}>
                    A maioria das pessoas que adoece em decorrência da COVID-19 apresentará sintomas leves a moderados e se 
                    recuperará sem tratamento especial.
                </Text>

                <Text style={styles.txtLight}>
                O vírus que causa a COVID-19 é transmitido principalmente por meio de gotículas geradas quando uma pessoa 
                infectada tosse, espirra ou exala. Essas gotículas são muito pesadas para permanecerem no ar e são 
                rapidamente depositadas em pisos ou superfícies.
                </Text>

                <Text style={styles.txtLight}>
                Você pode ser infectado ao inalar o vírus se estiver próximo de alguém que tenha COVID-19 ou ao tocar em 
                uma superfície contaminada e, em seguida, passar as mãos nos olhos, no nariz ou na boca.
                </Text>
            </View>

            </ScrollView>
          
        </View>
    );
}

