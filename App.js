import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import OnBoarding from './Apps/screens/OnBoarding';
import BottomNavigation from './Apps/navigition/BottomNavigation';
import Search from './Apps/screens/Search';
import CountryDetails from './Apps/screens/CountryDetails';
import Hotels from './Apps/screens/Hotels';
import HotelSDetails from './Apps/screens/HotelSDetails';
import RecommendScreen from './Apps/screens/RecommendScreen';
import PleaseDetails from './Apps/screens/PleaseDetails';
import HotelsSearch from './Apps/screens/HotelsSearch';


const Stack = createNativeStackNavigator()
export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='onboard' component={OnBoarding} options={{headerShown:false}} />
            <Stack.Screen name='Bottom' component={BottomNavigation} options={{headerShown:false}} />
            <Stack.Screen name='Search' component={Search} options={{headerShown:false}} />
            <Stack.Screen name='Recommend' component={RecommendScreen} options={{headerShown:false}} />
            <Stack.Screen name='place-details' component={PleaseDetails} options={{headerShown:false}} />
            <Stack.Screen name='country-details' component={CountryDetails} options={{headerShown:false}} />
            <Stack.Screen name='hotels' component={Hotels} options={{headerShown:false}} />
            <Stack.Screen name='hotels-details' component={HotelSDetails} options={{headerShown:false}} />
            <Stack.Screen name='hotelsSearch' component={HotelsSearch} options={{headerShown:false}} />
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
