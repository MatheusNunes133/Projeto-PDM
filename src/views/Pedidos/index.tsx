import React from "react";
import Topo from "../../components/Topo/Topo";
import { FlatList, StyleSheet, View } from "react-native";
import Pedido from "./components/Pedido";
import itens from "../../components/mock/pedidos";

export default function Pedidos({ navigation }: PropsNavigation) {
  return (
    <>
      <FlatList
        data={itens}
        renderItem={Pedido}
        keyExtractor={() => {}}
        ListHeaderComponent={() => {
          return (
            <View style={styles.bottom}>
              <Topo children={"Pedidos"} navegacao={navigation}/>
            </View>
          );
        }}
        style={styles.container}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  bottom: {
    marginBottom: 40,
  },
});
