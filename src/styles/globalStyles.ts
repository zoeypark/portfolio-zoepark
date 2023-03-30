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

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video, textarea {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: calc( 10px + 0.4vw );
    vertical-align: baseline;
    font-family: 'PPNeueMontrealThin','QueensThinItalic','QueensThin','QueensMediumItalic','QueensMedium';
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
    background-color: #EFEBE6;
    overflow-y: overlay !important;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  body::-webkit-scrollbar {
    width: 8px;
    background: transparent;
  }
  body::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.0);
      border-radius: 100px;
  }
`

export default GlobalStyle;