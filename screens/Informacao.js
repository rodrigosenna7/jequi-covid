import React ,{useEffect, useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity,Modal, BackHandler,Alert,ScrollView  } from 'react-native';
import {MaterialIcons, Entypo, FontAwesome5,Fontisto,Ionicons } from '@expo/vector-icons';
import {styles} from '../assets/style/Styles';
import Menutopo from '../assets/components/Menutopo';

export default function Informacao ({navigation}){

    const [visible, setVisible] = useState(true)

    return(    
        <View style={[styles.container, styles.containertop]}>
            <Menutopo title='Informações' navigation={navigation}/>
        <Modal
            animationType='slide'
            visible={visible}
        >

                <TouchableOpacity style={styles.buttonMenu} 
                    onPress={()=> {setVisible(false)}}
                >
                 <Ionicons name="close" size={30} color={'#13293D'} />
                </TouchableOpacity>

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
            </View>

            <View style={styles.blocoLight}>
                <MaterialIcons style={{textAlign:'center'}} name="sick" size={60} color="#13293D" />
                <Text style={styles.titleDark}>Quais os sintomas?</Text>
                <Text style={styles.txtDark}> 
                    Os sintomas mais comuns da COVID-19 são febre, cansaço e tosse seca. Alguns pacientes 
                    podem apresentar dores, congestão nasal, dor de cabeça, conjuntivite, dor de garganta, 
                    diarreia, perda de paladar ou olfato, erupção cutânea na pele ou descoloração dos dedos 
                    das mãos ou dos pés. 
                </Text>
            </View>

            <View style={styles.blocoDark}>
                <Fontisto style={{textAlign:'center'}} name="blood-test" size={60} color="#E8F1F2" />
                <Text style={styles.titleLight}>Quando devo fazer o teste para COVID-19?</Text>
                <Text style={styles.txtLight}>
                    Qualquer pessoa com sintomas deve ser testada, sempre que possível. Pessoas que não apresentam 
                    sintomas, mas tiveram contato próximo com alguém que está, ou pode estar infectado, também podem 
                    considerar o teste - entre em contato com as diretrizes de saúde locais e siga suas orientações.
                </Text>
            </View>

            <View style={styles.blocoLight}>
                <FontAwesome5 style={{textAlign:'center'}} name="head-side-mask" size={60} color="#13293D" />
                <Text style={styles.titleDark}>Como se proteger do COVID-19?</Text>
                <Text style={styles.txtDark}>
                    Para evitar a propagação da COVID-19, faça o seguinte:Lave suas mãos com frequência. Use sabão e água ou álcool em gel
                    Lave suas mãos com frequência. Use sabão e água ou álcool em gel. Mantenha uma distância 
                    segura de pessoas que estiverem tossindo ou espirrando.Use máscara quando não for possível manter o distanciamento físico.
                    toque nos olhos, no nariz ou na boca. Cubra seu nariz e boca com o braço dobrado ou um lenço ao tossir ou expirar.
                    Fique em casa se você se sentir indisposto. Procure atendimento médico se tiver febre, tosse e dificuldade para respirar.
                </Text>
            </View>

            <View style={styles.blocoDark}>
                <FontAwesome5 style={{textAlign:'center'}} name="hand-holding-heart" size={60} color="#E8F1F2" />
                <Text style={styles.titleLight}>Fui contaminado, e agora?</Text>
                <Text style={styles.txtLight}>
                    Informe outras pessoas com quem você teve contato para impedir a propagação do vírus.
                    Caso não seja possível fazer o teste, fique em casa e pratique o distanciamento social por 14 dias.
                    Enquanto estiver em quarentena, não vá ao trabalho, à escola ou a espaços públicos. Peça para alguém levar itens essenciais até você.
                    Mantenha pelo menos um metro de distância de outras pessoas, incluindo membros da sua família.
                    Use uma máscara para proteger os outros, até mesmo se/quando você precisar procurar atendimento médico.
                    Higienize as mãos com frequência.
                    Fique em um cômodo separado dos outros membros da sua família. Se isso não for possível, use máscara.
                    Mantenha o ambiente bem ventilado.
                    Se você divide o quarto com alguém, deixe um metro de distância entre as camas.
                    Preste atenção por 14 dias para ver se você apresenta sintomas.
                    Ligue para o prestador de cuidados de saúde imediatamente se você apresentar qualquer um destes sintomas: dificuldade para respirar, perda da fala ou da mobilidade, confusão ou dores no peito.
                    Mantenha contato com seus entes queridos por telefone ou on-line e faça exercícios para manter o pensamento positivo.
                </Text>
            </View>

            <View style={styles.blocoLight}>
                <Fontisto style={{textAlign:'center'}} name="injection-syringe" size={60} color="#13293D" />
                <Text style={styles.titleDark}>Sobre as vacinas</Text>
                <Text style={styles.txtDark}>
                As vacinas COVID-19 foram testadas em grandes e randomizados ensaios controlados que incluem pessoas de uma ampla faixa etária, 
                ambos os sexos, etnias diferentes e aqueles com condições médicas conhecidas. As vacinas mostraram um alto nível de eficácia em 
                todos Populações. As vacinas têm sido consideradas seguras e eficazes em pessoas com várias condições médicas subjacentes que 
                estão associadas ao aumento do risco de doenças graves. Estes incluem pressão alta; diabetes; asma; doença pulmonar, hepática 
                ou renal; e infecções crônicas estáveis e controladas.
               </Text>
               <Text style={styles.txtDark}>
                Aqueles que devem consultar um médico antes da vacinação incluem pessoas com o sistema imunológico comprometido, 
                idosos com fragilidade grave, pessoas com histórico de reação alérgica grave a vacinas, pessoas vivendo com HIV e 
                aquelas que estão grávidas ou amamentação.
                </Text>
            </View>

            </ScrollView>
            </Modal>
        </View>
    );
}

