import React, { useState } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RNPickerSelect from 'react-native-picker-select';
import Navigation from '../components/Navigation';
import { Input, Icon,Select, Box, CheckIcon, Stack, Pressable, Center, NativeBaseProvider } from "native-base";



const Signup = ({ navigation }) => {
  const { width, height } = Dimensions.get('window');
  const textSize = width * 0.06; // Adjust this factor as needed

  const [show, setShow] = React.useState(false);
  const [service, setService] = React.useState("");

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);
  const handleConfirm = (date) => {
    setDob(date.toDateString());
    hideDatePicker();
  };

  return (

    <NativeBaseProvider>
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ width: '100%', flexDirection: 'row', paddingTop: 20, paddingLeft: 20 }}>
        <Ionicons name="arrow-back" size={25} color="#4635E2" onPress={() => navigation.goBack()} />
      </View>
      <ScrollView className="mt-5" contentContainerStyle={{ paddingBottom: 100 }}>
        <View style={{ width: width * 0.9, alignSelf: 'center' }}>
          <Text  className='font-[600] text-[30px] leading-[30px] py-3' style={[styles.title, ]}>Sign up</Text>

         

                <Box maxW="300">
                <Input shadow={2} _light={{
                  bg: "white",
                  _hover: {
                    bg: "white"
                  },
                  _focus: {
                    bg: "white"
                  }
                }} _dark={{
                  bg: "coolGray.800",
                  _hover: {
                    bg: "coolGray.900"
                  },
                  _focus: {
                    bg: "coolGray.900:alpha.70"
                  }
                }} placeholder="Username"
                minWidth="350"
                minHeight="50"
                accessibilityLabel="Choose Service"
                borderRadius="60"  // Add borderRadius here
                borderColor="#8A52F3"
                borderWidth="2" />;




      <Select
        selectedValue={service}
        minWidth="350"
        minHeight="50"
        accessibilityLabel="Choose Service"
        placeholder="Choose Service"
        borderRadius="60"  // Add borderRadius here
        borderColor="#8A52F3"
        borderWidth="2"
        _selectedItem={{
          bg: "red.600",
          endIcon: <CheckIcon size="2" />
        }}
        mt={1}
        onValueChange={itemValue => setService(itemValue)}
      >
        <Select.Item label="UX Research" value="ux" />
        <Select.Item label="Web Development" value="web" />
        <Select.Item label="Cross Platform Development" value="cross" />
        <Select.Item label="UI Designing" value="ui" />
        <Select.Item label="Backend Development" value="backend" />
      </Select>
    </Box>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#888"
              secureTextEntry={secureTextEntry}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)}>
              <MaterialCommunityIcons name={secureTextEntry ? "eye-off" : "eye"} size={20} color='#33196B' />
            </TouchableOpacity>
          </View>

          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="DOB" placeholderTextColor="#888" />
            <MaterialCommunityIcons name="calendar-month" color='#33196B' size={20} />
          </View>

          <View style={[styles.inputContainer, styles.dropdownContainer]}>
            <RNPickerSelect
              onValueChange={(value) => setGender(value)}
              items={[
                { label: 'Male', value: 'male' },
                { label: 'Female', value: 'female' },
                { label: 'Other', value: 'other' },
              ]}
              placeholder={{ label: "Select Gender", value: null }}
              style={pickerSelectStyles}
              useNativeAndroidPickerStyle={false}
            />
            <MaterialCommunityIcons name="menu-down" color="#33196B" size={25} />
          </View>

          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Location" placeholderTextColor="#888" />
          </View>

          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
              style={[styles.button, { width: 212, }]}
              onPress={() => navigation.navigate('location')}
             
            >
              <LinearGradient
                colors={['#FA457E', '#7B49FF']}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                style={styles.gradient}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={styles.buttonText}>SIGN UP</Text>
                  <View style={styles.iconContainer}>
                    <Ionicons name="arrow-forward" size={18} color="#fff" />
                  </View>
                </View>
              </LinearGradient>
            </TouchableOpacity>

            <Text style={styles.orText}>OR</Text>

            <Text style={[styles.subTitle, { fontSize: width * 0.05 }]}>Sign up using</Text>

            <View style={styles.socialContainer}>
              <Image source={require('../assets/fb.png')} />
              <Image source={require('../assets/gmail.png')} style={styles.socialIcon} />
            </View>

            <View style={styles.loginTextContainer}>
              <Text style={styles.loginText}>Already have an account? </Text>
              <Text style={styles.loginLink} onPress={() => navigation.navigate('login')}>Log in</Text>
            </View>
          </View>
        </View>
      </ScrollView>

     
    </View>
  </NativeBaseProvider>

    
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 25,
    paddingHorizontal: 10,
    color: 'black',
    paddingRight: 30,
    flex: 1,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    color: 'black',
    paddingRight: 30,
    flex: 1,
  },
});

const styles = StyleSheet.create({
  title: {
    fontWeight: '600',
    color: '#33196B',
    lineHeight: 30,
  },
  inputContainer: {
    width: 350,
    height: 50,
    borderRadius: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
    borderColor: '#A135DC',
    borderWidth: 2,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  dropdownContainer: {
    justifyContent: 'space-between',
  },
  button: {
    borderRadius: 35,
    overflow: 'hidden',
    marginVertical: 20,
  },
  gradient: {
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  iconContainer: {
    backgroundColor: '#481265',
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  orText: {
    paddingBottom: 3,
    fontSize: 15,
    color: '#33196B',
  },
  subTitle: {
    fontWeight: '700',
    color: '#33196B',
    lineHeight: 33.6,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  socialIcon: {
    marginHorizontal: 10,
  },
  loginTextContainer: {
    flexDirection: 'row',
  },
  loginText: {
    color: '#3A3A3A',
    fontWeight: '600',
  },
  loginLink: {
    color: '#FA457E',
  },
  navigationContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});

export default Signup;
