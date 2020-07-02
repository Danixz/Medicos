import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "../screens/Home";

const HomeScreenStacks = createStackNavigator({
  Medicos: {
    screen: HomeScreen,
    navigationOptions: () => ({
      title: "Inicio"
    })
  }
});

export default HomeScreenStacks;
