import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Navigation from '../components/Navigation';

const spotlightData = [
  { id: '1', image: require('../assets/Ellipse 444.png') },
  { id: '2', image: require('../assets/Ellipse 444.png') },
  { id: '3', image: require('../assets/Ellipse 444.png') },
  { id: '4', image: require('../assets/Ellipse 444.png') },
  { id: '5', image: require('../assets/Ellipse 444.png') },
];

// Updated forYouData to have different individuals
const forYouData = [
  { id: '1', name: 'Belle Benson', age: 28, image: require('../assets/belle.png'), viewers: 35 },
  { id: '2', name: 'Alex Johnson', age: 30, image: require('../assets/alex.png'), viewers: 40 },
  { id: '3', name: 'Sarah Lee', age: 24, image: require('../assets/sarah.png'), viewers: 25 },
  { id: '4', name: 'John Smith', age: 32, image: require('../assets/john.png'), viewers: 50 },
];

const Live = ({ navigation }) => {
  
  // handlePress to navigate to ChatScreen with dynamic data
  const handlePress = (item) => {
    navigation.navigate('ChatScreen', { name: item.name, image: item.image });
  };

  return (
    <View style={styles.container}>
      <View className='mt-5' style={styles.header}>
        <Text style={styles.title}>Live</Text>
        <View style={styles.headerIcons}>
          <MaterialCommunityIcons 
            name="bell-outline" 
            color='#33196B' 
            size={25} 
            onPress={() => navigation.navigate('notification')} 
          />
        </View>
      </View>

      <View className='min-w-full my-5 justify-between flex flex-row items-center overflow-auto mx-2'>
        <MaterialCommunityIcons name="magnify" color='#33196B' size={25} />
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
          <MaterialCommunityIcons name="tune-vertical" color='#33196B' size={18} />
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
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
  spotlightImage: {
    width: 40,
    height: 40,
    borderRadius: 30,
    marginRight: 10,
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
  navigationContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});

export default Live;
