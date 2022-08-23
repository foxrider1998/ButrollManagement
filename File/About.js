import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function About(){
    return(
      <View style={styles.container}>
          <View style={styles.header}>
              <View style={styles.nama}>
                      <Text style={styles.namaText}>Butroll Management system</Text>
                      <Text style={styles.asText}>Aplikasi ini menyimpan informasi Butroll .</Text>
                      <Text style={styles.asText}>mulai dari stock , jumlah serta berat Butroll .</Text>
                      <Text style={styles.asText}>Aplikasi ini juga dapat menghitung panjang dan berat Butroll dengan memasukkan gramature dan diameter kertas .</Text>


              </View>
          </View>
		    </View>
    )
  }

const styles = StyleSheet.create({
	container:{
		flex:1,
        backgroundColor: 'white',
        flexDirection:'column'
	},
	header:{
		backgroundColor:'white',
		marginTop:200,
    flexDirection: 'column',
	},
    nama:{
        justifyContent:'center',
        alignItems: 'center',
        marginTop:10,
        marginBottom :15,
        padding:20
    },
    namaText:{
        color:'#2991FF', 
        fontSize:25, 
        fontWeight: 'bold',
        marginLeft:30,
        marginRight:30,
        marginBottom : 10
    },
    asText:{
        color:'#2991FF', 
        fontSize:20,
        textAlign:'center' 
    }
})