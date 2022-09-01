import * as React from 'react';
import Icone from "react-native-vector-icons/MaterialIcons";

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
  TitlePage,
  ContainerInicio,
  ContainerDataInicio,
  ContainerDataFim,
  ContainerArrow,
  DataTitle,
  DataSelect,
  InfoPedidos,
  ContainerSeletorData,
  ContainerButton,
} from "../../global/styles/Pedidos/pedidos";



export default function Login({ navigation }: PropsNavigation) {
  return (
    <Container>
      <ScrollView>
        <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
        <Header>
          <ArrowBack onPress={() => navigation.goBack()}>
            <Arrows name="arrow-back" sizeArrow={30} color="#FB9400" />
          </ArrowBack>
          <TitlePage>Meus Pedidos</TitlePage>
        </Header>
        <ContainerInicio>
          <InfoPedidos>Escolha uma data de início e fim para listar os pedidos.</InfoPedidos>
          <ContainerSeletorData>
            <ContainerDataInicio>
              <DataTitle>De</DataTitle>
              <DataSelect>16/06/2021</DataSelect>
            </ContainerDataInicio>
            <ContainerArrow>
              <Icone name={"arrow-right-alt"} size={40} style={{ color: "#7A7A80" }}></Icone>
            </ContainerArrow>

            <ContainerDataFim>
              <DataTitle>Até</DataTitle>
              <DataSelect>20/06/2021</DataSelect>
            </ContainerDataFim>
          </ContainerSeletorData>
        </ContainerInicio>



        {/* <ContainerButton>
          <Button
            text="Listar"
            color="#FB9400"
            textColor="#fff"
            strokeColor
            funcao={() => alert("Clicou Para Listar")}
          />
        </ContainerButton> */}


      </ScrollView>
    </Container>
  );
}
