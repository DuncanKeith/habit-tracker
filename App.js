import React from "react"
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native"

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
    return (
      <SafeAreaView style={style.container}>
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
