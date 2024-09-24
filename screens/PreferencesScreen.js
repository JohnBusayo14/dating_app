import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch, ScrollView } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const PreferencesScreen = ({navigation}) => {
  const [isLightMode, setIsLightMode] = React.useState(false);

  const toggleSwitch = () => setIsLightMode(previousState => !previousState);

  return (
    <ScrollView className='w-full mt-10' contentContainerStyle={styles.container}>
      <View className=' w-full flex flex-row justify-start items-center space-x-20' style={styles.header}>
      <MaterialCommunityIcons name="arrow-left-thin" color='black' size={28}  onPress={() => navigation.goBack()}/>

        <Text style={styles.headerTitle}>Preferences</Text>
      </View>
      <View style={styles.preferenceItem}>
        <Text style={styles.preferenceText}>Light Mode</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#F44336" }}
          thumbColor={isLightMode ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isLightMode}
        />
      </View>
      <TouchableOpacity style={styles.preferenceItem}>
        <Text style={styles.preferenceText}>Statistics</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.preferenceItem}>
        <Text style={styles.preferenceText}>Wallet</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.preferenceItem}>
        <Text style={styles.preferenceText}>Share with friends</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.preferenceItem}>
        <Text style={styles.preferenceText}>Help & feedback</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.preferenceItem}>
        <Text style={styles.preferenceText}>Color Background</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.preferenceItem}>
        <Text style={styles.preferenceText}>Subscription</Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
      <LinearGradient
      colors={['#FA457E', '#7B49FF']}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      style={styles.gradient}
      className=' w-[266.59px] h-[46px] mx-auto bg-black py-2 rounded-[80px] flex flex-row justify-center items-center'
      onPress={() => navigation.navigate('payment')}
      >
      <TouchableOpacity className='w-full h-full flex flex-row justify-center items-center'      onPress={() => navigation.navigate('login')}>
      <Text style={styles.logOutButtonText}>LOG OUT</Text>
      </TouchableOpacity>
     
      </LinearGradient>


        <TouchableOpacity className='w-[266.59px] h-[46px] mx-auto my-5 flex items-center justify-center' style={styles.deleteButton}>
          <Text style={styles.deleteButtonText}>DELETE ACCOUNT</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F0F0F0',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backArrow: {
    fontSize: 24,
    color: '#000',
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  preferenceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  preferenceText: {
    fontSize: 16,
    color: '#000',
  },
  buttonContainer: {
    marginTop: 30,
  },
  logOutButton: {
    backgroundColor: 'linear-gradient(45deg, #FF3E7B, #A033FF)', // You might need a library to handle gradients
    paddingVertical: 15,
    borderRadius: 25,
    marginBottom: 20,
    alignItems: 'center',
  },
  logOutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  deleteButton: {
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 25,
    alignItems: 'center',
  },
  deleteButtonText: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PreferencesScreen;
