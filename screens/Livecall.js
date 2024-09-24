import React from 'react';
import { View, Text, Image, TextInput,Platform, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const chatMessages = [
  { id: '1', user: '@Johnson joy', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
  { id: '2', user: '@Johnson joy', message: 'Hi micale john' },
  { id: '3', user: '@Johnson joy', message: 'Hi micale john' },
  { id: '4', user: '@Henry', message: 'Hi!' },
  { id: '5', user: '@Johnson joy', message: 'How are you?' },
  { id: '6', user: '@Henry', message: 'I\'m good! How are you?' },
];

const Livecall = ({navigation}) => {
  return (
    <View className='mt-0' style={styles.container}>
      <Image source={require('../assets/cimb.jpg')} style={styles.streamImage} />
      
      <View className='w-full mt-5 flex flex-row justify-around items-center ' style={styles.overlay}>
       
      <View className=' flex flex-col justify-start items-start'>
      <View className=' pl-9 flex flex-row space-x-3 justify-center items-center' style={styles.userInfo}>
      <View>
      <Text style={styles.userName}>@Micale clarke</Text>
      <Text style={styles.userStatus}>Live now, like you do</Text>
      <Text style={styles.viewers}>20 Viewers</Text>
      </View>
       <TouchableOpacity className='h-8 flex flex-row justify-center items-center'  style={styles.followButton}>
         <Text className=' px-5' style={styles.followButtonText}>Follow</Text>
       </TouchableOpacity>
       </View>

       <View className=' flex flex-row items-center mt-1' onPress={() => navigation.goBack()}>
       <View className=' w-20 h-10 rounded-md flex flex-row justify-end items-center bg-slate-500'>
          <Text className=' text-white px-2'>15k</Text>
          </View>
          <View className=' flex flex-row  bg-slate-500 rounded-md mx-2 w-20 h-10 justify-center items-center'>
          <Image source={require('../assets/star.png')} style={styles.icon} />
<Text>50</Text>
          </View>
       
       </View>

      </View>

       <TouchableOpacity className='w-[40px] h-[30px] bg-red-800'  onPress={() => navigation.navigate('live')} >
       <MaterialCommunityIcons name="window-close" color='#ffffff' size={25}/>
       </TouchableOpacity> 
 
      </View>

     

      <ScrollView style={styles.chatContainer}>
        {chatMessages.map((msg) => (
          <View key={msg.id} style={styles.chatMessage}>
            <Text style={styles.chatUser}>{msg.user}</Text>
            <Text style={styles.chatText}>{msg.message}</Text>
          </View>
        ))}
      </ScrollView>

      <View className=' flex-1 w-full' >
        <View style={styles.inputContainer} className=' w-[70%]  flex flex-row rounded-2xl justify-around items-center'>
        <TextInput  className=' w-[50%] my-3' placeholder="Say Something..." 
        placeholderTextColor="#FFFFFF" />
        <MaterialCommunityIcons name="send" color='#ffffff' size={25}  />

        </View>
      
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E',
  },
  streamImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
  },
  overlay: {
    position: 'absolute',
    top: 16,
    left: 16,
    right: 16,
  },
  userInfo: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 8,
    padding: 8,
  },
  userName: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  userStatus: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  viewers: {
    color: '#FFFFFF',
    fontSize: 12,
    marginVertical: 4,
  },
  followButton: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
   
  },
  followButtonText: {
    color: 'red',
    fontSize: 12,
    fontWeight: 'bold',
  },
  closeButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 16,
    padding: 4,
  },
  closeButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  stats: {
    position: 'absolute',
    top: 16,
    right: 16,
    alignItems: 'center',
  },
  stat: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: '#FFFFFF',
    borderRadius: 8,
    padding: 8,
    marginVertical: 4,
  },
  chatContainer: {
    position: 'absolute',
    bottom: 80,
    left: 16,
    right: 16,
    maxHeight: '40%',
  },
  chatMessage: {
    marginBottom: 8,
  },
  chatUser: {
    color: '#B49C5D',
    fontWeight: 'bold',
  },
  chatText: {
    color: '#FFFFFF',
  },
  inputContainer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    paddingHorizontal: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // fallback for blur effect
    ...(Platform.OS === 'ios' && { backdropFilter: 'blur(10px)' }),
  },
  input: {
    flex: 1,
    color: '#FFFFFF',
    paddingVertical: 8,
  },
  sendButton: {
    borderRadius: 16,
    padding: 8,
    marginLeft: 8,
  },
  sendButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  iconButton: {
    padding: 8,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default Livecall;
