import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, FlatList, TextInput } from 'react-native';

let name = "PULL UP"
let type = "PUSH"

const DATA = [
  {
    id:1,
    reps: 10,
    weight: 10,
  },
  {
    id:2,
    reps: 10,
    weight: 10,

  },
  {
    id:3,
    reps: 12,
    weight: 20,
  },
  {
    id:4,
    reps: 8,
    weight: 20,
  },
]

export default function App() {

  const Set = ({SetInfo}) => (
    <View style={styles.Flatlist}>
      <Text>set: {SetInfo.id}</Text>
      <Text>reps: {SetInfo.reps}</Text>
      <Text>weight: {SetInfo.weight}</Text>
    </View>
  )

  return (
    <View style={styles.Margin}>
      <TextInput
	value={name}
	onChangeText={(nameChange) => {
	  name = nameChange
	}}
      />
      <TextInput
	value={type}
	onChangeText={(typeChange) => {
	  type = typeChange 
	}}/>
      <Text>Sets: </Text>
      <FlatList 
	data={DATA}
	renderItem={({item}) => <Set SetInfo={item}/>}
        keyExtractor={item => item.id}
      />
      <Pressable>
	<Text>Add Set</Text>
      </Pressable>
    </View>
  );
}


const styles = StyleSheet.create({
  Margin: {
    margin: 20,
  },
  Flatlist: {
    margin: 20,
    marginBottom: 50,
    width: 150,
  },
})
