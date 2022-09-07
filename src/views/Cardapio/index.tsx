import React, { useEffect, useState } from "react";
import { BackHandler, FlatList, StyleSheet } from "react-native";
import api from "../../../Api";

import Icone from "react-native-vector-icons/MaterialIcons";

import CardsCardapio from "../../components/CardsCardapio";

import {
  Container,
  Header,
  Menu,
  Welcome,
  SubTitle,
  Title,
  Search,
  SearchButton,
  SearchInput,
  ScrollView,
  BurguerPromotion,
  InfoPromotion,
  PromotionTag,
  TextPromotion,
  BurguerName,
  BurguerPromotionPrice,
  SubTitlePromotion,
  ContainerBurguerImage,
  BurguerImageDown,
  BurguerImageUp,
  ContainerBurguer,
  BackgroundBurguer,
  ContainerCardapio,
} from "../../global/styles/Cardapio/cardapio";
export default function Cardapio({ navigation, route }: PropsNavigation) {
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      return true;
    });
  }, []);

  const [listItems, setItem] = useState([]);

  useEffect(() => {
    async function teste() {
      try {
        let resp = await api.get("/itens");
        setItem(resp.data);
        //setItem(resp.data);
      } catch (erro) {
        console.log(erro);
      }
    }
    teste();
  }, []);
  console.log(listItems);

  function renderItens({ item }) {
    if (item.valorUnitario != 0) {
      return (
        <CardsCardapio
          hamburguerName={item.nome}
          hamburguerPrice={item.valorUnitario}
          hamburguerType="Tradicional"
          image={require("/home/matheus/Área de Trabalho/Análise e Desenvolvimento de Sistemas/PDM/B7/assets/images/img-Texas-Burger.png")}
          funcao={() =>
            navigation.navigate("Produtos", {
              paramKey: {
                hamburguerName: item.nome,
                hamburguerType: "Tradicional",
                image: require("/home/matheus/Área de Trabalho/Análise e Desenvolvimento de Sistemas/PDM/B7/assets/images/img-Texas-Burger.png"),
                hamburguerPrice: item.valorUnitario,
                desc: item.ingredientes,
              },
            })
          }
        />
      );
    }
  }

  return (
    <Container>
      <Header>
        <Welcome>
          <Title>Seja Bem-Vindo 👋</Title>
          <SubTitle>O que deseja pra hoje?</SubTitle>
        </Welcome>
        <Menu
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <Icone name="menu" size={25} color={"#FB9400"} />
        </Menu>
      </Header>
      <Search>
        <SearchButton>
          <Icone name="search" size={25} color={"#FB9400"} />
        </SearchButton>
        <SearchInput placeholder="Digite o nome do Burger" />
      </Search>
      <BurguerPromotion>
        <InfoPromotion>
          <PromotionTag>
            <TextPromotion>Promoção</TextPromotion>
          </PromotionTag>
          <BurguerName>Dose Dupla.</BurguerName>
          <SubTitlePromotion>2 Old Burger por apenas:</SubTitlePromotion>
          <BurguerPromotionPrice>R$ 35,50</BurguerPromotionPrice>
        </InfoPromotion>
        <ContainerBurguerImage>
          <ContainerBurguer>
            <BurguerImageDown
              source={require("../../../assets/images/img-OldBurger.png")}
            />
            <BurguerImageUp
              source={require("../../../assets/images/img-OldBurger.png")}
            />
          </ContainerBurguer>
        </ContainerBurguerImage>
        <BackgroundBurguer />
      </BurguerPromotion>
      <FlatList
        data={listItems}
        renderItem={renderItens}
        keyExtractor={(item) => item.id}
        style={styles.itens}
        showsVerticalScrollIndicator={false}
        numColumns={2}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  itens: {
    display: "flex",
    marginHorizontal: 10,
  },
});
