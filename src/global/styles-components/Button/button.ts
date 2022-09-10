import styled from "styled-components/native";

export const ContainerButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => {
    return props.colorButton;
  }};
  height: 60px;
  border-width: 1px;
  border-color: ${(props) => {
    if (props.strokeColor) {
      return "#FB9400";
    } else {
      return "";
    }
  }};
  border-radius: 5px;
`;

export const ContainerButtonIcon = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white
  margin-left: ${(props) => {
    return props.marginLeft;
  }};
  margin-right: ${(props) => {
    return props.marginRight;
  }};
  margin-bottom: ${(props) => {
    return props.marginBottom;
  }};
  height: ${(props) => {
    return props.height;
  }};
  width: ${(props) => { return props.width; }};
  border-width: 1px;
  border-color: #FB9400;
  border-radius: 5px;
`;


export const TextButton = styled.Text`
  color: ${(props) => {
    return props.textColor;
  }}; ;
`;
