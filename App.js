import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";
import Splashscreens from "./screens/Splashscreens";
import Homescreen from "./screens/Homescreen";
import Introscreen from "./screens/Introscreen";
import Loginscreen from "./screens/Loginscreen";
import Reset from "./screens/Reset";
import Verify from "./screens/Verify";
import Signup from "./screens/Signup";
import Location from "./screens/Location";
import Livetab from "./screens/Livetab";
import Live from "./screens/Live";
import Foryou from "./screens/Foryou";
import Videocall from "./screens/Videocall";
import Notification from "./screens/Notification";
import Chat from "./screens/Chat";
import Newchat from "./screens/Newchat";
import Payment from "./screens/Payment";
import Editprofile from "./screens/Editprofile";
import ProfileScreen from "./screens/ProfileScreen";
import PreferencesScreen from "./screens/PreferencesScreen";
import EditProfileScreen from "./screens/EditProfileScreen";
import RandomCallScreen from "./screens/RandomCallScreen";
import ChatScreen from "./screens/ChatScreen"; // Make sure this is correctly imported
import Livecall from "./screens/Livecall";
import VideoCallScreen from "./screens/VideoCallScreen";
import CallsScreen from "./screens/CallsScreen";
import Incomingcall from "./screens/Incomingcall";
import Navigation from "./components/Navigation";
import Favourite from "./screens/Favourite";
import ButtonComponent from "./components/ButtonComponent";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator initialRouteName="splash">
          <Stack.Screen name="Home" component={Homescreen} options={{ headerShown: false }} />
          <Stack.Screen name="splash" component={Splashscreens} options={{ headerShown: false }} />
          <Stack.Screen name="intro" component={Introscreen} options={{ headerShown: false }} />
          <Stack.Screen name="login" component={Loginscreen} options={{ headerShown: false }} />
          <Stack.Screen name="reset" component={Reset} options={{ headerShown: false }} />
          <Stack.Screen name="verify" component={Verify} options={{ headerShown: false }} />
          <Stack.Screen name="signup" component={Signup} options={{ headerShown: false }} />
          <Stack.Screen name="location" component={Location} options={{ headerShown: false }} />
          <Stack.Screen name="livetab" component={Livetab} options={{ headerShown: false }} />
          <Stack.Screen name="live" component={Live} options={{ headerShown: false }} />
          <Stack.Screen name="foryou" component={Foryou} options={{ headerShown: false }} />
          <Stack.Screen name="videocall1" component={Videocall} options={{ headerShown: false }} />
          <Stack.Screen name="notification" component={Notification} options={{ headerShown: false }} />
          <Stack.Screen name="chat" component={Chat} options={{ headerShown: false }} />
          <Stack.Screen name="newchat" component={Newchat} options={{ headerShown: false }} />
          <Stack.Screen name="payment" component={Payment} options={{ headerShown: false }} />
          <Stack.Screen name="edit" component={Editprofile} options={{ headerShown: false }} />
          <Stack.Screen name="profile" component={ProfileScreen} options={{ headerShown: false }} />
          <Stack.Screen name="prefrence" component={PreferencesScreen} options={{ headerShown: false }} />
          <Stack.Screen name="edit2" component={EditProfileScreen} options={{ headerShown: false }} />
          <Stack.Screen name="randomcall" component={RandomCallScreen} options={{ headerShown: false }} />

          {/* Registering ChatScreen correctly with its proper name */}
          <Stack.Screen name="ChatScreen" component={ChatScreen} options={{ headerShown: false }} />

          <Stack.Screen name="livecall" component={Livecall} options={{ headerShown: false }} />
          <Stack.Screen name="videocall" component={VideoCallScreen} options={{ headerShown: false }} />
          <Stack.Screen name="call" component={CallsScreen} options={{ headerShown: false }} />
          <Stack.Screen name="incomingcall" component={Incomingcall} options={{ headerShown: false }} />
          <Stack.Screen name="navigation" component={Navigation} options={{ headerShown: false }} />
          <Stack.Screen name="favourite" component={Favourite} options={{ headerShown: false }} />
          <Stack.Screen name="button" component={ButtonComponent} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
