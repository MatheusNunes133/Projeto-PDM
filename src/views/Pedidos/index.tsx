import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View, BackHandler } from "react-native";
import api from "../../../Api";

import Topo from "../../components/Topo/Topo";
import Pedido from "./components/Pedido";

export default function Pedidos({ navigation }: PropsNavigation) {
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      return true;
    });
  }, []);

  const [listItems, setItem] = useState([]);

  useEffect(() => {
    async function teste() {
      try {
        let resp = await api.get('/pedidos', {
          headers: {
            'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYWlsQG1haWwuY29tIiwiZXhwIjoxNjYyODUyMjc4fQ.5JRzae4n3TZgSVe5X3CX9HMCP_UuAx4LJmsHsSgoLeDSaSqla4mRq7hLHft9e_9J513HQN_TZkUZPwiCHvc2fQ`
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
  console.log(listItems);

  return (
    <>
      <FlatList
        data={listItems}
        renderItem={Pedido}
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
