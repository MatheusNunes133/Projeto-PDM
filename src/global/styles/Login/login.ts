import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: #ffffff;
`;

export const ScrollView = styled.ScrollView``;

export const StatusBar = styled.StatusBar``;

export const Header = styled.View`
  display: flex;
  align-items: center;
  margin: 15% 5% 0 5%;
`;

export const ArrowBack = styled.TouchableOpacity`
  align-self: flex-start;
`;

export const ContainerLogo = styled.View`
  display: flex;
  margin-top: 25%;
`;

export const InfoLogin = styled.Text`
  color: rgba(27, 27, 27, 0.8);
  margin-top: 40px;
  text-align: center;
  width: 60%;
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
`;

export const ContainerInputs = styled.View`
  display: flex;
  margin: 0 5% 0 5%;
`;

export const ContainerButton = styled.View`
  display: flex;
  margin: 0 5% 0 5%;
`;

export const ContainerSenha = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const EsqueceuSenha = styled.Text`
  color: #1b1b1b;
  text-align: center;
  margin: 15% 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
`;

export const ButtonRecuperar = styled.TouchableOpacity``;

export const RecuperarSenha = styled.Text`
  color: #fb9400;
  margin-left: 5%;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
`;

export const ContainerCadastro = styled.View`
  display: flex;
  margin: 0 5% 10% 5%;
`;
