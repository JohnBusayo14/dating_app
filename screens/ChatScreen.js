import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, FlatList, StatusBar, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ChatScreen = ({ navigation, route }) => {
  // Get name and image from route params
  const { name, image } = route.params;

  // State to manage messages
  const [messages, setMessages] = useState([
    { id: '1', message: 'Hey, How are you?', time: 'Today, 07:30 AM', sent: false, selected: false },
    { id: '2', message: 'I am doing well, thanks!', time: 'Today, 07:35 AM', sent: true, selected: false },
  ]);
  
  const [messageInput, setMessageInput] = useState(''); // State for text input
  const [selectionMode, setSelectionMode] = useState(false); // Whether user is in selection mode

  // Function to send a text message
  const sendMessage = () => {
    if (messageInput.trim()) {
      const newMessage = {
        id: Date.now().toString(),
        message: messageInput,
        time: new Date().toLocaleTimeString(), // you can adjust format
        sent: true,
        selected: false,
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setMessageInput(''); // Clear input field after sending
    }
  };

  // Function to simulate sending a voice note
  const sendVoiceNote = () => {
    const newMessage = {
      id: Date.now().toString(),
      message: '🎤 Voice Note (00:10)', // Placeholder for the audio message
      time: new Date().toLocaleTimeString(),
      sent: true,
      selected: false,
      audio: true, // Indicate it's an audio message
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  // Function to handle long press and toggle message selection
  const handleLongPress = (id) => {
    setSelectionMode(true);
    setMessages((prevMessages) =>
      prevMessages.map((message) =>
        message.id === id ? { ...message, selected: !message.selected } : message
      )
    );
  };

  // Function to delete selected messages
  const deleteSelectedMessages = () => {
    Alert.alert(
      'Delete Messages',
      'Are you sure you want to delete the selected messages?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            setMessages((prevMessages) => prevMessages.filter((message) => !message.selected));
            setSelectionMode(false); // Exit selection mode after deletion
          },
        },
      ]
    );
  };

  // Function to exit selection mode
  const clearSelection = () => {
    setMessages((prevMessages) =>
      prevMessages.map((message) => ({ ...message, selected: false }))
    );
    setSelectionMode(false);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onLongPress={() => handleLongPress(item.id)}
      style={[
        styles.messageContainer,
        item.sent ? styles.sentMessage : styles.receivedMessage,
        item.selected ? styles.selectedMessage : null, // Add selected style
      ]}
    >
      {!item.sent && <Image source={require('../assets/recm.png')} style={styles.avatar} />}
      <View style={styles.messageContent}>
        {!item.audio ? (
          <Text style={styles.messageText}>{item.message}</Text>
        ) : (
          <View style={styles.audioMessage}>
            <MaterialCommunityIcons name="microphone" size={24} color="#fff" />
            <Text style={styles.audioDuration}>00:10</Text>
          </View>
        )}
        <Text style={styles.messageTime}>{item.time}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle='dark-content' />
      <LinearGradient colors={['#97ECFF', '#FFFFFF']} locations={[0, 0.2]} style={{ flex: 1 }}>
        {/* Header */}
        <View className='mt-5 space-x-2' style={styles.header}>
          <MaterialCommunityIcons name="arrow-left-thin" color='black' size={20} onPress={() => navigation.goBack()} />
          <View style={styles.headerTitle}>
            <Image source={image} style={styles.headerAvatar} />
            <View>
              <Text style={styles.headerName}>{name}</Text>
              <Text style={styles.headerStatus}>Active now</Text>
            </View>
          </View>
          <View className='space-x-2' style={styles.headerIcons}>
            <MaterialCommunityIcons name="phone-outline" color='black' size={20} />
            <MaterialCommunityIcons name="video-outline" color='black' size={20} />
            <MaterialCommunityIcons name="dots-vertical" color='black' size={20} />
          </View>
        </View>

        {/* Chat messages */}
        <FlatList
          data={messages}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.messagesList}
        />

        {/* Delete button if in selection mode */}
        {selectionMode && (
          <View style={styles.selectionToolbar}>
            <TouchableOpacity onPress={deleteSelectedMessages}>
              <MaterialCommunityIcons name="delete" color="red" size={28} />
            </TouchableOpacity>
            <TouchableOpacity onPress={clearSelection}>
              <Text style={styles.clearSelectionText}>Clear</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Footer (Text Input and Send Button) */}
        <View className='space-x-2' style={styles.footer}>
          <MaterialCommunityIcons name="attachment" color='black' size={20} />
          <TextInput
            placeholder="Write your message"
            style={styles.input}
            value={messageInput}
            onChangeText={setMessageInput}
          />
          <MaterialCommunityIcons name="gift-outline" color='black' size={20} />
          <MaterialCommunityIcons name="camera-outline" color='black' size={20} />
          <TouchableOpacity onPress={sendVoiceNote}>
            <MaterialCommunityIcons name="microphone" color='black' size={20} />
          </TouchableOpacity>
          <TouchableOpacity onPress={sendMessage}>
            <MaterialCommunityIcons name="send" color='black' size={20} />
          </TouchableOpacity>
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
  selectedMessage: {
    backgroundColor: '#d1d1d1', // Highlight selected message
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
  audioDuration: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 8,
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
  selectionToolbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
  },
  clearSelectionText: {
    color: 'blue',
    fontSize: 16,
  },
});

export default ChatScreen;
