import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, FlatList, TextInput } from 'react-native';
import { useState } from 'react' 

export default function App({ navigation }) {


const [ DATA, setDATA ] = useState([])

  function addDay() {
    setDATA([...DATA, {id: DATA.length + 1}])
    navigation.push('Day')
  }

  const Day = ({dayInfo}) => (
    <Pressable style={styles.button} onPress={() => navigation.push('Day')}>
      <Text>day: {dayInfo.id}</Text>
      <Text>type: {dayInfo.type}</Text>
    </Pressable>
  )

  return (
    <View>
      <Pressable onPress={addDay}>
	<Text>Add day</Text>
      </Pressable>
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
