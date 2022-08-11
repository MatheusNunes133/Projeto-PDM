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

import Logo from "../../components/Logo";
import Arrows from "../../components/Arrows";
import Linhas from "../../components/Linhas";
import Inputs from "../../components/Inputs";
import Button from "../../components/Button";

export default function Cadastro({ navigation }) {
  return (
    <Container>
      <ScrollView>
        <StatusBar />
        <Header>
          <ArrowBack onPress={() => navigation.navigate("Login")}>
            <Arrows name="arrow-back" sizeArrow={30} color="#FB9400" />
          </ArrowBack>
          <ContainerLogo>
            <Logo />
          </ContainerLogo>
          <InfoLogin>Preencha os campos para criar o seu cadastro.</InfoLogin>
        </Header>
        <Linhas />
        <ContainerInputs>
          <Inputs placeholder="Digite seu nome" />
          <Inputs placeholder="Digite seu e-mail" />
          <Inputs placeholder="Digite sua senha" secure />
        </ContainerInputs>
        <ContainerButton>
          <Button
            text="Cadastrar"
            color="#FB9400"
            textColor="#fff"
            strokeColor
          />
        </ContainerButton>
        <ContainerSenha>
          <EsqueceuSenha>Já tem cadastro?</EsqueceuSenha>
          <ButtonRecuperar
            onPress={() => {
              return navigation.navigate("Login");
            }}
          >
            <RecuperarSenha>Fazer Login</RecuperarSenha>
          </ButtonRecuperar>
        </ContainerSenha>
      </ScrollView>
    </Container>
  );
}
