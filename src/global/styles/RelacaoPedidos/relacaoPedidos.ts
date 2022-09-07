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
  margin-bottom: 10%;
`;

export const ContainerMenor = styled.View`
  /* display: flex; */
  margin-top: 35px;
  width: 100%;
  height: 156px;
  align-self: center;
  border-radius: 4px;
  background-color: white;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContainerDescricao1 = styled.View`
  display: flex;
  align-items: flex-start;
  width: 185px;
  height: 100%;
  align-self: center;
  /* background-color: red; */
  flex-direction: column;
`;

export const ContainerDescricao2 = styled.View`
  display: flex;
  width: 185px;
  height: 100%;
  /* background-color: red; */
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const InfoDetalhes = styled.Text`
  color: black;
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  margin-left: 10%;
  margin-top: 10%;
`;

export const InfoDataHora = styled.Text`
  color: #6A7D8B;
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  margin-left: 10%;
`;

export const InfoDescricaoValor = styled.Text`
  color: #6A7D8B;
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  margin-left: 10%;
  margin-top: 20%;
`;

export const InfoValor = styled.Text`
  color: #FB9400;
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  margin-left: 10%;
  margin-top: 3%;
`;

export const ContainerEnviado = styled.View`
  /* display: flex; */
  width: 78px;
  height: 26px;
  border-radius: 4px;
  background-color: #EDF1F8;
  margin-top: 10%;
  margin-left: 35%;
  align-items: center
`;

export const InfoEnviado = styled.Text`
  color: #4F77BE;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 13px;
  margin-top: 6px;
`;

export const ContainerEntrega = styled.View`
  /* display: flex; */
  width: 78px;
  height: 26px;
  border-radius: 4px;
  background-color: #F1F8F6;
  margin-top: 10%;
  margin-left: 35%;
  align-items: center
`;

export const InfoEntrega = styled.Text`
  color: #6AB70A;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 13px;
  margin-top: 6px;
`;

export const ContainerButtonSeta = styled.View`
  align-items: flex-end;
  align-self: center;
  margin-top: 25%;
  margin-left: 35%;
  border-color: #FB9400
`;

export const ScrollView = styled.ScrollView``;

export const StatusBar = styled.StatusBar``;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  margin: 10% 5% 0 5%;
`;

export const ArrowBack = styled.TouchableOpacity`
  align-self: flex-start;
  /* margin-right: 50%; */
`;


export const InfoPedidos = styled.Text`
  color: #FFFFFF;
  width: 326px;
  height: 141px;
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 34px;
  margin-left: 5%;
  margin-top: 5%;
`;

export const ContainerSeletorData = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 327px;
    height: 45px;
    margin-left: 7%;
    margin-top: 12%;
    background: #F08E00;
`;

export const ContainerDataInicio = styled.View`
    display: flex;
    flex-direction: column;
    width: 120px;
    height: 45px;
    /* margin-left: 100%; */
    /* margin-top: 12%; */
    align-items: flex-start;
    /* background: black; */
`;

export const DataSelect = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
`;

export const DataTitle = styled.Text`
  color: #7A7A80;
  font-weight: bold;
  text-align: center;
`;

export const ContainerDataFim = styled.View`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 120px;
    height: 45px;
    /* background: red; */
`;

export const ContainerArrow = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 45px;
    padding-right: 15px;
    padding-top: 10px;
    /* background: white; */
`;

export const ContainerInputs = styled.View`
  display: flex;
  margin: 0 5% 0 5%;
`;

export const ContainerButton = styled.View`
  display: flex;
  margin: 0 5% 0 5%;
`;

export const TitlePage = styled.Text`
  color: #1b1b1b;
  padding-left: 21%;
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  margin: 0% 0 5% 0;
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
  line-height: 18px;
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
