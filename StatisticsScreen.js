import React from "react"
import { SafeAreaView, View, StyleSheet, Text } from "react-native"

const style = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#00f" },
  thisWeeksProgressContainer: { 
    flex: 4,
    flexDirection:"row",
    backgroundColor: "#0f0"
  },
  allTimeStatsContainer: { 
    flex: 8,
    flexDirection:"column",
    backgroundColor: "#f00"
  },
  titleContainer: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#444"
  }
})

class StatisticsScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <SafeAreaView style={style.container}>
        
        <View style={style.titleContainer}>
          <Text>This Week's Progress</Text>
        </View>

        <View style={style.thisWeeksProgressContainer}>
          <View style={{flex: 2, justifyContent: "center", alignItems: "center", backgroundColor: "#f0f"}}>
              {/* Here goes the circular weekly progress bar */}
          </View>
          <View style={{flex: 1, flexDirection:"column", justifyContent: "center", backgroundColor: "#0ff"}}>
              <View style={{flex: 1, flexDirection:"column", backgroundColor: "#fff"}}>
              {/* Here goes the first row of this week's progress stats */}
            </View>
            <View style={{flex: 1, flexDirection:"column", backgroundColor: "#ff0"}}>
              {/* Here goes the second row of this week's progress stats */}
            </View>
            <View style={{flex: 1, flexDirection:"column", backgroundColor: "#6f6"}}>
              {/* Here goes the third row of this week's progress stats */}
            </View>
          </View>
        </View>

        <View style={style.titleContainer}>
          <Text>All-Time Stats</Text>
        </View>

        <View style={style.allTimeStatsContainer}>
          <View style={{flex: 1, flexDirection:"column"}}>
            <View style={{flex: 1, flexDirection:"row", backgroundColor: "#fff"}}>
              {/* Here goes the first row of all-time stats */}
            </View>
            <View style={{flex: 1, flexDirection:"row", backgroundColor: "#ff0"}}>
              {/* Here goes the second row of all-time stats */}
            </View>
          </View>
          <View style={{flex: 2}}>
            {/* Here goes the heatmap or calendar*/}
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

export default StatisticsScreen
