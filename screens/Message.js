import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, FlatList } from 'react-native';
import Navigation from '../components/Navigation';

const messages = [
  { id: '1', user: 'Jhon Abraham', message: 'Hello! Nazrul How are you?', time: '09:25 AM', sent: false },
  { id: '2', user: 'You', message: 'You did your job well!', time: '09:25 AM', sent: true },
  { id: '3', user: 'Jhon Abraham', message: 'Have a great working week!!', time: '09:25 AM', sent: false },
  { id: '4', user: 'Jhon Abraham', message: 'Hope you like it', time: '09:25 AM', sent: false },
  { id: '5', user: 'Jhon Abraham', message: '', time: '09:25 AM', sent: false, audio: true, duration: '00:16' },
];

const ChatScreen = ({navigation}) => {
  const renderItem = ({ item }) => (
    <View style={[styles.messageContainer, item.sent ? styles.sentMessage : styles.receivedMessage]}>
      {!item.sent && <Image source={require('./path/to/avatar.png')} style={styles.avatar} />}
      <View style={styles.messageContent}>
        {!item.audio ? (
          <Text style={styles.messageText}>{item.message}</Text>
        ) : (
          <View style={styles.audioMessage}>
            <Image source={require('./path/to/audio_icon.png')} style={styles.audioIcon} />
            <Text style={styles.audioDuration}>{item.duration}</Text>
          </View>
        )}
        <Text style={styles.messageTime}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('./path/to/back_icon.png')} style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.headerTitle}>
          <Image source={require('./path/to/avatar.png')} style={styles.headerAvatar} />
          <View>
            <Text style={styles.headerName}>Jhon Abraham</Text>
            <Text style={styles.headerStatus}>Active now</Text>
          </View>
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Image source={require('./path/to/call_icon.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('./path/to/video_icon.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('./path/to/more_icon.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messagesList}
      />

      <View style={styles.footer}>
        <TouchableOpacity>
          <Image source={require('./path/to/emoji_icon.png')} style={styles.icon} />
        </TouchableOpacity>
        <TextInput placeholder="Write your message" style={styles.input} />
        <TouchableOpacity>
          <Image source={require('./path/to/gift_icon.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('./path/to/camera_icon.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('./path/to/mic_icon.png')} style={styles.icon} />
        </TouchableOpacity>
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
    backgroundColor: '#f8f9fa',
  },
  navigationContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#e9ecef',
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
    backgroundColor: '#fff',
    elevation: 2,
  },
  messageText: {
    fontSize: 16,
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
