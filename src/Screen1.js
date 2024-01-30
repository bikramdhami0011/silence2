import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
const Btn = Animatable.createAnimatableComponent(TouchableOpacity);
const Screen1 = () => {
  const navigation=useNavigation()
    const data=[
        {
            name:"Ghee",
            price:"Rs.100",
            item:"1",
            image:"../src/image/ghee.jpg"
        },
        {
            name:"potato",
            price:"Rs.100",
            item:"1",
            image:"../src/image/ghee.jpg"
        },
        {
            name:"Soyabean",
            price:"Rs.100",
            image:"../src/image/soyabean.jpg"
        }
    ]

  return (
    <View style={{display:"flex",justifyContent:"center",alignItems:"center",margin:"auto", }}>
      
      <FlatList style={{display:"flex"}} numColumns={2} data={data} renderItem={({item,index})=>{
         return<View style={{display:"flex",justifyContent:"center",alignItems:"center",gap:10,borderColor:"black", borderRadius:10, marginLeft:20, backgroundColor:"pink", marginTop:50,padding:10}}>
         <Image source={require("./image/ghee.jpg")} style={{height:100,width:100}}></Image>
         <Text> {item.name}</Text>
         <Text> {item.price}</Text>
         <Btn onPress={()=>{
           navigation.navigate("screen2",{item});
           console.log("this is item")
        }}>
         <Text style={{fontSize:30,fontWeight:"600"}} >Add Card</Text>

        </Btn>
         </View>  
      }}></FlatList>
    </View>
  )
}

export default Screen1

const styles = StyleSheet.create({})