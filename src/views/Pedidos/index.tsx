import React, { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { FlatList, StyleSheet, View, BackHandler } from "react-native";
import api from "../../../Api";

import Topo from "../../components/Topo/Topo";
import Pedido from "./components/Pedido";

export default function Pedidos({ navigation }: PropsNavigation) {
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
    let users = await api.get("/pedidos/",{headers:{
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
  
 /*  

  useEffect(() => {
    async function teste() {
      try {
        let resp = await api.get('/pedidos', {
          headers: {
            'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYWlsQG1haWwuY29tIiwiZXhwIjoxNjYyOTE3MzMwfQ.nDd0BUt9RfZ9YXKe8Ql8sTq-fFyCBxKQIE38tTLKXB7MBYRof4q5tQbEGrDl60ZPeGhdp6VTwi-TLbIyK18XdQ`
          }
        })
        
        //api.get("/pedidos");
        setItem(resp.data);
        //setItem(resp.data);
      } catch (erro) {
        console.log(erro);
      }
    }
    teste();
  }, []);
  console.log(listItems); */
  const renderItem = ({ item }) => {

    return (
      <Pedido
        item={item}
        navegacao={navigation}
      />
    );
  };

  
  return (
    <>
      <FlatList
        data={listItems}
        renderItem={renderItem}

        keyExtractor={(item) => item.id}
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
