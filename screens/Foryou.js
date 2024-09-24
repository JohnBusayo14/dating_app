import React from 'react'
import { View,Text, ScrollView, Image, ImageBackground, StyleSheet } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Foryou = ({navigation}) => {
  return (
    <View className=' w-full flex flex-col bg-white'>
    <ScrollView>
    <Image
    className=' my-3'
     source={require('../assets/rec.png')} // Replace with the path to your image
   />
    
   <View className=' w-full flex flex-row  justify-between items-center my-3'>
   <Text className=' font-semibold text-[#645290]'>In the spotlight</Text>
   <Text className=' font-semibold text-[#B33654]' >View all</Text>
   </View>

   <View className=' flex flex-row space-x-3'>
   <Image
   className=' my-3'
    source={require('../assets/Ellipse 444.png')} // Replace with the path to your image
  />

  <Image
  className=' my-3'
   source={require('../assets/Ellipse 445.png')} // Replace with the path to your image
 />

 <Image
 className=' my-3'
  source={require('../assets/Ellipse 446.png')} // Replace with the path to your image
/>
<Image
className=' my-3'
 source={require('../assets/Ellipse 444.png')} // Replace with the path to your image
/>

<Image
className=' my-3'
source={require('../assets/Ellipse 445.png')} // Replace with the path to your image
/>
<Image
className=' my-3'
 source={require('../assets/Ellipse 447.png')} // Replace with the path to your image
/>
<Image
className=' my-3'
 source={require('../assets/Ellipse 444.png')} // Replace with the path to your image
/>

   </View>

   <Text className=' font-semibold text-[#645290]'>For you</Text>

   <View className=' w-full flex flex-wrap flex-row '>
  
  
  
   <ImageBackground className='my-3 mx-3' source={require('../assets/boy2.jpeg')} style={styles.cardBackground}>
   <View style={styles.cardContent}>
   <Text style={styles.cardTitle}>Belle Benson,</Text>
   <View className=' flex flex-row justify-between items-center'>
   <Text style={styles.cardDescription}>28</Text>
   
 <View className='flex flex-row mt-2'>
 <MaterialCommunityIcons name="camera-account" color='#645290' size={20} />
 <Text className=' pl-1' style={styles.cardDescription}>john2</Text>
 </View>
   </View>
   </View>
 </ImageBackground>

    <ImageBackground className='my-3 mx-3' source={require('../assets/boy2.jpeg')} style={styles.cardBackground}>
    <View style={styles.cardContent}>
    <Text style={styles.cardTitle}>Belle Benson,</Text>
    <View className=' flex flex-row justify-between items-center'>
    <Text style={styles.cardDescription}>28</Text>
    
  <View className='flex flex-row mt-2'>
  <MaterialCommunityIcons name="camera-account" color='#645290' size={20} />
  <Text className=' pl-1' style={styles.cardDescription}>john2</Text>
  </View>
    </View>
    </View>
  </ImageBackground>

    <ImageBackground className='my-3 mx-3' source={require('../assets/boy2.jpeg')} style={styles.cardBackground}>
    <View style={styles.cardContent}>
    <Text style={styles.cardTitle}>Belle Benson,</Text>
    <View className=' flex flex-row justify-between items-center'>
    <Text style={styles.cardDescription}>28</Text>
    
  <View className='flex flex-row mt-2'>
  <MaterialCommunityIcons name="camera-account" color='#645290' size={20} />
  <Text className=' pl-1' style={styles.cardDescription}>john2</Text>
  </View>
    </View>
    </View>
  </ImageBackground>

  <ImageBackground className='my-3 mx-3' source={require('../assets/boy2.jpeg')} style={styles.cardBackground}>
    <View style={styles.cardContent}>
    <Text style={styles.cardTitle}>Belle Benson,</Text>
    <View className=' flex flex-row justify-between items-center'>
    <Text style={styles.cardDescription}>28</Text>
    
  <View className='flex flex-row mt-2'>
  <MaterialCommunityIcons name="camera-account" color='#645290' size={20} />
  <Text className=' pl-1' style={styles.cardDescription}>john2</Text>
  </View>
    </View>
    </View>
  </ImageBackground>

   </View>
    </ScrollView>
    </View>
  )
}

export default Foryou

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      padding: 10,
    },
    cardBackground: {
      width: 150,
      height: 200,
      borderRadius: 10,
      overflow: 'hidden',
      justifyContent: 'flex-end',
    },
    cardContent: {
      backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent background for text
      padding: 10,
    },
    cardTitle: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    cardDescription: {
      color: 'white',
      fontSize: 14,
    },
  });
  