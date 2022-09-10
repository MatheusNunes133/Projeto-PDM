import React,{useState,useEffect} from "react";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import AsyncStorage from "@react-native-async-storage/async-storage";
import Icone from "react-native-vector-icons/MaterialIcons"
import Linhas from "../Linhas";

import {
  Container,
  ButtonLogin,
  TextButton,ContainerPerfil,NameUser
} from "../../global/styles-components/CustomDrawer/customDrawer";
import api from "../../../Api";

export default function CustomDrawer(props: DrawerContentComponentProps) {

  const [token, setToken] = useState()
  const [name, setName] = useState()
  
  async function getToken(){
    let tokenUser = await AsyncStorage.getItem("Token")
    if(tokenUser){
      setToken(tokenUser)
    }
  }
getToken()

async function getUsers(){
  let users = await api.get("/clientes",{headers:{
    "Authorization": token
  }})
  let arrayUsers = users.data
  let email = await AsyncStorage.getItem("emailUser")
  
  arrayUsers.forEach((item)=>{
    if(item.email == email){
      setName(item.nome)
    }
  })
}
getUsers()

  return (
    <Container>
      {
      token && <ContainerPerfil>
      <NameUser>{name}</NameUser>
      <Icone name="close" size={25} color={"#FB9400"} />
    </ContainerPerfil>
      }
      {
      !token && 
      <ButtonLogin
      onPress={() => {
        const { navigation } = props;
        navigation.navigate("Login");
      }}
    >
      <TextButton>Fazer Login</TextButton>
    </ButtonLogin>
      }
      <Linhas />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </Container>
  );
}
