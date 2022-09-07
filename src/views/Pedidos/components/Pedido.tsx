import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import seta from "../../../../assets/images/seta.png";

export default function Pedido({ item: { nome, descricao, total, image } }) {
  return (
    <View style={styles.container}>
      <View style={styles.itens}>
        <View>
          <Text style={styles.nome}> {nome} </Text>
          <Text style={styles.descricao}> {descricao} </Text>
        </View>

        <View style={styles.status}>
          <Text style={styles.statusText}> Enviado </Text>
        </View>
      </View>

      <View style={styles.itens}>
        <View>
          <Text style={styles.descricao}> Total </Text>
          <Text style={styles.preco}>R$ {total} </Text>
        </View>

        <View style={styles.botao}>
          <Image source={seta} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 156,
    backgroundColor: "white",
    borderRadius: 6,
    flexDirection: "row",
    marginBottom: 25,
    // Android
    elevation: 15,
    fontSize: 13,
    flexDirection: "column",
    justifyContent: "space-between",
    // iOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 2.62,
    padding: 24,
    alignSelf: "center",
  },
  nome: {
    fontSize: 20,
    color: "#1B1B1B",
    fontWeight: "bold",
  },
  preco: {
    color: "#fb9400",
    fontSize: 20,
    fontWeight: "bold",
  },

  descricao: {
    color: "#ccc",
  },
  itens: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  status: {
    backgroundColor: "#edf1f8",
    borderRadius: 4,
    width: 78,
    height: 26,
    justifyContent: "center",
  },
  statusText: {
    textAlign: "center",
    color: "#4f77be",
    fontSize: 11,
  },
  botao: {
    borderColor: "#fb9400",
    borderRadius: 5,
    borderWidth: 1,
    width: 48,
    height: 48,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transform: [{ rotate: "180deg" }],
  },
});
