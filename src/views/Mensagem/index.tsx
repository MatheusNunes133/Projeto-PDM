import React from "react";

import Arrows from "../../components/Arrows";
import Logo from "../../components/Logo";
import Button from "../../components/Button";

import {
  Container,
  ScrollView,
  StatusBar,
  ArrowBack,
  ContainerLogo,
  ContainerButton,
} from "../../global/styles/Login/login";

import { Header, ImageMessage } from "../../global/styles/Mensagem/mensagem";

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
          <ArrowBack onPress={() => navigation.navigate("EsqueceuASenha")}>
            <Arrows name="arrow-back" sizeArrow={30} color="#FB9400" />
          </ArrowBack>
          <ContainerLogo>
            <ImageMessage
              source={require("../../../assets/images/icone-enviado.png")}
            />
          </ContainerLogo>
          <TitlePage>Verifique seu e-mail</TitlePage>
          <InfoLogin>
            Enviamos as instruções para recuperação de senha para o seu e-mail.
          </InfoLogin>
        </Header>
        <ContainerButton>
          <Button
            text="Fazer Login"
            color="#FB9400"
            textColor="#fff"
            strokeColor
            funcao={() => navigation.navigate("Login")}
          />
        </ContainerButton>
      </ScrollView>
    </Container>
  );
}
