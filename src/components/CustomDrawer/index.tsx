import React from "react";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import Linhas from "../Linhas";

import {
  Container,
  ButtonLogin,
  TextButton,
} from "../../global/styles-components/CustomDrawer/customDrawer";

export default function CustomDrawer(props: DrawerContentComponentProps) {
  return (
    <Container>
      <ButtonLogin
        onPress={() => {
          const { navigation } = props;
          navigation.navigate("Login");
        }}
      >
        <TextButton>Fazer Login</TextButton>
      </ButtonLogin>
      <Linhas />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </Container>
  );
}
