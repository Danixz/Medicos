import { createStackNavigator } from "react-navigation-stack";
import AngelesScreen from "../screens/Angeles";
import CardiologiaAScreen from "../Angeles/CardiologiaA";
import OftalmologiaAScreen from "../Angeles/OftalmologiaA";
import PediatriaAScreen from "../Angeles/PediatriaA";
import NutricionAScreen from "../Angeles/NutricionA";
import GinecologiaAScreen from "../Angeles/GinecologiaA";
import CirugiaAScreen from "../Angeles/Cirugia-GeneralA";
import DermatologiaAScreen from "../Angeles/DermatologiaA";
import MedicinaAScreen from "../Angeles/MedicinaA";

const AngelesScreenStacks = createStackNavigator({
  Medicos: {
    screen: AngelesScreen,
    navigationOptions: () => ({
      title: "Hospital Angeles",
    }),
  },
  CardiologiaA: {
    screen: CardiologiaAScreen,
    navigationOptions: () => ({
      title: "Cardiologia",
    }),
  },
  OftalmologiaA: {
    screen: OftalmologiaAScreen,
    navigationOptions: () => ({
      title: "Oftalmologia",
    }),
  },
  PediatriaA: {
    screen: PediatriaAScreen,
    navigationOptions: () => ({
      title: "Pediatria",
    }),
  },
  NutricionA: {
    screen: NutricionAScreen,
    navigationOptions: () => ({
      title: "Nutricion",
    }),
  },
  GinecologiaA: {
    screen: GinecologiaAScreen,
    navigationOptions: () => ({
      title: "Ginecologia",
    }),
  },
  CirugiaA: {
    screen: CirugiaAScreen,
    navigationOptions: () => ({
      title: "Cirugia General",
    }),
  },
  DermatologiaA: {
    screen: DermatologiaAScreen,
    navigationOptions: () => ({
      title: "Dermatologia",
    }),
  },
  MedicinaA: {
    screen: MedicinaAScreen,
    navigationOptions: () => ({
      title: "Medicina Familiar",
    }),
  },
});

export default AngelesScreenStacks;
