import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { BlurView } from 'expo-blur';
import Icon from 'react-native-vector-icons/Ionicons';

const Incomingcall = ({navigation}) => {
  return (
    <ImageBackground
    source={require('../assets/cimb.jpg')} // Replace with the actual background image URI or require for local images
      style={styles.background}
    >
      <BlurView intensity={50} style={styles.blurContainer}>
        <Text style={styles.header}>Outgoing Call</Text>
        <View style={styles.content}>
          <Image
          source={require('../assets/cimb.jpg')} // Replace with the actual image URI or require for local images
            style={styles.avatar}
          />
          <Text style={styles.name}>Borsha Akther</Text>
          <Text style={styles.callType}>Outgoing Video call</Text>
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.button} onPress={() => { /* Handle accept call */ }}>
              <Icon name="call" size={30} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.declineButton]} onPress={() => navigation.goBack()}>
              <Icon name="close" size={30} color="#fff"  />
            </TouchableOpacity>
          </View>
        </View>
      </BlurView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  blurContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(39, 68, 114, 0.5)',
  },
  header: {
    position: 'absolute',
    top: 50,
    color: '#fff',
    fontSize: 20,
    textTransform: 'capitalize',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  callType: {
    marginTop: 5,
    fontSize: 18,
    color: '#ddd',
  },
  buttons: {
    flexDirection: 'row',
    marginTop: 30,
    width: '60%',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#4CAF50',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  declineButton: {
    backgroundColor: '#F44336',
  },
});

export default Incomingcall;
