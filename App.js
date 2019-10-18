import { createAppContainer } from "react-navigation"
import React from "react"
import NewHabitScreen from "./NewHabitScreen"
import HomeScreen from "./HomeScreen"
import StatisticsScreen from "./StatisticsScreen"
import { createStackNavigator } from "react-navigation-stack"
import { createBottomTabNavigator } from "react-navigation-tabs"

import { Provider } from "react-redux"
import { createStore } from "redux"

const INITIAL_STATE = {
  habits: ["Leetcode", "Running", "Meditation"]
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CREATE_HABIT":
      return { ...state, habits: [...habits, action.payload.habit] }
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
