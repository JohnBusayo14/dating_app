import React from 'react'
import { View,Text,Dimensions,StyleSheet,TouchableOpacity,Image ,TextInput, ScrollView} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ButtonComponent from '../components/ButtonComponent';

const Locatioin = ({navigation}) => {
    const { width,height } = Dimensions.get('window');
    const textSize = width * 0.06; // Adjust this factor as needed


    const navigateToScreen = () => {
      navigation.navigate('live');
    };

   

  return (
    <View className='mt-5  flex flex-col bg-[#fff]  items-center' style={{width:width, height:height}}>
    
   
    
    <View className='w-[90%] flex my-3  '>
    <Ionicons name="arrow-back" size={25} color="#4635E2" onPress={() => navigation.goBack()}/>
    </View> 
<View className=" w-[90%] h-full flex flex-col justify-center items-center mb-20 ">


<Text className=' font-bold text-[#33196B]' style={{fontSize:width*0.07}}>Location </Text>
<Text className=' pt-3' style={{fontSize:width*0.035}}>Let the app locate you to provide best</Text>
<Text className=' py-1 ' style={{fontSize:width*0.035}}>searched results around you</Text>

<View className='w-full flex flex-col my-5 justify-center items-center'>


<View className=' w-full '>
<Text className='text-[#33196B] text-base font-semibold'>Current Location</Text>
</View>

<View className=' w-full h-[60px] flex flex-row justify-between px-5 my-5 items-center rounded-3xl border border-2 border-[#A135DC]'>
    <TextInput
    style={styles.input}
    placeholder="Kenwood Place, Florida, US.."
    placeholderTextColor="#888"
  />

  <MaterialCommunityIcons name="crosshairs-gps" color='#645290' size={20} />
  </View>

    <View className=' w-full h-[60px] flex flex-row justify-between px-5 my-1 items-center rounded-3xl border border-2 border-[#A135DC]'>
    <TextInput
    style={styles.input}
    placeholder="Search New Location"
    placeholderTextColor="#888"
  />

  <MaterialCommunityIcons name="magnify" color='#645290' size={20} />
  </View>

<ButtonComponent 
title= "Continue"
onPress={navigateToScreen}
navigation={navigation}/>
    

</View>
</View>

    
   


    </View>
  )
}

export default Locatioin;

const styles = StyleSheet.create({
    button: {
      borderRadius: 35, // Adjust the border radius as needed
      overflow: 'hidden',
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 16,
      },
    gradient: {
      padding: 15,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });