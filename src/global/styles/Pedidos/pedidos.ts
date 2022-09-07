import { View } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: #f9f9fb;
`;

export const ScrollView = styled.ScrollView``;

export const StatusBar = styled.StatusBar``;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  margin: 15% 5% 0 5%;
`;

export const ArrowBack = styled.TouchableOpacity`
  align-self: flex-start;
  /* margin-right: 50%; */
`;

export const ContainerInicio = styled.View`
  display: flex;
  width: 100%;
  height: 210px;
  background: #F08E00;
`;

export const ContainerDataPicker = styled.View`
  display: flex;
  /* padding-top: 20px; */
  width: 100%;
  height: 100%;
  background: white;
`;


export const InfoPedidos = styled.Text`
  color: #FFFFFF;
  width: 326px;
  height: 141px;
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 34px;
  margin-left: 5%;
  margin-top: 5%;
`;

export const ContainerSeletorData = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 327px;
    height: 45px;
    margin-left: 7%;
    background: #F08E00;
`;

export const ContainerDataInicio = styled.View`
    display: flex;
    flex-direction: column;
    width: 120px;
    height: 45px;
    /* margin-left: 100%; */
    /* margin-top: 12%; */
    align-items: flex-start;
    /* background: black; */
`;

export const DataSelect = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
`;

export const DataTitle = styled.Text`
  color: #7A7A80;
  font-weight: bold;
  text-align: center;
`;



export const ContainerDataFim = styled.View`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 120px;
    height: 45px;
    /* background: red; */
`;

export const ContainerArrow = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 45px;
    padding-right: 15px;
    padding-top: 10px;
    /* background: white; */
`;

export const ContainerInputs = styled.View`
  display: flex;
  margin: 0 5% 0 5%;
`;

export const ContainerButton = styled.View`
  display: flex;
  margin: 0 5% 0 5%;
  padding-top: 20px;
`;

export const TitlePage = styled.Text`
  color: #1b1b1b;
  padding-left: 21%;
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  margin: 0% 0 5% 0;
`;


