import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: #f9f9fb;
`;

export const ContainerPedidos = styled.View`
  display: flex;
  height: 100%;
  width: 90%;
  align-self: center;
  border-top-width: 2px;
  border-color: #e2e2e2;
  /* background-color: white; */
  align-items: center;
  margin-bottom: 10%;
`;

export const ContainerMenor = styled.View`
  /* display: flex; */
  margin-top: 35px;
  width: 100%;
  height: 156px;
  align-self: center;
  border-radius: 4px;
  background-color: white;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContainerDescricao1 = styled.View`
  display: flex;
  align-items: flex-start;
  width: 185px;
  height: 100%;
  align-self: center;
  /* background-color: red; */
  flex-direction: column;
`;

export const ContainerDescricao2 = styled.View`
  display: flex;
  width: 185px;
  height: 100%;
  /* background-color: red; */
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const InfoDetalhes = styled.Text`
  color: black;
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  margin-left: 10%;
  margin-top: 10%;
`;

export const InfoDataHora = styled.Text`
  color: #6A7D8B;
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  margin-left: 10%;
`;

export const InfoDescricaoValor = styled.Text`
  color: #6A7D8B;
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  margin-left: 10%;
  margin-top: 20%;
`;

export const InfoValor = styled.Text`
  color: #FB9400;
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  margin-left: 10%;
  margin-top: 3%;
`;

export const ContainerEnviado = styled.View`
  /* display: flex; */
  width: 78px;
  height: 26px;
  border-radius: 4px;
  background-color: #EDF1F8;
  margin-top: 10%;
  margin-left: 35%;
  align-items: center
`;

export const InfoEnviado = styled.Text`
  color: #4F77BE;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 13px;
  margin-top: 6px;
`;

export const ContainerEntrega = styled.View`
  /* display: flex; */
  width: 78px;
  height: 26px;
  border-radius: 4px;
  background-color: #F1F8F6;
  margin-top: 10%;
  margin-left: 35%;
  align-items: center
`;

export const InfoEntrega = styled.Text`
  color: #6AB70A;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 13px;
  margin-top: 6px;
`;

export const ScrollView = styled.ScrollView``;

export const StatusBar = styled.StatusBar``;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  margin: 10% 5% 0 5%;
`;

export const ArrowBack = styled.TouchableOpacity`
  align-self: flex-start;
  /* margin-right: 50%; */
`;

export const TitlePage = styled.Text`
  color: #1b1b1b;
  padding-left: 21%;
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  margin: 0% 0 5% 0;
`;


