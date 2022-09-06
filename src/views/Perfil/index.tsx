import React from "react";

import {
  ArrowBack,
  Container,
  ContainerLogo,
  ScrollView,
  StatusBar,
  Header,
  InfoLogin,
  ContainerInputs,
  ContainerSenha,
  EsqueceuSenha,
  RecuperarSenha,
  ButtonRecuperar,
  ContainerButton,
} from "../../global/styles/Login/login";

import {
Title
} from "../../global/styles/Perfil/Perfil";

import Arrows from "../../components/Arrows";
import Linhas from "../../components/Linhas";
import Inputs from "../../components/Inputs";
import Button from "../../components/Button";

export default function Cadastro({ navigation }: PropsNavigation) {
  return (
    <Container>
      <ScrollView>
        <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
        <Header>
          <Title>Perfil</Title>
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
