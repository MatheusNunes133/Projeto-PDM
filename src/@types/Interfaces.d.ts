export declare global {
  interface PropsNavigation {
    navigation: {
      navigate: Function;
      openDrawer: Function;
      goBack: Function;
    };
  }

  interface PropsArrows {
    name: string;
    sizeArrow: number;
    color?: string;
  }

  interface PropsButton {
    color: string;
    textColor: string;
    text: string;
    funcao?: Function;
    strokeColor?: boolean;
  }

  interface PropsInputs {
    placeholder: string;
    secure?: boolean;
  }

  interface PropsCardsCardapio {
    image: NodeRequire;
    hamburguerType: string;
    hamburguerName: string;
    hamburguerPrice: string;
    funcao: Function;
  }
}
