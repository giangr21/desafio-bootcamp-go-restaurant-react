import 'styled-componets';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;

      secundary: string;
      secundaryVariant: string;

      error: string;

      background: string;
      backgroundCard: string;

      text: string;
    };
  }
}
