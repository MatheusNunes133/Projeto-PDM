import React, { Component, useState } from "react";
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Icone from "react-native-vector-icons/MaterialIcons";
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';

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
  ContainerDataPicker,
  ContainerButton,
} from "../../global/styles/Pedidos/pedidos";



export default function Login({ navigation }: PropsNavigation) {
  const [date, setDate] = useState({
    from: "31/08/2022",
    to: "31/08/2022",
    set: true,
    borderColorTo: "#FB9400",
    borderColorFrom: "#7A7A80",
  });
  const style = StyleSheet.create({
    ContainerDataFim: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      width: 120,
      height: 45,
      borderColor: date.borderColorTo,
      borderBottomWidth: 2,
    },
    ContainerDataInicio: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      width: 120,
      height: 45,
      borderColor: date.borderColorFrom,
      borderBottomWidth: 2,
    },
  });
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
            <View style={style.ContainerDataInicio}>
              <DataTitle>De</DataTitle>
              <DataSelect>{date.from}</DataSelect>
            </View>
            <ContainerArrow>
              <Icone name={"arrow-right-alt"} size={40} style={{ color: "#7A7A80" }}></Icone>
            </ContainerArrow>

            <View style={style.ContainerDataFim}>
              <DataTitle>Até</DataTitle>
              <DataSelect>{date.to}</DataSelect>
            </View>
          </ContainerSeletorData>
        </ContainerInicio>

        <ContainerDataPicker>
          <CalendarPicker
            maxDate={new Date()}
            weekdays={['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']}
            months={['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']}
            previousTitle="Anterior"
            nextTitle="Próximo"
            selectedDayColor={"#DC1637"}
            selectedDayTextColor={"white"}
            onDateChange={function (data) {
              if (date.set) {
                let newDate = {
                  from: moment(data.calendar()).format('DD/MM/YYYY'),
                  to: date.to,
                  set: false,
                  borderColorTo: "#7A7A80",
                  borderColorFrom: "#F08E00",
                }
                setDate(newDate);
              }
              else {
                let newDate = {
                  from: date.from,
                  to: moment(data.calendar()).format('DD/MM/YYYY'),
                  set: true,
                  borderColorTo: "#F08E00",
                  borderColorFrom: "#7A7A80",
                }
                setDate(newDate);
              }
            }}
          />

          <ContainerButton>
            <Button
              text="Listar"
              color="#FB9400"
              textColor="#fff"
              strokeColor
              funcao={() => navigation.navigate("RelacaoPedidos")
            }
            />
          </ContainerButton>
        </ContainerDataPicker>






      </ScrollView>
    </Container>
  );
}
