import React ,{useState,useEffect} from 'react';
import { Text, View, RefreshControl,FlatList  } from 'react-native';
import firebase from '../firebaseConfig';
import {styles} from '../assets/style/Styles';
import Menutopo from '../assets/components/Menutopo';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

export default function Boletim ({ navigation }){

    const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);

    const [data, setData] = useState('');

    useEffect(() =>{
        let ref = firebase.firestore().collection('boletim').orderBy("data", "desc").onSnapshot(querySnapshot =>{
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
            <Menutopo title='Boletim Covid' navigation={navigation}/>

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
                                <Text style={styles.titleLight}>Boletim {item.data}</Text>
                            </View>
                            <View style={styles.linha} >
                                <Text style={[styles.txtDark,styles.subTitledark]}>Confirmados:</Text>
                                <Text style={[styles.txtDark, styles.subTitledark]}>{item.confirmados}</Text>
                            </View>
                            <View style={styles.linha} >
                                <Text style={[styles.txtDark,styles.subTitledark]}>Acompanhamento:</Text>
                                <Text style={[styles.txtDark,styles.subTitledark]}>{item.acompanhamento}</Text>
                            </View>
                            <View style={styles.linha} >
                                <Text style={[styles.txtDark,styles.subTitledark]}>Recuperados:</Text>
                                <Text style={[styles.txtDark, styles.subTitledark]}>{item.recuperados}</Text>
                            </View>
                            <View style={styles.linha} >
                                <Text style={[styles.txtDark,styles.subTitledark]}>Óbitos:</Text>
                                <Text style={[styles.txtDark, styles.subTitledark]}>{item.obitos}</Text>
                            </View>
                            <View style={styles.linha} >
                                <Text style={[styles.txtDark,styles.subTitledark]}>Internados:</Text>
                                <Text style={[styles.txtDark, styles.subTitledark]}>{item.internados}</Text>
                            </View>
                            <View style={styles.linha} >
                                <Text style={[styles.txtDark,styles.subTitledark]}>Notificados:</Text>
                                <Text style={[styles.txtDark, styles.subTitledark]}>{item.notificados}</Text>
                            </View>
                        </View>
                    )}
                />
                <Text style={{marginBottom:90}}>Fonte: Secretaria Municipal de saúde de Jequitinhoha</Text>
            </View>
        </View>
    );
}

