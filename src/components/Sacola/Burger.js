import React, { useState } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import burger from "../../../assets/images/img-Texas-Burger.png";

export default function Burger({ item: { image, subname, name, preco, quantidade } }) {
  const [numPedidos, setNumPedidos] = useState(quantidade);

  return (
    <View style={styles.container}>
      <Image source={burger} style={styles.imagem} />

      <View>
        <Text style={styles.subname}>{subname}</Text>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.preco}>R$ {preco}</Text>
      </View>

      <View style={styles.quantItens}>
        <TouchableOpacity
          style={styles.quantItens1}
          onPress={() => {
            if (numPedidos < 1) {
              setNumPedidos(0);
            } else {
              setNumPedidos(numPedidos - 1);
            }
          }}
        >
          <Text style={styles.subtracao}>-</Text>
        </TouchableOpacity>

        <View style={styles.quantItens2}>
          <Text style={styles.number}>{numPedidos}</Text>
        </View>

        <TouchableOpacity
          style={styles.quantItens3}
          onPress={() => {
            setNumPedidos(numPedidos + 1);
          }}
        >
          <Text style={styles.adicao}>+</Text>
        </TouchableOpacity>
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
    width: 100
  },
  preco: {
    fontSize: 16,
    color: "#fb9400",
    fontWeight: "bold",
  },
  quantItens: {
    width: 123,
    height: 42,
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    right: 0,
  },
  quantItens1: {
    backgroundColor: "#f2f4f5",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4,
  },
  quantItens2: {
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  quantItens3: {
    backgroundColor: "#fb9400",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    borderBottomRightRadius: 4,
    borderTopRightRadius: 4,
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
