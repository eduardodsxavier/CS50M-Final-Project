import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native';

const DATA = [
  {
    id:1,
    name: 'pull up',
    sets: 1,
  },
  {
    id:2,
    name: 'squat',
    sets: 3,
  },
  {
    id:3,
    name: 'dead lift',
    sets: 5,
  },
  {
    id:4,
    name: 'bench press',
    sets: 3,
  },
]

export default function App({ navigation }) {

  const Exercise = ({ExerciseInfo}) => (
    <Pressable style={styles.button} onPress={() => navigation.push('Exercise')}>
      <Text>{ExerciseInfo.name}</Text>
      <Text>Exercise number: {ExerciseInfo.id}</Text>
      <Text>Sets: {ExerciseInfo.sets}</Text>
    </Pressable>
  )

  return (
    <View>
      <Pressable onPress={() => navigation.push('Exercise')}>
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
