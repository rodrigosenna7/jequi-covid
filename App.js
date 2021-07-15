import React ,{useEffect} from 'react';
import { BackHandler,Alert  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Fontisto ,MaterialIcons,FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Home, Boletim,Contatos, Vacina} from './screens';


export default function App ({ navigation }){


    const Tab=createBottomTabNavigator();

    return(    
  <NavigationContainer>
      <Tab.Navigator
          initialRouteName="Home" 
          screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
              return (
                <Fontisto name="home" size={24} color={color} />
              );
            } else if (route.name === 'Boletim') {
              return (
                <MaterialIcons name="coronavirus" size={35} color={color} />
              );
            }
            else if (route.name === 'Vacina') {
              return (
                <Fontisto name="injection-syringe" size={35} color={color} />
              );
            }
            else if (route.name === 'Contatos') {
              return (
                <MaterialCommunityIcons name="card-account-phone" size={35} color={color} />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: '#2271B3',
          inactiveTintColor: 'gray',
        }}
      >
                

                <Tab.Screen name="Home" component={Home} options={{title:'Início'}}/>
                <Tab.Screen name="Vacina" component={Vacina} options={{title:'Vacinação'}}/>
                <Tab.Screen name="Boletim" component={Boletim} options={{title:'Boletim',}}/>
                <Tab.Screen name="Contatos" component={Contatos} options={{title:'Contatos'}}/>
                
                
             
      </Tab.Navigator>
      </NavigationContainer>
    );
}

