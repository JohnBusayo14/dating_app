import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,ImageBackground, Image } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Navigation from '../components/Navigation';


const RandomCallScreen = ({navigation}) => {
    const [selectedOption, setSelectedOption] = useState('Women');
  const [showOptions, setShowOptions] = useState(false);
  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
  };

  return (
    <View className='bg-white h-screen flex flex-col' style={styles.container}>
      <View className=' mt-5 h-[10%] bg-slate-500' style={styles.header}>

      <View className='flex  flex-row justify-center items-center'>
      <Image
      source={require('../assets/vip.png')}
      style={styles.icon}
    />
  <Text className=' text-[12px]'>Become VIP</Text>
      </View>
     
        <TouchableOpacity className=' flex flex-row justify-center items-center'>
        <MaterialCommunityIcons name="bell-outline" color='black' size={20}  onPress={() => navigation.navigate('foryou')}/>
        <Text className='text-[10px]'>10</Text>
        <MaterialCommunityIcons name="star-circle" color='orange' size={28}  />

        </TouchableOpacity>
       
      </View>

     <View className=' w-full rounded-t-[35px] min-h-[75%] flex flex-col justify-start items-center bg-[#E9EAED]'>
     
     <TouchableOpacity style={styles.selectionContainer} onPress={toggleOptions}>
     <LinearGradient
      colors={['#FA457E', '#7B49FF']}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      style={styles.gradient}
      className=' w-[96px] h-[43px]  mx-auto bg-[#E9EAED] py-2 rounded-3xl flex flex-row justify-center items-center'
      onPress={() => navigation.navigate('payment')}
      >
      <View className='w-[18px] h-[18px] rounded-full bg-white flex flex-row justify-center items-center mx-1'>
      <MaterialCommunityIcons name="reload" color='orange' size={15}  />
      </View>
      <Text className=' text-white tex-[15px] font-[600] font-semibold' >{selectedOption}</Text>
      </LinearGradient>
     
    
     {showOptions && (
       <View className=' bg-[#47307A] mt-2 rounded-lg' style={styles.options}>
         <TouchableOpacity className=' w-full flex flex-row space-x-2' style={styles.option} onPress={() => selectOption('Both')}>
         <Image source={require('../assets/open.png')}  /> 
        <View className=' flex flex-col justify-center items-start'>
        <Text className=' text-white font-medium' style={styles.optionText}>Both</Text>
        <Text className=' text-[11px] text-white'>Free</Text>
        </View>
         </TouchableOpacity>
         <TouchableOpacity className=' w-full flex flex-row space-x-2' style={styles.option} onPress={() => selectOption('Woman')}>
         <Image source={require('../assets/open.png')}  /> 
        <View className=' flex flex-col justify-center items-start'>
        <Text className=' text-white font-medium' style={styles.optionText}>Woman</Text>
        <Text className=' text-[11px] text-white'>Free</Text>
        </View>
         </TouchableOpacity>
         <TouchableOpacity className=' w-full flex flex-row space-x-2' style={styles.option} onPress={() => selectOption('Man')}>
         <Image source={require('../assets/open.png')}  /> 
        <View className=' flex flex-col justify-center items-start'>
        <Text className=' text-white font-medium' style={styles.optionText}>Male</Text>
        <Text className=' text-[11px] text-white'>Free</Text>
        </View>
         </TouchableOpacity>
       </View>
     )}
     {showOptions && (
       <TouchableOpacity className='w-full h-fit bg-[#33196B] justify-around flex flex-row items-center' >
       <MaterialCommunityIcons name="star-circle" color='orange' size={20}  />

       <LinearGradient
      colors={['#FA457E', '#7B49FF']}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      style={styles.gradient}
      className=' w-[30%] mx-auto bg-black my-1 rounded-3xl flex flex-row justify-center items-center'
      onPress={() => navigation.navigate('payment')}
      >
      
      <Text className=' py-2' onPress={() => navigation.navigate('edit')}>Get Coins</Text>
      </LinearGradient>
  
       </TouchableOpacity>
     )}
   </TouchableOpacity>

  

     <View style={styles.avatarContainer}>
       <Image source={require('../assets/Vector.png')} style={styles.avatar} />

      <TouchableOpacity 
      onPress={() => navigation.navigate('videocall1')}>
      <LinearGradient
      colors={['#FA457E', '#7B49FF']}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      style={styles.gradient}
      className=' w-[282px] h-[43px]  mx-auto bg-[#E9EAED] py-2 rounded-3xl flex flex-row justify-center items-center'
     
      >
     
      <Text className=' text-white tex-[15px] font-[600]' >Tap to start random call</Text>
      </LinearGradient>
      
      
      </TouchableOpacity>
     </View>

    

     </View>

     <View style={styles.navigationContainer}>
        <Navigation navigation={navigation} />
      </View>  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  navigationContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    
  },
  vipText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffc107',
  },
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: 8,
  },
  selectionContainer: {
    width: '90%',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#E9EAED',
    borderRadius: 10,
    elevation: 3,
  },
  selectedOption: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6f42c1',
    marginBottom: 8,
  },
  options: {
    width: '100%',
  },
  option: {
    flexDirection: 'row',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#dee2e6',
  },
  optionText: {
    fontSize: 18,
  },
  optionCost: {
    fontSize: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },
  coinIcon: {
    width: 18,
    height: 18,
  },
  getCoinsButton: {
    marginTop: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
  },
  getCoinsText: {
    fontSize: 16,
    color: '#007bff',
  },
  avatarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 66,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#ced4da',
  },
  callButton: {
    width: '80%',
    paddingVertical: 16,
    backgroundColor: '#6610f2',
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 16,
  },
  callButtonText: {
    fontSize: 18,
    color: '#fff',
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#e9ecef',
  },
});

export default RandomCallScreen;
