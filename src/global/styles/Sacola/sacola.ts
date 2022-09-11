import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: #ffffff;
`;

export const ScrollView = styled.ScrollView`
height: 400px`;

export const TitlePage = styled.Text`
  /* align-self: flex-end; */
  color: #1b1b1b;
  padding-left: 31%;
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  /* margin: 0% 0 5% 0; */
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  margin: 15% 0% 0 5%;
`;

export const ContainerFrete = styled.View`
  display: flex;
  margin-top: 10px;
  flex-direction: row;
`;

export const ContainerInfo = styled.View`
  display: flex;
  width: 373px;
  height: 94px;
  flex-direction: column;
  background-color: #f9f9fa;
`;

export const Input = styled.TextInput`
  width: 250px;
  height: 56px;
  background-color: white;
  border: 2px solid #fb9400;
  padding: 0 5%;
  margin-bottom: 30px;
  border-radius: 5px;
`;
export const TitleFrete = styled.Text`
  color: #6a7d8b;
  margin-top: 22px;
`;
export const TextButton = styled.Text`
  color: #6a7d8b;
`;
export const ButtonOk = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 56px;
  height: 56px;
  margin-left: 14px;
  border: 2px solid #fb9400;
  border-radius: 5px;
`;

export const ArrowBack = styled.TouchableOpacity`
  align-self: flex-start;
  /* margin-right: 50%; */
`;

export const ContainerSacolaPrincipal = styled.View`
  /* display: flex; */
  justify-content: center;
  align-self: center;
  width: 90%;
`;

export const ContainerItemCount = styled.View`
  display: flex;
  margin-top: 3%;
  height: 50px;
  flex-direction: column;
  justify-content: center;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: #e2e2e2;
`;

export const InfoCount = styled.Text`
  color: rgba(27, 27, 27, 0.8);
  margin-left: 25px;
  align-self: flex-start;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #1b1b1b;
`;
