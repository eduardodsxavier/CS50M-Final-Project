import './gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


import { HomeScreen } from './screens/HomeScreen'
import { GraphScreen } from './screens/GraphScreen'
import { DayScreen } from './screens/DayScreen'
import { ExerciseScreen } from './screens/ExerciseScreen'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Screen name='Home' component={HomeScreen} /> 
      <Tab.Screen name='Graph' component={GraphScreen} />
    </NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Day" component={DayScreen} />
      <Stack.Screen name="Exercise" component={ExerciseScreen} />
    </Stack.Navigator>
  );
}
