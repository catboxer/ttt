import { css, keyframes } from "styled-components";


/*
=============== 
Variables
===============
*/


export const setColor = {
  primary1: "hsl(180, 91%, 17%)",
  primary2: "hsl(180, 84%, 25%)",
  primary3: "hsl(180, 81%, 29%)",
  primary4: "hsl(180, 77%, 34%)",
  primary5: "hsl(180, 62%, 45%)",
  /* lighter shades of primary color */
  primary6: "hsl(180, 57%, 50%)",
  primary7: "hsl(180, 65%, 59%)",
  primary8: "hsl(180, 80%, 74%)",
  primary9: "hsl(180, 94%, 87%)",
  primary10: "hsl(180, 87%, 94%)",
  /* darkest grey - used for headings */
  grey1: "hsl(209, 61%, 16%)",
  grey3: "hsl(209, 34%, 30%)",
  grey4: "hsl(209, 28%, 39%)",
  /* grey used for paragraphs */
  grey5: "hsl(210, 22%, 49%)",
  grey8: "hsl(210, 31%, 80%)",
  grey9: "hsl(212, 33%, 89%)",
  grey10: "hsl(125, 33%, 96%)",
  hotPink: "#ea3599",
  lightPink:"#e582b8",
  yellow: "#fc0",
  blue:"#a3d9e9",
  orange:"#d75727",
  mainWhite: "#fff",
  mainBlack: "#222",
  darkRed: "hsl(360, 67%, 44%)",
  lightRed:"hsl(360, 71%, 66%)",
  darkGreen: "hsl(161, 62%, 41%)",
  lightGreen: "hsl(162, 63%, 87%)",
  overlay: "rgba(255, 255, 255, 0.25)",
  twitter: "#0084b4",

};

export const setFont = {
  heading: "font-family: 'Roboto Slab', sans-serif;",
  subheading: "font-family:'Open Sans Condensed', sans-serif;",
  main: "font-family:'Open Sans', sans-serif;",
  handwriting: "font-family: 'Bad Script', cursive;",
};


export const setFlex = ({ x = "center", y = "center" } = {}) => {
  return `display:flex;align-items:${y};justify-content:${x}`;
};

export const setBackground = ({
  img = "https://source.unsplash.com/collection/44653195/500",
  color = "rgba(0,0,0,0.5)"
} = {}) => {
  return `background: linear-gradient(${color}, ${color}),
    url(${img}) center/cover fixed no-repeat`;
};

export const setRem = (number = 16) => {
  return `${number / 16}rem`;
};

export const setRadius = (number = .25) => {
  return `${number}rem`;
};


export const setLetterSpacing = (number = .1) => {
  return `${number}rem`;
};

export const setMaxWidth = (number = 1170) => {
  return `${number}px`;
};

export const setFixedWidth = (number = 700) => {
  return `${number}px`;
};

export const setShadow = {
  light: "box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75)",
  dark: "box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75);",
  darkest: "box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);"
};

export const setBorder = ({
  width = "2px",
  style = "solid",
  color = "black"
} = {}) => {
  return `border:${width} ${style} ${color}`;
};

const sizes = {
  large: 1200,
  desktop: 992,
  tablet: 768,
  phone: 576
};

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export const setTransition = ({
  property = "all",
  time = "0.3s",
  timing = "ease-in-out"
} = {}) => {
  return `transition:${property} ${time} ${timing}`;
};

export const setfadeIn = (start,middle,end)=>{
const animation = keyframes`
0%{
  opacity:0;
  transform: translateY(${start});
}
50%{
  opacity:.5;
  tranform:translateY(${middle});
}
100%{
  opacity:1;
  tranform:translateY(${end});
}
`
return css `animation:${animation} 3s ease-in-out`
}
