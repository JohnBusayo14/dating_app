import React from 'react'
import { View, Text, StyleSheet,Dimensions,Image, TouchableOpacity, } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';


const Homescreen = ({navigation}) => {

    const { width,height } = Dimensions.get('window');
    const textSize = width * 0.06; // Adjust this factor as needed


  return (
    <View className=' flex-1 bg-white flex flex-col justify-between items-center' style={[ {width:width, height:height}]}>

    <View className=' flex-1 flex flex-row justify-center items-center w-full h-[90%]' style={styles.container}>
    <Image
     className='w-[90%]  h-[85%]'
      source={require('../assets/graphics.png')} // Replace with the path to your image
      style={styles.image}
    />
  </View>

  <TouchableOpacity className=' w-full h-[15%] flex flex-row justify-center items-center'
  onPress={() => navigation.navigate('intro')}>
 
  <Image
  className='  h-[20%]'
   source={require('../assets/get.png')} // Replace with the path to your image
   style={{width:width*0.35}}
 />
  </TouchableOpacity>
    
    </View>
  )
}

export default Homescreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    
  });