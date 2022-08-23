import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet ,ImageBackground,Alert} from "react-native";
import {dataRef} from './References';

export default function InputBr({navigation, route}){
    const [gsm, setGsm] = useState("");
    const [diameter, setDiameter] = useState("");
    const [panjang, setPanjang] = useState("");
    const [lebar, setLebar] = useState("");
    const [grup, setGrup] = useState("");
    const [berat, setBerat] = useState("");
var konst
var panjangUpdate

 const length = (diameter, gsm) => {
   let konst =    cekMaxLength(gsm)
    let luasUtuh= (konst/(luas(125/2)-luas(11/2) ))
    let long=   (luas(diameter/2)-luas(11/2)) *luasUtuh
    if (diameter!=0){
    return long;
    }else {
      return 0
    }
 }   

 const cekMaxLength = (gsm) => {
 if (gsm == 125){
      konst=7300
    }else if (gsm ==150){
      konst=6500
    }else if (gsm ==200){
      konst=5000
    }else if (gsm ==275){
      konst=3500
    }else if (gsm ==140){
      konst=6900
    }
    return konst;
    }
 const luas = (r) => {
    let phi = 3.142857142857143
    let sqm = phi*r*r
return sqm;

 }


    return ( <ImageBackground source={require("../assets/splash.png")} style={styles.bg} >
      <View style={styles.container}>
        <View style={styles.posTitle}>
          <Text style={styles.title}>Butroll Keluar</Text>
        </View>

        <View style={styles.boxcalkulasi}>
              <View style={styles.ContainerHasil}>

                <Text  style={styles.teks}> Panjang (M)</Text>
                  <View style={styles.calkulasi}>
                     <Text style={styles.tekshasil}>{(length(diameter,gsm)).toFixed()}</Text> 
                 </View>
              </View>

              <View style={styles.ContainerHasil}>

              <Text  style={styles.teks}> Berat (Kg)</Text>
                 <View style={styles.calkulasi}>
                     <Text style={styles.tekshasil}>{(((length(diameter,gsm))*lebar*gsm )/100000).toFixed()}</Text>
                 </View>
                 </View>
              </View>
            

          <View style={styles.contInput}>
            <View style={styles.jenis}>
                 <TouchableOpacity 
                  style={styles.substance}
                  onPress={()=>setGsm(125)}
                >
                  <Text >A/M</Text>
                </TouchableOpacity>
               
                 <TouchableOpacity
                  style={styles.substance}
                    onPress={()=>setGsm(150)}
                >
                  <Text >H/S</Text>
                </TouchableOpacity>

                 <TouchableOpacity
                  style={styles.substance}
                  onPress={()=>setGsm(200)}
                >
                  <Text >F/N</Text>
                </TouchableOpacity>

                 <TouchableOpacity
                  style={styles.substance}
                  onPress={()=>setGsm(275)}
                >
                  <Text >6</Text>
                </TouchableOpacity>

                 <TouchableOpacity
                  style={styles.substance}
                  onPress={()=>setGsm(125)}
                >
                  <Text >Ebc</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.posInput}>
                <TextInput 
                  style={styles.input}
                  placeholder="Masukkan diameter"
                  placeholderTextColor="white"
                  onChangeText={(value)=>setDiameter(value)}
                  value={diameter}
                />
            </View>

            <View style={styles.posInput}>
                <TextInput 
                  style={styles.input}
                  placeholder="Masukkan lebar"
                  placeholderTextColor="white"
                  onChangeText={(value)=>setLebar(value)}
                  value={lebar}
                />
            </View>

              <View style={styles.jenis}>
                

            </View>
            <View style={styles.jenis}>
               
                

            </View>

            

              <View style={styles.posButton}>
               <View>
                <TouchableOpacity 
                  style={styles.button} 
                  onPress={()=>{navigation.navigate('Dashboard')}}>
                <Text style={styles.textButton}>Back</Text>
                </TouchableOpacity>
                </View>
            </View>
          </View>
          
      </View>
      </ImageBackground>
    )
}

const styles = StyleSheet.create({
  container:{
    marginTop: 40
  },ContainerHasil:{
      width:"90%",
      flexDirection: "row",
      backgroundColor: "black",
      alignContent:"center",
      justifyContent:"space-between",
      borderBottomRightRadius: 20,
      marginBottom:5


    },
    posTitle:{
      alignItems: 'center'
    },
    title:{
      fontSize : 22,
      fontWeight : 'bold',
      color:'#0066ff'
    },
    contInput:{
      backgroundColor:'#0066ff',
      margin: 20,
      padding: 15,
      borderRadius: 15
    },
    posInput:{
      marginLeft : 20,
      marginRight : 20,
      marginBottom : 10,
      paddingLeft : 10,
      paddingRight: 10,
      backgroundColor:'#0066ff'
    },
    calkulasi:{
      height : 30,
      width: "30%",
      borderRadius:5,
      marginTop : 20,
      marginBottom : 10,
      marginright: 22, 
      backgroundColor:'white',
      alignItems: "center"
    },
    boxcalkulasi:{
      
      height : 130,
      width: "98%",
      borderBottomRightRadius:18,
      marginTop : 20,
      marginBottom : 10,
      backgroundColor:'grey',
      alignContent:"space-around"
    },
    input:{
      marginTop: 10,
      height : 30,
      fontSize: 22,
      borderBottomWgsmth:1,
      borderBottomColor : '#ffffff',
      backgroundColor: '#0066ff',
      color: 'white'
    },
    input:{
      marginTop: 10,
      height : 30,
      fontSize: 22,
      borderBottomWgsmth:1,
      borderBottomColor : '#ffffff',
      backgroundColor: '#0066ff',
      color: 'white'
    },
    teks:{
      marginLeft: 6,
      marginTop: 10,
      height : 30,
      fontSize: 22,
      color: 'white'
    },
    tekshasil:{
      marginLeft: 6,
      marginTop: 10,
      height : 30,
      fontSize: 18,
      color: 'black'
    },
    posButton:{
      margin: 20,
      alignItems:'center'
    },
    button:{
      borderRadius: 5,
      wgsmth: 180,
      height: 30,
      alignItems:'center',
      backgroundColor : '#ccffff',
      justifyContent : 'center'
    },
     jenis:{
       flexDirection: 'row',
      margin: 7,
      width: 30,
    },
    substance:{
      borderRadius: 5,
      margin: 5,
      width: 40,
      height: 30,
      backgroundColor : '#ccffff',
      justifyContent : 'center',
      alignItems: 'center'
     
    },
    bg:{wgsmth :'100%',
        height:'100%'

    },
    textButton:{

      margin:5,
      fontWeight: 'bold',
      color: '#0066ff'
    }
});
