import React ,{useEffect, useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, RefreshControl,Alert  } from 'react-native';
import { Entypo, FontAwesome,Fontisto,Feather } from '@expo/vector-icons';
import {styles} from '../assets/style/Styles';
import Menutopo from '../assets/components/Menutopo';
import firebase from '../firebaseConfig';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

export default function Vacinação ({ navigation }){

    const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);

    const [data, setData] = useState('');

    useEffect(() =>{
        let ref = firebase.firestore().collection('vacina').orderBy("post", "desc").onSnapshot(querySnapshot =>{
        const data = []
            querySnapshot.forEach(doc =>{
                data.push({
                    ...doc.data(),
                       key:doc.id
            })
        })
        setData(data)
    })
        return () => ref()
    }, [])

    return(    
        <View style={[styles.container, styles.containertop]}>
            <Menutopo title='Vacina' navigation={navigation}/>

           <View>
                <Text>Fonte: Secretaria Municipal de saúde de Jequitinhoha</Text>
            </View>

            <View>
                <FlatList
                    refreshControl={
                        <RefreshControl
                          refreshing={refreshing}
                          onRefresh={onRefresh}
                        />
                      }
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={({item})=>(
                        <View style={[styles.borda, styles.blocoLight]}>

                            <View style={styles.boletimdia}>
                                <Text style={styles.titleLight}>Vacina disponível para</Text>
                            </View>
                            <View >
                                <Text style={styles.txtDark}>Grupo:</Text>
                                <Text style={[styles.txtDark, styles.txtExtra]}>{item.grupo}</Text>
                            </View>
                            <View >
                                <Text style={styles.txtDark}>Apresentar:</Text>
                                <Text style={[styles.txtDark, styles.txtExtra]}>{item.documentos}</Text>
                            </View>
                            <View>
                                <Text style={styles.txtDark}>Data e horário:</Text>
                                <Text style={[styles.txtDark, styles.txtExtra]}>{item.dia}</Text>
                            </View>
                            <View>
                                <Text style={styles.txtDark}>Local:</Text>
                                <Text style={[styles.txtDark, styles.txtExtra]}>{item.local}</Text>
                            </View>
                                
                            
                        </View>
                    )}
                />
                <Text style={{marginBottom:90}}>Fonte: Secretaria Municipal de saúde de Jequitinhoha</Text>
            </View>

        </View>
    );
}

