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
  InfoLogin,
  ContainerInputs,
  ContainerButton,
  ContainerSenha,
  EsqueceuSenha,
  ButtonRecuperar,
  RecuperarSenha,
  ContainerCadastro,
} from "../../global/styles/Login/login";

export default function Login({ navigation }: PropsNavigation) {
  return (
    <Container>
      <ScrollView>
        <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
        <Header>
          <ArrowBack onPress={() => alert("Clicou Para Voltar")}>
            <Arrows name="arrow-back" sizeArrow={30} color="#FB9400" />
          </ArrowBack>
          <ContainerLogo>
            <Logo />
          </ContainerLogo>
          <InfoLogin>Use suas credenciais para realizar o login.</InfoLogin>
        </Header>
        <Linhas />
        <ContainerInputs>
          <Inputs placeholder="Digite seu e-mail" />
          <Inputs placeholder="Digite sua senha" secure={true} />
        </ContainerInputs>
        <ContainerButton>
          <Button
            text="Enviar"
            color="#FB9400"
            textColor="#fff"
            strokeColor
            funcao={() => alert("Clicou Para Enviar")}
          />
        </ContainerButton>
        <ContainerSenha>
          <EsqueceuSenha>Esqueceu sua senha?</EsqueceuSenha>
          <ButtonRecuperar
            onPress={() => {
              navigation.navigate("EsqueceuASenha");
            }}
          >
            <RecuperarSenha>Clique aqui</RecuperarSenha>
          </ButtonRecuperar>
        </ContainerSenha>
        <Linhas />
        <ContainerCadastro>
          <Button
            text="Quero me Cadastrar"
            color="#fff"
            textColor="#FB9400"
            strokeColor
            funcao={() => {
              return navigation.navigate("Cadastro");
            }}
          />
        </ContainerCadastro>
      </ScrollView>
    </Container>
  );
}
