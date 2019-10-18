import React from "react"
import { withNavigation } from "react-navigation"
import { connect } from "react-redux"

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Button,
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
    backgroundColor: "#fff",
    alignItems: "flex-start",
    alignContent: "flex-start",
    borderBottomWidth: 1,
    borderColor: "#c3c3c3"
  },
  textInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: "black"
  },
  bar: {
    width: "100%",
    height: 0,
    borderBottomWidth: 1,
    borderColor: "#c3c3c3"
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
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props)
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

  render() {
    const { habits } = this.props
    return (
      <SafeAreaView style={style.container}>
        <Button
          title="Add New Habit"
          onPress={() => this.props.navigation.navigate("NewHabit")}
        />
        <View style={style.bar} />
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

const mapStateToProps = state => {
  return {
    habits: state.habits
  }
}

export default connect(mapStateToProps)(withNavigation(HomeScreen))
