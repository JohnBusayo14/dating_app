import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, FlatList } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Navigation from '../components/Navigation';


const spotlightData = [
  { id: '1', image: require('../assets/Ellipse 444.png') },
  { id: '2', image: require('../assets/Ellipse 444.png') },
  { id: '3', image: require('../assets/Ellipse 444.png') },
  { id: '4', image: require('../assets/Ellipse 444.png') },
  { id: '5', image: require('../assets/Ellipse 444.png') },
];

const forYouData = [
  { id: '1', name: 'Belle Benson', age: 28, image: require('../assets/stroke.png'), viewers: 35 },
  { id: '2', name: 'Belle Benson', age: 28, image: require('../assets/stroke.png'), viewers: 35 },
  { id: '3', name: 'Belle Benson', age: 28, image: require('../assets/stroke.png'), viewers: 35 },
  { id: '4', name: 'Belle Benson', age: 28, image: require('../assets/stroke.png'), viewers: 35 },
];

const Live = ({navigation}) => {

  const handlePress = (item) => {
    navigation.navigate('message', { item });
  };


  return (
    <View style={styles.container}>
      <View className=' mt-5' style={styles.header}>

        <Text style={styles.title}>Live</Text>
        <View style={styles.headerIcons}>
        <MaterialCommunityIcons name="bell-outline" color='#33196B' size={25}
        onPress={() => navigation.navigate('notification')} />
        </View>
      </View>

      <View className=' min-w-full my-5 justify-between flex flex-row items-center overflow-auto mx-2'>
      <MaterialCommunityIcons name="magnify" color='#33196B' size={25} className=''/>
        
      <View className='flex flex-row gap-4'>
      <Text style={[styles.tab, styles.activeTab]}>For you</Text>
        <Text style={styles.tab}>Trending</Text>
        <Text style={styles.tab}>Nearby</Text>
        <Text style={styles.tab}>Favorites</Text>
        <Text style={styles.tab}>Vs</Text>
      </View>
      </View>

      <ScrollView>
        <Image source={require('../assets/rec.png')} style={styles.bannerImage} />
        <View style={styles.spotlightContainer} className='my-3'>
          <Text className='font-[500] text-[13px] text-[#645290]'>Recents</Text>
          <MaterialCommunityIcons name="tune-vertical" color='#33196B' size={18} className=''/>
          </View>
        <FlatList
          horizontal
          data={spotlightData}
          renderItem={({ item }) => (
            <Image source={item.image} style={styles.spotlightImage} />
          )}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          style={styles.spotlightList}
        />

        <Text style={styles.forYouTitle}>For you</Text>
        <FlatList
          data={forYouData}
          renderItem={({ item }) => (
           
            <TouchableOpacity style={styles.forYouItem} onPress={() => handlePress(item)}>
              <Image source={item.image} style={styles.forYouImage} />
              <Text style={styles.forYouName}>{item.name}, {item.age}</Text>
              <Text style={styles.forYouViewers}>{item.viewers} viewers</Text>
            </TouchableOpacity>
            
          )}
          keyExtractor={item => item.id}
          numColumns={2}
          columnWrapperStyle={styles.forYouList}
          style={styles.forYouFlatList}
        />
      </ScrollView>
      {/*<LinearGradient
      colors={['#FA457E', '#7B49FF']}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      style={styles.goLiveButton}
      className=' w-[35%]  flex flex-row justify-center items-center'
      onPress={() => navigation.navigate('livecall')}
    >
     
        <Text className=' py-1' style={styles.goLiveButtonText}  onPress={() => navigation.navigate('livecall1')}>GO LIVE!</Text>
      </LinearGradient>}

      {/*<View style={styles.bottomNav}>
      <MaterialCommunityIcons name="map-marker-circle" color='#33196B' size={25}  onPress={() => navigation.navigate('randomcall')} />
      <MaterialCommunityIcons name="account-outline" color='#33196B' size={25} />
      <MaterialCommunityIcons name="play-circle-outline" color='#33196B' size={25} />
      <MaterialCommunityIcons name="chat-processing" color='#33196B' size={25} />
      <MaterialCommunityIcons name="phone-outline" color='#33196B' size={25}  onPress={() => navigation.navigate('call')} />

        </View>*/}
     

       <View style={styles.navigationContainer}>
        <Navigation navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F8FB',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  navigationContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 16,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
    backgroundColor: '#fff',
  },
  tab: {
    fontSize: 16,
    color: '#777',
  },
  activeTab: {
    color: '#4E4EAD',
    fontWeight: 'bold',
  },
  bannerImage: {
    width: '100%',
    height: 150,
  },
  spotlightContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  spotlightTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewAll: {
    fontSize: 16,
    color: '#4E4EAD',
  },
  spotlightList: {
    paddingLeft: 16,
  },
  spotlightImage: {
    width: 40,
    height: 40,
    borderRadius: 30,
    marginRight: 10,
    gap:20
  },
  forYouTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  forYouFlatList: {
    paddingHorizontal: 16,
  },
  forYouList: {
    justifyContent: 'space-between',
  },
  forYouItem: {
    width: '48%',
    marginBottom: 16,
  },
  forYouImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  forYouName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  forYouViewers: {
    fontSize: 14,
    color: '#777',
  },
  goLiveButton: {
    backgroundColor: '#4E4EAD',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 90,
    alignSelf: 'center',
  },
  goLiveButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#DDD',
  },
  navIcon: {
    width: 24,
    height: 24,
  },
});

export default Live;









{/*import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Loginscreen from './Loginscreen';
import Introscreen from './Introscreen';
import Signup from './Signup';
import { View,Text, Dimensions} from 'react-native';
import Foryou from './Foryou';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createMaterialTopTabNavigator();

function Live({navigation}) {


    const { width } = Dimensions.get('window');
  const textSize = width * 0.06; // Adjust this factor as needed
  return (

    <View className=' bg-white' style={{width:width}}>
    

    <View className=" w-full h-full mx-auto bg-white" style={{width:width*0.9}}>
    
    <View className=' w-full flex flex-row justify-between items-center'>
    <Text className='font-bold pt-3 text-[#645290]' style={{fontSize:width*0.065}}>Live</Text>
    <MaterialCommunityIcons name="bell" color='#645290' size={20}  onPress={() => navigation.navigate('notification')} />
    </View>
    
       
    
    <Tab.Navigator
        initialRouteName="foryou"
        tabBarOptions={{
            labelStyle: {
              color: 'black', // Set the color of the tab label to black
            },
            activeTintColor: 'red', // Set the color of the active tab label text to red
            tabStyle: {
              borderBottomWidth:0.2, // Set a very small value for the thickness of the underline stroke
              borderBottomColor: 'white', // Set the color of the underline stroke
            },
          }}
          screenOptions={{
            tabBarLabelStyle: {
              fontSize: 16, // Set the font size of the tab label
              fontWeight: 'bold', // Set the font weight of the tab label
              textTransform: 'capitalize', // Set the text transform to capitalize
            },
          }}
        
      >
        <Tab.Screen
          name="foryou"
          component={Foryou}
          options={{ tabBarLabel: 'For you', }}
        />
        <Tab.Screen
          name="intro"
          component={Introscreen}
          options={{ tabBarLabel: 'Updates' }}
        />
        <Tab.Screen
          name="signup"
          component={Signup}
          options={{ tabBarLabel: 'Profile' }}
        />
      </Tab.Navigator>
        
        </View>
    </View>
   
   
  );
}

export default Live;*/}