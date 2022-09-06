import React from "react";

import Icone from "react-native-vector-icons/MaterialCommunityIcons";
import {
  Container,
  ScrollView,
  ContainerInputs,
  ContainerButton,
} from "../../global/styles/Login/login";

import {
Title,
Header
} from "../../global/styles/Perfil/Perfil";

import Linhas from "../../components/Linhas";
import Inputs from "../../components/Inputs";
import Button from "../../components/Button";

export default function Perfil({ navigation }: PropsNavigation) {
  return (
    <Container>
      <ScrollView>
        <Icone name="arrow-left" size={30} color="#FB9400" />
        <Header>
        <Title>Perfil</Title>
           <Icone name="account-circle-outline" size={95} color="#6A7D8B"/>
        </Header>
        <Linhas />
        <ContainerInputs>
          <Inputs placeholder="Fulano da silva Diniz" />
          <Inputs placeholder="fad@gmail.com" />
          <Inputs placeholder="nova senha" secure />
          <Inputs placeholder="Upload de imagem" />
        </ContainerInputs>
        <ContainerButton>
          <Button
            text="Editar"
            color="#FB9400"
            textColor="#fff"
            strokeColor
          />
        </ContainerButton>
      </ScrollView>
    </Container>
  );
}
