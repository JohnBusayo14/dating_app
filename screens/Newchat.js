import React, { useState } from 'react'; 
import { View, Text, Image, TextInput, FlatList, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Navigation from '../components/Navigation';

const data = [
  { id: '1', name: 'Alex Linderson', message: 'How are you today?', time: '2 min ago', image: require('../assets/call1.png'), unread: 5 },
  { id: '2', name: 'Team Align', message: "Don't miss to attend the meeting.", time: '2 min ago', image: require('../assets/call1.png'), unread: 4 },
  { id: '3', name: 'John Ahraham', message: 'Hey! Can you join the meeting?', time: '2 min ago', image: require('../assets/call1.png'), unread: 0 },
  { id: '4', name: 'Sabila Sayma', message: 'How are you today?', time: '2 min ago', image: require('../assets/call1.png'), unread: 0 },
  { id: '5', name: 'John Borino', message: 'Have a good day 🌸', time: '2 min ago', image: require('../assets/call1.png'), unread: 0 },
  { id: '6', name: 'Angel Dayna', message: 'How are you today?', time: '2 min ago', image: require('../assets/call1.png'), unread: 0 },
];

const Newchat = ({ navigation }) => {

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      const results = data.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.message.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(results);
    } else {
      setFilteredData(data);
    }
  };

  const handlePress = (item) => {
    // Navigate to ChatScreen and pass the selected chat data
    navigation.navigate('ChatScreen', { name: item.name, message: item.message, image: item.image });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.chatItem} onPress={() => handlePress(item)}>
      <Image source={item.image} style={styles.chatImage} />
      <View style={styles.chatDetails}>
        <Text style={styles.chatName}>{item.name}</Text>
        <Text style={styles.chatMessage}>{item.message}</Text>
      </View>
      <View style={styles.chatMeta}>
        <Text>{item.time}</Text>
        {item.unread > 0 && (
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadText}>{item.unread}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Chat</Text>
        <TouchableOpacity>
          <MaterialCommunityIcons name="bell-outline" color="black" size={20} onPress={() => navigation.navigate('notification')} />
        </TouchableOpacity>
      </View>

      <Text className="font-[500] text-[15px] leading-[18.5px] text-[#47307A] px-4">Live and trending</Text>

      <View style={styles.trendingSection}>
        <FlatList
          data={[1, 2, 3, 4, 5]}
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Image source={require('../assets/Re3.png')} style={styles.trendingImage} />
          )}
          keyExtractor={(item) => item.toString()}
        />
      </View>

      <View style={styles.searchContainer}>
        <MaterialCommunityIcons name="magnify" color="gray" size={30} />
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor="#888"
          value={searchQuery}
          onChangeText={handleSearch}
        />
        <MaterialCommunityIcons name="tune" color="#33196B" size={20} />
      </View>

      <Text className="text-[15px] font-[600] text-[#47307A] px-4 py-1">My Chats</Text>

      <View style={styles.chatSection}>
        <View style={styles.favorites}>
          <MaterialCommunityIcons name="star-circle" color="orange" size={25} />
          <Text className="text-[15px] font-[500] text-[#F8F5FF]">Favorites</Text>
          <Text className="text-[15px] font-[500] text-[#EA2114]" onPress={() => navigation.navigate('favourite')}>23</Text>
        </View>

        {filteredData.length > 0 ? (
          <FlatList
            data={filteredData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            style={styles.chatList}
          />
        ) : (
          <Text style={styles.noResultsText}>No chats found</Text>
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
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFF',
    elevation: 2,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  trendingSection: {
    height: 100,
    padding: 8,
  },
  trendingImage: {
    width: 60,
    height: 60,
    borderRadius: 40,
    marginHorizontal: 4,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFF',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 25,
    paddingHorizontal: 16,
    height: 40,
  },
  chatSection: {
    flex: 1,
    backgroundColor: '#2B3A91',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 10,
  },
  favorites: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  chatList: {
    flex: 1,
    paddingHorizontal: 20,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#4E4EAD',
    marginVertical: 4,
    borderRadius: 10,
  },
  chatImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  chatDetails: {
    flex: 1,
  },
  chatName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
  chatMessage: {
    color: '#FFF',
  },
  chatMeta: {
    alignItems: 'flex-end',
  },
  noResultsText: {
    textAlign: 'center',
    color: '#FFF',
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  unreadBadge: {
    backgroundColor: '#FF3B30',
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 6,
  },
  unreadText: {
    color: '#FFF',
    fontSize: 12,
  },
  navigationContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});

export default Newchat;
