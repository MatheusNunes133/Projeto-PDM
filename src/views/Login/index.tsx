import React,{useState} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'

import Arrows from "../../components/Arrows";
import Logo from "../../components/Logo";
import Linhas from "../../components/Linhas";
import Inputs from "../../components/Inputs";
import Button from "../../components/Button";

import {
  Container,
  ScrollView,
  StatusBar,
  Header,
  ArrowBack,
  ContainerLogo,
  InfoLogin,
  ContainerInputs,
  ContainerButton,
  ContainerSenha,
  EsqueceuSenha,
  ButtonRecuperar,
  RecuperarSenha,
  ContainerCadastro,
} from "../../global/styles/Login/login";
import api from "../../../Api";

export default function Login({ navigation }: PropsNavigation) {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  return (
    <Container>
      <ScrollView>
        <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
        <Header>
          <ArrowBack onPress={() => navigation.goBack()}>
            <Arrows name="arrow-back" sizeArrow={30} color="#FB9400" />
          </ArrowBack>
          <ContainerLogo>
            <Logo />
          </ContainerLogo>
          <InfoLogin>Use suas credenciais para realizar o login.</InfoLogin>
        </Header>
        <Linhas />
        <ContainerInputs>
          <Inputs placeholder="Digite seu e-mail" onChangeText={(text)=>{
            setEmail(text)
          }}/>
          <Inputs placeholder="Digite sua senha" secure={true} onChangeText={(text)=>{
            setSenha(text)
          }}/>
        </ContainerInputs>
        <ContainerButton>
          <Button
            text="Enviar"
            color="#FB9400"
            textColor="#fff"
            strokeColor
            funcao={async () => {
              await api.post("/login",{
                email: email,
                senha: senha
              })
              .then((resposta)=>{
              if(resposta.status == 200){
                AsyncStorage.setItem(`${email}->Token`, resposta.data)
                navigation.navigate("CardapioDrawer",{paramKeys:{
                  email:email
                }})
              }
              }).catch(erro=>{
                alert("Erro ao fazer Login")
              })
            }}
          />
        </ContainerButton>
        <ContainerSenha>
          <EsqueceuSenha>Esqueceu sua senha?</EsqueceuSenha>
          <ButtonRecuperar
            onPress={() => {
              navigation.navigate("EsqueceuASenha");
            }}
          >
            <RecuperarSenha>Clique aqui</RecuperarSenha>
          </ButtonRecuperar>
        </ContainerSenha>
        <Linhas />
        <ContainerCadastro>
          <Button
            text="Quero me Cadastrar"
            color="#fff"
            textColor="#FB9400"
            strokeColor
            funcao={() => {
              return navigation.navigate("Cadastro");
            }}
          />
        </ContainerCadastro>
      </ScrollView>
    </Container>
  );
}
