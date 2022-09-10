import styled from "styled-components/native";

export const Container = styled.View`
  displat: flex;
  flex: 1;
`;

export const ButtonLogin = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10% 5% 5% 5%;
  background-color: #fb9400;
  border-radius: 4px;
  height: 56px;
`;

export const TextButton = styled.Text`
  color: #fff;
`;

export const ContainerPerfil = styled.View`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin: 10% 5% 0 5%;
`
export const NameUser = styled.Text`
font-size: 24px;
font-weight: 500;
line-height:29.05px;
color: #1B1B1B;
`