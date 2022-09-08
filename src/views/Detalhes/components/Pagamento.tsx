import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import sifrao from "../../../assets/images/sifrao.png";
import cartao from "../../../assets/images/cartao.png";

export default function Pagamento() {
  return (
    <>
      <Text style={styles.textoPrincipal}> Tipo de Pagamento </Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardDinheiro]}>
          <View style={styles.dinheiro}>
            <Image source={sifrao} />
          </View>
          <Text style={styles.textoDinheiro}>Dinheiro</Text>
        </View>

        <View style={[styles.card, styles.cardCartao]}>
          <View style={styles.cartao}>
            <Image source={cartao} />
          </View>
          <Text>Cart�o</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 60,
    alignItems: "center",
    marginTop: 8,
  },
  card: {
    alignItems: "center",
    flexDirection: "row",
    width: "46%",
    height: 60,
    borderRadius: 4,
    backgroundColor: "#f9f9fb",
  },
  cardDinheiro: {
    backgroundColor: "#fb9400",
  },
  cardCartao: {
    backgroundColor: "#f9f9fb",
  },
  dinheiro: {
    backgroundColor: "#f08e00",
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    marginRight: 16,
    marginLeft: 8,
  },
  cartao: {
    backgroundColor: "white",
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    marginRight: 16,
    marginLeft: 8,
  },
  textoDinheiro: {
    color: "white",
  },
  textoPrincipal: {
    marginTop: 24,
  },
});
