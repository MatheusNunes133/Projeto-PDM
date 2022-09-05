import React, { useState } from "react";
import Icone from "react-native-vector-icons/MaterialIcons";

import Arrows from "../../components/Arrows";
import Button from "../../components/Button";

import {
  Container,
  ScrollView,
  Header,
  StatusBar,
  ContainerHeader,
  OptionsButtons,
  TitlePage,
  ImageBurguer,
  ContainerNameBurguer,
  NameBurguer,
  TypeBurguer,
  ContainerLinhas,
  LinhaCinza,
  LinhaLaranja,
  Descricao,
  ContainerPedido,
  ContainerQuantidade,
  QuantidadeName,
  ContainerButtons,
  ButtonMais,
  ButtonMenos,
  Quantidade,
  Preco,
  ContainerButton,
} from "../../global/styles/Produtos/produtos";

export default function Produtos({ navigation, route }: PropsNavigation) {
  const { hamburguerName, hamburguerType, image, hamburguerPrice, desc } =
    route.params.paramKey;

  const [quantidade, setQuantidade] = useState(0);

  return (
    <Container>
      <StatusBar backgroundColor={"#FB9400"} barStyle={"dark-content"} />
      <ScrollView>
        <Header>
          <ContainerHeader>
            <OptionsButtons
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Arrows name="arrow-back" sizeArrow={30} color="#FFF" />
            </OptionsButtons>
            <TitlePage>Produtos</TitlePage>
            <OptionsButtons>
              <Icone name="favorite-border" size={30} color="#FFF" />
            </OptionsButtons>
          </ContainerHeader>
        </Header>
        <ImageBurguer source={image} />
        <ContainerNameBurguer>
          <TypeBurguer>{hamburguerType}</TypeBurguer>
          <NameBurguer>{hamburguerName}</NameBurguer>
        </ContainerNameBurguer>
        <ContainerLinhas>
          <LinhaCinza></LinhaCinza>
          <LinhaLaranja></LinhaLaranja>
        </ContainerLinhas>
        <Descricao>{desc}</Descricao>
        <ContainerPedido>
          <QuantidadeName>Quantidade</QuantidadeName>
          <ContainerQuantidade>
            <ContainerButtons>
              <ButtonMenos
                onPress={() => {
                  if (quantidade < 1) {
                    setQuantidade(0);
                  } else {
                    setQuantidade(quantidade - 1);
                  }
                }}
              >
                <Icone name="minimize" size={30} color="#96A3AB" />
              </ButtonMenos>
              <Quantidade>{quantidade}</Quantidade>
              <ButtonMais
                onPress={() => {
                  setQuantidade(quantidade + 1);
                }}
              >
                <Icone name="add" size={30} color="#FFF" />
              </ButtonMais>
              <Preco>{hamburguerPrice}</Preco>
            </ContainerButtons>
          </ContainerQuantidade>
        </ContainerPedido>
        <ContainerButton>
          <Button
            color="#FB9400"
            text="Adicionar à sacola"
            textColor="#FFF"
            strokeColor
            funcao={() => {
              alert("Adiciona a sacola");
            }}
          />
        </ContainerButton>
      </ScrollView>
    </Container>
  );
}
