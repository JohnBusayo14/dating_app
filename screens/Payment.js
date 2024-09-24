import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const paymentMethods = [
  { name: 'HDFC Credit Card', last4: '5229', type: 'MasterCard', logo: require('../assets/master.png') },
  { name: 'ICICI Credit Card', last4: '4421', type: 'Visa', logo: require('../assets/visa.png') },
];

const Payment = ({navigation}) => {
  return (
    <View style={styles.container}>
    <LinearGradient
    colors={['#97ECFF','#FFFFFF' ]}
    locations={[0, 0.2]}
    style={{flex:1}}
    className=' p-6'
  >
      <TouchableOpacity className='w-full flex flex-col justify-start items-start mt-4'>
      <MaterialCommunityIcons name="arrow-left-thin" color='black' size={28}  onPress={() => navigation.goBack()}/>
      <Text style={styles.title}>Payment</Text>
      <Text style={styles.subtitle}>Complete your payment to enjoy the most</Text>
      </TouchableOpacity>
      

      <Text style={styles.sectionTitle}>Saved payment options</Text>
      {paymentMethods.map((method, index) => (
        <View key={index} style={styles.paymentMethod}>
          <View style={styles.paymentInfo}>
            <Text style={styles.paymentName}>{method.name}</Text>
            <Text style={styles.paymentLast4}>**** **** **** {method.last4}</Text>
          </View>
          <Image className=' mx-5' source={method.logo} style={styles.paymentLogo} />
        </View>
      ))}

     <View className=' flex flex-row justify-between items-center'>
     <Text style={styles.otherOption}>UPI Payment</Text>
     <Text style={styles.linkedText}>Linked</Text>
     </View>
      <Text style={styles.otherOption}>PayTM / Wallets</Text>
      <Text style={styles.otherOption}>Net Banking</Text>

      
<TouchableOpacity className='w-8 h-8 rounded-full bg-[#DA235A] mx-auto my-5 flex flex-row justify-center items-center'>
<MaterialCommunityIcons name="plus" color='white' size={28} />
</TouchableOpacity>
      
        <Text className='text-center py-6' style={styles.addPaymentText}>Add New Payment Option</Text>
    
        <LinearGradient
        colors={['#FA457E', '#7B49FF']}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradient}
        className=' w-[60%] h-14 mx-auto bg-black py-2 rounded-3xl flex flex-row justify-center items-center'
        onPress={() => navigation.navigate('payment')}
        >
        <Text style={styles.payNowText}>Pay Now</Text>
    </LinearGradient>
    </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#F6F8FB',
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: 1,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
    color: '#33196B',
  },
  subtitle: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#33196B',
  },
  paymentMethod: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#FFF',
  },
  paymentInfo: {},
  paymentName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  paymentLast4: {
    fontSize: 14,
    color: '#777',
  },
  
  otherOption: {
    fontSize: 16,
    color: '#333',
    paddingVertical: 10,
  },
  linkedText: {
    color: '#4E4EAD',
  },
  addPaymentButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#FF3B30',
    borderRadius: 10,
    marginVertical: 20,
  },
  addPaymentText: {
    color: '#FF3B30',
    fontSize: 16,
  },
  payNowButton: {
    backgroundColor: '#FF3B30',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  payNowText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Payment;
