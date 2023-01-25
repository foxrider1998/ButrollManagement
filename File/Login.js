import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Alert, Image, ImageBackground ,Dimensions,ScrollView , SafeAreaView} from "react-native";
import {auth} from '../data/References';

export default function Login({navigation}){
        const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 


    const submit=()=>{
      if(email =="" || password=="" ){
        Alert.alert("email dan password harus diisi!")
      }
      else{
        auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("Login berhasil")
        navigation.navigate("MyDrawer")
      })
      .catch(()=>{
        console.log("Login gagal")
      })
    }
  }
     const regis=()=>{
        navigation.navigate('Registrasi');
    };
    return (
      <SafeAreaView>
        <View style={styles.posTitle1}>
          
        </View>
        <View style={styles.posTitle}>
          
        </View>
          <View style={styles.posTitle}>
            <Text style={styles.posTitle1}>Hello there</Text>
            <Text style={styles.posTitle}>Please login or contact admin if you didn't have account!!</Text>
          </View>

          <View style={styles.boxdecoration}>


          <View style={styles.contInput}>
            <View style={styles.posInput}>
                <TextInput 
                  style={styles.input}
                  placeholder="Username"
                  placeholderTextColor="white"
                  onChangeText={(value)=>setEmail(value)}
                  value={email}
                />
            </View>
            <View style={styles.posInput}>
                <TextInput 
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor="white"
                  onChangeText={(value)=>setPassword(value)}
                  value={password} 
                />
            </View> 
             <View style={styles.posButton}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={()=>submit()}
                >
                  <Text style={styles.textButton}>Login</Text>
                </TouchableOpacity>
            </View>
          
            </View> 
           

             
          </View>
          </SafeAreaView>
    )
}

const styles = StyleSheet.create({
   bg:{
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0

    }, container:{
        width :'100%',
        height:'100%',
    },
    posTitle:{
      alignItems: 'center'
    },
    posTitle1:{
      alignItems: 'center',
      marginTop : 30,
      color: 'blue',
      fontSize:24,


      
    },
    contInput:
      {width :'70%',
        height:'70%',
        marginBottom: "40%",
      marginTop: "60%",
      margin: 60,
      padding: 15,
      borderRadius: 15
    },
    posInput:{
      alignItems:"center",
      borderRadius: 30,
      marginLeft : 20,
      marginRight : 20,
      marginBottom : 10,
      paddingLeft : 10,
      paddingRight: 10,
      backgroundColor:'#0066ff'
    },
    input:{
      borderRadius: 35,
      height : 30,
      borderBottomWidth:1,
      borderBottomColor : '#ffffff',
      backgroundColor: '#0066ff',
      color: 'white',
      alignItems:"center"
    },
    posButton:{
      marginTop: 20,
      alignItems:'center'
    },
    button:{
      borderRadius: 5,
      width: 180,
      height: 30,
      alignItems:'center',
      backgroundColor : '#ccffff', 
      justifyContent : 'center'
    },
    boxdecoration:{
      borderRadius: 50,
      margin:20,
      height: 400,
      alignItems:'center',
      backgroundColor : '#00869f', 
      justifyContent : 'center'
    },
    textButton:{
      fontWeight: 'bold',
      color: '#0066ff'
    },
});
