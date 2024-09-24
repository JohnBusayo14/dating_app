import React, { useState } from 'react';
import { View, Text, Image, TextInput, FlatList, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import Navigation from '../components/Navigation';





const data = [
  { id: '1', name: 'Alex Linderson', message: 'How are you today?', time: '2 min ago', image: require('../assets/call1.png'), unread: 5 },
  { id: '2', name: 'Team Align', message: "Don't miss to attend the meeting.", time: '2 min ago', image: require('../assets/call1.png'), unread: 4 },
  { id: '3', name: 'John Ahraham', message: 'Hey! Can you join the meeting?', time: '2 min ago', image: require('../assets/call1.png'), unread: 0 },
  { id: '4', name: 'Sabila Sayma', message: 'How are you today?', time: '2 min ago', image: require('../assets/call1.png'), unread: 0 },
  { id: '5', name: 'John Borino', message: 'Have a good day 🌸', time: '2 min ago', image: require('../assets/call1.png'), unread: 0 },
  { id: '6', name: 'Angel Dayna', message: 'How are you today?', time: '2 min ago', image: require('../assets/call1.png'), unread: 0 },
  { id: '1', name: 'Alex Linderson', message: 'How are you today?', time: '2 min ago', image: require('../assets/call1.png'), unread: 5 },
  { id: '2', name: 'Team Align', message: "Don't miss to attend the meeting.", time: '2 min ago', image: require('../assets/call1.png'), unread: 4 },
  { id: '3', name: 'John Ahraham', message: 'Hey! Can you join the meeting?', time: '2 min ago', image: require('../assets/call1.png'), unread: 0 },
  { id: '4', name: 'Sabila Sayma', message: 'How are you today?', time: '2 min ago', image: require('../assets/call1.png'), unread: 0 },
  { id: '5', name: 'John Borino', message: 'Have a good day 🌸', time: '2 min ago', image: require('../assets/call1.png'), unread: 0 },
  { id: '6', name: 'Angel Dayna', message: 'How are you today?', time: '2 min ago', image: require('../assets/call1.png'), unread: 0 },
];


const Newchat = ({navigation}) => {

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
    navigation.navigate('message', { item });
  };



  const renderItem = ({ item }) => (
        <View style={styles.chatItem} onPress={() => handlePress(item)}>
          <Image source={item.image} style={styles.chatImage} />
          <View style={styles.chatDetails}>
            <Text style={styles.chatName} className='text-white'>{item.name}</Text>
            <Text  className=' text-white'>{item.message}</Text>
          </View>
          <View style={styles.chatMeta}>
            <Text  className='text-white'>{item.time}</Text>
            {item.unread > 0 && (
              <View style={styles.unreadBadge}>
                <Text style={styles.unreadText} className='text-white'>{item.unread}</Text>
              </View>
            )}
          </View>
        </View>
      );

  return (
    <View style={styles.container} className=' mt-5 bg-white'>
    <StatusBar backgroundColor="white"  barStyle="dark-content" /> 

      <View style={styles.header} className=' bg-white'>
        <Text style={styles.headerTitle}>Chat</Text>
        <TouchableOpacity>
        <MaterialCommunityIcons name="bell-outline" color='black' size={20} onPress={() => navigation.navigate('notification')}/>
        </TouchableOpacity>
      </View>
      <Text className='font-[500] text-[15px] leading-[18.5px] text-[#47307A] px-4'>Live and trending</Text>

      <View style={styles.trendingSection} className=' bg-white'>
        <FlatList
          data={[1, 2, 3, 4, 5]}
          horizontal
          showsVerticalScrollIndicator={false} // Hide vertical scroll indicator line
          showsHorizontalScrollIndicator={false} // Hide horizontal scroll indicator
          renderItem={({ item }) => (
            <Image source={ require('../assets/Re3.png') } className='mx-2' />
          )}
          keyExtractor={(item) => item.toString()}
        />
      </View>

      <View className=' w-[90%] h-[38px] mx-auto flex flex-row justify-between px-5 bg-white items-center rounded-3xl border border-1 border-[#A135DC]'>
     <View className='flex flex-row space-x-1'>
     <MaterialCommunityIcons name="magnify" color='gray' size={30} />
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

      <Text className='text-[15px] font-[600] text-[#47307A] px-4 py-1'>My Chats</Text>

      <View className=' w-full min-h-full rounded-t-3xl  mt-3 bg-[#2B3A91]'>
      
      <View className='flex flex-row w-[88%] h-[23px] my-3 justify-between items-center mx-auto'>
     <View className='flex flex-row gap-16 items-center'>
     <MaterialCommunityIcons name="star-circle" color='orange' size={25}  />
     <Text className='text-[15px] font-[500] text-[#F8F5FF]'>Favorites</Text>
     </View>

<Text className='text-[15px] font-[500] text-[#EA2114]' onPress={() => navigation.navigate('favourite')}>23</Text>
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
noResultsText: {
    textAlign: 'center',
    color: '#FFF',
    marginTop: 20,
    fontSize: 20,
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
  navigationContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    
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



  curvedTop: {
    height: 100,
    backgroundColor: 'blue', // Adjust background color as needed
    borderBottomLeftRadius: 200, // Adjust the radius to control the curve
    borderBottomRightRadius: 200, // Adjust the radius to control the curve
    transform: [{ scaleX: 2 }], // Adjust the scale to stretch the semi-circle horizontally
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
  headerIcon: {
    width: 20,
    height: 20,
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
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 25,
    paddingHorizontal: 16,
    height: 40,
  },
  sectionTitle: {
    padding: 16,
    fontSize: 18,
    fontWeight: 'bold',
  },
  chatList: {
    flex: 1,
    
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#4E4EAD',
    marginVertical: 4,
    borderRadius: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  chatText: {
    flex: 1,
  },
  chatName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
 
  chatTimeContainer: {
    alignItems: 'flex-end',
  },
  chatTime: {
    color: '#FFF',
    marginBottom: 4,
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
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: '#4E4EAD',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  navIcon: {
    width: 30,
    height: 30,
  },



  myChats: {
    marginHorizontal: 20,
    marginVertical: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  chatList: {
    paddingHorizontal: 20,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomColor: '#f1f1f1',
  },
  chatImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  chatDetails: {
    flex: 1,
    marginLeft: 10,
  },
  chatName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  chatMessage: {
    color: '#888',
  },
  chatMeta: {
    alignItems: 'flex-end',
  },
  chatTime: {
    color: '#888',
  },
  unreadBadge: {
    backgroundColor: '#ff3b30',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginTop: 5,
  },
  unreadText: {
    color: '#fff',
    fontSize: 12,
  },
});

export default Newchat;



// import React from 'react';
// import { View, Text, StyleSheet, FlatList, Image, TextInput, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

// const data = [
//   { id: '1', name: 'Alex Linderson', message: 'How are you today?', time: '2 min ago', image: require('../assets/call1.png'), unread: 5 },
//   { id: '2', name: 'Team Align', message: "Don't miss to attend the meeting.", time: '2 min ago', image: require('../assets/call1.png'), unread: 4 },
//   { id: '3', name: 'John Ahraham', message: 'Hey! Can you join the meeting?', time: '2 min ago', image: require('../assets/call1.png'), unread: 0 },
//   { id: '4', name: 'Sabila Sayma', message: 'How are you today?', time: '2 min ago', image: require('../assets/call1.png'), unread: 0 },
//   { id: '5', name: 'John Borino', message: 'Have a good day 🌸', time: '2 min ago', image: require('../assets/call1.png'), unread: 0 },
//   { id: '6', name: 'Angel Dayna', message: 'How are you today?', time: '2 min ago', image: require('../assets/call1.png'), unread: 0 },
// ];

// const ChatScreen = () => {
//   const renderItem = ({ item }) => (
//     <View style={styles.chatItem}>
//       <Image source={item.image} style={styles.chatImage} />
//       <View style={styles.chatDetails}>
//         <Text style={styles.chatName}>{item.name}</Text>
//         <Text style={styles.chatMessage}>{item.message}</Text>
//       </View>
//       <View style={styles.chatMeta}>
//         <Text style={styles.chatTime}>{item.time}</Text>
//         {item.unread > 0 && (
//           <View style={styles.unreadBadge}>
//             <Text style={styles.unreadText}>{item.unread}</Text>
//           </View>
//         )}
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>Chat</Text>
//         <Icon name="notifications-outline" size={24} color="#000" />
//       </View>
//       <View style={styles.trending}>
//         {/* Trending images section */}
//         <FlatList
//           horizontal
//           data={data}
//           renderItem={({ item }) => <Image source={item.image} style={styles.trendingImage} />}
//           keyExtractor={item => item.id}
//           showsHorizontalScrollIndicator={false}
//         />
//       </View>
//       <View style={styles.searchContainer}>
//         <Icon name="search" size={20} color="#999" style={styles.searchIcon} />
//         <TextInput placeholder="Search" style={styles.searchInput} />
//         <Icon name="options-outline" size={20} color="#999" style={styles.optionsIcon} />
//       </View>
//       <Text style={styles.myChats}>My Chats</Text>
//       <FlatList
//         data={data}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//         style={styles.chatList}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     paddingTop: 50,
//     paddingBottom: 10,
//     backgroundColor: '#fff',
//   },
//   headerTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   trending: {
//     paddingVertical: 10,
//   },
//   trendingImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     marginHorizontal: 5,
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginHorizontal: 20,
//     marginVertical: 10,
//     backgroundColor: '#f1f1f1',
//     borderRadius: 20,
//     paddingHorizontal: 10,
//   },
//   searchIcon: {
//     marginRight: 10,
//   },
//   searchInput: {
//     flex: 1,
//     height: 40,
//   },
//   optionsIcon: {
//     marginLeft: 10,
//   },
//   myChats: {
//     marginHorizontal: 20,
//     marginVertical: 10,
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   chatList: {
//     paddingHorizontal: 20,
//   },
//   chatItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f1f1f1',
//   },
//   chatImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//   },
//   chatDetails: {
//     flex: 1,
//     marginLeft: 10,
//   },
//   chatName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   chatMessage: {
//     color: '#888',
//   },
//   chatMeta: {
//     alignItems: 'flex-end',
//   },
//   chatTime: {
//     color: '#888',
//   },
//   unreadBadge: {
//     backgroundColor: '#ff3b30',
//     borderRadius: 10,
//     paddingHorizontal: 5,
//     paddingVertical: 2,
//     marginTop: 5,
//   },
//   unreadText: {
//     color: '#fff',
//     fontSize: 12,
//   },
// });

// export default ChatScreen;
