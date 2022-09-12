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
import Endereco from "./components/Endereco";
import Pagamento from "./components/Pagamento";
import SubTopo from "./components/SubTopo";
import Troco from "./components/Troco";
import Cupom from "./components/Cupom";
import ValorTotal from "./components/ValorTotal";

export default function Checkout({ navigation,route }: PropsNavigation) {
  let arrayItens = route.params.itens
  let total = route.params.total

  function render ({item}){
    return (
      <Burger item={item}/>
    )
   }

  return (
    <>
      <FlatList
        data={arrayItens}
        showsVerticalScrollIndicator={false}
        renderItem={render}
        keyExtractor={() => {}}
        ListFooterComponent={() => {
          return <ValorTotal navegacao={navigation} itens={arrayItens} frete={"5,00"} subtotal={total-5} total={total}/>;
        }}
        ListHeaderComponent={() => {
          return (
            <>
              <Topo children={"Checkout"} navegacao={navigation} />
              <Endereco navegacao={navigation}/>
              <Pagamento />
              <Troco troco={50} />
              <Cupom />
              <SubTopo props={arrayItens.length == 1 ? `${arrayItens.length} Item` : `${arrayItens.length} Itens`} />
            </>
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
    paddingHorizontal: 20,
  },
});
