import styled from "styled-components/native";

export const ContainerButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => {
    return props.colorButton;
  }};
  height: 60px;
  border-radius: 5px;
`;

export const TextButton = styled.Text`
  color: ${(props) => {
    return props.textColor;
  }}; ;
`;
