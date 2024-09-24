


import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import Navigation from '../components/Navigation';

const callData = [
  { id: '1', name: 'Team Align', time: 'Today, 09:30 AM', avatar: require('../assets/call1.png') },
  { id: '2', name: 'Jhon Abraham', time: 'Today, 07:30 AM', avatar: require('../assets/call2.png') },
  { id: '3', name: 'Sabila Sayma', time: 'Yesterday, 07:35 PM', avatar: require('../assets/call3.png') },
  { id: '4', name: 'Alex Linderson', time: 'Monday, 09:30 AM', avatar: require('../assets/call1.png') },
  { id: '5', name: 'Jhon Abraham', time: '03/07/22, 07:30 AM', avatar: require('../assets/call2.png') },
  { id: '6', name: 'John Borino', time: 'Monday, 09:30 AM', avatar: require('../assets/call3.png') },
  { id: '7', name: 'Sabila Sayma', time: 'Yesterday, 07:35 PM', avatar: require('../assets/call1.png') },
];

const CallsScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(callData);
  const navigation = useNavigation();

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      const filtered = callData.filter(item => 
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(callData);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.callItem} onPress={() => navigation.navigate('incomingcall')}>
      <Image source={item.avatar} style={styles.avatar} />
      <View style={styles.callInfo}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
      <View style={styles.callIcons}>
        <TouchableOpacity>
          <Icon name="call-outline" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="videocam-outline" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Calls</Text>
        <MaterialCommunityIcons name="bell-outline" color='black' size={20} onPress={() => navigation.navigate('notification')} />
      </View>
      
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <MaterialCommunityIcons name="magnify" color='gray' size={25} />
          <TextInput
            style={styles.input}
            placeholder="Search"
            placeholderTextColor="#888"
            value={searchQuery}
            onChangeText={handleSearch}
          />
        </View>
        <MaterialCommunityIcons name="tune" color='#33196B' size={20} />
      </View>
      
      <View style={styles.listContainer}>
        {filteredData.length > 0 ? (
          <FlatList
            data={filteredData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <View style={styles.noResultsContainer}>
            <Text style={styles.noResultsText}>No users found</Text>
          </View>
        )}
      </View>
      
      <View style={styles.navigationContainer}>
        <Navigation navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 20,
  },
  title: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchContainer: {
    width: '90%',
    height: 38,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 30,
    borderColor: '#A135DC',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    marginLeft: 5,
    fontSize: 16,
    color: '#000',
    width: 250,
  },
  listContainer: {
    width: '100%',
    backgroundColor: '#2B3A91',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 10,
    flex: 1,
  },
  noResultsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noResultsText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  callItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  callInfo: {
    flex: 1,
    marginLeft: 15,
  },
  name: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  time: {
    color: '#ccc',
    fontSize: 14,
  },
  callIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 50,
  },
  navigationContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});

export default CallsScreen;

