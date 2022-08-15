import React, { useEffect } from "react";
import { BackHandler } from "react-native";

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
export default function Cardapio({ navigation }: PropsNavigation) {
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      return true;
    });
  });
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
      <ScrollView>
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
        <ContainerCardapio>
          <CardsCardapio
            image={require("../../../assets/images/img-Texas-Burger.png")}
            hamburguerType="Tradicional"
            hamburguerName="Texas Bruguer"
            hamburguerPrice="R$ 25,50"
            funcao={() => {
              alert("Enviar dados desse componente para outra pagina");
            }}
          />
          <CardsCardapio
            image={require("../../../assets/images/img-Golden-Burger.png")}
            hamburguerType="Tradicional"
            hamburguerName="Golden Burger"
            hamburguerPrice="R$ 25,50"
            funcao={() => {
              alert("Enviar dados desse componente para outra pagina");
            }}
          />
          <CardsCardapio
            image={require("../../../assets/images/img-Monster-Burger.png")}
            hamburguerType="Tradicional"
            hamburguerName="Monster Burger"
            hamburguerPrice="R$ 25,50"
            funcao={() => {
              alert("Enviar dados desse componente para outra pagina");
            }}
          />
          <CardsCardapio
            image={require("../../../assets/images/img-OldBurger.png")}
            hamburguerType="Tradicional"
            hamburguerName="Old Burger"
            hamburguerPrice="R$ 25,50"
            funcao={() => {
              alert("Enviar dados desse componente para outra pagina");
            }}
          />
        </ContainerCardapio>
      </ScrollView>
    </Container>
  );
}
