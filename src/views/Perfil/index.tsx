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
import api from "../../Api";
import AsyncStorage from '@react-native-async-storage/async-storage'


export default function Perfil({ navigation }: PropsNavigation) {

  const [image, setImage] = useState<any>(null);
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  useEffect(() => {
    try {
      const data =  api.get(`/clientes`);
      alert(data);
    } catch (error) {
      // Error retrieving data
      console.log("Error 2: ", error);
    }
},[])


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
          <Inputs placeholder="Nome" />
          <Inputs placeholder="Edite seu e-mail" onChangeText={(text: any) => {
            setEmail(text)
          }} />
          <Inputs placeholder="nova senha" secure onChangeText={(text: any) => {
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
          />
        </ContainerButton>
        <Box />
      </ScrollView>
    </Container>
  );
}
