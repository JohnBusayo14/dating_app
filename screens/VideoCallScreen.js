import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const VideoCallScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/cimb.jpg')} style={styles.backgroundImage} />

      <TouchableOpacity style={styles.backButton}>
      <MaterialCommunityIcons name="arrow-left" color='black' size={20} onPress={() => navigation.goBack()}/>
      </TouchableOpacity>

      <View style={styles.smallVideoContainer}>
        <Image source={require('../assets/rectan.png')} style={styles.smallVideo} />
      </View>

     

      <View style={styles.controlsContainer}>
        <TouchableOpacity style={styles.controlButton}>
        <MaterialCommunityIcons name="microphone-outline" color='white' size={28}  onPress={() => navigation.navigate('foryou')}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton}>
        <MaterialCommunityIcons name="volume-high" color='white' size={28}  onPress={() => navigation.navigate('foryou')}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton}>
        <MaterialCommunityIcons name="video-outline" color='white' size={28}  onPress={() => navigation.navigate('foryou')}/>
        </TouchableOpacity>
        <TouchableOpacity className=' bg-[#20A090]' style={styles.controlButton1}>
        <MaterialCommunityIcons name="message-outline" color='white' size={28}  onPress={() => navigation.navigate('foryou')}/>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.controlButton, styles.endCallButton]}>
        <MaterialCommunityIcons name="plus" color='white' size={28}  onPress={() => navigation.navigate('foryou')}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 16,
    zIndex: 10,
    padding: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 16,
  },
  smallVideoContainer: {
    position: 'absolute',
    bottom: 150,
    right: 16,
    width: 100,
    height: 150,
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#FFF',
  },
  smallVideo: {
    width: '100%',
    height: '100%',
  },
  volumeControl: {
    position: 'absolute',
    top: '50%',
    left: 16,
    transform: [{ translateY: -75 }],
    alignItems: 'center',
  },
  controlsContainer: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  controlButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlButton1: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#20A090',
    justifyContent: 'center',
    alignItems: 'center',
  },
  endCallButton: {
    backgroundColor: '#FF3B30',
  },
});

export default VideoCallScreen;
