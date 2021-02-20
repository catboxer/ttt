import { css, keyframes } from "styled-components";

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
