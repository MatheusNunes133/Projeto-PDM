export declare global {
  interface PropsNavigation {
    navigation: {
      navigate: Function;
      openDrawer: Function;
      goBack: Function;
    };
    route: Object;
  }

  interface PropsArrows {
    name: string;
    sizeArrow: number;
    color?: string;
  }

  interface PropsMaps {
    width: number;
    height: number;
  }

  interface PropsButton {
    color: string;
    textColor: string;
    text: string;
    funcao?: Function;
    strokeColor?: boolean;
  }

  interface PropsButtonIcon {
    icon: string;
    color: string;
    funcao?: Function;
    height: number;
    width: number;
    marginLeft: number;
    marginRight: number;
    marginBottom: number;
  }

  interface PropsInputs {
    placeholder: string;
    secure?: boolean;
    onChangeText?: Function;
    maxLength?: number;
  }

  interface PropsCardsCardapio {
    image: NodeRequire;
    hamburguerType: string;
    hamburguerName: string;
    hamburguerPrice: string;
    funcao: Function;
  }
}
