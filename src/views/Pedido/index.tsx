import React, { useEffect } from "react";
import { BackHandler, Text } from "react-native";
import Arrows from "../../components/Arrows";

import {
    Container,
    ContainerTitle,
    Welcome,
    Header,
    SubTitle,
    Title,
    ScrollView,
    InfoEnviado,
    ContainerTop,
    TextItems,
    Linha,
    ContainerPedidos,
    ContainerEndereco,
    Endereco
} from "../../global/styles/Pedido/Pedido";
import {
    StatusBar,
    TitlePage,
    ContainerMenor,
    ContainerDescricao1,
    ContainerDescricao2,
    InfoDescricaoValor,
    InfoValor,
    ContainerEnviado,
    InfoDetalhes,
    InfoDataHora,
    ContainerEntrega,
    InfoEntrega
} from "../../global/styles/RelacaoPedidos/relacaoPedidos";

import {
    ArrowBack
} from "../../global/styles/Login/login";

export default function Pedido({ navigation }: PropsNavigation) {
    return (
        <Container>
            <ScrollView>
                <Header>
                    <Welcome>
                        <ArrowBack onPress={() => navigation.navigate("RelacaoPedidos")}>
                            <Arrows name="arrow-back" sizeArrow={30} color="#FB9400" />
                        </ArrowBack>
                        <ContainerTitle>
                        <Title>Pedido #1234</Title>
                        <SubTitle>05/03/2012 - 22:00</SubTitle>
                        </ContainerTitle>
                    </Welcome>
                </Header>
                <ContainerPedidos>
                     <ContainerTop>
                          <TextItems>4 itens</TextItems>  
                            <InfoEnviado>Enviado</InfoEnviado>
                        </ContainerTop>
                        <Linha/>
                    <Text>
                        <ContainerEndereco>
                        <Text>Endereço</Text>
                        <Endereco>321 - Rua das Flores - Jardim das Flores</Endereco>
                        </ContainerEndereco>
                        <ContainerEndereco>
                        Tipo de Pagamento
                        Dinheiro Cartão
                        </ContainerEndereco>
                    </Text>
                </ContainerPedidos>
            </ScrollView>
        </Container >
    );
}
