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

export default function App({ navigation }) {

  const Day = ({dayInfo}) => (
    <Pressable style={styles.button} onPress={() => navigation.push('Day')}>
      <Text>day: {dayInfo.id}</Text>
      <Text>type: {dayInfo.type}</Text>
    </Pressable>
  )

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
    margin: 20,
    marginBottom: 50,
    width: 150,
  },
});
