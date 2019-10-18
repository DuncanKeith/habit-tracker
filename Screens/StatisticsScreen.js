import React from "react"
import { SafeAreaView, View, StyleSheet, Text, Dimensions } from "react-native"
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import { ContributionGraph } from 'react-native-chart-kit'
import { TextInput } from "react-native-gesture-handler"

const style = StyleSheet.create({
  container: { flex: 1 },
  thisWeekContainer: { 
    flex: 4,
    flexDirection:"row"
  },
  allTimeStatsContainer: { 
    flex: 8,
    flexDirection:"column"
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
      progressPct: 60,
      totalHours: 0.0,
      activeDays: 0.0,
      weeklyAvg: 0.0,
      successfulWeeks: 0,
      totalWeeks: 0
    }
  }

  
  render() {
    const {
      hoursToday, 
      dailyAvg, 
      daysLeft, 
      progressPct,
      totalHours,
      activeDays,
      weeklyAvg,
      successfulWeeks,
      totalWeeks
    } = this.state

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
            <View style={{flex: 1, flexDirection:"row"}}>
              {/* Here goes the first row of all-time stats */}
              <View style={{flex: 1, flexDirection:"column", justifyContent: "center", alignItems: "center"}}>
                <Text>Total Hours</Text>
                <Text>{totalHours} h</Text>
              </View>
              <View style={{flex: 1, flexDirection:"column", justifyContent: "center", alignItems: "center"}}>
                <Text>Active Days</Text>
                <Text>{activeDays} days</Text>
              </View>
            </View>
            <View style={{flex: 1, flexDirection:"row"}}>
              {/* Here goes the second row of all-time stats */}
              <View style={{flex: 1, flexDirection:"column", justifyContent: "center", alignItems: "center"}}>
                <Text>Weekly Avg.</Text>
                <Text>{weeklyAvg} h</Text>
              </View>
              <View style={{flex: 1, flexDirection:"column", justifyContent: "center", alignItems: "center"}}>
                <Text>Successful Weeks</Text>
                <Text>{successfulWeeks}/{totalWeeks}</Text>
              </View>
            </View>
          </View>
          <View style={{flex: 2}}>
            {/* Here goes the heatmap or calendar*/}
            <ContributionGraph 
              values={[
                { date: '2019-01-02', count: 1 },
                { date: '2019-01-03', count: 2 },
                { date: '2019-01-04', count: 3 },
                { date: '2019-01-05', count: 4 },
                { date: '2019-01-06', count: 5 },
                { date: '2019-01-30', count: 2 },
                { date: '2019-01-31', count: 3 },
                { date: '2019-03-01', count: 2 },
                { date: '2019-04-02', count: 4 },
                { date: '2019-03-05', count: 2 },
                { date: '2019-02-30', count: 4 },
              ]} 
              endDate={new Date('2017-04-01')}
              numDays={105} 
              width={Dimensions.get('window').width - 16}
              height={100} 
              chartConfig={{
                backgroundColor: '#1cc910',
                backgroundGradientFrom: '#eff3ff',
                backgroundGradientTo: '#efefef',
                decimalPlaces: 2,
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
              }}/>
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

export default StatisticsScreen
