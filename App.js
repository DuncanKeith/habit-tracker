import React, { useState } from "react"
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Button,
  TextInput,
  Modal
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
      inputValue: "",
      modalVisable: false
    }
  }

  _habitInputHandler = newValue => {
    this.setState({ inputValue: newValue })
  }

  _habitAddHandler = () => {
    if (this.state.inputValue) {
      this.setState({
        habits: [...this.state.habits, this.state.inputValue],
        inputValue: ""
      })
      this._hideModal()
    }
  }

  _presentModal = () => {
    this.setState({ modalVisable: true })
  }

  _hideModal = () => {
    this.setState({ modalVisable: false })
  }

  render() {
    const { habits, inputValue, modalVisable } = this.state
    return (
      <SafeAreaView style={style.container}>
        <Button title="Add New Habit" onPress={this._presentModal.bind(this)} />

        <Modal animationType="slide" visible={modalVisable}>
          <SafeAreaView>
            <View>
              <TextInput
                placeholder="New Habit"
                style={style.textInput}
                onChangeText={this._habitInputHandler.bind(this)}
                value={inputValue}
              />
              <Button title="Add" onPress={this._habitAddHandler.bind(this)} />
              <Button title="Cancel" onPress={this._hideModal.bind(this)} />
            </View>
          </SafeAreaView>
        </Modal>

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
