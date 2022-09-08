import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import Arrows from "../../components/Arrows";
import Burger from "../../components/Sacola/Burger";
import ValorTotal from "../../components/Sacola/ValorTotal";


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
  ContainerInfo
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
    alignSelf: "flex-start"
  }
});

export default function Inicio({ navigation }: PropsNavigation) {
  return (
    <Container>
      <ScrollView>
        <Header>
          <ArrowBack onPress={() => navigation.goBack()}>
            <Arrows name="arrow-back" sizeArrow={30} color="#FB9400" />
          </ArrowBack>
          <TitlePage>Sacola</TitlePage>
        </Header>
        <ContainerItemCount>
          <InfoCount>4 itens</InfoCount>
        </ContainerItemCount>

        <ContainerSacolaPrincipal>
            <Burger
              item={{ image: "Name", subname: "Tradicional", name: "Teste", preco: "R$ 30,00" }}
            />
            <Burger
              item={{ image: "Name", subname: "Tradicional", name: "Teste", preco: "R$ 30,00" }}
            />
            <Burger
              item={{ image: "Name", subname: "Tradicional", name: "Teste", preco: "R$ 30,00" }}
            />
            <Burger
              item={{ image: "Name", subname: "Tradicional", name: "Teste", preco: "R$ 30,00" }}
            />

          <TitleFrete>Calcular frete e prazo</TitleFrete>
          <ContainerFrete>
            <Input placeholder="12345-123" />
            <Button>
              <TextButton>OK</TextButton>
            </Button>
          </ContainerFrete>

          <ContainerInfo>
            <Text style={styles.text3}>Rua das Flores - Jardins da Serra - Campina Pequena</Text>
            <View style={{display: "flex", flexDirection: "row", marginTop: 20}}>
            <Text style={styles.text1} >Receba em até 20 minutos</Text>
            <Text style={styles.text2} >R$ 12,50</Text>
            </View>
            
          </ContainerInfo>

          <ValorTotal
              subtotal={"54,00"}
              frete={"5,00"}
              total={"59,00"}
            />

        </ContainerSacolaPrincipal>


      </ScrollView>
    </Container>
  );
}
