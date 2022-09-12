import React,{useState} from "react";


import {
  ArrowBack,
  Container,
  ContainerLogo,
  ScrollView,
  StatusBar,
  Header,
  InfoLogin,
  ContainerInputs,
  ContainerSenha,
  EsqueceuSenha,
  RecuperarSenha,
  ButtonRecuperar,
  ContainerButton,
} from "../../global/styles/Login/login";

import Logo from "../../components/Logo";
import Arrows from "../../components/Arrows";
import Linhas from "../../components/Linhas";
import Inputs from "../../components/Inputs";
import Button from "../../components/Button";
import api from "../../../Api";

export default function Cadastro({ navigation }: PropsNavigation) {

const [nome, setNome] = useState("")
const [email, setEmail] = useState("")
const [senha, setSenha] = useState("")
const [CPF, setCPF] = useState("")
const [telefone, setTelefone] = useState("")
const [dataNasc, setDataNasc] = useState("")

  return (
    <Container>
      <ScrollView>
        <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
        <Header>
          <ArrowBack onPress={() => navigation.navigate("Login")}>
            <Arrows name="arrow-back" sizeArrow={30} color="#FB9400" />
          </ArrowBack>
          <ContainerLogo>
            <Logo />
          </ContainerLogo>
          <InfoLogin>Preencha os campos para criar o seu cadastro.</InfoLogin>
        </Header>
        <Linhas />
        <ContainerInputs>
          <Inputs placeholder="Digite seu nome" onChangeText={(text)=>{
            setNome(text)
          }}/>
          <Inputs placeholder="Digite seu e-mail" onChangeText={(text)=>{
            setEmail(text)
          }}/>
          <Inputs placeholder="Digite sua senha" secure onChangeText={(text)=>{
            setSenha(text)
          }}/>
          <Inputs placeholder="Digite seu CPF" maxLength={14} onChangeText={(text)=>{
            setCPF(text)
          }} type="numeric"/>
          <Inputs placeholder="Digite sua data de nascimento (AAAA-MM-DD)"  maxLength={10} onChangeText={(text)=>{
            setDataNasc(text)
          }} type="numeric" />
          <Inputs placeholder="Digite seu telefone" maxLength={11} onChangeText={(text)=>{
            setTelefone(text)
          }} type="numeric" />
        </ContainerInputs>
        <ContainerButton>
          <Button
            text="Cadastrar"
            color="#FB9400"
            textColor="#fff"
            strokeColor
            funcao={async ()=>{
              try{
              let resposta = await api.post("/clientes",{
                nome: nome,
                email: email,
                senha: senha,
                cpf: CPF,
                dataNasc: dataNasc,
                telefone: telefone
              })
              if(resposta.status == 201){
                alert("Usuário Criado")
              }}catch(error){
                alert("Erro ao se cadastrar (Preencha todos os campos ou tente informar a data de nascimento no formato correto)")
              }
            }}
          />
        </ContainerButton>
        <ContainerSenha>
          <EsqueceuSenha>Já tem cadastro?</EsqueceuSenha>
          <ButtonRecuperar
            onPress={() => {
              return navigation.navigate("Login");
            }}
          >
            <RecuperarSenha>Fazer Login</RecuperarSenha>
          </ButtonRecuperar>
        </ContainerSenha>
      </ScrollView>
    </Container>
  );
}
