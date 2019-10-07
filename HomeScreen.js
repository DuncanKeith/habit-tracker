import React, { useState } from "react"
import { withNavigation, withNavigationFocus } from "react-navigation"

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Button,
  TextInput,
  Modal,
  StatusBar,
  TouchableHighlight,
  Alert
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

class HomeScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      habits: ["Leetcode", "Running", "Meditation"],
      inputValue: "",
      modalVisible: false
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isFocused !== this.props.isFocused) {
      console.log(this.props.navigation.getParam("test"))
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
    this.setState({ modalVisible: true })
  }

  _hideModal = () => {
    this.setState({ modalVisible: false })
  }

  _onLongPressButton = key => {
    Alert.alert(
      "Delete habit?",
      "Delete habit?",
      [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel"
        },
        {
          text: "Okay",
          onPress: () => this._deleteHabit(key)
        }
      ],
      { cancelable: true }
    )
  }

  _deleteHabit = habitKey => {
    var newHabits = this.state.habits.filter(function(value, index, arr) {
      return index != habitKey
    })
    this.setState({
      habits: newHabits
    })
  }

  render() {
    const { habits, inputValue, modalVisible } = this.state
    return (
      <SafeAreaView style={style.container}>
        <StatusBar hidden={true} />

        <Button
          title="Add New Habit"
          onPress={() => this.props.navigation.navigate("NewHabit")}
        />

        <Modal animationType="slide" visible={modalVisible}>
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
            <TouchableHighlight
              key={key}
              onLongPress={() => this._onLongPressButton(key)}
              underlayColor="white"
            >
              <HabitRow key={key} title={title} />
            </TouchableHighlight>
          ))}
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default withNavigationFocus(withNavigation(HomeScreen))