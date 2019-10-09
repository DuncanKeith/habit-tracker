import React from "react"
import { withNavigation } from "react-navigation"
import {
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text
} from "react-native"
import { TextInput } from "react-native-gesture-handler"

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  nameContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  hoursContainer: {
    flex: 1,
    backgroundColor: "#f00"
  },
  whyContainer: {
    flex: 1,
    backgroundColor: "#00f"
  },
  confirmationContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  textInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: "black"
  }
})

class NewHabitScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      habitName: "",
      hoursPerWeek: 0,
      why: ""
    }
  }

  cancel() {
    this.props.navigation.navigate("Home", { test: "value" })
  }

  addHabit() {}

  _habitInputHandler = newValue => {
    this.setState({ habitName: newValue })
  }

  render() {
    const {habitName, hoursPerWeek, why} = this.state
    return (
      <SafeAreaView style={style.container}>
        <View style={style.nameContainer}>
          <Text>Habit</Text>
          <TextInput
            placeholder="Habit Name"
            style={style.textInput}
            onChangeText={this._habitInputHandler.bind(this)}
            value={habitName}
          />
        </View>
        <View style={style.hoursContainer}>
          <Text>Hours Per Week</Text>
          
        </View>
        <View style={style.whyContainer}></View>
        <View style={style.confirmationContainer}>
          <TouchableOpacity onPress={this.cancel.bind(this)}>
            <Text>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.addHabit.bind(this)}>
            <Text>Add</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }
}

export default withNavigation(NewHabitScreen)
