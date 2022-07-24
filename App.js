import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { store } from './store'
import { Provider } from 'react-redux'

import { useFonts } from 'expo-font';

import HomeScreen from './Screens/HomeScreen';
import StartScreen from './Screens/StartScreen';
import SettingsScreen from './Screens/SettingsScreen';
import ProfileScreen from './Screens/ProfileScreen';
import CallScreen from './Screens/CallScreen';
import ChatScreen from './Screens/ChatScreen';


const Stack = createNativeStackNavigator();


export default function App() {

  const [loaded] = useFonts({
    // 'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
    // 'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
    // 'Lato-Thin': require('./assets/fonts/Lato-Thin.ttf'),
  });
  


  return (
    <NavigationContainer>
      <Provider store={store}>
      <Stack.Navigator>
        <Stack.Screen name="StartScreen" component={StartScreen}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
          //headerShown: false,
          // presentation: 'modal'
        }} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{
          headerShown: false,
          // presentation: 'modal'
        }} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{
          headerShown: false,
          // presentation: 'modal'
        }} />
        <Stack.Screen name="CallScreen" component={CallScreen} options={{
          headerShown: false,
          presentation: 'fullScreenModal'
        }} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} options={{
          headerShown: false,
          // presentation: 'modal'
        }} />
      </Stack.Navigator>
      </Provider>
  </NavigationContainer>
  );
}