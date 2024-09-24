import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity,TouchableWithoutFeedback, Keyboard,Switch, StyleSheet, Image } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PhoneInput from 'react-native-phone-input';
import { Icon } from 'react-native-elements';



const LoginScreen = ({ navigation }) => {
  const [phone, setPhone] = useState('');
  
  const [rememberMe, setRememberMe] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);


  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

    //toggle functionality
    const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    //end toggle functionality

    //keyboard dismiss
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
//end keyboard dismiss functionality



  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Login</Text>
        <Text style={styles.subHeader}>Please enter your phone number and password to let you in</Text>

        <View style={styles.inputContainer} >
         
        <View className=' w-[350px] h-[50px] rounded-[60px] flex flex-row justify-start px-5 mt-4 items-center  border-2 border-[#A135DC]'>
        <PhoneInput
          initialCountry={'us'}
          value={phoneNumber}
          onChangePhoneNumber={(value) => setPhoneNumber(value)}
          textStyle={styles.phoneText}
          flagStyle={styles.flag}
          textProps={{ keyboardType: 'phone-pad' }}
          offset={10}
        />
        </View>
        
        <View className=' w-[350px] h-[50px] rounded-[60px] flex flex-row justify-between px-5 mt-4 items-center  border-2 border-[#A135DC]'>
        <TextInput
        style={styles.input}
      
        placeholderTextColor="#888"
        placeholder="Password"
        secureTextEntry={secureTextEntry}
        value={password}
        onChangeText={setPassword}
      />
    
      <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)}>
      <MaterialCommunityIcons  name={secureTextEntry ? "eye-off" : "eye"} type="feather" size={20} color='#33196B'  />
      </TouchableOpacity>
        </View>

        </View>

        <View className='w-full flex flex-row justify-between items-center' style={styles.rememberMeContainer}>
         <View className='flex flex-row items-center gap-2'>
         <Switch 
         
        trackColor={{ false: '#767577', true: '#A135DC' }}
        thumbColor={isEnabled ? '#fff' : '#ffff'}
        ios_backgroundColor="#fff"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
         <Text className=' font-[500] text-[14px] text-[#645290]'>Remember Me</Text>
         </View>
          
          <TouchableOpacity onPress={() => navigation.navigate('reset')}>
            <Text style={styles.forgotPassword}>forgotten password?</Text>
          </TouchableOpacity>
        </View>

        <LinearGradient
      colors={['#FA457E', '#7B49FF']}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      className=' w-[212px] h-[65px] mx-auto bg-black my-1 rounded-[80px] flex flex-row justify-center items-center'
 
      >
      <TouchableOpacity className='w-full h-full flex flex-row justify-center items-center'      onPress={() => navigation.navigate('live')}>
      <Text className=' py-3' style={styles.loginButtonText} >Log in</Text>
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
          <Text style={styles.signUpText}>Create new account? <Text style={styles.signUpLink}>Sign up</Text></Text>
        </TouchableOpacity>
      </View>
    </View>
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
    marginBottom: 20,
  },
  phoneInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: '100%',
  },
  countryCode: {
    fontSize: 16,
    marginRight: 10,
  },
  phoneNumberInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
  },
  passwordInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 8,
    paddingHorizontal: 10,
    width: '100%',
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
    marginLeft: 10,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  checkbox: {
    padding: 0,
    marginRight: 10,
  },
  forgotPassword: {
    marginLeft: 'auto',
    color: '#007bff',
    textDecorationLine: 'underline',
  },
  loginButton: {
    backgroundColor: '#ff416c',
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
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
});

export default LoginScreen;






