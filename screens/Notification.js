import React ,{useState}from 'react'
import {View,Text,Dimensions, ScrollView, StyleSheet,} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Navigation from '../components/Navigation';


const Notification = ({navigation}) => {
    const { width } = Dimensions.get('window');
    const textSize = width * 0.06; // Adjust this factor as needed
    

  return (
   <View className='bg-white h-screen ' style={{width:width}}>
    <LinearGradient
      colors={['#97ECFF','#FFFFFF' ]}
      locations={[0, 0.2]}
      style={{flex:1}}
      className=''
    >
    <View className='w-[90%] mx-auto'>
    
    <View className='w-full mt-10 flex flex-row justify-between items-center my-10'>
    <MaterialCommunityIcons name="arrow-left-thin" color='#33196B' size={25} 
    onPress={()=> navigation.goBack()}/>
    
    <Text className=' text-[25px] font-[500]'>Notification</Text>
    <MaterialCommunityIcons name="dots-vertical" color='#33196B' size={25} />
    </View>  

    <ScrollView 
    showsVerticalScrollIndicator={false} // Hide vertical scroll indicator
  
    className='w-full h-fit mb-20 space-y-2 '>
    
   <View className='w-full flex flex-row  bg-[#f0efeb] rounded-md' >
   <View className=' w-[20%] h-24  flex flex-row justify-center '>
   <View className=' w-8 h-8 rounded-md bg-[#596E79] mt-2'>
   </View>
   </View>

<View className=' w-full'>
<View className=' w-[70%]  pl-2 flex flex-col '>
<Text className=' text-xs text-[#6B6B6B]'>5h ago</Text>
<Text className='font-bold text-[16px] text-[#000000] py-3'>Hey, dont forget to verify your email</Text>
<Text className='text-[#6B6B6B] text-[12px] py-2 leading-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...</Text>

</View>
</View>

   </View>
 
   <View className='w-full flex flex-row  bg-[#f0efeb] rounded-md' >
   <View className=' w-[20%] h-24  flex flex-row justify-center '>
   <View className=' w-8 h-8 rounded-md bg-[#596E79] mt-2'>
   </View>
   </View>

<View className=' w-full'>
<View className=' w-[70%]  pl-2 flex flex-col '>
<Text className=' text-xs text-[#6B6B6B]'>5h ago</Text>
<Text className='font-bold text-[16px] text-[#000000] py-3'>Hey, dont forget to verify your email</Text>
<Text className='text-[#6B6B6B] text-[12px] py-2 leading-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...</Text>

</View>
</View>

   </View>

   <View className='w-full flex flex-row  bg-[#f0efeb] rounded-md' >
   <View className=' w-[20%] h-24  flex flex-row justify-center '>
   <View className=' w-8 h-8 rounded-md bg-[#596E79] mt-2'>
   </View>
   </View>

<View className=' w-full'>
<View className=' w-[70%]  pl-2 flex flex-col '>
<Text className=' text-xs text-[#6B6B6B]'>5h ago</Text>
<Text className='font-bold text-[16px] text-[#000000] py-3'>Hey, dont forget to verify your email</Text>
<Text className='text-[#6B6B6B] text-[12px] py-2 leading-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...</Text>

</View>
</View>

   </View>
   <View className='w-full flex flex-row ' >
   <View className=' w-[20%] h-24  flex flex-row justify-center '>
   <View className=' w-8 h-8 rounded-md bg-[#E7E7E7] mt-2'>
   </View>
   </View>

<View className=' w-full'>
<View className=' w-[70%]  pl-2 flex flex-col '>
<Text className=' text-xs text-[#6B6B6B]'>5h ago</Text>
<Text className='font-bold text-[16px] text-[#000000] py-3'>Hey, dont forget to verify your email</Text>
<Text className='text-[#6B6B6B] text-[12px] py-2 leading-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...</Text>

</View>
</View>

   </View>

   <View className='w-full flex flex-row  ' >
   <View className=' w-[20%] h-24  flex flex-row justify-center '>
   <View className=' w-8 h-8 rounded-md bg-[#591f0a] mt-2'>
   </View>
   </View>

<View className=' w-full'>
<View className=' w-[70%]  pl-2 flex flex-col '>
<Text className=' text-xs text-[#6B6B6B]'>5h ago</Text>
<Text className='font-bold text-[16px] text-[#000000] py-3'>Hey, dont forget to verify your email</Text>
<Text className='text-[#6B6B6B] text-[12px] py-2 leading-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...</Text>

</View>
</View>

   </View>
   <View className='w-full flex flex-row  ' >
   <View className=' w-[20%] h-24  flex flex-row justify-center '>
   <View className=' w-8 h-8 rounded-md bg-[#f4f1de] mt-2'>
   </View>
   </View>

<View className=' w-full'>
<View className=' w-[70%]  pl-2 flex flex-col '>
<Text className=' text-xs text-[#6B6B6B]'>5h ago</Text>
<Text className='font-bold text-[16px] text-[#000000] py-3'>Hey, dont forget to verify your email</Text>
<Text className='text-[#6B6B6B] text-[12px] py-2 leading-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...</Text>

</View>
</View>

   </View>

    </ScrollView>



    </View>

    </LinearGradient>


    <View style={styles.navigationContainer}>
        <Navigation navigation={navigation} />
      </View>
   </View>
  )
}

export default Notification

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    checkboxContainer: {
      marginRight: 20,
    },
    textContainer: {
      flex: 1,
    },
    text: {
      fontSize: 16,
      marginBottom: 5,
    },
    navigationContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  });