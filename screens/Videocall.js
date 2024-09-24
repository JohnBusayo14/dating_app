import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ImageBackground, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


// Import images from the assets folder
const remoteVideoImage = require('../assets/videocall4.webp');
const localVideoImage = require('../assets/videocall3.jpeg');

const VideoCallScreen = ({ navigation }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isVolumeon, setIsVolumeOn] = useState(false);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const toggleVideo = () => {
    setIsVideoOn(!isVideoOn);
  };

  const volume = () => {
    setIsVolumeOn(!isVideoOn);
  };

  const endCall = () => {
    // Logic to end the call goes here
    navigation.goBack();
  };

  return (
    <ImageBackground source={remoteVideoImage} style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
      <View className=' w-full flex flex-row justify-start items-center space-x-20 m-4' style={styles.header}>
      <MaterialCommunityIcons name="arrow-left-thin" color='#4635E2' size={28}  onPress={() => navigation.goBack()}/>
      </View>
        <View style={styles.videoContainer}>
          <View style={styles.localVideoContainer}>
            <Image
              style={styles.localVideo}
              source={localVideoImage}
            />
          </View>
        </View>

      
        <View style={styles.controls}>
        <TextInput
        style={styles.textInput}
        placeholder="Type here..."
        placeholderTextColor="#888"
        className='bg-red-900'
      />
          <View className='flex flex-row w-[90%] justify-around mt-3'>
          <TouchableOpacity onPress={toggleMute} style={styles.controlButton}>
            <Icon name={isMuted ? "mic-off" : "mic"} size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={volume} style={styles.controlButton}>
            <Icon name={isVolumeon ? "volume" : "volume-off"} size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleVideo} style={styles.controlButton}>
            <Icon name={isVideoOn ? "videocam" : "videocam-off"} size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={endCall} style={[styles.controlButton, styles.endCallButton]}>
            <Icon name="call" size={30} color="white" />
          </TouchableOpacity>
          

          
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  videoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  localVideoContainer: {
    position: 'absolute',
    bottom: 100,
    right: 20,
    width: 100,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
  },
  localVideo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  volumeSlider: {
    width: 40,
    height: 150,
    position: 'absolute',
    top: 100,
    left: 20,
    transform: [{ rotate: '-90deg' }],
  },
  controls: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  textInput: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: 'white',
    paddingHorizontal: 15,
    marginRight: 10,
  },
  controlButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  endCallButton: {
    backgroundColor: 'red',
  },
});

export default VideoCallScreen;
