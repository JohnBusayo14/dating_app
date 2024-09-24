import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const EditProfileScreen = ({navigation}) => {
  return (
    <ScrollView className='mt-6' contentContainerStyle={styles.container}>
      <View className=' w-full flex flex-row justify-start items-center space-x-20 px-[20px]' style={styles.header}>
      <MaterialCommunityIcons name="arrow-left-thin" color='#4635E2' size={28}  onPress={() => navigation.goBack()}/>

        <Text style={styles.headerTitle}>Edit your Profile</Text>
      </View>
      
      <View  style={styles.photoSection}>
        <View className=' my-5 mx-2' style={styles.photoContainer}>
          <TouchableOpacity style={styles.addPhoto}>
          <View className=' w-8 h-8 bg-[#DADADA] flex flex-row justify-center items-center rounded-full'>
          <Text className=' font-semibold text-white text-2xl'>+</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addPhoto}>
          <View className=' w-8 h-8 bg-[#DADADA] flex flex-row justify-center items-center rounded-full'>
          <Text className=' font-semibold text-white text-2xl'>+</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addPhoto}>
          <View className=' w-8 h-8 bg-[#DADADA] flex flex-row justify-center items-center rounded-full'>
          <Text className=' font-semibold text-white text-2xl'>+</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addPhoto}>
          <View className=' w-8 h-8 bg-[#DADADA] flex flex-row justify-center items-center rounded-full'>
          <Text className=' font-semibold text-white text-2xl'>+</Text>
          </View>
          </TouchableOpacity>
        </View>
        <LinearGradient
        colors={['#FA457E', '#7B49FF']}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        
        className=' w-[266.59px] rounded-[80px] h-[46px] my-4  flex flex-row justify-center items-center'
        onPress={() => navigation.navigate('payment')}
        > 
        <Text className=' py-4' style={styles.addPhotosButtonText}>Add Photos</Text>
        </LinearGradient>
        
      </View>
      
      <View style={styles.infoSection} className='px-[20px]'>
        <Text style={styles.sectionTitle}>Basic info</Text>
        <TouchableOpacity style={styles.infoItem}>
          <Text style={styles.infoLabel}>Name</Text>
          <Text style={styles.infoValue}>Samuel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.infoItem}>
          <Text style={styles.infoLabel}>Gender</Text>
          <Text style={styles.infoValue}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.infoItem}>
          <Text style={styles.infoLabel}>Birthday</Text>
          <Text style={styles.infoValue}>05.02.2003</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.aboutSection} className='px-[20px]'>
        <Text style={styles.sectionTitle}>About me</Text>
        <TextInput
          style={styles.aboutInput}
          placeholder="Write a bit about yourself..."
          placeholderTextColor="#A9A9A9"
          multiline
          numberOfLines={4}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F0F0F0',
    padding: 0,
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
  photoSection: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: "#DADADA"
  },
  photoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  addPhoto: {
    width: 70,
    height: 70,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addPhotoText: {
    fontSize: 36,
    color: '#A9A9A9',
  },
  addPhotosButton: {
    backgroundColor: 'linear-gradient(45deg, #FF3E7B, #A033FF)', // You might need a library to handle gradients
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  addPhotosButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  infoLabel: {
    fontSize: 16,
    color: '#000',
  },
  infoValue: {
    fontSize: 16,
    color: '#0000FF',
  },
  aboutSection: {
    marginBottom: 20,
  },
  aboutInput: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    textAlignVertical: 'top',
    height: 100,
    color: '#000',
    borderWidth: 1,
    borderColor: '#ddd',
  },
});

export default EditProfileScreen;
