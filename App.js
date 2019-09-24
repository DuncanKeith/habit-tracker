import React, { useState } from "react"
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Button, TextInput} from "react-native"

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  habitRow: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    padding: 5
  },
  habitBox: {
    flex: 1,
    backgroundColor: "#00f",
    alignItems: "flex-start",
    alignContent: "flex-start"
  },
  textInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'black'
  }
})

const HabitRow = ({ title }) => (
  <View style={style.habitRow}>
    <View style={style.habitBox}>
      <Text>{title}</Text>
    </View>
  </View>
)

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    habits = ["Leetcode", "Running", "Meditation"]

    const[enteredHabit, setEnteredHabit] = useState('');

    const habitInputHandler = (enteredText) => {
      setEnteredHabit(enteredHabit);
    };

    const addHabitHandler = () => {
      console.log(enteredHabit);
    };

    return (
      <SafeAreaView style={style.container}>
        <Button 
          title="Add"
          onPress={addHabitHandler}/>
        <TextInput 
          placeholder="New Habit" 
          style={style.textInput} 
          onChangeText={habitInputHandler}
          value={enteredHabit}/>
        <ScrollView>
          {habits.map((title, key) => (
            <HabitRow key={key} title={title} />
          ))}
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default App
