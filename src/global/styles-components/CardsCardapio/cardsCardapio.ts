import styled from "styled-components/native";

export const ContainerCards = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  background-color: #fff9f2;
  border-radius: 10px;
  width: 47%;
  margin: 0 0 7% 0;
`;

export const CardsImage = styled.Image``;

export const CardsInfo = styled.View`
  display: flex;
  align-self: flex-start;
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  padding: 5% 10px;
`;

export const HamburguerType = styled.Text`
  color: #1b1b1b;
  font-weight: 500;
  font-size: 8px;
  line-height: 9.68px;
`;

export const HamburguerName = styled.Text`
  color: #1b1b1b;
  font-weight: 700;
  font-size: 18px;
  line-height: 21.78px;
`;

export const HamburguerPrice = styled.Text`
  color: #fb9400;
  font-weight: 600;
  font-size: 15px;
  line-height: 18.15px;
`;
