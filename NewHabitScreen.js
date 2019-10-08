import React from "react"
import { withNavigation } from "react-navigation"
import {
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text
} from "react-native"

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  nameContainer: {
    flex: 1,
    backgroundColor: "#0f0"
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
  }
})

class NewHabitScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  cancel() {
    this.props.navigation.navigate("Home", { test: "value" })
  }

  addHabit() {}

  render() {
    return (
      <SafeAreaView style={style.container}>
        <View style={style.nameContainer}></View>
        <View style={style.hoursContainer}></View>
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
