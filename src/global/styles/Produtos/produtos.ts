import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: #fff;
`;

export const StatusBar = styled.StatusBar``;

export const ScrollView = styled.ScrollView``;

export const Header = styled.View`
  display: flex;
  background-color: #fb9400;
  height: 300px;
`;

export const ContainerHeader = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin: 10% 5% 0 5%;
`;

export const OptionsButtons = styled.TouchableOpacity`
  display: flex;
`;
export const TitlePage = styled.Text`
color: #FFFFFF
font-weight: 600;
font-size: 24px;
line-height: 29.05px;
`;

export const ImageBurguer = styled.Image`
  display: flex;
  height: 280px;
  width: 320px;
  margin: -50% 5% 0 5%;
`;

export const ContainerNameBurguer = styled.View`
  display: flex;
  margin: 10% 5% 0 5%;
`;
export const TypeBurguer = styled.Text`
  color: #1b1b1b;
  font-weight: 500;
  font-size: 16px;
  line-height: 19.36px;
`;

export const NameBurguer = styled.Text`
  color: #1b1b1b;
  font-weight: 600;
  font-size: 40px;
  line-height: 48.41px;
`;

export const ContainerLinhas = styled.View`
  display: flex;
  width: 100%;
  padding: 10% 5% 0 5%;
`;

export const LinhaCinza = styled.View`
  border: 1px solid #e2e2e2;
`;

export const LinhaLaranja = styled.View`
  border: 1px solid #fb9400;
  margin: -2px 30% 0 0;
`;

export const Descricao = styled.Text`
  color: rgba(27, 27, 27, 0.5);
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin: 5% 5% 0 5%;
  text-align: justify;
`;

export const ContainerPedido = styled.View`
  display: flex;
  margin: 5% 5% 0 5%;
`;

export const QuantidadeName = styled.Text`
  color: #1b1b1b;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin: 0 0 5% 0;
`;

export const ContainerQuantidade = styled.View`
  display: flex;
  flex-rirection: row;
`;

export const ContainerButtons = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const ButtonMenos = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  background-color: #f2f4f5;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  height: 48px;
  width: 48px;
`;
export const Quantidade = styled.Text`
  color: #fb9400;
  font-weight: 700;
  font-size: 18px;
  line-height: 21.78px;
  margin: 0 5% 0 5%;
`;
export const ButtonMais = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: #fb9400;
  height: 48px;
  width: 48px;
`;

export const Preco = styled.Text`
  color: #fb9400;
  font-weight: 600;
  font-size: 40px;
  line-height: 48.41px;
  margin-left: 10%;
`;
export const ContainerButton = styled.View`
  margin: 10% 5% 10% 5%;
`;
