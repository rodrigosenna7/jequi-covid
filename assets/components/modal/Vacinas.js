import React from 'react';
import { Text, View,ScrollView  } from 'react-native';
import {Fontisto} from '@expo/vector-icons';
import {styles} from '../../style/Styles';

export default function Vacinas (){


    return(    
        <View style={[styles.container, styles.containertop]}>
            <ScrollView> 
            <View style={styles.blocoLight}>
                <Fontisto style={{textAlign:'center'}} name="injection-syringe" size={60} color="#13293D" />
                <Text style={styles.titleDark}>Sobre as vacinas</Text>
                <Text style={styles.txtDark}>
                    As vacinas COVID-19 foram testadas em grandes e randomizados ensaios controlados que incluem pessoas de uma ampla faixa etária, 
                    ambos os sexos, etnias diferentes e aqueles com condições médicas conhecidas.</Text>
                    <Text></Text>
                <Text style={styles.txtDark}>
                    As vacinas têm sido consideradas seguras e eficazes em pessoas com várias condições médicas subjacentes que 
                    estão associadas ao aumento do risco de doenças graves. Estes incluem pressão alta; diabetes; asma; doença pulmonar, hepática 
                    ou renal; e infecções crônicas estáveis e controladas.
               </Text>
               <Text></Text>
               <Text style={styles.txtDark}>
                    Aqueles que devem consultar um médico antes da vacinação incluem pessoas com o sistema imunológico comprometido, 
                    idosos com fragilidade grave, pessoas com histórico de reação alérgica grave a vacinas, pessoas vivendo com HIV e 
                    aquelas que estão grávidas ou amamentação.
                </Text>
                <Text style={styles.titleDark}>Quantas doses da vacina são necessárias?</Text>
                <Text style={styles.txtDark}>O número de doses necessárias para garantir a maior proteção contra o novo coronavírus varia de acordo com a vacina sendo utilizada:</Text>
                <Text style={styles.subTitledark}>Coronavac:</Text><Text style={styles.txtDark}> 2 doses, com intervalo de 2 a 4 semanas;</Text>
                <Text style={styles.subTitledark}>Pfizer:</Text><Text style={styles.txtDark}> 2 doses, com intervalo de 21 dias;</Text>
                <Text style={styles.subTitledark}>Moderna:</Text><Text style={styles.txtDark}> 2 doses, com intervalo de 28 dias;</Text>
                <Text style={styles.subTitledark}>Astrazeneca:</Text><Text style={styles.txtDark}> 2 doses, com intervalo de 12 semanas;</Text>
                <Text style={styles.subTitledark}>Johnson & Johnson:</Text><Text style={styles.txtDark}> 1 dose única.</Text>

            </View>

            </ScrollView>
          
        </View>
    );
}
