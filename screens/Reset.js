import React from 'react'
import { View,Text,Dimensions,StyleSheet,TouchableOpacity,TextInput,Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';




const Reset = ({navigation}) => {
    const { width,height } = Dimensions.get('window');
    const textSize = width * 0.06; // Adjust this factor as needed


  return (
    <View className='mt-5 bg-[#fff] flex flex-col items-center' style={{width:width, height:height}}>
   
<View className=" w-[90%] h-full flex flex-col justify-start item-start mt-5 ">
<View className='w-full flex mb-3 '>
<Ionicons name="arrow-back" size={25} color="#4635E2" 
onPress={() => navigation.goBack()}/>
</View>

<View className='w-[80%] ml-7'>

<Text className=' font-medium pt-10' style={{fontSize:width*0.055}}>Reset Password</Text>
<Text className=' pt-7 leading-[15px]  text-[#120D26]' style={{fontSize:width*0.036}}>Please enter your email address </Text>
<Text className=' text-[#120D26] leading-[25px] ' style={{fontSize:width*0.036}}>to request a password reset</Text>

<View className='w-full flex flex-col justify-center items-center'>

    <View className=' w-[322px] h-[60px] rounded-[60px] flex flex-row justify-start px-5 my-6 items-center border-2 border-[#A135DC]'>
    <MaterialCommunityIcons name="email" color='#33196B' size={20} />

    <TextInput
    style={styles.input}
    placeholder="example123@gmail.com"
    placeholderTextColor="#888"
    underlineColorAndroid="transparent"
  />

    </View>

    <TouchableOpacity className=' my-4' style={[styles.button,{width:'212px',height:'35px'}]}
    onPress={() => navigation.navigate('location')}>
      <LinearGradient
        colors={['#FA457E', '#7B49FF']}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradient}
        className=' w-[212px] h-[65px] rounded-[80px] bg-black flex flex-row justify-end items-center'
      >
       <View className='w-full flex flex-row justify-between items-center'>
  
       <Text className='py-1 pl-14 text-lg' style={styles.buttonText} >SEND</Text>
       <View className='w-6 h-6 rounded-full justify-center items-center bg-[#481265]'>
       <Ionicons name="arrow-forward" size={18} color="#fff" />
       </View>
       
       </View>
      </LinearGradient>
    </TouchableOpacity>
</View>
</View>
</View>


    </View>
  )
}

export default Reset

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
    input: {
      width: '80%',
      height: 40,
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 5,
      paddingLeft: 10,
      paddingRight: 10,
      fontSize:18,
      
    },
  });