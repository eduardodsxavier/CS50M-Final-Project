import './gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux'

import Tabs from './Tabs'
import DayScreen from './screens/DayScreen'
import ExerciseScreen from './screens/ExerciseScreen'

import store from './store'

const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="App_name.txt" component={Tabs} />
        <Stack.Screen name="Day" component={DayScreen} />
        <Stack.Screen name="Exercise" component={ExerciseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
