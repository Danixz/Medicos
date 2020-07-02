import { createStackNavigator, HeaderTitle } from "react-navigation-stack";
import MedicoScreen from "../screens/Medico";
import CardiologiaScreen from "../Centro Medico/Cardiologia";
import OftalmologiaScreen from "../Centro Medico/Oftalmologia";
import PediatriaScreen from "../Centro Medico/Pediatria";
import NutricionScreen from "../Centro Medico/Nutricion";
import GinecologiaScreen from "../Centro Medico/Ginecologia";
import CirugiaGScreen from "../Centro Medico/Cirugia-General";
import DermatologiaScreen from "../Centro Medico/Dermatologia";
import MedicinaFScreen from "../Centro Medico/MedicinaF";
import AddMedicosScreen from "../screens/Medicos/AddMedicos";
const MedicoScreenStacks = createStackNavigator({
  Medicos: {
    screen: MedicoScreen,
    navigationOptions: () => ({
      title: "Centro Medico"
    })
  },
  Cardiologia: {
    screen: CardiologiaScreen,
    navigationOptions: () => ({
      title: "Cardiologia"
    })
  },
  Oftalmologia: {
    screen: OftalmologiaScreen,
    navigationOptions: () => ({
      title: "Oftalmologia"
    })
  },
  Pediatria: {
    screen: PediatriaScreen,
    navigationOptions: () => ({
      title: "Pediatria"
    })
  },
  Nutricion: {
    screen: NutricionScreen,
    navigationOptions: () => ({
      title: "Nutricion"
    })
  },
  Ginecologia: {
    screen: GinecologiaScreen,
    navigationOptions: () => ({
      title: "Ginecologia"
    })
  },
  CirugiaG: {
    screen: CirugiaGScreen,
    navigationOptions: () => ({
      title: "Cirugia General"
    })
  },
  Dermatologia: {
    screen: DermatologiaScreen,
    navigationOptions: () => ({
      title: "Dermatologia"
    })
  },
  MedicinaF: {
    screen: MedicinaFScreen,
    navigationOptions: () => ({
      title: "Medicina Familiar"
    })
  },
  AddMedicos: {
    screen: AddMedicosScreen,
    navigationOptions: () => ({
      title: "Nuevo Medico"
    })
  }
});

export default MedicoScreenStacks;
