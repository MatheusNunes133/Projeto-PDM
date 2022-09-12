import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Arrows from "../../components/Arrows";
import Burger from "../../components/Sacola/Burger";
import ValorTotal from "../../components/Sacola/ValorTotal";
import Button from "../../components/Button";

import {
  Container,
  ScrollView,
  ContainerFrete,
  TitlePage,
  Header,
  ArrowBack,
  ContainerItemCount,
  InfoCount,
  ContainerSacolaPrincipal,
  Input,
  ButtonOk,
  TextButton,
  TitleFrete,
  ContainerInfo,
} from "../../global/styles/Sacola/sacola";

const styles = StyleSheet.create({
  text1: {
    fontSize: 16,
    marginLeft: 20,
    // alignSelf: "flex-end"
  },
  text2: {
    fontSize: 16,
    color: "#FB9400",
    marginLeft: 80,
    // alignSelf: "flex-end"
  },
  text2: {
    fontSize: 16,
    color: "#FB9400",
    marginLeft: 80,
    // alignSelf: "flex-end"
  },
  text3: {
    fontSize: 10,
    color: "#6A7D8B",
    marginLeft: 20,
    marginTop: 30,
    alignSelf: "flex-start",
  },
  marginFlatList:{
    marginBottom: 20,
    height: 120
  }
});

export default function Inicio({ navigation }: PropsNavigation) {
  const [itens,setItens]= useState([])

  AsyncStorage.getItem("Sacola").then(resp=>{
    return setItens(JSON.parse(resp))
  })


 function render ({item}){
  return (
    <Burger item={item}/>
  )
 }
let total = 0
itens.forEach(i=>{
  if(i.quantidade == 0){
    let quantidade = 1
    total += i.preco * quantidade
  }else{
    total += i.preco * i.quantidade
  }
  
})
  return (
    <Container>
        <Header>
          <ArrowBack onPress={() => navigation.navigate("Cardapio")}>
            <Arrows name="arrow-back" sizeArrow={30} color="#FB9400" />
          </ArrowBack>
          <TitlePage>Sacola</TitlePage>
        </Header>
        <ContainerItemCount>
          <InfoCount>{itens.length == 1 ? `${itens.length} Item` : `${itens.length} Itens`}</InfoCount>
        </ContainerItemCount>

        <ContainerSacolaPrincipal>
          <FlatList
          data={itens}
          renderItem={render}
          keyExtractor={()=>{}}
          style={styles.marginFlatList}
          />
        <ScrollView>
          <TitleFrete>Calcular frete e prazo</TitleFrete>
          <ContainerFrete>
            <Input placeholder="12345-123" />
            <ButtonOk>
              <TextButton>OK</TextButton>
            </ButtonOk>
          </ContainerFrete>

          <ContainerInfo>
            <Text style={styles.text3}>
              Rua das Flores - Jardins da Serra - Campina Pequena
            </Text>
            <View
              style={{ display: "flex", flexDirection: "row", marginTop: 20 }}
            >
              <Text style={styles.text1}>Receba em até 20 minutos</Text>
              <Text style={styles.text2}>R$ 12,50</Text>
            </View>
          </ContainerInfo>

          <ValorTotal subtotal={total} frete={"5,00"} total={total+5} navegacao={navigation} itens={itens}/>
          </ScrollView>
        </ContainerSacolaPrincipal>
        
    </Container>
  );
}
