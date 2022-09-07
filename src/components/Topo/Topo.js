import React from "react";
import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";
import Seta from "../../../assets/images/seta.png";

export default function Topo(props) {
  return (
    <View style={styles.topo}>
      <TouchableOpacity
        style={styles.seta}
        onPress={() => {
          props.navegacao.goBack();
        }}
      >
        <Image source={Seta} />
      </TouchableOpacity>
      <Text style={styles.textoPrincipal}>{props.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  topo: {
    paddingTop: 70,
    borderBottomColor: "#e5e5e5",
    borderBottomWidth: 2,
    paddingBottom: 25,
    marginHorizontal: 24,
    flexDirection: "row",
    justifyContent: "center",
  },

  textoPrincipal: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  seta: {
    position: "absolute",
    left: 15,
    top: 80,
  },
});