{/*import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';




const LoginScreen = ({ navigation }) => {
const [phone, setPhone] = useState('');
const [password, setPassword] = useState('');
const [rememberMe, setRememberMe] = useState(false);
const [secureTextEntry, setSecureTextEntry] = useState(true);

return (
  <View className='w-full flex flex-col justify-center items-center' style={styles.container}>
    <Text style={styles.header}>Login</Text>
    <Text style={styles.subHeader}>Please enter your phone number and password to let you in</Text>

    <View style={styles.inputContainer}>
      <View style={styles.phoneInput}>
        <TouchableOpacity>
          <Text style={styles.countryCode}>+01</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.phoneNumberInput}
          placeholder="331 623 8413"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />
      </View>
      <View style={styles.passwordInput}>
      <MaterialCommunityIcons name="key-variant" color='#33196B' size={25} />

        <TextInput
          style={styles.textInput}
          placeholder="Password"
          secureTextEntry={secureTextEntry}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)}>
        <MaterialCommunityIcons  name={secureTextEntry ? "eye-off" : "eye"} type="feather" size={20} color='#33196B'  />

        </TouchableOpacity>
      </View>
    </View>

    <View style={styles.rememberMeContainer}>
      
      <Text>Remember Me</Text>
      <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
        <Text style={styles.forgotPassword}>forgotten password?</Text>
      </TouchableOpacity>
    </View>

    <TouchableOpacity style={styles.loginButton}>
      <Text style={styles.loginButtonText}>Log in</Text>
    </TouchableOpacity>

    <Text style={styles.orText}>OR</Text>

    <View style={styles.socialLoginContainer}>
      <TouchableOpacity style={styles.socialLoginButton}>
        <Image source={require('../assets/fb.png')} style={styles.socialIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialLoginButton}>
        <Image source={require('../assets/gmail.png')} style={styles.socialIcon} />
      </TouchableOpacity>
    </View>

    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
      <Text style={styles.signUpText}>Create new account? <Text style={styles.signUpLink}>Sign up</Text></Text>
    </TouchableOpacity>
  </View>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  padding: 20,
  backgroundColor: '#f8f9fa',
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
  marginBottom: 20,
},
phoneInput: {
  flexDirection: 'row',
  alignItems: 'center',
  borderWidth: 1,
  borderColor: '#ced4da',
  borderRadius: 8,
  paddingHorizontal: 10,
  marginBottom: 20,
},
countryCode: {
  fontSize: 16,
  marginRight: 10,
},
phoneNumberInput: {
  flex: 1,
  fontSize: 16,
  paddingVertical: 10,
},
passwordInput: {
  flexDirection: 'row',
  alignItems: 'center',
  borderWidth: 1,
  borderColor: '#ced4da',
  borderRadius: 8,
  paddingHorizontal: 10,
},
textInput: {
  flex: 1,
  fontSize: 16,
  paddingVertical: 10,
  marginLeft: 10,
},
rememberMeContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 20,
},
checkbox: {
  padding: 0,
  marginRight: 10,
},
forgotPassword: {
  marginLeft: 'auto',
  color: '#007bff',
  textDecorationLine: 'underline',
},
loginButton: {
  backgroundColor: '#ff416c',
  borderRadius: 8,
  paddingVertical: 15,
  alignItems: 'center',
  marginBottom: 20,
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
});

export default LoginScreen;
*/}


// <TouchableWithoutFeedback style={styles.phoneInput} onPress={dismissKeyboard}>
           
          //   <TextInput
          //   style={styles.phoneNumberInput}
          //   placeholder="331 623 8413"
          //   keyboardType="phone-pad"
          //   value={phone}
          //   onChangeText={setPhone}
          // />
          // </TouchableWithoutFeedback>
          // <View style={styles.passwordInput}>
          // <MaterialCommunityIcons name="key-variant" color='#33196B' size={25} />
          // <TextInput
          //     style={styles.textInput}
          //     placeholder="Password"
          //     secureTextEntry={secureTextEntry}
          //     value={password}
          //     onChangeText={setPassword}
          //   />
          //   <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)}>
          //   <MaterialCommunityIcons  name={secureTextEntry ? "eye-off" : "eye"} type="feather" size={20} color='#33196B'  />
          //   </TouchableOpacity>
          // </View>