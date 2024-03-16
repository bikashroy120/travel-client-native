import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import OnBoarding from './Apps/screens/OnBoarding';
import BottomNavigation from './Apps/navigition/BottomNavigation';


const Stack = createNativeStackNavigator()
export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='onboard' component={OnBoarding} options={{headerShown:false}} />
            <Stack.Screen name='Bottom' component={BottomNavigation} options={{headerShown:false}} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
