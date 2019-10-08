import React from "react"
import { SafeAreaView, View, StyleSheet } from "react-native"

const style = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#00f" }
})

class StatisticsScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <SafeAreaView style={style.container}>
        <View></View>
      </SafeAreaView>
    )
  }
}

export default StatisticsScreen
