import React from "react";

import {
  ContainerButton,
  TextButton,
} from "../../global/styles-components/Button/button";

export default function Button({
  color,
  textColor,
  text,
  funcao,
  strokeColor,
}: PropsButton) {
  return (
    <ContainerButton
      colorButton={color}
      onPress={funcao}
      strokeColor={strokeColor}
    >
      <TextButton textColor={textColor}>{text}</TextButton>
    </ContainerButton>
  );
}
