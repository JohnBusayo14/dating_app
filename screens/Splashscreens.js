import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Easing ,Dimensions} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Splashscreens = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Navigate to your main screen after 3 seconds
      navigation.replace('Home');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const { width } = Dimensions.get('window');
  const textSize = width * 0.06; // Adjust this factor as needed
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#7B49FF','#FA457E']}
        start={[0, 1]}
        end={[1, 0]}
        style={styles.gradient}
      />
      <Text className=" font-extrabold" style={[styles.text, {fontSize: textSize}]}>LOGO</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  text: {
    fontSize: 24,
    color: 'white',
  },
});

export default Splashscreens;
