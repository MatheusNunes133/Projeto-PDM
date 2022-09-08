import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Pedido from '../Pedido/index'
import Arrows from "../../components/Arrows";
import ButtonIcon from "../../components/ButtonIcon";

import {
  Container,
  ScrollView,
  StatusBar,
  Header,
  ArrowBack,
  TitlePage,
  ContainerPedidos,
  ContainerMenor,
  ContainerDescricao1,
  ContainerDescricao2,
  InfoDescricaoValor,
  InfoValor,
  ContainerEnviado,
  InfoEnviado,
  InfoDetalhes,
  InfoDataHora,
  ContainerEntrega,
  InfoEntrega
} from "../../global/styles/RelacaoPedidos/relacaoPedidos";
import Icon from 'react-native-vector-icons/MaterialIcons';

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '156px',
    alignSelf: 'center',
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default function RelacaoPedidos({ navigation }: PropsNavigation) {
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
        <ContainerPedidos>
          <ContainerMenor>
            <ContainerDescricao1>
              <InfoDetalhes>Pedido #1234</InfoDetalhes>
              <InfoDataHora>05/03/2012 - 22:00</InfoDataHora>
              <InfoDescricaoValor>Total</InfoDescricaoValor>
              <InfoValor>R$114,50</InfoValor>
            </ContainerDescricao1>
            <ContainerDescricao2>
              <ContainerEnviado>
                <InfoEnviado>Enviado</InfoEnviado>
              </ContainerEnviado>
              <ButtonIcon
                color="#FB9400"
                icon="arrow-forward"
                height={50}
                width={50}
                marginLeft={90}
                marginRight={0}
                marginBottom={20}
                funcao={() => navigation.navigate("Pedido")}
               />

            </ContainerDescricao2>
          </ContainerMenor>

          <ContainerMenor>
            <ContainerDescricao1>
              <InfoDetalhes>Pedido #2314</InfoDetalhes>
              <InfoDataHora>10/02/2012 - 22:00</InfoDataHora>
              <InfoDescricaoValor>Total</InfoDescricaoValor>
              <InfoValor>R$59,50</InfoValor>
            </ContainerDescricao1>
            <ContainerDescricao2>
              <ContainerEntrega>
                <InfoEntrega>Entregue</InfoEntrega>
              </ContainerEntrega>
              <ButtonIcon
                color="#FB9400"
                icon="arrow-forward"
                height={50}
                width={50}
                marginLeft={90}
                marginRight={0}
                marginBottom={20}
                funcao={() => navigation.navigate("Pedido")}
              />

            </ContainerDescricao2>
          </ContainerMenor>

          <ContainerMenor>
            <ContainerDescricao1>
              <InfoDetalhes>Pedido #1123</InfoDetalhes>
              <InfoDataHora>20/01/2012 - 22:00</InfoDataHora>
              <InfoDescricaoValor>Total</InfoDescricaoValor>
              <InfoValor>R$72,50</InfoValor>
            </ContainerDescricao1>
            <ContainerDescricao2>
              <ContainerEntrega>
                <InfoEntrega>Entregue</InfoEntrega>
              </ContainerEntrega>
              <ButtonIcon
                color="#FB9400"
                icon="arrow-forward"
                height={50}
                width={50}
                marginLeft={90}
                marginRight={0}
                marginBottom={20}
                funcao={() => navigation.navigate("Pedido")}
              />

            </ContainerDescricao2>
          </ContainerMenor>

          <ContainerMenor>
            <ContainerDescricao1>
              <InfoDetalhes>Pedido #1024</InfoDetalhes>
              <InfoDataHora>05/01/2012 - 22:00</InfoDataHora>
              <InfoDescricaoValor>Total</InfoDescricaoValor>
              <InfoValor>R$72,50</InfoValor>
            </ContainerDescricao1>
            <ContainerDescricao2>
              <ContainerEntrega>
                <InfoEntrega>Entregue</InfoEntrega>
              </ContainerEntrega>
              <ButtonIcon
                color="#FB9400"
                icon="arrow-forward"
                height={50}
                width={50}
                marginLeft={90}
                marginRight={0}
                marginBottom={20}
              funcao={() => navigation.navigate("Pedido")}
              />

            </ContainerDescricao2>
          </ContainerMenor>
        </ContainerPedidos>



      </ScrollView>
    </Container>
  );
}