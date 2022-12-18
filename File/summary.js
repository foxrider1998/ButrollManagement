import React, {useState,useEffect} from "react";
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity ,Alert,Image,ImageBackground,ScrollView} from "react-native";
import {dataRef} from '../data/References';

export default function Data({navigation, route}){
  const [dskill, setDskill] = useState([]);
  const [key, setKey] = useState("");
  const [gsm, setGsm] = useState("");
  const [diameter, setNama] = useState("");
  const [berat, setBerat] = useState("");

let totalBR
let totalPcs =  dskill.length    
        

function getWeight(dskill) {
    let weight=0
    for (i=0;i<dskill.length;i++){

   weight= dskill[i].berat+weight
   
    }
     return weight
  };



 cekTotal =(total=0)=> {
        const dataFocus = navigation.addListener('focus', ()=>{
        const listener = dataRef.child("Butroll").on('value', (snapshot) => {
        let data = snapshot.val();         
        let dskill = Object.values(data);  
        }
        )
                    })
                    let i=0
                  total=  getWeight(dskill).toFixed(2)
    return total
 };

function getWeightByGroup(dskill,group) {
    let groupPcs=0
    let weight=0
    for (i=0;i<dskill.length;i++){
if (dskill[i].grup==group){
   weight= dskill[i].berat+weight
    groupPcs++
}
    }
     return [weight,groupPcs]
  };
  cekTotalByGroup =(total=0,group)=> {
        const dataFocus = navigation.addListener('focus', ()=>{
        const listener = dataRef.child("Butroll").on('value', (snapshot) => {
        let data = snapshot.val();         
        let dskill = Object.values(data);  
        }
        )
                    })
                    let i=0
                  total= ((getWeightByGroup(dskill,group)))
    return total
 };
let totalPcsByGroup = cekTotalByGroup();

let totalBerat=cekTotal()

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
            <Text style={styles.title}>Data By Group</Text>
          </View>
          <View style={styles.Data}>
             <View style={styles.contentTitle}>
                <Text style={styles.textContentTitle}>Group </Text>
             </View>
              <View style={styles.contentTitle}>
                <Text style={styles.textContentTitle}>Jumlah (Pcs)</Text>
             </View>
             <View style={styles.contentTitle}>
                <Text style={styles.textContentTitle}>Berat (KG)</Text>
             </View>
            
          </View>
          <View style={styles.Data}>
             <View style={styles.contentTitle}>
                <Text style={styles.textContentTitle}>A</Text>
             </View>
              <View style={styles.contentTitle}>
                <Text style={styles.textContentTitle}>{cekTotalByGroup(0,"A")[1].toFixed(0)}</Text>
             </View>
             <View style={styles.contentTitle}>
                <Text style={styles.textContentTitle}>{cekTotalByGroup(0,"A")[0].toFixed(2)}</Text>
             </View>
              
          </View>
          
          <View style={styles.Data}>
             <View style={styles.contentTitle}>
                <Text style={styles.textContentTitle}>B</Text>
             </View>
              <View style={styles.contentTitle}>
                <Text style={styles.textContentTitle}>{cekTotalByGroup(0,"B")[1].toFixed(0)}</Text>
             </View>
             <View style={styles.contentTitle}>
                <Text style={styles.textContentTitle}>{cekTotalByGroup(0,"B")[0].toFixed(2)}</Text>
             </View>
              
          </View>

           <View style={styles.Data}>
             <View style={styles.contentTitle}>
                <Text style={styles.textContentTitle}>C</Text>
             </View>
              <View style={styles.contentTitle}>
                <Text style={styles.textContentTitle}>{cekTotalByGroup(0,"C")[1].toFixed(0)}</Text>
             </View>
             <View style={styles.contentTitle}>
                <Text style={styles.textContentTitle}>{cekTotalByGroup(0,"C")[0].toFixed(2)}</Text>
             </View>
              
          </View>


             <View style={styles.posTitle}>
            <Text style={styles.title}>Data All</Text>
          </View>
          <View style={styles.Data}>
             <View style={styles.contentTitle}>
                <Text style={styles.textContentTitle}>Jumlah (Pcs)</Text>
             </View>
             <View style={styles.contentTitle}>
                <Text style={styles.textContentTitle}>Berat (KG)</Text>
             </View>
            
          </View>
          <View style={styles.Data}>
             <View style={styles.contentTitle}>
                <Text style={styles.textContentTitle}>{totalPcs}</Text>
             </View>
             <View style={styles.contentTitle}>
                <Text style={styles.textContentTitle}>{totalBerat}</Text>
             </View>
              
          </View>
                    </ScrollView>
       </ImageBackground>
    )
}

const styles = StyleSheet.create({
    posTitle:{
      alignItems: 'center',
      marginTop:20,
    },
    title:{
      fontSize : 18,
      fontWeight : 'bold',
      color: '#00ffff'
    },
    Data:{
      flexDirection:'row',
      justifyContent:'space-around',
      marginBottom : 5
    },
    contentTitle:{
        marginTop:5,
    },
    textContentTitle:{
        fontWeight:'bold',
        color: 'white',
        fontSize:15
    },
    bg:{wgsmth :'100%',
        height:'100%'

    }
});
