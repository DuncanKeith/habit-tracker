import React from "react"
import { StyleSheet, Text, View } from "react-native"

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})

class App extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <Text>Test</Text>
      </View>
    )
  }
}

export default App
