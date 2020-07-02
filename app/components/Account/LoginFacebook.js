import React, { useState } from "react";
import * as firebase from "firebase";
import * as Facebook from "expo-facebook";
import { FacebookApi } from "../../utils/Social";
import { SocialIcon } from "react-native-elements";
import Loading from "../Loading";

export default function LoginFacebook(props) {
  const { toastRef, navigation } = props;
  const [isLoading, setIsLoading] = useState(false);
  const login = async () => {
    await Facebook.initializeAsync("1390261984498099");
    const {
      type,
      token
    } = await Facebook.logInWithReadPermissionsAsync(
      FacebookApi.application_id,
      { permissions: FacebookApi.permissions }
    );

    if (type === "success") {
      setIsLoading(true);
      const credentials = firebase.auth.FacebookAuthProvider.credential(token);
      await firebase
        .auth()
        .signInWithCredential(credentials)
        .then(() => {
          navigation.navigate("MyAccount");
        })
        .catch(() => {
          toastRef.current.show("Error Accediendo con Facebook");
        });
    } else if (type === "cancel") {
      toastRef.current.show("Inicio de Sesion Cancelado");
    } else {
      toastRef.current.show("Error Desconocido");
    }
    setIsLoading(false);
  };
  return (
    <>
      <SocialIcon
        title="Iniciar Sesion con Facebook"
        button
        type="facebook"
        onPress={login}
      />
      <Loading isVisible={isLoading} text="Iniciando Sesion" />
    </>
  );
}
