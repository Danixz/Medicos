import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import ActionButton from "react-native-action-button";
// import AddMedicos from "../screens/Medicos/AddMedicos";
import * as firebase from "firebase";

export default function Cardiologia(props) {
  const { navigation } = props;
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(userInfo => {
      setUser(userInfo);
    });
  }, []);

  return (
    <View style={styles.viewBody}>
      <Text>Cardiologos...</Text>
      {user && <AddMedicoButton navigation={navigation} />}
    </View>
  );
}

function AddMedicoButton(props) {
  const { navigation } = props;
  return (
    <ActionButton
      buttonColor="#00a680"
      onPress={() => navigation.navigate("AddMedicos")}
    />
  );
}

const styles = StyleSheet.create({
  viewBody: {
    flex: 1
  }
});
