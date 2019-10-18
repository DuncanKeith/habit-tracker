import React from "react"

import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import { createBottomTabNavigator } from "react-navigation-tabs"

import { createStore } from "redux"
import { Provider } from "react-redux"

import NewHabitScreen from "./Screens/NewHabitScreen"
import HomeScreen from "./Screens/HomeScreen"
import StatisticsScreen from "./Screens/StatisticsScreen"

const INITIAL_STATE = {
  habits: ["Leetcode", "Running", "Meditation", "Habit3"]
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CREATE_HABIT":
      return { ...state, habits: [...state.habits, action.payload.habit] }
    case "DELETE_HABIT":
      return {
        ...state,
        habits: state.habits.filter(habit => habit !== action.payload.habit)
      }
    default:
      return state
  }
}

const store = createStore(reducer)

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

const Navigation = createAppContainer(AppNavigator)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    )
  }
}
