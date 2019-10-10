import React from "react"
import { SafeAreaView, View, StyleSheet, Text } from "react-native"
import { AnimatedCircularProgress } from 'react-native-circular-progress'

const style = StyleSheet.create({
  container: { flex: 1 },
  thisWeekContainer: { 
    flex: 4,
    flexDirection:"row"
  },
  allTimeStatsContainer: { 
    flex: 8,
    flexDirection:"column",
    backgroundColor: "#f00"
  },
  titleContainer: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center"
  }
})

class StatisticsScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hoursToday: 0.0,
      dailyAvg: 0.0,
      daysLeft: 0.0,
      progressPct: 60
    }
  }

  
  render() {
    const {hoursToday, dailyAvg, daysLeft, progressPct} = this.state
    return (
      <SafeAreaView style={style.container}>
        
        <View style={style.titleContainer}>
          <Text>This Week's Progress</Text>
        </View>

        <View style={style.thisWeekContainer}>
          <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
              {/* Here goes the circular weekly progress bar */}
              <AnimatedCircularProgress
                size={120}
                width={15}
                fill={progressPct}
                tintColor="#00f"
                backgroundColor="#fff"
                duration={2000}>
                {
                  (progressPct) => (
                    <Text>
                      { progressPct.toPrecision(3) }%
                    </Text>
                  )
                }
              </AnimatedCircularProgress>
          </View>
          <View style={{flex: 1, flexDirection:"column", justifyContent: "center"}}>
            <View style={{flex: 1, flexDirection:"column", justifyContent: "center", alignItems: "center"}}>
              {/* Here goes the first row of this week's progress stats */}
              <Text>Today</Text>
              <Text>{hoursToday} h</Text>
            </View>
            <View style={{flex: 1, flexDirection:"column", justifyContent: "center", alignItems: "center"}}>
              {/* Here goes the second row of this week's progress stats */}
              <Text>Daily Avg.</Text>
              <Text>{dailyAvg} h</Text>
            </View>
            <View style={{flex: 1, flexDirection:"column", justifyContent: "center", alignItems: "center"}}>
              {/* Here goes the third row of this week's progress stats */}
              <Text>Days Left</Text>
              <Text>{daysLeft} days</Text>
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
