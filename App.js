import { createAppContainer } from "react-navigation"

import NewHabitScreen from "./NewHabitScreen"
import HomeScreen from "./HomeScreen"
import StatisticsScreen from "./StatisticsScreen"
import { createStackNavigator } from "react-navigation-stack"
import { createBottomTabNavigator } from "react-navigation-tabs"

const INITIAL_STATE = {
  habits: ["Leetcode", "Running", "Meditation"],
  statistics: {
    Leetcode: {},
    Running: {},
    Meditation: {}
  }
}

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  NewHabit: {
    screen: NewHabitScreen
  }
})

const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeStack
  },
  Statistics: {
    screen: StatisticsScreen
  }
})

export default createAppContainer(AppNavigator)
