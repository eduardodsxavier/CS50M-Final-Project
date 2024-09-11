import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import HomeScreen from './screens/HomeScreen'
import GraphScreen from './screens/GraphScreen'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={HomeScreen} /> 
      <Tab.Screen name='Graph' component={GraphScreen} />
    </Tab.Navigator>
  );
}

