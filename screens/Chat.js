import React from 'react'
import {View,Text,Dimensions, ScrollView, StyleSheet,Image,TextInput} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Chat = () => {
    const { width,height } = Dimensions.get('window');
    const textSize = width * 0.06; // Adjust this factor as needed



  return (
    <View className='bg-white  flex flex-col  ' style={{width:width, height:height}}>
    <LinearGradient
    colors={['rgba(151, 236, 255, 0.5)','rgba(255, 255, 255, 0.4)' ]} // Adjust the opacity as needed
      style={{flex:1}}
      className=' w-full flex flex-col items-center justify-start'
    >
  <View className=' w-[90%] mx-auto flex flex-col items-center mt-10 mb-3'>
  
 <View className=' w-full flex flex-col justify-start items-start'>
 <View className=' w-full flex flex-row justify-between items-center'>
 <Text className='text-[25px] font-[500] text-black'>Chat</Text>
 <MaterialCommunityIcons name="bell" color='#33196B' size={20} />
 </View>
 <Text className=' text-sm font-medium pt-2 text-[#47307A]'>Live and trending</Text>
 </View>

  </View>

  <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false} // Hide scroll indicator line
      contentContainerStyle={styles.scrollViewContent}
    >
    <Image
    source={require('../assets/Re4.png')} // Replace with your image URL
    style={[styles.image ,{width:width*0.19, height:height*0.12}]}
  />
  <Image
  source={require('../assets/Re3.png')} // Replace with your image URL
  style={[styles.image ,{width:width*0.19, height:height*0.12}]}
  />
  <Image
  source={require('../assets/Re2.png')} // Replace with your image URL
  style={[styles.image ,{width:width*0.19, height:height*0.12}]}
  />
  <Image
  source={require('../assets/Re1.png')} // Replace with your image URL
  style={[styles.image ,{width:width*0.19, height:height*0.12}]}
  />
  <Image
  source={require('../assets/Re4.png')} // Replace with your image URL
  style={[styles.image ,{width:width*0.19, height:height*0.12}]}
  />
      {/* Add more cards as needed */}
    </ScrollView>
    
    <View className=' w-full h-[60px] flex flex-row justify-between px-5  items-center rounded-3xl border border-2 border-[#A135DC]'>
    <TextInput
    style={styles.input}
    placeholder="Password"
    placeholderTextColor="#888"
  />

  <MaterialCommunityIcons name="bell" color='#33196B' size={20} />
  </View>
   

   </LinearGradient>
   </View>
  )
}

export default Chat

const styles = StyleSheet.create({
    scrollViewContent: {
      flexDirection: 'row', // Align cards horizontally
      paddingHorizontal: 10, // Add padding to the left and right to center the content
    },
    image: {
        width: 200,
        height: 150,
        borderRadius: 10,
        marginHorizontal: 5, // Add some spacing between images
      },
  });