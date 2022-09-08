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
  margin-bottom: 5%;
`;
export const ContainerEndereco = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const Endereco = styled.Text`
background-color: #e2e2e2;
`;
export const Linha = styled.View`
   display: flex;
  width: 95%;
  align-self: center;
  border-top-width: 2px;
  border-color: #e2e2e2;
  margin-bottom: 20%;
  
`;
export const ContainerTitle = styled.View`
left: 100px;
`;
export const ContainerTop = styled.View`
  display: flex;
  width: 80%;
  height: 20%;
  flex-direction: row;
  padding-top: 10px;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  margin: 10% 4% 0 5%;
`;
export const TextItems = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 13px;
  margin-top: 16px;
  margin-left: -20px;
`;
export const InfoEnviado = styled.Text`
  color: #4f77be;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 13px;
  margin-top: 16px;
  margin-left: 220px;
`;
export const Welcome = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.Text`
  color: #1b1b1b;
  font-weight: 500;
  font-size: 24px;
  line-height: 29.05px;
`;
export const ScrollView = styled.ScrollView`
  margin-top: 10%;
`;

export const SubTitle = styled.Text`
  color: rgba(151, 151, 151, 0.8)
  font-weight: 400;
  font-size: 16px;
  line-height: 29.05px;
`;
