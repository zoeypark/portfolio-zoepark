import { createGlobalStyle } from 'styled-components';
import QueensThinItalic from '../assets/fonts/QueensTrial-ThinItalic.woff';
import QueensThin from '../assets/fonts/QueensTrial-Thin.woff';
import QueensMediumItalic from '../assets/fonts/QueensTrial-MediumItalic.woff';
import QueensMedium from '../assets/fonts/QueensTrial-Medium.woff';
import PPNeueMontrealThin from '../assets/fonts/PPNeueMontreal-Thin.woff';

const GlobalStyle = createGlobalStyle`
  @font-face {
        font-family: 'QueensThinItalic';
        font-weight: 400;
        font-display: block;
        src: local('QueensThinItalic'), local('QueensThinItalic');
        font-style: normal;
        src: url(${QueensThinItalic}) format('truetype');
  }
  @font-face {
        font-family: 'QueensThin';
        font-weight: 400;
        font-display: block;
        src: local('QueensThin'), local('QueensThin');
        font-style: normal;
        src: url(${QueensThin}) format('truetype');
  }
  @font-face {
        font-family: 'QueensMediumItalic';
        font-weight: 500;
        font-display: block;
        src: local('QueensMediumItalic'), local('QueensMediumItalic');
        font-style: normal;
        src: url(${QueensMediumItalic}) format('truetype');
  }
  @font-face {
        font-family: 'QueensMedium';
        font-weight: 500;
        font-display: block;
        src: local('QueensMedium'), local('QueensMedium');
        font-style: normal;
        src: url(${QueensMedium}) format('truetype');
  }
  @font-face {
        font-family: 'PPNeueMontrealThin';
        font-weight: 400;
        font-display: block;
        src: local('PPNeueMontrealThin'), local('PPNeueMontrealThin');
        font-style: normal;
        src: url(${PPNeueMontrealThin}) format('truetype');
  }
`

export default GlobalStyle;