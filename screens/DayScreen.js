import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
import { useState } from 'react'

export default function App({ navigation }) {

  const [ DATA, setDATA ] = useState([])

  function addExercise() {
    setDATA([...DATA, {id: DATA.length + 1}])
    navigation.push('Exercise')
  }

  const Exercise = ({ExerciseInfo}) => (
    <Pressable style={styles.button} onPress={() => navigation.push('Exercise')}>
      <Text>{ExerciseInfo.name}</Text>
      <Text>Exercise number: {ExerciseInfo.id}</Text>
      <Text>Sets: {ExerciseInfo.sets}</Text>
    </Pressable>
  )

  return (
    <View>
      <Pressable onPress={addExercise}>
	<Text>Add Exercise</Text>
      </Pressable>
      <FlatList 
	data={DATA}
	renderItem={({item}) => <Exercise ExerciseInfo={item}/>}
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
})
