 // @ts-nocheck
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import Icone from "react-native-vector-icons/MaterialCommunityIcons";
import {
  Box,
  Title,
  Header,
  Container,
  ScrollView,
  ContainerInputs,
  ContainerButton,
  ContainerIcon
} from "../../global/styles/Perfil/Perfil";
import * as ImagePicker from 'expo-image-picker';

import Linhas from "../../components/Linhas";
import Inputs from "../../components/Inputs";
import Button from "../../components/Button";
import api from "../../../Api";
import AsyncStorage from '@react-native-async-storage/async-storage'


export default function Perfil({ navigation }: PropsNavigation) {

  const [image, setImage] = useState<any>(null);
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  useEffect(() => {
    async function teste() {
      try {
        let resp = await api.get('/clientes', {
          headers: {
            'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYWlsQG1haWwuY29tIiwiZXhwIjoxNjYyODUyMjc4fQ.5JRzae4n3TZgSVe5X3CX9HMCP_UuAx4LJmsHsSgoLeDSaSqla4mRq7hLHft9e_9J513HQN_TZkUZPwiCHvc2fQ`,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Authorization",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
          }
        }).then(
          setNome(resp.data.nome),
          setEmail(resp.data.email),
          setSenha(resp.data.senha)
        )
      } catch (erro) {
        if (erro.response) {
          console.log(erro.response.data);
          console.log(erro.response.status);
          console.log(erro.response.headers);
        }
      }
    }
    teste();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });
    console.warn(image);
    setImage(result);
  };

  return (
    <Container>
      <ScrollView>
        <ContainerIcon>
          <Container>
          </Container>
          <Icone name="arrow-left" size={30} color="#FB9400" onPress={() => navigation.goBack()} />
        </ContainerIcon>
        <Header>
          <Title>Perfil</Title>

          {image == null || image.cancelled == true ?
            <Icone name="account-circle-outline"
              size={95}
              color="#6A7D8B" /> : image && (
                <Image
                  style={{ height: 250, width: 250, borderRadius: 70 }}
                  source={{ uri: image.uri }}
                />
              )}
        </Header>
        <Linhas />
        <ContainerInputs>
        <Inputs placeholder={`Altere seu nome:`} onChangeText={(text) => {
            setNome(text)
          }} />       
          <Inputs placeholder={`Altere seu e-mail: `} onChangeText={(text) => {
            setEmail(text)
          }} />
          <Inputs placeholder={`Altere sua senha: ${senha}`} secure onChangeText={(text) => {
            setSenha(text)
          }} />
        </ContainerInputs>
        <ContainerButton >
          <Button text="Upload de imagem" color={"#f9f9fb;"} textColor={"#797988"} funcao={pickImage} />
        </ContainerButton>
        <Box />
        <ContainerButton>
          <Button
            text="Editar"
            color="#FB9400"
            textColor="#fff"
            strokeColor
            funcao={async () => {
              let resposta = await api.post("/clientes", {
                nome: nome,
                email: email,
                senha: senha,
              })
              alert(resposta);
              if (resposta.status == 201) {
                alert("Usuário Alterado")
              } else {
                alert("Falha ao alterar Usuário")
              }
            }}
          />
        </ContainerButton>
        <Box />
      </ScrollView>
    </Container>
  );
}
