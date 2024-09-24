import React from 'react'
import { View,Text,Dimensions,StyleSheet,TouchableOpacity,Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';

const Verify = ({navigation}) => {
    const { width,height } = Dimensions.get('window');
    const textSize = width * 0.06; // Adjust this factor as needed


  return (
    <View className='mt-5  flex flex-col items-center' style={{width:width, height:height}}>
    <View className='w-[90%] flex my-3  '>
    <Ionicons name="arrow-back" size={25} color="#4635E2" onPress={() => navigation.goBack()}/>
    </View> 
<View className=" w-[90%] h-full flex flex-col justify-center items-center ">


<Text className=' font-bold text-[#33196B]' style={{fontSize:width*0.07}}>Verify </Text>
<Text className=' pt-4' style={{fontSize:width*0.025}}>Please enter the 4-digit code  </Text>
<Text className=' pb-4 ' style={{fontSize:width*0.025}}>sent to your number</Text>

<View className='w-full flex flex-col justify-center items-center'>

<View className='w-full flex flex-row justify-around items-center my-2'>
<View className='w-16 h-16 border border-2 border-[#83659D] rounded-full flex flex-col justify-center items-center'>
<Text className='font-medium text-lg'>4</Text>
</View>


<View className='w-16 h-16 border border-[2px] border-[#83659D] rounded-full flex flex-col justify-center items-center'>
<Text className='font-medium text-lg'>5</Text>
</View>


<View className='w-16 h-16 border border-2 border-[#83659D] rounded-full flex flex-col justify-center items-center'>
<Text className='font-medium text-lg'>8</Text>
</View>

<View className='w-16 h-16 border border-2 border-[#83659D] rounded-full flex flex-col justify-center items-center'>
<Text className='font-medium text-lg'>1</Text>
</View>
</View>

    <TouchableOpacity className=' my-5' style={[styles.button,{width:width*0.55}]}>
      <LinearGradient
        colors={['#FA457E', '#7B49FF']}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradient}
        className=' w-full bg-black flex flex-row justify-end items-center'
      >
       <Text className='py-1 text-lg' style={styles.buttonText} >Submit</Text>
      </LinearGradient>
    </TouchableOpacity>

    <Text className='text-[#33196B] font-bold text-lg'>Resend OTP</Text>
</View>
</View>


    </View>
  )
}

export default Verify;

const styles = StyleSheet.create({
    button: {
      borderRadius: 35, // Adjust the border radius as needed
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