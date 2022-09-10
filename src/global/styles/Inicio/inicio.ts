import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: #ffffff;
`;


export const ArrowBack = styled.TouchableOpacity`
  align-self: flex-start;
`;

export const TitleInicio = styled.Text`
  color: white;
  font-size: 36px;
  font-weight: bold;
  line-height: 46.8px;
  text-align: center;
  margin: 10% 0 5% 0;
`;


export const ContainerImage = styled.Image`
  display: flex;
  margin-top: 2%;
  margin-left: 23%;
  width: 220px;
  height: 220px;
`;

export const ContainerButton = styled.View`
  display: flex;
  margin: -4% 5% 0 5%;
`;

export const ContainerInfo = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  bottom: 7%;
`;

export const ContainerButtonCardapio = styled.View`
  display: flex;
  margin-top: 15px;
`;

export const TituloInferior = styled.Text`
  color: #000000;
  text-align: center;
  margin: 15% 0;
  font-weight: bold;
  font-size: 30px;
  line-height: 42px;
`;


export const SubTitle = styled.Text`
  color: black;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
`;

export const ContainerSuperior = styled.View`
  display: flex;
  width: 100%;
  height: 45%;
  background-color: #FB9400;
`;
