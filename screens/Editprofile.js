import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Editprofile = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <LinearGradient colors={['#47307A', '#8258E0']} style={styles.header} className=' rounded-b-[20px]'>
        <View style={styles.headerContent}>
          <TouchableOpacity style={styles.backButton} className='flex flex-row gap-2'>
            <Icon name="arrow-back" size={24} color="#4635E2" onPress={() => navigation.goBack()}/>
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
        <Image source={require('../assets/gift.png')}  />
        </View>
        <Image source={require('../assets/profile.png')} style={styles.profileImage} />
        <View className='h-[30px] w-[30px] bg-white rounded-full justify-center items-center'>
        <Image source={require('../assets/chats.png')}  /></View>
        </View>
        <Text style={styles.name} className='underline py-2'>Saomeei 90</Text>
        <Text style={styles.bio} className='underline'>Fitness</Text>
        <Text className='font-[400] text-[10px] leading-[20] text-white pt-2'>I'll like when I like not when others like me to like</Text>
        </View>
        <View style={styles.stats} className='bg-[#8770B9] h-[35px] rounded-[31px]'>
          <View className=' flex flex-row gap-2'>
          <Text style={styles.statItem}>292</Text>
          <Text style={styles.statItem}>Following</Text>
          </View>
          <TouchableOpacity className='w-[55px] h-[55px] bg-[#81CBC2] rounded-full flex justify-center items-center border-[4px] border-[#D9D9D9]'>
            <Icon name="photo-camera" size={24} color="#fff" />
          </TouchableOpacity>
          <View className=' flex flex-row gap-2'>
          <Text style={styles.statItem}>13</Text>
          <Text style={styles.statItem}>Followers</Text>
          </View>
        </View>
      </LinearGradient>
      <View style={styles.body}>
        <Text className='text-center font-[600] text-[12px] text-white'>STORIES</Text>
        <View style={styles.stories}>
          <Image source={require('../assets/profile.png')} style={styles.storyImage} />
        </View>
        <Text className='text-center font-[600] text-[12px] text-white py-2'>PHOTOS</Text>
        <View style={styles.photos}>
          <Image source={require('../assets/videocall3.jpeg')} style={styles.photo} />
          <Image source={require('../assets/photo1.jpeg')} style={styles.photo} />
          <Image source={require('../assets/photo2.webp')} style={styles.photo} />
          <Image source={require('../assets/photo3.jpeg')} style={styles.photo} />
          <Image source={require('../assets/photo4.jpeg')} style={styles.photo} />
          <Image source={require('../assets/photo2.webp')} style={styles.photo} />
          <Image source={require('../assets/videocall3.jpeg')} style={styles.photo} />
          <Image source={require('../assets/photo1.jpeg')} style={styles.photo} />
          <Image source={require('../assets/photo2.webp')} style={styles.photo} />
          <Image source={require('../assets/photo3.jpeg')} style={styles.photo} />
          <Image source={require('../assets/photo4.jpeg')} style={styles.photo} />
          <Image source={require('../assets/photo2.webp')} style={styles.photo} />
        </View>
      </View>
    </ScrollView>
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
    justifyContent: 'space-around',
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

export default Editprofile;
