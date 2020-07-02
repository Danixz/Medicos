import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, Alert, Dimensions } from "react-native";
import { Icon, Avatar, Image, Input, Button } from "react-native-elements";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import { map } from "lodash";

export default function AddMedicosForm(props) {
  const [nombreMedico, setNombreMedico] = useState("");
  const [direccionMedico, setDireccionMedico] = useState("");
  const [descripcionMedico, setDescripcionMedico] = useState("");
  const [imagesSelected, setImagesSelected] = useState([]);
  const { toastRef, setIsLoading, navigation } = props;

  const addMedico = () => {
    console.log("OK");
    console.log("nombreMedico:" + nombreMedico);
    console.log("direccionMedico:" + direccionMedico);
    console.log("descripcionMedico:" + descripcionMedico);
    console.log(imagesSelected);
  };
  return (
    <ScrollView styles={StyleSheet.scrollView}>
      <FormAdd
        setNombreMedico={setNombreMedico}
        setDireccionMedico={setDireccionMedico}
        setDescripcionMedico={setDescripcionMedico}
      />
      <UploadImage
        toastRef={toastRef}
        imagesSelected={imagesSelected}
        setImagesSelected={setImagesSelected}
      />
      <Button
        title="Anadir Medico"
        onPress={addMedico}
        buttonStyle={styles.btnAddMedico}
      />
    </ScrollView>
  );
}

function FormAdd(props) {
  const { setNombreMedico, setDireccionMedico, setDescripcionMedico } = props;
  return (
    <View styles={StyleSheet.viewForm}>
      <Input
        placeholder="Nombre del Medico"
        containerStyle={styles.input}
        onChange={(e) => setNombreMedico(e.nativeEvent.text)}
      />
      <Input
        placeholder="Direccion"
        containerStyle={styles.input}
        onChange={(e) => setDireccionMedico(e.nativeEvent.text)}
      />
      <Input
        placeholder="Descripcion"
        multiline={true}
        inputContainerStyle={styles.textArea}
        onChange={(e) => setDescripcionMedico(e.nativeEvent.text)}
      />
    </View>
  );
}

function UploadImage(props) {
  const { toastRef, setImagesSelected, imagesSelected } = props;
  const imageSelect = async () => {
    const resultPermissions = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    );

    if (resultPermissions === "denied") {
      toastRef.current.show(
        "Es necesario aceptas los permisios de la galeria, favor de activarlos manualmente",
        3000
      );
    } else {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });
      if (result.cancelled) {
        toastRef.current.show(
          "Haz cerrado la galeria sin seleccionar ninguna imagen",
          2000
        );
      } else {
        setImagesSelected([...imagesSelected, result.uri]);
      }
    }
  };

  return (
    <View styles={StyleSheet.viewImages}>
      <Icon
        type="material-community"
        name="camera"
        color="#7a7a7a"
        containerStyle={styles.containerIcon}
        onPress={imageSelect}
      />
      {map(imagesSelected, (imageMedico, index) => (
        <Avatar
          key={index}
          style={styles.miniatureStyle}
          source={{ uri: imageMedico }}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    height: "100%",
  },
  viewForm: {
    marginLeft: 10,
    marginRight: 10,
  },
  input: {
    marginBottom: 10,
  },
  textArea: {
    height: 100,
    width: "100%",
    padding: 0,
    margin: 0,
    marginBottom: 20,
  },
  btnAddMedico: {
    backgroundColor: "#00a680",
    margin: 20,
  },
  viewImages: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30,
  },
  containerIcon: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    marginLeft: 10,
    height: 70,
    width: 70,
    backgroundColor: "#e3e3e3",
  },
  miniatureStyle: {
    width: 70,
    height: 70,
    marginRight: 20,
  },
});
