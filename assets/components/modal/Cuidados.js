import React from 'react';
import { Text, View,ScrollView  } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import {styles} from '../../style/Styles';

export default function Cuidados (){


    return(    
        <View style={[styles.container, styles.modadark]}>
            <ScrollView> 
            <View style={styles.blocoDark}>
                <FontAwesome5 style={{textAlign:'center'}} name="hand-holding-heart" size={60} color="#E8F1F2" />
                <Text style={styles.titleLight}>Deu positivo! e agora?</Text>
                <Text style={styles.txtLight}>+ Permaneça em casa cumprindo as medidas de isolamento domiciliar.</Text>
                <Text style={styles.txtLight}>+ Tente ficar tranquilo; afinal, 80% dos casos tomarão a forma leve ou moderada da doença.</Text>
                <Text style={styles.txtLight}>+ Durante este tempo procure alimentar-se de maneira saudável, fazer repouso e se hidratar bem.</Text> 
                <Text style={styles.txtLight}>+ Meça e anote diariamente sua temperatura corporal, e tente observar se seus sintomas estão melhorando aos poucos, iguais, ou piorando.</Text>
                <Text style={styles.txtLight}>+ Você deve se preocupar, e procurar rapidamente serviço médico de urgência se surgir dificuldade para respirar ou dor/desconforto no peito; se fizer 
                    de pulso e a saturação de oxigênio estiver menor que 95% ou se sua pressão cair para menos de 90 por 60mmHg.</Text>
                 <Text style={styles.txtLight}>+ A persistência de febre após 3 dias, ou seu retorno após 48 horas de período afebril, também é um sinal de alerta.</Text>
                
            </View>

            </ScrollView>
          
        </View>
    );
}
