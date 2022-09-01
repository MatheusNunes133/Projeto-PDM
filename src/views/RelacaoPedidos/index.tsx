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
} from "../../global/styles/RelacaoPedidos/relacaoPedidos";



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


        </ScrollView>
    </Container>
  );
}