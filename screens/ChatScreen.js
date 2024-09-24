import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, FlatList, StatusBar } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const messages = [
  { id: '2', name: 'Jhon Abraham', time: 'Today, 07:30 AM', avatar: require('../assets/call2.png') },
  { id: '3', name: 'Sabila Sayma', time: 'Yesterday, 07:35 PM', avatar: require('../assets/call3.png') },
  { id: '4', name: 'Alex Linderson', time: 'Monday, 09:30 AM', avatar: require('../assets/call1.png') },
  { id: '5', name: 'Jhon Abraham', time: '03/07/22, 07:30 AM', avatar: require('../assets/call2.png') },
  { id: '6', name: 'John Borino', time: 'Monday, 09:30 AM', avatar: require('../assets/call3.png') },
  { id: '7', name: 'Sabila Sayma', time: 'Yesterday, 07:35 PM', avatar: require('../assets/call1.png') },
  
];

const ChatScreen = ({navigation}) => {
  const renderItem = ({ item }) => (
    <View style={[styles.messageContainer, item.sent ? styles.sentMessage : styles.receivedMessage]}>
      {!item.sent && <Image source={require('../assets/recm.png')} style={styles.avatar} />}
      <View style={styles.messageContent}>
        {!item.audio ? (
          <Text style={styles.messageText}>{item.message}</Text>
        ) : (
          <View style={styles.audioMessage}>
            <Image source={require('../assets/recm.png')} style={styles.audioIcon} />
            <Text style={styles.audioDuration}>{item.duration}</Text>
          </View>
        )}
        <Text style={styles.messageTime}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
    <StatusBar  barStyle='dark-content'/>
    <LinearGradient
    colors={['#97ECFF','#FFFFFF' ]}
    locations={[0, 0.2]}
    style={{flex:1}}
    className=''
  >
      <View className=' mt-5 space-x-2' style={styles.header}>
      <MaterialCommunityIcons name="arrow-left-thin" color='black' size={20}  onPress={() => navigation.navigate('live')}/>

        <View style={styles.headerTitle}>
          <Image source={require('../assets/recm.png')} style={styles.headerAvatar} />
          <View>
            <Text style={styles.headerName}>Jhon Abraham</Text>
            <Text style={styles.headerStatus}>Active now</Text>
          </View>
        </View>
        <View className=' space-x-2' style={styles.headerIcons}>
        <MaterialCommunityIcons name="phone-outline" color='black' size={20}  onPress={() => navigation.navigate('videocall1')}/>

        <MaterialCommunityIcons name="video-outline" color='black' size={20}  onPress={() => navigation.navigate('videocall1')}/>

        <MaterialCommunityIcons name="dots-vertical" color='black' size={20}  onPress={() => navigation.navigate('videocall')}/>

        </View>
      </View>

      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messagesList}
      />

      <View className=' space-x-2' style={styles.footer}>
      <MaterialCommunityIcons name="attachment" color='black' size={20} />

        <TextInput placeholder="Write your message" style={styles.input} />
        <MaterialCommunityIcons name="gift-outline" color='black' size={20}  />

        <MaterialCommunityIcons name="camera-outline" color='black' size={20}  />

        <MaterialCommunityIcons name="microphone" color='black' size={20} />

      </View>
      </LinearGradient>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
   
  },
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: 8,
  },
  headerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  headerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  headerName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerStatus: {
    fontSize: 14,
    color: 'green',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  messagesList: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  messageContainer: {
    flexDirection: 'row',
    marginVertical: 8,
    alignItems: 'flex-end',
  },
  sentMessage: {
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
  },
  receivedMessage: {
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  messageContent: {
    maxWidth: '70%',
    padding: 8,
    borderRadius: 10,
    backgroundColor: '#7B49FF',
    elevation: 2,
  },
  messageText: {
    fontSize: 16,
    color: '#fff',
  },
  audioMessage: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  audioIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  audioDuration: {
    fontSize: 16,
  },
  messageTime: {
    fontSize: 12,
    color: '#aaa',
    alignSelf: 'flex-end',
    marginTop: 4,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#e9ecef',
  },
  input: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginHorizontal: 8,
    fontSize: 16,
  },
});

export default ChatScreen;
