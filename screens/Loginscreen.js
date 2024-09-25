import React, { useState } from 'react'; 
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Switch, StyleSheet, Image, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PhoneInput from 'react-native-phone-input';

const LoginScreen = ({ navigation }) => {
  // Demo credentials
  const demoPhoneNumber = "+18012345683";
  const demoPassword = "Paword@1";

  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [isEnabled, setIsEnabled] = useState(false);
  const [error, setError] = useState({ phoneNumber: '', password: '' });
  const [modalVisible, setModalVisible] = useState(false); // Modal state
  const [successModalVisible, setSuccessModalVisible] = useState(false); // Success Modal state

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  // Dismiss keyboard
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  // Validation logic
  const validateInputs = () => {
    let isValid = true;
    const newError = { phoneNumber: '', password: '' };

    if (!phoneNumber || phoneNumber.length < 10) {
      newError.phoneNumber = 'Please enter a valid phone number.';
      isValid = false;
    }

    if (!password) {
      newError.password = 'Please enter your password.';
      isValid = false;
    }

    setError(newError);
    return isValid;
  };

  // Handle login
  const handleLogin = () => {
    if (validateInputs()) {
      // Validate demo credentials
      if (phoneNumber === demoPhoneNumber && password === demoPassword) {
        // If credentials match, show success modal
        setSuccessModalVisible(true);
      } else {
        // Show modal on login failure
        setModalVisible(true);
      }
    }
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.header}>Login</Text>
          <Text style={styles.subHeader}>Please enter your phone number and password to log in</Text>

          <View style={styles.inputContainer}>
            {/* Phone Number Input */}
            <View className='w-[350px] h-[50px] rounded-[60px] flex flex-row justify-start px-5 mt-4 items-center border-2 border-[#A135DC]'>
              <PhoneInput
                initialCountry={'us'}
                value={phoneNumber}
                onChangePhoneNumber={(value) => setPhoneNumber(value)}
                textStyle={styles.phoneText}
                flagStyle={styles.flag}
                textProps={{ keyboardType: 'phone-pad' }}
              />
            </View>
            {error.phoneNumber ? <Text style={styles.errorText}>{error.phoneNumber}</Text> : null}

            {/* Password Input */}
            <View className='w-[350px] h-[50px] rounded-[60px] flex flex-row justify-between px-5 mt-4 items-center border-2 border-[#A135DC]'>
              <TextInput
                style={styles.input}
                placeholderTextColor="#888"
                placeholder="Password"
                secureTextEntry={secureTextEntry}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)}>
                <MaterialCommunityIcons name={secureTextEntry ? "eye-off" : "eye"} size={20} color='#33196B' />
              </TouchableOpacity>
            </View>
            {error.password ? <Text style={styles.errorText}>{error.password}</Text> : null}
          </View>

          {/* Remember Me Switch */}
          <View className='w-full flex flex-row justify-between items-center' style={styles.rememberMeContainer}>
            <View className='flex flex-row items-center gap-2'>
              <Switch
                trackColor={{ false: '#767577', true: '#A135DC' }}
                thumbColor={isEnabled ? '#fff' : '#fff'}
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
              <Text className='font-[500] text-[14px] text-[#645290]'>Remember Me</Text>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('reset')}>
              <Text style={styles.forgotPassword}>forgotten password?</Text>
            </TouchableOpacity>
          </View>

          {/* Login Button */}
          <LinearGradient
            colors={['#FA457E', '#7B49FF']}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            className='w-[212px] h-[65px] mx-auto bg-black my-1 rounded-[80px] flex flex-row justify-center items-center'
          >
            <TouchableOpacity className='w-full h-full flex flex-row justify-center items-center' onPress={handleLogin}>
              <Text className='py-3' style={styles.loginButtonText}>Log in</Text>
            </TouchableOpacity>
          </LinearGradient>

          <Text style={styles.orText}>OR</Text>

          <Text className='text-[24px] font-[500] text-center text-[#33196B] py-6'>Login Using</Text>
          <View style={styles.socialLoginContainer}>
            <TouchableOpacity style={styles.socialLoginButton}>
              <Image source={require('../assets/fb.png')} style={styles.socialIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialLoginButton}>
              <Image source={require('../assets/gmail.png')} style={styles.socialIcon} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('signup')}>
            <Text style={styles.signUpText}>
              Create new account? <Text style={styles.signUpLink}>Sign up</Text>
            </Text>
          </TouchableOpacity>
        </View>

        {/* Custom Modal for Login Failed */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <MaterialCommunityIcons name="alert-circle" size={50} color="red" />
              <Text style={styles.modalTitle}>Login Failed</Text>
              <Text style={styles.modalMessage}>Invalid phone number or password.</Text>
              <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Custom Modal for Login Success */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={successModalVisible}
          onRequestClose={() => setSuccessModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <MaterialCommunityIcons name="check-circle" size={50} color="green" />
              <Text style={styles.modalTitle}>Login Successful</Text>
              <Text style={styles.modalMessage}>You have logged in successfully!</Text>
              <TouchableOpacity style={styles.closeButton} onPress={() => {
                setSuccessModalVisible(false);
                navigation.navigate('live');  // Navigate after success modal close
              }}>
                <Text style={styles.closeButtonText}>Continue</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  content: {
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  subHeader: {
    fontSize: 16,
    textAlign: 'center',
    color: '#6c757d',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  phoneText: {
    flex: 1,
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
    alignSelf: 'flex-start',
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  forgotPassword: {
    color: '#007bff',
    textDecorationLine: 'underline',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    marginVertical: 10,
    color: '#6c757d',
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  socialLoginButton: {
    marginHorizontal: 10,
  },
  socialIcon: {
    width: 40,
    height: 40,
  },
  signUpText: {
    textAlign: 'center',
    color: '#6c757d',
  },
  signUpLink: {
    color: '#007bff',
    textDecorationLine: 'underline',
  },

  // Modal Styles
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  modalMessage: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#FA457E',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  closeButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default LoginScreen;
