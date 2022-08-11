import React from "react";

import Arrows from "../../components/Arrows";
import Logo from "../../components/Logo";
import Linhas from "../../components/Linhas";
import Inputs from "../../components/Inputs";
import Button from "../../components/Button";

import {
  Container,
  ScrollView,
  StatusBar,
  Header,
  ArrowBack,
  ContainerLogo,
  ContainerInputs,
  ContainerButton,
} from "../../global/styles/Login/login";

import {
  TitlePage,
  InfoLogin,
} from "../../global/styles/EsqueceuASenha/esqueceuASenha";

export default function EsqueceuASenha({ navigation }) {
  return (
    <Container>
      <ScrollView>
        <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
        <Header>
          <ArrowBack onPress={() => navigation.navigate("Login")}>
            <Arrows name="arrow-back" sizeArrow={30} color="#FB9400" />
          </ArrowBack>
          <ContainerLogo>
            <Logo />
          </ContainerLogo>
          <TitlePage>Esqueceu sua senha?</TitlePage>
          <InfoLogin>
            Preencha o campo com seu e-mail e receba as instruções necessárias
            para redefinir a sua senha.
          </InfoLogin>
        </Header>
        <Linhas />
        <ContainerInputs>
          <Inputs placeholder="Digite seu e-mail" />
        </ContainerInputs>
        <ContainerButton>
          <Button
            text="Enviar"
            color="#FB9400"
            textColor="#fff"
            strokeColor
            funcao={() => navigation.navigate("Mensagem")}
          />
        </ContainerButton>
      </ScrollView>
    </Container>
  );
}
