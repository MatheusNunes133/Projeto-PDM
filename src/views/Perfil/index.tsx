import React, { useState } from "react";
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


export default function Perfil({ navigation }: PropsNavigation) {

  const [image, setImage] = useState<any>(null);

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

          {image.cancelled == true|| image == undefined ?
            <Icone name="account-circle-outline"
              size={95}
              color="#6A7D8B" /> : image && (
                <Image
                  style={{ height: 250, width: 250 }}
                  source={{ uri: image.uri }}
                />
              )}
        </Header>
        <Linhas />
        <ContainerInputs>
          <Inputs placeholder="Fábio da silva Diniz" />
          <Inputs placeholder="fad@gmail.com" />
          <Inputs placeholder="nova senha" secure />
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
