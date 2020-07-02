import React, { useEffect, useState } from "react";
import * as firebase from "firebase";
import Loading from "../../components/Loading";
import UserGuest from "../Account/UserGuest";
import UserLogged from "./UserLogged";
import { View, Text } from "react-native";

export default function MyAccount() {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      !user ? setLogin(false) : setLogin(true);
    });
  }, []);

  if (login === null) {
    return <Loading isVisible={true} text="Cargando..." />;
  }

  return login ? <UserLogged /> : <UserGuest />;
}
