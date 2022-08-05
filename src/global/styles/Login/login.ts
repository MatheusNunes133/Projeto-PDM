import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: #ffffff;
`;

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
