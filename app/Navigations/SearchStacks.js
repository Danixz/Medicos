import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "../screens/Search";

const SearchScreenStacks = createStackNavigator({
  Medicos: {
    screen: SearchScreen,
    navigationOptions: () => ({
      title: "Encuentra tu Medico"
    })
  }
});

export default SearchScreenStacks;
