import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native';

const DATA = [
  {
    id:1,
    type:"push",
  },
  {
    id:2,
    type:"pull",
  },
  {
    id:3,
    type:"leg",
  },
  {
    id:4,
    type:"push",
  },
]

const Day = ({dayInfo}) => (
  <View>
    <Text>day: {dayInfo.id} type: {dayInfo.type}</Text>
  </View>
) 

export default function App({ navigation }) {
  return (
    <View>
      <FlatList 
	data={DATA}
	renderItem={({item}) => <Day dayInfo={item}/>}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button : {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    marginBottom: 50,
    width: 150,
    alignItems: 'center',
  },
});
