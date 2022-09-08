import React from "react";
import Topo from "../../components/Topo/Topo";
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from "react-native";

import Burger from "./components/Burger";
import itens from "../../components/mock/cardapio";
import Endereco from "./components/Endereco";
import Pagamento from "./components/Pagamento";
import SubTopo from "./components/SubTopo";
import Troco from "./components/Troco";
import Cupom from "./components/Cupom";
import ValorTotal from "./components/ValorTotal";

export default function Detalhes() {
  const quantItens = itens.length == 1 ? "1 item" : itens.length + " itens";

  return (
    <>
      <FlatList
        data={itens}
        showsVerticalScrollIndicator={false}
        renderItem={Burger}
        keyExtractor={() => {}}
        ListFooterComponent={() => {
          return (
            <>
              <Endereco />
              <Pagamento />
              <Troco troco={50} />
              <Cupom />
              <ValorTotal />
            </>
          );
        }}
        ListHeaderComponent={() => {
          return (
            <>
              <Topo children={"Checkout"} />
              <SubTopo props={quantItens} />
            </>
          );
        }}
      />
    </>
  );
}
