import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import confirmar from "../../../assets/images/confirmar.png";
import cupom from "../../../assets/images/cupom.png";

export default function Cupom() {
  return (
    <>
      <Text style={styles.textoPrincial}>Cupom de desconto</Text>
      <View style={styles.container}>
        <View style={styles.cupom}>
          <Image source={cupom} />
        </View>
        <Text>BURGER10</Text>
        <Image style={styles.confirmar} source={confirmar} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  textoPrincial: {
    marginTop: 24,
  },
  container: {
    backgroundColor: "#f9f9fb",
    height: 60,
    borderRadius: 4,
    paddingHorizontal: 16,
    alignItems: "center",
    marginTop: 8,
    flexDirection: "row",
  },
  cupom: {
    backgroundColor: "white",
    borderRadius: 4,
    height: 48,
    width: 48,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  confirmar: {
    position: "absolute",
    right: 20,
  },
});
