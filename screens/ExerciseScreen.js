import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, FlatList, TextInput } from 'react-native';
import { useState } from 'react'

export default function App() {

  const [ DATA, setDATA ] = useState([]) 
  const [ name, setName ] = useState("")
  const [ type, setType ] = useState("")
  const [ reps, setReps ] = useState('')
  const [ weight, setWeight ] = useState('')

  function addSet() {
    setDATA([...DATA, {id: DATA.length + 1, reps: reps, weight: weight,},])
  }
 
  const Set = ({setInfo}) => (
    <View style={styles.Flatlist}>
      <Text>set: {setInfo.id}</Text>
      <Text>reps: {setInfo.reps}</Text>
      <Text>weight: {setInfo.weight}</Text>
    </View>
  )

  return (
    <View style={styles.Margin}>
      <TextInput
	value={name}
	onChangeText={setName}
	placeholder="Exercise name"
      />
      <TextInput
	value={type}
	onChangeText={setType}
	placeholder="Exercide type"
      />
      <Pressable onPress={addSet}>
	<Text>Add Set</Text>
      </Pressable>
      <TextInput
	value={reps}
	onChangeText={setReps}
	placeholder="Set repeticions"
      />
      <TextInput
	value={weight}
	onChangeText={setWeight}
	placeholder="Set weight"
      />
      <Text>Sets: </Text>
      <FlatList 
	data={DATA}
	renderItem={({item}) => <Set setInfo={item}/>}
        keyExtractor={item => item.id}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  Margin: {
    margin: 20,
  },
  Flatlist: {
    flex: 1,
    marginTop: 20,
    marginBottom: 30,
  },
})
