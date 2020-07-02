import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Alert,
  Image,
  ImageBackground,
  ScrollView
} from "react-native";
import Constants from "expo-constants";
import { withNavigation } from "react-navigation";
import { Button } from "react-native-elements";
function Separator() {
  return <View style={styles.separator} />;
}

function Medico(props) {
  const { navigation } = props;
  return (
    <ImageBackground
      source={require("../../assets/img/fondo2.jpg")}
      style={{ width: null, height: null, flex: 1 }}
    >
      <ScrollView style={styles.container}>
        <View>
          <View style={styles.viewBtn}>
            <Button
              buttonStyle={styles.btnStyle}
              containerStyle={styles.btnContainer}
              title="Cardiologia"
              onPress={() => navigation.navigate("Cardiologia")}
            />
            <Button
              buttonStyle={styles.btnStyle}
              containerStyle={styles.btnContainer}
              title="Oftalmologia"
              onPress={() => navigation.navigate("Oftalmologia")}
            />
          </View>
        </View>
        <View>
          <View style={styles.viewBtn}>
            <Button
              buttonStyle={styles.btnStyle}
              containerStyle={styles.btnContainer}
              title="Pediatria"
              onPress={() => navigation.navigate("Pediatria")}
            />
            <Button
              buttonStyle={styles.btnStyle}
              containerStyle={styles.btnContainer}
              title="Nutricion"
              onPress={() => navigation.navigate("Nutricion")}
            />
          </View>
        </View>
        <View>
          <View style={styles.viewBtn}>
            <Button
              buttonStyle={styles.btnStyle}
              containerStyle={styles.btnContainer}
              title="Ginecologia"
              onPress={() => navigation.navigate("Ginecologia")}
            />
            <Button
              buttonStyle={styles.btnStyle}
              containerStyle={styles.btnContainer}
              title="Cirugia General"
              onPress={() => navigation.navigate("CirugiaG")}
            />
          </View>
        </View>
        <View>
          <View style={styles.viewBtn}>
            <Button
              buttonStyle={styles.btnStyle}
              containerStyle={styles.btnContainer}
              title="Dermatologia"
              onPress={() => navigation.navigate("Dermatologia")}
            />
            <Button
              buttonStyle={styles.btnStyle}
              containerStyle={styles.btnContainer}
              title="Medicina Familiar"
              onPress={() => navigation.navigate("MedicinaF")}
            />
          </View>
        </View>
        <View>
          <View style={styles.viewBtn}>
            <Button
              buttonStyle={styles.btnStyle}
              containerStyle={styles.btnContainer}
              title="Dermatologia"
              onPress={() => navigation.navigate("Pediatria")}
            />
            <Button
              buttonStyle={styles.btnStyle}
              containerStyle={styles.btnContainer}
              title="Medicina Familiar"
              onPress={() => Alert.alert("Right button pressed")}
            />
          </View>
        </View>
        <View>
          <View style={styles.viewBtn}>
            <Button
              buttonStyle={styles.btnStyle}
              containerStyle={styles.btnContainer}
              title="Dermatologia"
              onPress={() => navigation.navigate("Pediatria")}
            />
            <Button
              buttonStyle={styles.btnStyle}
              containerStyle={styles.btnContainer}
              title="Medicina Familiar"
              onPress={() => Alert.alert("Right button pressed")}
            />
          </View>
        </View>
        <View>
          <View style={styles.viewBtn}>
            <Button
              buttonStyle={styles.btnStyle}
              containerStyle={styles.btnContainer}
              title="Dermatologia"
              onPress={() => navigation.navigate("Pediatria")}
            />
            <Button
              buttonStyle={styles.btnStyle}
              containerStyle={styles.btnContainer}
              title="Medicina Familiar"
              onPress={() => Alert.alert("Right button pressed")}
            />
          </View>
        </View>
        <View>
          <View style={styles.viewBtn}>
            <Button
              buttonStyle={styles.btnStyle}
              containerStyle={styles.btnContainer}
              title="Dermatologia"
              onPress={() => navigation.navigate("Pediatria")}
            />
            <Button
              buttonStyle={styles.btnStyle}
              containerStyle={styles.btnContainer}
              title="Medicina Familiar"
              onPress={() => Alert.alert("Right button pressed")}
            />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },
  title: {
    textAlign: "center",
    marginVertical: 8
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  viewBtn: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "10%"
  },
  btnStyle: {
    backgroundColor: "#00a680"
  },
  btnContainer: {
    width: "46%"
  }
});

export default withNavigation(Medico);
