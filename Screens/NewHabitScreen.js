import React from "react"
import { withNavigation } from "react-navigation"
import {
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
  Slider
} from "react-native"

import { connect } from "react-redux"
import { TextInput } from "react-native-gesture-handler"

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  nameContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  hoursContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  },
  whyContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
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
    this.props.navigation.navigate("Home")
  }

  addHabit() {
    this.props.createHabit(this.state.habitName)
    this.props.navigation.navigate("Home")
  }

  _habitInputHandler = newValue => {
    this.setState({ habitName: newValue })
  }

  _changeHours = hours => {
    this.setState(() => {
      return {
        hoursPerWeek: parseFloat(hours)
      }
    })
  }

  _whyInputHandler = newValue => {
    this.setState({ why: newValue })
  }

  render() {
    const { habitName, hoursPerWeek, why } = this.state
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
          <Text>Hours Per Week: {this.state.hoursPerWeek}</Text>
          <Slider
            step={1}
            maximumValue={70}
            onValueChange={this._changeHours.bind(this)}
            value={hoursPerWeek}
          />
        </View>
        <View style={style.whyContainer}>
          <Text>Why?</Text>
          <TextInput
            placeholder="Remind yourself of what motivates you"
            style={style.textInput}
            onChangeText={this._whyInputHandler.bind(this)}
            value={why}
          />
        </View>
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

const mapDispatchToProps = dispatch => {
  return {
    createHabit: habit => dispatch({ type: "CREATE_HABIT", payload: { habit } })
  }
}

export default connect(
  null,
  mapDispatchToProps
)(withNavigation(NewHabitScreen))
