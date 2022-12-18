class KertasButton {
   inactive (){
    return (`borderRadius: 5,
    margin: 5,
    width: 40,
    height: 30,
    backgroundColor : '#ccffff',
    justifyContent : 'center',
    alignItems: 'center'`)
   }

   active (){
    return (`borderRadius: 5,
    margin: 5,
    width: 40,
    height: 30,
    backgroundColor : 'red',
    justifyContent : 'center',
    alignItems: 'center'`)
   }


}



export default  KertasButton();

{/* <TouchableOpacity 
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
</TouchableOpacity> */}
