import React from "react";
import Icone from "react-native-vector-icons/MaterialIcons";
import Button from "../../components/Button";

import {
  Container,
  ContainerSuperior,
  TituloInferior,
  SubTitle,
  ContainerInfo,
  ContainerImage,
  ContainerButton,
  TitleInicio,
  ContainerButtonCardapio,
} from "../../global/styles/Inicio/inicio";

export default function Inicio({ navigation }: PropsNavigation) {
  return (
    <Container>
      <ContainerSuperior>
        <TitleInicio>B7 • Burger</TitleInicio>
        <ContainerImage
          source={require("../../../assets/images/burger-login.png")}
        />
      </ContainerSuperior>
      <ContainerButton>
        <TituloInferior>
          O Hamburguer mais delicioso da sua Cidade!
        </TituloInferior>
        <ContainerInfo>
          <SubTitle>Logou </SubTitle>
          <Icone
            name={"arrow-forward"}
            size={18}
            style={{ color: "#FB9400" }}
          ></Icone>
          <SubTitle> Pediu </SubTitle>
          <Icone
            name={"arrow-forward"}
            size={18}
            style={{ color: "#FB9400" }}
          ></Icone>
          <SubTitle> Chegou</SubTitle>
        </ContainerInfo>
        <Button
          text="Fazer Login"
          color="#FB9400"
          textColor="#fff"
          strokeColor
          funcao={() => navigation.navigate("Login")}
        />
        <ContainerButtonCardapio>
          <Button
            text="Ver Cardápio"
            color="white"
            textColor="#FB9400"
            strokeColor
            funcao={() => navigation.navigate("CardapioDrawer")}
          />
        </ContainerButtonCardapio>
      </ContainerButton>
    </Container>
  );
}
