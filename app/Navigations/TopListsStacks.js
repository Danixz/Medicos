import { createStackNavigator } from "react-navigation-stack";
import TopMedicosScreen from "../screens/TopMedicos";

const TopListsScreenStacks = createStackNavigator({
  TopMedicos: {
    screen: TopMedicosScreen,
    navigationOptions: () => ({
      title: "Mejores Medicos"
    })
  }
});

export default TopListsScreenStacks;
