import React from 'react'
import { View,Text,StyleSheet,Image , Dimensions,TouchableOpacity} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient';



const Introscreen = ({navigation,title}) => {
    const { width,height } = Dimensions.get('window');
    const textSize = width * 0.08; // Adjust this factor as needed

  return (
   <View className=' flex-1 flex flex-col bg-white justify-between  items-center' style={{width:width, height:height}}>
  
  
   <View className=' w-full h-[85%] flex flex-col justify-end items-center'>
  
  <Text className=' font-bold py-3 text-[#8D49EE]' style={{fontSize:textSize}}>Connect friends easily & quickly</Text>

  <Image
    className=' w-[90%] h-[73%]'
     source={require('../assets/graphics.png')} // Replace with the path to your image
   />
   </View>

   <TouchableOpacity className=' mb-5' style={styles.button}
   onPress={() => navigation.navigate('login')}>
      <LinearGradient
        colors={['#FA457E', '#7B49FF']}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
       className='w-[212px] h-[65px] rounded-[80px] flex justify-center items-center'
      >
        <Text className=' px-3' style={styles.buttonText} >Start Chatting</Text>
      </LinearGradient>
    </TouchableOpacity>


   </View>
  )
}

export default Introscreen

const styles = StyleSheet.create({
    button: {
      borderRadius: 20, // Adjust the border radius as needed
      overflow: 'hidden',
    },
    gradient: {
      padding: 15,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });