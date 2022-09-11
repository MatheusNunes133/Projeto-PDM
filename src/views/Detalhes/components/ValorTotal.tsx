import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ValorTotal({props: { valorTotal, frete }}) {
  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        <Text>Subtotal</Text>
        <Text style={styles.valor}>R$ {valorTotal}</Text>
      </View>

      <View style={[styles.grid, styles.frete]}>
        <Text>Frete</Text>
        <Text style={styles.valor}>R$ {frete}</Text>
      </View>

      <View style={[styles.grid, styles.total]}>
        <Text>Total</Text>
        <Text style={styles.valorTotal}>R$ {valorTotal + frete}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9f9fb",
    borderRadius: 8,
    paddingHorizontal: 32,
    paddingVertical: 48,
    marginVertical: 40,
  },
  grid: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
  },
  frete: {
    borderBottomColor: "#e5e5e5",
    paddingBottom: 24,
    borderBottomWidth: 2,
    borderStyle: "dashed",
  },
  total: {
    marginTop: 5,
  },
  valor: {
    fontWeight: "bold",
  },
  valorTotal: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#fb9400",
  },
});
