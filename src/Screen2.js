import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable';

const Btn = Animatable.createAnimatableComponent(TouchableOpacity);
const Screen2 = () => {
    const route=useRoute();
    console.log(route.params.item)
    const item=route.params.item;

  return (
    <View style={{display:"flex",flex:1, flexDirection:"column"}}>
      <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",margin:2,}}>
      <Text>Menu</Text>
      <Text>option</Text>
      </View>
      <Animatable.View style={{display:"flex",flex:1,justifyContent:"flex-start",alignItems:"center",marginTop:100,backgroundColor:"pink",borderTopLeftRadius:20,borderTopRightRadius:20}} animation={"zoomInUp"} duration={1000} iterationCount={1}>
       <Image source={require("./image/ghee.jpg")} height={100} width={100} style={{objectFit:"cover",borderRadius:150, borderColor:"black"}}></Image>
       <Text style={{fontSize:30,fontWeight:"800"}}>{item.name}</Text>
       <Text style={{fontSize:30,fontWeight:"800"}}>{item.price}</Text>
      </Animatable.View>
    </View>
  )
}

export default Screen2

const styles = StyleSheet.create({})