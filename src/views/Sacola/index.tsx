import React,{useState, useEffect} from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import Arrows from "../../components/Arrows";
import Burger from "../../components/Sacola/Burger";
import ValorTotal from "../../components/Sacola/ValorTotal";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
  Button,
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
});

export default function Inicio({ navigation }: PropsNavigation) {
  const [sacola, setSacola] = useState()
  useEffect(()=>{


    async function teste(){
      let array = await AsyncStorage.getItem("Sacola")
      setSacola(array)
    }
    teste()
  },[])
  console.log(sacola)
  

  return (
    <Container>
      <ScrollView>
        <Header>
          <ArrowBack onPress={() => navigation.navigate("Cardapio")}>
            <Arrows name="arrow-back" sizeArrow={30} color="#FB9400" />
          </ArrowBack>
          <TitlePage>Sacola</TitlePage>
        </Header>
  setItem()
        <ContainerItemCount>
          <InfoCount>4 itens</InfoCount>
        </ContainerItemCount>
        <FlatList
          data={sacola}
          showsVerticalScrollIndicator={false}
          renderItem={Burger}
          keyExtractor={() => {}}
        />
        <ContainerSacolaPrincipal>
          <Burger
            item={{
              image: "Name",
              subname: "Tradicional",
              name: "Teste",
              preco: "R$ 30,00",
            }}
          />
          <Burger
            item={{
              image: "Name",
              subname: "Tradicional",
              name: "Teste",
              preco: "R$ 30,00",
            }}
          />
          <Burger
            item={{
              image: "Name",
              subname: "Tradicional",
              name: "Teste",
              preco: "R$ 30,00",
            }}
          />
          <Burger
            item={{
              image: "Name",
              subname: "Tradicional",
              name: "Teste",
              preco: "R$ 30,00",
            }}
          />

          <TitleFrete>Calcular frete e prazo</TitleFrete>
          <ContainerFrete>
            <Input placeholder="12345-123" />
            <Button>
              <TextButton>OK</TextButton>
            </Button>
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

          <ValorTotal subtotal={"54,00"} frete={"5,00"} total={"59,00"} navegacao={navigation}/>
        </ContainerSacolaPrincipal>
      </ScrollView>
    </Container>
  );
}
