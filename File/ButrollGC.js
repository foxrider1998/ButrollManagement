import React, {useState,useEffect} from "react";
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity ,Alert,Image,ImageBackground,ScrollView} from "react-native";
import {dataRef} from './References';

export default function Data({navigation, route}){
  const [dskill, setDskill] = useState([]);
  const [key, setKey] = useState("");
  const [gsm, setGsm] = useState("");
  const [diameter, setNama] = useState("");
  const [berat, setBerat] = useState("");

  useEffect(()=> {
        const dataFocus = navigation.addListener('focus', ()=>{
        const listener = dataRef.child("Butroll").on('value', (snapshot) => {
         
          let data = snapshot.val();         
          let dskill = Object.values(data);        
         
            setDskill(dskill);
            
          })})})

  

  const act = (item) => {
    let key =item.key;
    //function to make three option alert
  
        alert('Oh look, want to use it?')
        alert.cancelable=true
      hapusData(item.key)
  };



   const hapusData = (key) =>{
        dataRef.child("Butroll").child(key).remove();
   }

 
      
    return(  <ImageBackground source={require("../assets/login.jpg")} style={styles.bg} >
       
       <ScrollView>
          <View style={styles.posTitle}>
            <Text style={styles.title}>Data Barang</Text>
          </View>
          <View style={styles.contData}>
             <View style={styles.contentTitle}>
                <Text style={styles.textContentTitle}>Gsm</Text>
             </View>
             <View style={styles.contentTitle}>
                <Text style={styles.textContentTitle}>Dia</Text>
             </View>
                 <View style={styles.contentTitle}>
                <Text style={styles.textContentTitle}>Berat</Text>
             </View>
             <View style={styles.contentTitle}>
                <Text style={styles.textContentTitle}>Act</Text>
             </View>
          </View>
          <View style={styles.contFlat}>
              <FlatList
                data={dskill}
                keyExtractor={(item)=>item.key}
                renderItem={({item})=>{
                  if (item.grup=='C')
                   { return(
                        
                            <View style={styles.contData1}>
                                <View style = {styles.contentTitle1}>
                                    <Text style = {styles.textContentTitle1}> {item.gsm} </Text>
                                </View>
                                <View style = {styles.contentTitle1}>
                                    <Text style = {styles.textContentTitle1}> {item.diameter}
                                    </Text>
                                </View>
                                   <View style = {styles.contentTitle1}>
                                    <Text style = {styles.textContentTitle1}> {item.berat.toFixed(2)}
                                    </Text>
                                </View> 
                                <View style = {styles.contentTitle1}>
                                   <TouchableOpacity onPress={()=>act(item)}>   
                                    
                                    <Image source={require('../assets/edit.png' )} ></Image>
                                   </TouchableOpacity>
                            
                                </View> 
                            </View>
                 
                    )}
                }}
                />
            </View>
                    </ScrollView>
       </ImageBackground>
    )
}

const styles = StyleSheet.create({
    posTitle:{
      alignItems: 'center'
    },
    title:{
      fontSize : 18,
      fontWeight : 'bold',
      color: '#0066ff'
    },
    contData:{
      flexDirection:'row',
      justifyContent:'space-around',
      backgroundColor:'#0066ff',
      marginTop: 20,
      marginLeft: 20,
      marginRight: 20,
      padding: 15,
    },
    contFlat:{
      backgroundColor:'#ccffff',
      paddingTop : 15,
      marginLeft:20,
      marginRight:20,
    },
    contData1:{
      flexDirection:'row',
      justifyContent:'space-around',
      marginBottom : 5
    },
    contentTitle:{
        marginTop:5,
    },
    contentTitle1:{
        flex:2,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10
    },
    textContentTitle:{
        fontWeight:'bold',
        color: 'white',
        fontSize:15
    },
    bg:{wgsmth :'100%',
        height:'100%'

    },
    textContentTitle1:{
        fontWeight:'bold',
        fontSize:15
    }
});
