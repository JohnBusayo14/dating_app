import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Live from './Live';
import Homescreen from './Homescreen';
import Splashscreens from './Splashscreens';
import Loginscreen from './Loginscreen';
import Reset from './Reset';
import Signup from './Signup';
import Newchat from './Newchat';
import CallsScreen from './CallsScreen';
import RandomCallScreen from './RandomCallScreen';

const Tab = createBottomTabNavigator();

function Livetab() {
  return (
    <Tab.Navigator
      initialRouteName="live"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        headerShown: false, // This will remove the header from all screens
      }}
    >
      <Tab.Screen
        name="randonmcall"
        component={RandomCallScreen}
        options={{
         
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="map-marker-circle" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="splash"
        component={Splashscreens}
        options={{
          
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="live"
        component={Live}
        options={{
          
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="play-circle-outline" color='' size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="newchat"
        component={Newchat}
        options={{
        
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="chat-processing" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="call"
        component={CallsScreen}
        options={{
         
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="phone-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Livetab;
