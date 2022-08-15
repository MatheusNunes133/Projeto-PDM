import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: #f9f9fb;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10% 5% 2% 5%;
`;

export const Welcome = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.Text`
  color: #1b1b1b;
  font-weight: 500;
  font-size: 24px;
  line-height: 29.05px;
`;

export const SubTitle = styled.Text`
  color: rgba(151, 151, 151, 0.8)
  font-weight: 400;
  font-size: 16px;
  line-height: 29.05px;
`;

export const Menu = styled.TouchableOpacity`
  display: flex;
`;

export const Search = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  margin: 10% 5% 0 5%;
  padding: 5% 5%;
  background-color: #fff;
  border-radius: 5px;
  height: 60px;
`;

export const SearchButton = styled.TouchableOpacity``;

export const SearchInput = styled.TextInput`
  color: black;
  width: 100%;
  padding-left: 10px;
`;

export const ScrollView = styled.ScrollView`
  margin-top: 10%;
`;

export const BurguerPromotion = styled.View`
  display: flex;
  flex-direction: row;
  margin: 5% 5%;
  padding: 0 0 0 5%;
  background-color: #fff;
  border-radius: 5px;
`;

export const InfoPromotion = styled.View`
  display: flex;
`;

export const PromotionTag = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fb9400;
  padding: 2% 5%;
  border-radius: 5px;
  width: 65px;
`;

export const TextPromotion = styled.Text`
  color: #fff;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
`;

export const BurguerName = styled.Text`
  color: #1b1b1b;
  font-weight: 400;
  font-size: 34px;
  line-height: 44.2px;
  margin: 5% 0;
`;

export const SubTitlePromotion = styled.Text`
  color: #6a7d8b;
  font-weight: 500;
  font-size: 10px;
  line-height: 12.1px;
  margin: 3% 0;
`;

export const BurguerPromotionPrice = styled.Text`
  color: #fb9400;
  font-weight: 800;
  font-size: 32px;
  line-height: 38.73px;
  margin: 3% 0;
`;

export const ContainerBurguerImage = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerBurguer = styled.View`
  position: relative;
  flex-direction: row;

  align-items: center;
  justify-content: center;
`;

export const BurguerImageDown = styled.Image`
  width: 100px;
  height: 100px;
  margin-right: 40px;
  margin-top: -20px
  z-index: 1;
`;
export const BurguerImageUp = styled.Image`
  position: absolute;
  right: 10px;
  z-index: 2;
`;

export const BackgroundBurguer = styled.View`
  position: absolute;
  right: 0px;
  background-color: #fb9400;
  border-radius: 5px;
  width: 80px;
  height: 100%;
`;

export const ContainerCardapio = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 3% 5%;
`;
