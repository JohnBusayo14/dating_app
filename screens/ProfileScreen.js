import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Avatar, NativeBaseProvider } from "native-base";
import Navigation from '../components/Navigation';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
    <ScrollView >
      <LinearGradient colors={['#47307A', '#8258E0']}  className=' rounded-b-[20px]'>
        <View style={styles.headerContent} className=' rounded-b-[20px] bg-[#2e1464] h-[80px] pt-5 mb-2'>
          <TouchableOpacity style={styles.backButton} className='flex flex-row gap-2'>
            <Icon name="arrow-back" size={24} color="#4635E2" onPress={() => navigation.goBack()} />
            <Text style={styles.username}>saomeei43543</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.menuButton} className='flex flex-row'>
            <View className='px-2 h-[26px] border-2 border-[#E0DFDF] rounded-[20px] items-center justify-center'>
            <Text className='text-white'>follow</Text>
            </View>
            <Icon name="more-vert" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        <View  className='flex flex-col w-full items-center'>

        <View className='flex flex-row items-center gap-3'>
        <View className='h-[30px] w-[30px] bg-white rounded-full justify-center items-center'>
        <Icon name="settings" size={24} color="gray"  onPress={()=>navigation.navigate('prefrence')}  />
        </View>
        <Avatar bg="amber.500" source={{
          uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        }} size="lg">
            NB
            <Avatar.Badge bg="green.500" />
          </Avatar>
        <View className='h-[30px] w-[30px] bg-white rounded-full justify-center items-center'>
        <Icon name="edit" size={24} color="gray" onPress={()=>navigation.navigate('edit2')} />
        </View>
        </View>
        <Text style={styles.name} className='underline py-1'>Saomeei 90</Text>
        <Text style={styles.bio} className='underline'>USA</Text>
        <Text className='font-[400] text-[10px] leading-[20] text-white pt-1'>Add bio</Text>
        </View>
        <View style={styles.stats} className='bg-[#8770B9] h-[35px] rounded-[31px]'>
          <View className=' flex flex-row gap-2'>
          <Text style={styles.statItem}>292</Text>
          <Text style={styles.statItem}>Following</Text>
          </View>
          <View className='w-[2px] h-4 bg-[#fff] mx-3'></View>
          <View className=' flex flex-row gap-2'>
          <Text style={styles.statItem}>13</Text>
          <Text style={styles.statItem}>Followers</Text>
          </View>
        </View>



        <View  className=' w-[90%] mx-auto bg-transparent border-b-[1px] border-[#D3D3D3] h-[35px] mt-1 flex flex-row justify-between items-center'>
       <View className='flex flex-row items-center gap-2'>
       <Image source={require('../assets/vip.png')}   />
       <Text className='text-[#FFF176] text-[10px] font-[600]'>Become VIP</Text>
       </View>
       
       <Image source={require('../assets/Vector.png')}  />
       
      </View>
      <View  className=' w-[90%] mx-auto bg-transparent border-b-[1px] border-[#D3D3D3] h-[35px] mt-1 flex flex-row justify-between items-center'>
      <View className='flex flex-row items-center gap-2'>
       <Image source={require('../assets/coin.png')}   />
       <Text className='text-[#FFf] text-[10px] font-[600]'>coins</Text>
       </View>
       
       <Image source={require('../assets/Vector.png')}  />
       
      </View>
      <View  className=' w-[90%] mx-auto bg-transparent border-b-[1px] border-[#D3D3D3] h-[35px] mt-1 flex flex-row justify-between items-center mb-4'>
      <View className='flex flex-row items-center gap-2'>
      <Image source={require('../assets/gift.png')}   />
      <Text className=' text-[#fff] text-[10px] font-[600]'>Gifts</Text>
      </View>
      
      <Image source={require('../assets/Vector.png')}  />
      
     </View>


      </LinearGradient>
      <View style={styles.body}>
        <Text className='text-center font-[600] text-[12px] text-white'>STORIES</Text>
        <View style={styles.stories}>
          <Image source={require('../assets/profile.png')} style={styles.storyImage} />
        </View>
      
      </View>
     
    </ScrollView>
    <View style={styles.navigationContainer}>
    <Navigation navigation={navigation} />
  </View> 
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1e4c',
  },
  header: {
    padding: 20,
  },
  navigationContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButton: {
    padding: 10,
  },
  menuButton: {
    padding: 10,
  },
  username: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#fff',
  },
  profileDetails: {
    marginLeft: 20,
  },
  name: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  bio: {
    color: '#fff',
    fontSize: 14,
    marginTop: 5,
  },
  status: {
    color: '#fff',
    fontSize: 12,
    marginTop: 5,
    fontStyle: 'italic',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  statItem: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
  cameraButton: {
    padding: 10,
    backgroundColor: '#4a4ea1',
    borderRadius: 20,
  },
  body: {
    padding: 20,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  stories: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#fff',
  },
  photos: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  photo: {
    width: '48%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default ProfileScreen
