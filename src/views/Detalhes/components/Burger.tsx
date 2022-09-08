import React, { useState } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import seta from "../../../assets/images/burger.png";

export default function Burger({ item: { image, subname, name, preco } }) {
  return (
    <View style={styles.container}>
      <Image source={seta} style={styles.imagem} />

      <View>
        <Text style={styles.subname}>{subname}</Text>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.preco}>{preco}</Text>
      </View>

      <View style={styles.quantItens}>
        <Text style={styles.quantItensText}>Qnt.</Text>

        <View style={styles.quantItensNumber}>
          <Text style={styles.number}>01</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 12,
    alignSelf: "center",
    borderBottomColor: "#e5e5e5",
    borderBottomWidth: 2,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  imagem: {
    width: 85,
    height: 85,
    marginRight: 18,
  },
  subname: {
    color: "#ccc",
    fontSize: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: "500",
  },
  preco: {
    fontSize: 16,
    color: "#fb9400",
    fontWeight: "bold",
  },
  quantItens: {
    flexDirection: "column",
    position: "absolute",
    right: 0,
  },
  quantItensText: {
    fontSize: 12,
    color: "#fb9400",
    fontWeight: "bold",
    marginBottom: 3,
  },
  quantItensNumber: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    borderWidth: 1,
    width: 42,
    height: 42,
    borderColor: "#f2f4f5",
  },

  adicao: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  subtracao: {
    color: "#96a3ab",
    fontSize: 16,
    fontWeight: "bold",
  },
  number: {
    color: "#fb9400",
    fontSize: 16,
    fontWeight: "bold",
  },
});
