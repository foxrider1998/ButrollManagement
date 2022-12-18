import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Login from '../File/Login';
import Laporan from '../File/laporan';
import Dashboard from '../File/dashboard';
import InputBr from '../File/inputBr';

import ButrollGA from "../File/ButrollGA"
import ButrollGB from "../File/ButrollGB";
import ButrollGC from "../File/ButrollGC";

import LokasiDB from "../File/lokasiDB";
import LokasiBF from "../File/lokasiBF";
import LokasiCF from "../File/lokasiCF";

import Report from "../File/summary"
import kalkulasi from '../File/Calculate';
import About from '../File/About';
import Regis from '../File/Regis';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function Router() {
  return ( 
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginScreen" component={Login} />

        <Stack.Screen name="MyDrawer" component={MyDrawer} />
        <Stack.Screen name="Group" component={Group} options={{ title:'Kembali', headerShown: false }}/>
        <Stack.Screen name="Summary" component={Report} options={{ title:'Kembali', headerShown: false }}/>
        <Stack.Screen name="Lokasi" component={Lokasi} options={{ title:'Kembali', headerShown: false }}/>
        <Stack.Screen name="Menu" component={Menu} options={{ title:'Batal', headerShown: false }}/>
        <Stack.Screen name="Registrasi" component={Regis} options={{headerShown: true, title:"Kembali"}}/>
              
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const Group = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        activeTintColor: '#2991FF',
        inactiveTintColor: 'black',
        activeBackgroundColor: '#ccffff',
        labelStyle: { fontSize: 13, marginBottom: 10 },
        style: {
          backgroundColor: 'black',
          height: 40,
        },
        headerShown: false,
      }}>


      
            <Tab.Screen
        name="Butroll Group A"
        component={ButrollGA}
        options={{
          tabBarLabel: 'Group A',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="book-open"
              color={color}
              size={size}
            />
          ),
        }}
      />
      
      <Tab.Screen
        name="Butroll Group B"
        component={ButrollGB}
        options={{
          tabBarLabel: 'Group B',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="book-open"
              color={color}
              size={size}
            />
          ),
        }}
      />
          <Tab.Screen
        name="Butroll Group C"
        component={ButrollGC}
        options={{
          tabBarLabel: 'Group C',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="book-open"
              color={color}
              size={size}
            />
          ),
        }}
      />
          
    </Tab.Navigator>
  );
};


const Summary = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        activeTintColor: '#2991FF',
        inactiveTintColor: 'black',
        activeBackgroundColor: '#ccffff',
        labelStyle: { fontSize: 13, marginBottom: 10 },
        style: {
          backgroundColor: 'black',
          height: 40,
        },
        headerShown: false,
      }}>


      
            <Tab.Screen
        name="Butroll Group A"
        component={ButrollGA}
        options={{
          tabBarLabel: 'Group A',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="book-open"
              color={color}
              size={size}
            />
          ),
        }}
      />
      
      <Tab.Screen
        name="Butroll Group B"
        component={ButrollGB}
        options={{
          tabBarLabel: 'Group B',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="book-open"
              color={color}
              size={size}
            />
          ),
        }}
      />
          <Tab.Screen
        name="Butroll Group C"
        component={ButrollGC}
        options={{
          tabBarLabel: 'Group C',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="book-open"
              color={color}
              size={size}
            />
          ),
        }}
      />
          
    </Tab.Navigator>
  );
};


const Lokasi = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        activeTintColor: '#2991FF',
        inactiveTintColor: 'black',
        activeBackgroundColor: '#ccffff',
        labelStyle: { fontSize: 13, marginBottom: 10 },
        style: {
          backgroundColor: 'black',
          height: 40,
        },
        headerShown: false,
      }}>


      
            <Tab.Screen
        name="Butroll Lokasi DB"
        component={LokasiDB}
        options={{
          tabBarLabel: 'Lokasi DB',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="book-open"
              color={color}
              size={size}
            />
          ),
        }}
      />
       <Tab.Screen
        name="Butroll Lokasi BF"
        component={LokasiBF}
        options={{
          tabBarLabel: 'Lokasi BF',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="book-open"
              color={color}
              size={size}
            />
          ),
        }}
      />
       <Tab.Screen
        name="Butroll Lokasi CF"
        component={LokasiCF}
        options={{
          tabBarLabel: 'Lokasi CF',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="book-open"
              color={color}
              size={size}
            />
          ),
        }}
      />
          </Tab.Navigator>
  );
};

const MyDrawer = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Dashboard" component={Dashboard} />
    <Drawer.Screen name="Summary" component={Report} />
    <Drawer.Screen name="Lokasi" component={Lokasi} />
    <Drawer.Screen name="By Group" component={Group} />
    <Drawer.Screen name="About" component={About} />
  </Drawer.Navigator>
);

const Menu = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen
        name="Buttroll+"
        component={InputBr}
      />
       <Stack.Screen
        name="kalkulasi"
        component={kalkulasi}
      />


      


   
    </Stack.Navigator>
  );
};
