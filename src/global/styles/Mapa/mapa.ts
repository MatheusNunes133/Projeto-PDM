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


export const ContainerButton = styled.View`
  /* display: flex; */
  position: absolute;
  align-self: center;
  width: 380px;
  top: 90%;
`;

