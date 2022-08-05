import React from "react";

import Arrows from "../../components/Arrows";
import Logo from "../../components/Logo";
import Linhas from "../../components/Linhas";
import Inputs from "../../components/Inputs";
import Button from "../../components/Button";

import {
  Container,
  StatusBar,
  Header,
  ArrowBack,
  ContainerLogo,
  InfoLogin,
  ContainerInputs,
  ContainerButton,
} from "../../global/styles/Login/login";

export default function Login() {
  return (
    <Container>
      <StatusBar />
      <Header>
        <ArrowBack onPress={() => alert("Clicou Para Voltar")}>
          <Arrows name="arrow-back" sizeArrow={30} color="#FB9400" />
        </ArrowBack>
        <ContainerLogo>
          <Logo />
        </ContainerLogo>
        <InfoLogin>Use suas credenciais para realizar o login.</InfoLogin>
        <Linhas />
      </Header>
      <ContainerInputs>
        <Inputs placeholder="Digite seu e-mail" />
        <Inputs placeholder="Digite sua senha" secure={true} />
      </ContainerInputs>
      <ContainerButton>
        <Button
          text="Enviar"
          color="#FB9400"
          textColor="#fff"
          funcao={() => alert("Clicou Para Enviar")}
        />
      </ContainerButton>
    </Container>
  );
}
