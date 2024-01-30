import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import * as Animatable from 'react-native-animatable';
const Home = () => {
  const [visible,setvisible]=useState(false);
  const MyComp=()=>{
    return <View >
    <View style={{backgroundColor:"blue",height:400,width:"100%",position:"absolute",bottom:0,borderTopLeftRadius:400}}>
    <TouchableOpacity onPress={()=>{
      setvisible(false)
    }} style={{width:80,right:0,position:"absolute",}}>
     <Text style={{color:"white",fontSize:25}}>Cross</Text>
    </TouchableOpacity>
    <Animatable.View animation={"zoomInUp"} duration={1000} style={{backgroundColor:"white",width:"65%",position:"absolute",right:0,borderRadius:50,height:80,top:75}}>
     </Animatable.View>
     <Animatable.View  animation={"zoomInUp"} duration={600}  style={{backgroundColor:"white",width:"55%",position:"absolute",right:0,borderRadius:50,height:80,top:170}}>
     </Animatable.View>
     <Animatable.View  animation={"zoomInUp"} duration={500}  style={{backgroundColor:"white",width:"40%",position:"absolute",right:0,borderRadius:50,height:80,top:260}}>
     </Animatable.View>
    </View>
     </View>
  }
  const data = [
    {
      name: 'bikram',
      age: 22,
      email: 'bikram@gmail.com',
      src: require('./image/ghee.jpg'),
    },
    {
      name: 'bikram',
      age: 22,
      email: 'bikram@gmail.com',
      src: require('./image/potato.jpg'),
    },
    {
      name: 'bikram',
      age: 22,
      email: 'bikram@gmail.com',
      src: require('./image/soyabean.png'),
    },
    {
      name: 'bikram',
      age: 22,
      email: 'bikram@gmail.com',
      src: require('./image/ghee.jpg'),
    },
    {
      name: 'bikram',
      age: 22,
      email: 'bikram@gmail.com',
      src: require('./image/potato.jpg'),
    },
  ];
  return (
    <View>
      <View
        style={{
          backgroundColor: 'blue',
          display: 'flex',
          position: 'absolute',
          width: '100%',

          height: 300,
          borderBottomLeftRadius: 40,
          padding: 4,
          borderBottomRightRadius: 40,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: 'blue',
          }}>
          <Text style={{color: 'white', fontSize: 24, fontWeight: '600'}}>
            Menu
          </Text>
          <Text style={{color: 'white', fontSize: 24, fontWeight: '600'}}>
            Demo App
          </Text>
          <Image
            source={require('./image/ghee.jpg')}
            style={{
              height: 50,
              width: 50,
              borderRadius: 100,
              backgroundColor: 'blue',
            }}
            height={50}
            width={50}></Image>
        </View>

        <View style={{display:"flex",justifyContent:"center",alignItems:"center",bottom:0, marginTop:60}}>
          <Text
            style={{
              color: 'white',
              fontSize: 24,
              fontWeight: '600',
              justifyContent: 'flex-end',
            }}>
            Good Evening Bikram
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 24,
              fontWeight: '600',
              justifyContent: 'flex-end',
            }}>
            Here is Your Activity
          </Text>
        </View>
      </View>
      <FlatList
        style={{height: '70%', bottom: 10, marginTop: 200}}
        data={data}
        renderItem={({item, index}) => {
          return (
            <Animatable.View
             animation={"zoomInUp"}
             duration={1000*index}
              style={{
                height:100,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: "center",
                width: '100%',
                backgroundColor: 'lightgreen',
                borderRadius: 50,
                margin:4,
                
              }}>
              <View>
                <Image
                  source={item.src}
                  height={80}
                  width={80}
                  style={{
                    height: 60,
                    width: '100%',
                    margin: 5,
                    borderRadius: 100,
                  }}></Image>
                <Text>{item.email}</Text>
              </View>
              <Text>{item.age}</Text>
              <Text>{item.name}</Text>
            </Animatable.View>
          );
        }}></FlatList>
    <TouchableOpacity onPress={()=>{
        setvisible(true);
    }} style={{backgroundColor:"blue",}}>
    <Text style={{display:"flex",color:"white",fontWeight:"800",position:"absolute",fontSize:80,bottom:4,right:0,padding:10,marginBottom:18,marginRight:4,borderRadius:600}}>+</Text>
    </TouchableOpacity>

     <View>
         {
          visible?<MyComp></MyComp>:null
         }
     </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
