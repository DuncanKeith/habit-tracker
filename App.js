import { createAppContainer } from "react-navigation"

import NewHabitScreen from "./NewHabitScreen"
import HomeScreen from "./HomeScreen"
import { createStackNavigator } from "react-navigation-stack"
import { createBottomTabNavigator } from "react-navigation-tabs"

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
  SecondScreen: {
    screen: NewHabitScreen
  }
})

export default createAppContainer(AppNavigator)
