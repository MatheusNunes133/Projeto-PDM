import React , {useState}from "react";
import Topo from "../../components/Topo/Topo";
import api from "../../../Api";
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

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Detalhes({route, navigation}) {
  
  const {itemID} = route.params;

  const [token, setToken] = useState()
  const [name, setName] = useState()
  const [listItems, setItem] = useState([]);
  
  async function getToken(){
    let tokenUser = await AsyncStorage.getItem("Token")
    if(tokenUser){
      setToken(tokenUser)
    }
  }
  getToken()

  async function getUsers(){
    let users = await api.get(`/pedidos/${itemID}`,{headers:{
      "Authorization": token
    }})
    let arrayUsers = users.data
    let email = await AsyncStorage.getItem("emailUser")
    setItem(users.data);
    arrayUsers.forEach((item)=>{
      if(item.email == email){
        setName(item.nome)
      }
    })
  }
  getUsers()
  const itens1 = listItems.itens
  const quantItens = itens.length == 1 ? "1 item" : itens.length + " itens";

  return (
    <>
      <FlatList
        data={itens1}
        showsVerticalScrollIndicator={false}
        renderItem={Burger}
        keyExtractor={(item) => {item.id}}
        ListFooterComponent={() => {
          return (
            <>
              <Endereco />
              <Pagamento />
              <Troco troco={listItems.troco} />
              <Cupom />
              <ValorTotal props={listItems} />
            </>
          );
        }}
        ListHeaderComponent={() => {
          return (
            <>
              <Topo children={`Pedido #${itemID}`} navegacao={navigation}/>
              <SubTopo props={quantItens} status={listItems.status}/>
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
    marginHorizontal: 24  }
});