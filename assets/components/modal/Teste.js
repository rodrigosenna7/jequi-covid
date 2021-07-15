import React from 'react';
import { Text, View,ScrollView  } from 'react-native';
import {Fontisto} from '@expo/vector-icons';
import {styles} from '../../style/Styles';

export default function Teste (){


    return(    
        <View style={[styles.container, styles.modadark]}>
            <ScrollView> 
            <View style={styles.blocoDark}>
                <Fontisto style={{textAlign:'center'}} name="blood-test" size={60} color="#E8F1F2" />
                <Text style={styles.titleLight}>Quando devo fazer o teste para COVID-19?</Text>
                <Text style={styles.txtLight}>
                    Qualquer pessoa com sintomas deve ser testada, sempre que possível. Pessoas que não apresentam 
                    sintomas, mas tiveram contato próximo com alguém que está, ou pode estar infectado, também podem 
                    considerar o teste - entre em contato com as diretrizes de saúde locais e siga suas orientações.
                </Text>
            </View>

            </ScrollView>
          
        </View>
    );
}
