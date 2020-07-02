import React, { useRef, useState } from "react";
import { View } from "react-native";
import Toast from "react-native-easy-toast";
import Loading from "../../components/Loading";
import AddMedicosForm from "../../components/Medicos/AddMedicosForm";

export default function AddMedicos(props) {
  const toastRef = useRef;
  const [isLoading, setIsLoading] = useState(false);
  const { navigation } = props;
  console.log(props);

  return (
    <View>
      <AddMedicosForm
        navigation={navigation}
        toastRef={toastRef}
        setIsLoading={setIsLoading}
      />
      <Toast toastRef={toastRef} position="center" opacity={0.5} />
      <Loading isVisible={isLoading} text="Añadiendo Medico" />
    </View>
  );
}
