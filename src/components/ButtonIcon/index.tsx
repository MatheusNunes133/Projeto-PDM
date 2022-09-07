import React from "react";
import Icone from "react-native-vector-icons/MaterialIcons";


import {
  ContainerButtonIcon,
} from "../../global/styles-components/Button/button";

export default function ButtonIcon({
  color,
  icon,
  height,
  width,
  funcao,
  marginLeft,
  marginRight,
  marginBottom,
}: PropsButtonIcon) {
  return (
    <ContainerButtonIcon
      height={height}
      width={width}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginBottom={marginBottom}
      onPress={funcao}
    >
      <Icone
        name={icon}
        size={30}
        color={color}
      />
    </ContainerButtonIcon>
  );
}
