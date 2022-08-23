import React, { useState, useEffect } from 'react';
import { auth } from './References';
import { dataRef } from './References';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  ImageBackground,
} from 'react-native';
export default function Dashboard({ navigation }) {
  const [dskill, setDskill] = useState([]);


  useEffect(()=> {
        const dataFocus = navigation.addListener('focus', ()=>{
        const listener = dataRef.child("usedReport").on('value', (snapshot) => {
     
          let data = snapshot.val();         
          let dskill = Object.values(data);        
         
            setDskill(dskill);
          })})})
          
  function cekTotalPemakaian(dskill, group) {
    let groupPcs = 0;
    let weight = 0;
    for (i = 0; i < dskill.length; i++) {
      if (dskill[i].grup == group) {
        weight = dskill[i].berat + weight;
        groupPcs++;
      }
    }
    return [weight, groupPcs];
  }
  cekTotalPakaiByGroup = (total = 0, group) => {
    const dataFocus = navigation.addListener('focus', () => {
      const listener = dataRef.child('usedReport').on('value', (snapshot) => {
        let data = snapshot.val();
        let dskill = Object.values(data);
      });
    });
    let i = 0;
    total = cekTotalPemakaian(dskill, group);
    return total;
  };

  const act = (item) => {
    navigation.navigate('Lokasi', {
      screen: item,
      param: {},
    });
  };
  const tambahButroll = (item) => {
    navigation.navigate('Menu', {
      screen: item,
    });
  };
  const actscreen = (item) => {
    auth.signOut().then(() => {
      navigation.navigate('LoginScreen');
    });
  };

  return (
    <ImageBackground source={require('../assets/login.jpg')} style={styles.bg}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.photo}>
            <Image
              source={require('../assets/user.png')}
              style={styles.photo}></Image>
            <Text style={styles.asText}>Home</Text>
            <TouchableOpacity onPress={() => actscreen('LoginScreen')}>
              <Image
                source={require('../assets/logout.png')}
                style={styles.logout}></Image>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.quickacces}>
          
            <View style={styles.groupReport}>
              <Text style={styles.asText}>Grup A</Text>
              
              <Text style={styles.textContentTitle}>
                {' '}
                {cekTotalPakaiByGroup(0,'A')[1].toFixed(0)}
              </Text>
            </View>
         
            <View style={styles.groupReport}>
              <Text style={styles.asText}>Grup B</Text>
              
              <Text style={styles.textContentTitle}>
                {' '}
                {cekTotalPakaiByGroup(0,'B')[1].toFixed(0)}
              </Text>
            </View>
          
            <View style={styles.groupReport}>
              <Text style={styles.asText}>Grup C</Text>
              
              <Text style={styles.textContentTitle}>
                {' '}
                {cekTotalPakaiByGroup(0,'C')[1].toFixed(0)}
              </Text>
            </View>
        </View>
        <View style={styles.quickacces}>
          <TouchableOpacity
            style={styles.avatar}
            onPress={() => tambahButroll('Butroll+')}>
            <Text style={styles.asText}>Buttroll Baru </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.quickacces}>
          <TouchableOpacity
            style={styles.avatar}
            onPress={() => tambahButroll('kalkulasi')}>
            <Text style={styles.asText}>Hitung Estimasi Panjang </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  logout: { marginLeft: '150%', marginTop: '10%' },
  photo: {
    width: 80,
    height: 80,

    flexDirection: 'row',
  },
  header: {
    backgroundColor: 'grey',
    flexDirection: 'row',
  },
  groupReport: {
    backgroundColor: 'grey',
    margin :4,
    flex :1,
    borderRadius:5,
  },
  avatar: {
    width: 80,
    height: 80,
    flex: 1,
    flexDirection: 'row',
    borderColor: 'black',
    color: 'blue',
    borderWidth: 3,
    margin: 5,
    borderRadius: 10,
  },
  bg: { width: '100%', height: '100%' },
  quickacces: {
    margin: 5,
    borderRadius: 11,
    backgroundColor: 'blue',
    flexDirection: 'row',
  },
  asText: {
    color: 'white',
    fontSize: 20,
    marginRight:28
  },
});
