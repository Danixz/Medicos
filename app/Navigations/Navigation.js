import React from "react";
import { Icon } from "react-native-elements";

import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import MedicoScreenStacks from "./MedicoStacks";
import TopListsScreenStacks from "./TopListsStacks";
import SearchScreenStacks from "./SearchStacks";
import AngelesScreenStacks from "./AngelesStacks";
import HomeScreenStacks from "./HomeStacks";
import AccountScreenStacks from "./AccountStacks";

const NavigationStacks = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreenStacks,
      navigationOptions: () => ({
        tabBarLabel: "Inicio",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="material-community"
            name="home-outline"
            size={22}
            color={tintColor}
          />
        )
      })
    },
    Account: {
      screen: AccountScreenStacks,
      navigationOptions: () => ({
        tabBarLabel: "Mi Cuenta",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="material-community"
            name="home-outline"
            size={22}
            color={tintColor}
          />
        )
      })
    },
    Medico: {
      screen: MedicoScreenStacks,
      navigationOptions: () => ({
        tabBarLabel: "Centro Medico",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="material-community"
            name="hospital-building"
            size={22}
            color={tintColor}
          />
        )
      })
    },
    Angeles: {
      screen: AngelesScreenStacks,
      navigationOptions: () => ({
        tabBarLabel: "Hospital Angeles",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="material-community"
            name="hospital-building"
            size={22}
            color={tintColor}
          />
        )
      })
    },

    Search: {
      screen: SearchScreenStacks,
      navigationOptions: () => ({
        tabBarLabel: "Buscar",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="material-community"
            name="magnify"
            size={22}
            color={tintColor}
          />
        )
      })
    }
  },
  {
    initialRouteName: "Home",
    order: ["Home", "Medico", "Angeles", "Search", "Account"],
    tabBarOptions: {
      inactiveTintColor: "#646464",
      activeTintColor: "#00a680"
    }
  }
);

export default createAppContainer(NavigationStacks);
