import styled from "styled-components/native";


export const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: #ffffff;
`;

export const TitlePage = styled.Text`
  color: #1b1b1b;
  padding-left: 21%;
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  margin: 0% 0 5% 0;
  align-self: flex-end;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  margin: 15% 5% 0 5%;
`;

export const ArrowBack = styled.TouchableOpacity`
  align-self: flex-start;
  /* margin-right: 50%; */
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
  /* display: flex; */
  position: absolute;
  align-self: center;
  width: 380px;
  top: 90%;
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
