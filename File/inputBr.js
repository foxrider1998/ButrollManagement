import React, { useState } from "react";
import { View,Modal, Text, TextInput, Button, TouchableOpacity, StyleSheet ,ImageBackground,Alert,Pressable} from "react-native";
import {dataRef} from '../data/References';

export default function InputBr({navigation, route}){

  const [modalVisible, setModalVisible] = useState(false);
  const [buttonA, setButtonA] = useState("#ccffff");
  const [buttonH, setButtonH] = useState("#ccffff");
  const [buttonF, setButtonF] = useState("#ccffff");
  const [button6, setButton6] = useState("#ccffff");
  const [buttonE, setButtonE] = useState("#ccffff");

  const [grupA, setGrupA] = useState("#ccffff");
  const [grupB, setGrupB] = useState("#ccffff");
  const [grupC, setGrupC] = useState("#ccffff");

  const [lokasiA, setLokasiA] = useState("#ccffff");
  const [lokasiB, setLokasiB] = useState("#ccffff");
  const [lokasiC, setLokasiC] = useState("#ccffff");

    const [gsm, setGsm] = useState("");
    const [diameter, setDiameter] = useState("");
    const [panjang, setPanjang] = useState("");
    const [lebar, setLebar] = useState("");
    const [grup, setGrup] = useState("");
    const [berat, setBerat] = useState("");
    const [lokasi, setLokasi] = useState("#ccffff");
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


// ButtonCondition(){

// }


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

 console.log(buttonA);

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
        <View style={styles.posTitle}>
          <Text style={styles.title}>Butroll Keluar</Text>
        </View>

          <View style={styles.contInput}>
            <View style={styles.jenis}>

              
                 <TouchableOpacity 
                  style={{borderRadius: 5,margin: 5,width: 40,height: 30,backgroundColor : buttonA,justifyContent : 'center',alignItems: 'center'  }}
                  onPress={()=>{setGsm(125)
                    if (buttonA=="red") {
                      setButtonA("#ccffff")
                    } else {
                      setButtonA("red")
                      setButtonH('#ccffff')
                      setButtonF('#ccffff')
                      setButton6('#ccffff')
                      setButtonE('#ccffff')
                    }
                  }
                    
                  }
                >
                  <Text >A/M</Text>
                </TouchableOpacity>
               

                <TouchableOpacity 
                  style={{borderRadius: 5,margin: 5,width: 40,height: 30,backgroundColor : buttonH,justifyContent : 'center',alignItems: 'center'  }}
                  onPress={()=>{setGsm(150)
                    if (buttonH=="red") {
                      setButtonH("#ccffff")
                    } else {
                      setButtonH("red")
                      setButtonA('#ccffff')
                      setButtonF('#ccffff')
                      setButton6('#ccffff')
                      setButtonE('#ccffff')
                    }
                  }
                    
                  }
                >
                  <Text >H/S</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                  style={{borderRadius: 5,margin: 5,width: 40,height: 30,backgroundColor : buttonF,justifyContent : 'center',alignItems: 'center'  }}
                  onPress={()=>{setGsm(200)
                    if (buttonF=="red") {
                      setButtonF("#ccffff")
                    } else {
                      setButtonF("red")
                      setButtonH('#ccffff')
                      setButtonA('#ccffff')
                      setButton6('#ccffff')
                      setButtonE('#ccffff')
                    }
                  }
                    
                  }
                >
                  <Text >F/N</Text>
                </TouchableOpacity>
       
            <TouchableOpacity 
                  style={{borderRadius: 5,margin: 5,width: 40,height: 30,backgroundColor : button6,justifyContent : 'center',alignItems: 'center'  }}
                  onPress={()=>{setGsm(125)
                    if (button6=="red") {
                      setButton6("#ccffff")
                    } else {
                      setButton6("red")
                      setButtonH('#ccffff')
                      setButtonF('#ccffff')
                      setButtonA('#ccffff')
                      setButtonE('#ccffff')
                    }
                  }
                    
                  }
                >
                  <Text >6</Text>
                </TouchableOpacity>
                </View>
         





            {/* <View style={styles.centeredView}> */}

{/* 
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Diameter dan Lebar</Text>
      </Pressable>
    </View>


 */}





              <View style={styles.jenis}>
                 <TouchableOpacity
                  style={styles.substance}
                >
                  <Text> Grup </Text>
                </TouchableOpacity>
                 <TouchableOpacity
                 style={{borderRadius: 5,margin: 5,width: 40,height: 30,backgroundColor : grupA,justifyContent : 'center',alignItems: 'center'  }}
                 onPress={()=>{setGrup("A")
                   if (grupA=="red") {
                     setGrupA("#ccffff")
                   } else {
                     setGrupA("red")
                     setGrupB('#ccffff')
                     setGrupC('#ccffff')
                   }
                 }}

                >
                  <Text >A</Text>
                </TouchableOpacity>
                 <TouchableOpacity
                   style={{borderRadius: 5,margin: 5,width: 40,height: 30,backgroundColor : grupB,justifyContent : 'center',alignItems: 'center'  }}
                   onPress={()=>{setGrup("B")
                     if (grupB=="red") {
                       setGrupB("#ccffff")
                     } else {
                       setGrupB("red")
                       setGrupA('#ccffff')
                       setGrupC('#ccffff')
                     }
                   }}
                >
                  <Text >B</Text>
                </TouchableOpacity>

                 <TouchableOpacity
                   style={{borderRadius: 5,margin: 5,width: 40,height: 30,backgroundColor : grupC,justifyContent : 'center',alignItems: 'center'  }}
                   onPress={()=>{setGrup("C")
                     if (grupC=="red") {
                       setGrupC("#ccffff")
                     } else {
                       setGrupC("red")
                       setGrupB('#ccffff')
                       setGrupA('#ccffff')
                     }
                   }}
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
                 style={{borderRadius: 5,margin: 5,width: 40,height: 30,backgroundColor : lokasiA,justifyContent : 'center',alignItems: 'center'  }}
                   onPress={()=>{setLokasi("DB")
                     if (lokasiC=="red") {
                       setLokasiC("#ccffff")
                     } else {
                       setLokasiA("red")
                       setLokasiB('#ccffff')
                       setLokasiC('#ccffff')
                     }
                   }}
                >
                  <Text >DB</Text>
                </TouchableOpacity>
                 <TouchableOpacity
                 style={{borderRadius: 5,margin: 5,width: 40,height: 30,backgroundColor : lokasiB,justifyContent : 'center',alignItems: 'center'  }}
                   onPress={()=>{setLokasi("BF")
                     if (lokasiB=="red") {
                       setLokasiB("#ccffff")
                     } else {
                       setLokasiB("red")
                       setLokasiC('#ccffff')
                       setLokasiA('#ccffff')
                     }
                   }}
                >
                  <Text >BF</Text>
                </TouchableOpacity>

                 <TouchableOpacity
                 style={{borderRadius: 5,margin: 5,width: 40,height: 30,backgroundColor : lokasiC,justifyContent : 'center',alignItems: 'center'  }}
                   onPress={()=>{setLokasi("CF")
                     if (lokasiC=="red") {
                       setLokasiC("#ccffff")
                     } else {
                       setLokasiC("red")
                       setLokasiB('#ccffff')
                       setLokasiA('#ccffff')
                     }
                   }}
                >
                  <Text >CF</Text>
                </TouchableOpacity>


            </View>
               <View style={styles.posInput}>
                <TextInput 
                  style={styles.input}
                  placeholder="Masukkan diameter"
                  placeholderTextColor="white"
                  onChangeText={(value)=>setDiameter(value)}
                  value={diameter}
                  keyboardType="numeric"
                />
            </View>

            <View style={styles.posInput}>
                <TextInput 
                  style={styles.input}
                  placeholder="Masukkan lebar"
                  placeholderTextColor="white"
                  onChangeText={(value)=>setLebar(value)}
                  value={lebar}
                  keyboardType="numeric"
                />
            </View>


             <View style={styles.posInput}>
                <Text>{(length(diameter,gsm)).toFixed(2)}</Text> 
            </View>

            <View style={styles.posInput}>
                <Text>{(((length(diameter,gsm))*lebar*gsm )/100000).toFixed(2)}</Text>
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
      marginTop: 40
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
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      margin: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },

    buttonOpen: {
      backgroundColor: "#ccffff",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "black",
      textAlign: "center",
      margin:3
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
      margin:3

    }
});
