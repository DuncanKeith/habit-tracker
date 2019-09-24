import React, { useState } from "react"
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Button,
  TextInput
} from "react-native"

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
    borderColor: "black"
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

    this.state = {
      habits: ["Leetcode", "Running", "Meditation"],
      inputValue: ""
    }
  }

  _habitInputHandler = newValue => {
    this.setState({ inputValue: newValue })
  }

  _habitAddHandler = () => {
    if (this.state.inputValue) {
      this.setState({ habits: [...this.state.habits, this.state.inputValue] })
    }
  }

  render() {
    const { habits, inputValue } = this.state
    return (
      <SafeAreaView style={style.container}>
        <Button title="Add" onPress={this._habitAddHandler.bind(this)} />
        <TextInput
          placeholder="New Habit"
          style={style.textInput}
          onChangeText={this._habitInputHandler.bind(this)}
          value={inputValue}
        />
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
