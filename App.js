import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { store } from './store'
import { Provider } from 'react-redux'

import { useFonts } from 'expo-font';

import HomeScreen from './Screens/HomeScreen';
import StartScreen from './Screens/StartScreen';


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
      </Stack.Navigator>
      </Provider>
  </NavigationContainer>
  );
}