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
let lokasi = "DB"
var j
var L
var D
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

  const submit = () => {
         let newData={
             gsm: gsm,
             diameter: diameter,
             panjang: length(diameter,gsm),
             lebar: lebar,
             grup :grup,
             date : new Date().getDate() +" "+ (new Date().getMonth()+1) +" "+new Date().getFullYear(),
             berat : (((length(diameter,gsm))*lebar*gsm )/100000),
             lokasi: lokasi
        };
        const ref = dataRef.child('Butroll').push(newData);
        const key = ref.key;
        dataRef.child('Butroll').child(key).update({'key': key})
        navigation.navigate('Dashboard')
        

    };
    return ( <ImageBackground source={require("../assets/splash.png")} style={styles.bg} >
      <View style={styles.container}>
      <View style={styles.contopJenis}>
      <View style={styles.contjenis}>
       <Text style={styles.buttonText }>Panjang</Text>
       </View>   
       <View style={styles.contjenis}>
       <Text style={styles.buttonText }>Berat</Text>
       </View>     

      </View>

      <View style={styles.contopJenis}>
      <View style={styles.contjenis}>
       <Text style={styles.buttonText }>{(length(diameter,gsm)).toFixed(2)}</Text>
       </View>   
       <View style={styles.contjenis}>
       <Text style={styles.buttonText }>{(((length(diameter,gsm))*lebar*gsm )/100000).toFixed(2)}</Text>
       </View>     
    
      </View>

          <View style={styles.contInput}>
  
            
                <View style={styles.container}>
        <View style={styles.contopJenis}>
      <View style={styles.contjenis}>
       <Text style={styles.buttonText }>Lebar</Text>
       </View>   

      </View>
        <View style={styles.contopJenis}>

<View style={styles.contjenis}>
       <View style={styles.kotak1}>
             <Text style={styles.buttonText }>{L=(130)}</Text>
         </View>
         <View style={styles.kotak1}>
             <Text style={styles.buttonText }>{L=L+5}</Text>
         </View>
         <View style={styles.kotak1}>
             <Text style={styles.buttonText }>{L=L+5}</Text>
         </View>
         <View style={styles.kotak1}>
             <Text style={styles.buttonText }>{L=L+5}</Text>
         </View>
         <View style={styles.kotak1}>
             <Text style={styles.buttonText }>{L=L+5}</Text>
         </View>
         <View style={styles.kotak1}>
             <Text style={styles.buttonText }>{L=L+5}</Text>
         </View>
         <View style={styles.kotak1}>
             <Text style={styles.buttonText }>{L=L+5}</Text>
         </View>
         <View style={styles.kotak1}>
             <Text style={styles.buttonText }>{L=L+5}</Text>
         </View>
         <View style={styles.kotak1}>
             <Text style={styles.buttonText }>{L=L+5}</Text>
         </View>
</View>



</View>
<View style={styles.contopJenis}>

<View style={styles.contjenis}>
       <View style={styles.kotak1}>
             <Text style={styles.buttonText }>{L=(175)}</Text>
         </View>
         <View style={styles.kotak1}>
             <Text style={styles.buttonText }>{L=L+5}</Text>
         </View>
         <View style={styles.kotak1}>
             <Text style={styles.buttonText }>{L=L+5}</Text>
         </View>
         <View style={styles.kotak1}>
             <Text style={styles.buttonText }>{L=L+5}</Text>
         </View>
         <View style={styles.kotak1}>
             <Text style={styles.buttonText }>{L=L+5}</Text>
         </View>
         <View style={styles.kotak1}>
             <Text style={styles.buttonText }>{L=L+5}</Text>
         </View>
         <View style={styles.kotak1}>
             <Text style={styles.buttonText }>{L=L+5}</Text>
         </View>
         <View style={styles.kotak1}>
             <Text style={styles.buttonText }>{L=L+5}</Text>
         </View>
         <View style={styles.kotak1}>
             <Text style={styles.buttonText }>{L=L+5}</Text>
         </View>
</View>
</View>
<View style={styles.contopJenis}>

<View style={styles.contjenis}>
       <View style={styles.kotak1}>
             <Text style={styles.buttonText }>{L=(220)}</Text>
         </View>
         <View style={styles.kotak1}>
             <Text style={styles.buttonText }>{L=L+5}</Text>
         </View>
         <View style={styles.kotak1}>
             <Text style={styles.buttonText }>{L=L+5}</Text>
         </View>
         <View style={styles.kotak1}>
             <Text style={styles.buttonText }>{L=L+5}</Text>
         </View>
         <View style={styles.kotak1}>
             <Text style={styles.buttonText }>{L=L+5}</Text>
         </View>
         <View style={styles.kotak1}>
             <Text style={styles.buttonText }>{L=L+5}</Text>
         </View>
         <View style={styles.kotak1}>
             <Text style={styles.buttonText }>{L=L+5}</Text>
         </View>
</View>



</View>

        </View>
         
          
            
         
          


    <View style={styles.contopJenis}>
      <View style={styles.contjenis}>
       <Text style={styles.buttonText }>Diameter</Text>
       </View>   

      </View>
  <View style={styles.contopJenis}>

  <View style={styles.contjenis}>
       <View style={styles.kotak1}>
             <Text style={styles.buttonText }>{D=(16)}</Text>
         </View>
       <View style={styles.kotak1}>
             <Text style={styles.buttonText }>{D=D+1}</Text>
         </View>
       <View style={styles.kotak1}>
             <Text style={styles.buttonText }>{D=D+1}</Text>
         </View>
       <View style={styles.kotak1}>
             <Text style={styles.buttonText }>{D=D+1}</Text>
         </View>
    </View>

   </View>
  <View style={styles.contopJenis}> 
   <View style={styles.contjenis}>
       <View style={styles.kotak1}>
             <Text style={styles.buttonText }>{D=(20)}</Text>
         </View>
       <View style={styles.kotak1}>
             <Text style={styles.buttonText }>{D=D+1}</Text>
         </View>
       <View style={styles.kotak1}>
             <Text style={styles.buttonText }>{D=D+1}</Text>
         </View>
       <View style={styles.kotak1}>
             <Text style={styles.buttonText }>{D=D+1}</Text>
         </View>
       <View style={styles.kotak1}>
             <Text style={styles.buttonText }>{D=D+1}</Text>
         </View>
       <View style={styles.kotak1}>
             <Text style={styles.buttonText }>{D=D+1}</Text>
         </View>
       <View style={styles.kotak1}>
             <Text style={styles.buttonText }>{D=D+1}</Text>
         </View>
       <View style={styles.kotak1}>
             <Text style={styles.buttonText }>{D=D+1}</Text>
         </View>
       <View style={styles.kotak1}>
             <Text style={styles.buttonText }>{D=D+1}</Text>
         </View>

       <View style={styles.kotak1}>
             <Text style={styles.buttonText }>{D=D+1}</Text>
         </View>
    </View>

   </View>
  <View style={styles.contopJenis}> 
   <View style={styles.contjenis}>
       <View style={styles.kotak1}>
             <Text style={styles.buttonText }>{D=(30)}</Text>
         </View>
       <View style={styles.kotak1}>
             <Text style={styles.buttonText }>{D=D+1}</Text>
         </View>
       <View style={styles.kotak1}>
             <Text style={styles.buttonText }>{D=D+1}</Text>
         </View>
       <View style={styles.kotak1}>
             <Text style={styles.buttonText }>{D=D+1}</Text>
         </View>
       <View style={styles.kotak1}>
             <Text style={styles.buttonText }>{D=D+1}</Text>
         </View>
       <View style={styles.kotak1}>
             <Text style={styles.buttonText }>{D=D+1}</Text>
         </View>
       <View style={styles.kotak1}>
             <Text style={styles.buttonText }>{D=D+1}</Text>
         </View>
       <View style={styles.kotak1}>
             <Text style={styles.buttonText }>{D=D+1}</Text>
         </View>
       <View style={styles.kotak1}>
             <Text style={styles.buttonText }>{D=D+1}</Text>
         </View>

       <View style={styles.kotak1}>
             <Text style={styles.buttonText }>{D=D+1}</Text>
         </View>
    </View>

   </View>

  <View style={styles.contopJenis}> 
   <View style={styles.contjenis}>
       <View style={styles.kotak1}>
             <Text style={styles.buttonText }>{D=(40)}</Text>
         </View>
       <View style={styles.kotak1}>
             <Text style={styles.buttonText }>{D=D+1}</Text>
         </View>
       <View style={styles.kotak1}>
             <Text style={styles.buttonText }>{D=D+1}</Text>
         </View>
       <View style={styles.kotak1}>
             <Text style={styles.buttonText }>{D=D+1}</Text>
         </View>
    </View>

   </View>


      <View style={styles.spaceatas}></View>
      <View style={styles.contopJenis}>
      <View style={styles.contjenis}>
       <Text style={styles.buttonText }>Kraft</Text>
       </View>   
       <View style={styles.contjenis}>
       <Text style={styles.buttonText }>Medium</Text>
       </View>     

      </View>
      <View style={styles.contopJenis}>
          <View style={styles.contjenis}>
             <View style={styles.kotak1}>
                 <Text style={styles.buttonText }>{j="A"}</Text>
             </View>
             <View style={styles.kotak1}>
                 <Text style={styles.buttonText }>{j="Z"}</Text>
             </View>
             <View style={styles.kotak1}>
                 <Text style={styles.buttonText }>{j="H"}</Text>
             </View>
             <View style={styles.kotak1}>
                 <Text style={styles.buttonText }>{j="E"}</Text>
             </View>

          </View>


          <View style={styles.contjenis}>
             <View style={styles.kotak1}>
                 <Text style={styles.buttonText }>{j="I"}</Text>
             </View>
             <View style={styles.kotak1}>
                 <Text style={styles.buttonText }>{j="M"}</Text>
             </View>
             <View style={styles.kotak1}>
                 <Text style={styles.buttonText }>{j="S"}</Text>
             </View>
             <View style={styles.kotak1}>
                 <Text style={styles.buttonText }>{j="N"}</Text>
             </View>

          </View>

        </View>
        <View style={styles.contopJenis}>

             <View style={styles.contjenis}>
                <View style={styles.kotak1}>
                    <Text style={styles.buttonText }>{j="X"}</Text>
                </View>
                <View style={styles.kotak1}>
                    <Text style={styles.buttonText }>{j="F"}</Text>
                </View>
                <View style={styles.kotak1}>
                    <Text style={styles.buttonText }>{j="6"}</Text>
                </View>
                <View style={styles.kotak1}>
                    <Text style={styles.buttonText }>{j}</Text>
                </View>
        
             </View>

             <View style={styles.contjenis}>
                <View style={styles.kotak1}>
                    <Text style={styles.buttonText }>{j="X"}</Text>
                </View>
                <View style={styles.kotak1}>
                    <Text style={styles.buttonText }>{j="F"}</Text>
                </View>
                <View style={styles.kotak1}>
                    <Text style={styles.buttonText }>{j="6"}</Text>
                </View>
                <View style={styles.kotak1}>
                    <Text style={styles.buttonText }>{j}</Text>
                </View>
        </View>
   
      </View>


      <View style={styles.jenis}>
                 <TouchableOpacity
                  style={styles.substance}
                >
                  <Text> Grup </Text>
                </TouchableOpacity>
                 <TouchableOpacity
                  style={styles.substance}
                  onPress={()=>setGrup("A")}
                >
                  <Text >A</Text>
                </TouchableOpacity>
                 <TouchableOpacity
                  style={styles.substance}
                  onPress={()=>setGrup("B")}
                >
                  <Text >B</Text>
                </TouchableOpacity>

                 <TouchableOpacity
                  style={styles.substance}
                  onPress={()=>setGrup("C")}
                >
                  <Text >C</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.jenis}>
                 <TouchableOpacity
                  style={styles.substance}
                >
                  <Text> Lokasi </Text>
                </TouchableOpacity>
                 <TouchableOpacity
                  style={styles.substance}
                  onPress={()=>lokasi="DB"}
                >
                  <Text >DB</Text>
                </TouchableOpacity>
                 <TouchableOpacity
                  style={styles.substance}
                  onPress={()=>lokasi="BF"}
                >
                  <Text >BF</Text>
                </TouchableOpacity>

                 <TouchableOpacity
                  style={styles.substance}
                  onPress={()=>lokasi="CF"}
                >
                  <Text >CF</Text>
                </TouchableOpacity>
             </View>   
             <View style={styles.posButton}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={()=>submit()}
                >
                  <Text style={styles.textButton}>Tambah</Text>
                </TouchableOpacity>

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
      marginTop: 10
    },
    posTitle:{
      alignItems: 'center'
    },
    title:{
      fontSize : 18,
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
    input:{
      height : 30,
      borderBottomWgsmth:1,
      borderBottomColor : '#ffffff',
      backgroundColor: '#0066ff',
      color: 'white'
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
    },
    kotak1:{
      width:40,
      height:40,
      margin:4,
      borderRadius:12,
      backgroundColor: 'green',
      justifyContent:'center'
  
    },
    contjenis:{
      flex:4,
      width:"34%",
      margin:5,
      borderRadius:12,
      justifyContent:"center",
      flexDirection:"row"
    },
  
    contopJenis:{
      margin:0,
      flexDirection:"row",
      textAlign:"center",
      justifyContent:'center'
    },
    buttonjenis:{
      margin:3,
      fontSize:20,
      backgroundColor:"grey",
      alignContent:"center"
    },
    buttonText:{
      textAlign:"center",
      fontSize:22,
      justifyContent:'center'
    },
});
