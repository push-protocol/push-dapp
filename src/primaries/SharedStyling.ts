// External Packages
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

interface ISectionProps{
  align?:string;
  direction?:string;
  theme?:string;
  gradient?:string;
  margin?:string;
  padding?:string;
  overflow?:string;
}

interface IContentProps{
  padding?:string;
  theme?:string;
  gradient?:string;
}

interface IItemProps{
  wrap?:string;
  position?:string;
  bg?:string;
  flex?:string|number;
  direction?:string;
  flexBasis?:string|number;
  self?:string;
  align?:string;
  justify?:string;
  padding?:string;
  margin?:string;
  minWidth?:string|number;
  maxWidth?:string|number;
  size?:string|number;
  textAlign?:string;
  filter?:string;
  shadow?:string;
  top?:string|number;
  bottom?:string|number;
  left?:string|number;
  right?:string|number;
  width?:string|number;
  height?:string|number;
  border?:string;
  radius?:string|number;
  overflow?:string;
  zIndex?:number;
  filterHover?:string;
  hover?:string;
  tabletMaxWidth?:string;
  tabletAlign?:string;
  tabletTextAlign?:string;
}

interface IItemHProps{
  flex?:string|number;
}

interface IWaveInnerProps{
  transform?:string;
}

interface IWaveOuterProps extends IWaveInnerProps{
  bottom?:string;
  top?:string;
}

interface IArcProps{
  bottom?:string|number;
  top?:string|number;
  arcRGB?:string|number;
}

interface IBoldSpanProps{
  color?:string;
  weight?:number|string;
}

interface IHeaderProps extends IBoldSpanProps{
  size?:string;
  textTransform?:string;
  margin?:string;
  padding?:string;
  spacing?:string;
  family?:string;
  textAlign?:string;
  maxWidth?:string;
}

interface IImageProps{
  width?:string;
  cursor?:string;
  height?:string;
  filter?:string;
}

interface IParagraphProps{
  flex?:string;
  self?:string;
  color?:string;
  bg?:string;
  weight?:number|string;
  size?:string|number;
  textTransform?:string;
  margin?:string;
  padding?:string;
  lineHeight?:number|string;
  spacing?:number|string;
  textAlign?:string;
}

interface ISpanProps{
  flex?:string;
  self?:string;
  color?:string;
  bg?:string;
  weight?:number|string;
  size?:string;
  textTransform?:string;
  margin?:string;
  padding?:string;
  spacing?:number|string;
  textAlign?:string;
  bRadius?:string;
  minWidth?:string|number;
  pos?:string;
  right?:string;
  left?:string;
  bottom?:string;
  top?:string;
  cursor?:string;
  z?:number;
}

interface IAnchorProps{
  direction?:string;
  flex?:string;
  self?:string;
  align?:string;
  justify?:string;
  weight?:number|string;
  size?:string|number;
  color?:string;
  bg?:string;
  margin?:string;
  padding?:string;
  spacing?:number|string;
  border?:string;
  radius?:string;
  width?:string;
  overflow?:string;
  filter?:string;
  filterHover?:string;
  hover?:string;
  hoverBG?:string;
}

interface IAnchorLinkProps extends IAnchorProps{
  theme?:any;
}

interface IRouterLinkProps{
  direction?:string;
  flex?:string;
  self?:string;
  align?:string;
  justify?:string;
  weight?:number|string;
  size?:string;
  color?:string;
  bg?:string;
  margin?:string;
  padding?:string;
  spacing?:number|string;
  border?:string;
  radius?:string;
  width?:string;
  overflow?:string;
  filter?:string;
  filterHover?:string;
  hover?:string;
  hoverBG?:string;
}

interface IButtonProps{
  flex?:string;
  self?:string;
  align?:string;
  justify?:string;
  weight?:number|string;
  size?:string;
  color?:string;
  bg?:string;
  margin?:string;
  padding?:string;
  spacing?:number|string;
  border?:string;
  radius?:string;
  textTransform?:string;
  overflow?:string;
  hover?:string;
  hoverBG?:string;
}

interface IShowoffProps{
  right?:string;
  left?:string;
  bottom?:string;
  top?:string;
  transform?:string;
  opacity?:number|string;
  tabletAlign?:string;
  align?:string;
  tabletRight?:string;
  tabletLeft?:string;
  tabletBottom?:string;
  tabletTop?:string;
  tabletTransform?:string;
  tabletOpacity?:string|number;
}

interface IFormSubmissionProps{
  flex?:string;
  self?:string;
  align?:string;
  justify?:string;
  weight?:number|string;
  size?:string;
  textTransform?:string;
  color?:string;
  bg?:string;
  margin?:string;
  padding?:string;
  border?:string;
  radius?:string;
}

interface ITextFieldProps extends IFormSubmissionProps{
  outline?:string;
  overflow?:string;
  spacing?:number|string;
  focusBorder?:string;
}

interface IInputProps extends ITextFieldProps{
  display?:string;
  visibility?:string;
  maxllength?:string;
  height?:string;
  cursor?:string;
  hand?:string;
}


export const Section = styled.section<ISectionProps>`
  display: flex;
  align-self: stretch;
  justify-content: center;
  align-items: ${(props) => props.align || "initial"};
  flex-direction: ${(props) => props.direction || "column"};
  background: ${(props) => props.theme || "transparent"};
  background: ${(props) => props.gradient || "undefined"};
  margin: ${(props) => props.margin || "0px"};
  padding: ${(props) => props.padding || "0px"};
  overflow: ${(props) => props.overflow || "initial"};
  flex: 1;
  position: relative;
`;

export const Content = styled.div<IContentProps>`
  display: flex;
  flex-direction: column;
  padding: ${(props) => props.padding || "40px 0px"};
  background: ${(props) => props.theme || "transparent"};
  background: ${(props) => props.gradient || "undefined"};
  position: relative;
`;

export const ItemBreak = styled.div`
  flex-basis: 100%;
`;

export const Item = styled.div<IItemProps>`
  display: flex;
  flex-direction: column;
  flex-wrap: ${(props) => props.wrap || "wrap"};
  position: ${(props) => props.position || "relative"};
  background: ${(props) => props.bg || "transparent"};
  flex: ${(props) => props.flex || "1"};
  flex-direction: ${(props) => props.direction || "column"};
  flex-basis: ${(props) => props.flexBasis || "auto"};
  align-self: ${(props) => props.self || "auto"};
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "center"};
  padding: ${(props) => props.padding || "0px"};
  margin: ${(props) => props.margin || "0px"};
  min-width: ${(props) => props.minWidth || "auto"};
  max-width: ${(props) => props.maxWidth || "initial"};
  font-size: ${(props) => props.size || "inherit"};
  text-align: ${(props) => props.textAlign || "inherit"};
  filter: ${(props) => props.filter || "none"};
  box-shadow: ${(props) => props.shadow || "none"};
  top: ${(props) => props.top || "auto"};
  bottom: ${(props) => props.bottom || "auto"};
  left: ${(props) => props.left || "auto"};
  right: ${(props) => props.right || "auto"};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  border: ${(props) => props.border || "none"};
  border-radius: ${(props) => props.radius || "0px"};
  overflow: ${(props) => props.overflow || "initial"};
  z-index: ${(props) => props.zIndex || "auto"};

  &:hover & {
    filter: ${(props) =>
      (props.filterHover
        ? props.filterHover
        : props.hover
        ? props.hover
        : "none") || "none"};
  }

  @media (max-width: 768px) {
    max-width: ${(props) => props.tabletMaxWidth || "auto"};
    align-items: ${(props) =>
      (props.tabletAlign
        ? props.tabletAlign
        : props.align
        ? props.align
        : "center") || "center"};
    text-align: ${(props) =>
      (props.tabletTextAlign
        ? props.tabletTextAlign
        : props.textAlign
        ? props.textAlign
        : "inherit") || "inherit"};
  }

  ${ItemBreak} {
    width: 0;
  }
`;

export const ItemH = styled(Item)<IItemHProps>`
  flex-direction: row;
  flex: ${(props) => props.flex || "1"};

  ${ItemBreak} {
    width: auto;
    height: 0;
  }
`;

export const WaveOuter = styled.div<IWaveOuterProps>`
  position: absolute;
  right: 0;
  left: 0;
  bottom: ${(props) => props.bottom || "-70px"};
  top: ${(props) => props.top || "auto"};
  transform: ${(props) => props.transform || "initial"};
`;

export const WaveInner = styled.div<IWaveInnerProps>`
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  transform: ${(props) => props.transform || "initial"};
`;

export const Arc = styled.div<IArcProps>`
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 300px;
  bottom: ${(props) => props.bottom || "auto"};
  top: ${(props) => props.top || "auto"};

  &:after {
    content: "";
    position: absolute;
    width: 300%;
    height: 300%;
    top: -25%;
    left: -100%;

    ${(props) =>
      props.arcRGB &&
      css`
        background: radial-gradient(
          ellipse at center,
          ${props.arcRGB}00 0%,
          ${props.arcRGB}00 50%,
          ${props.arcRGB}ff 50%,
          ${props.arcRGB}ff 100%
        );
      `};
  }
`;

export const H1 = styled.h1`
  @media (max-width: 480px) {
    font-size: 2.1rem;
  }
`;

export const H2 = styled.h2<IHeaderProps>`
  color: ${(props) => props.color || "#000"};
  font-weight: ${(props) => props.weight || 600};
  font-size: ${(props) => props.size || "2rem"};
  text-transform: ${(props) => props.textTransform || "inherit"};
  margin: ${(props) => props.margin || "20px 0px"};
  padding: ${(props) => props.padding || "0px"};
  letter-spacing: ${(props) => props.spacing || "inherit"};
  font-family: ${(props) =>
    props.family || "'Strawford', 'Source Sans Pro', Helvetica, sans-serif"};
  text-align: ${(props) => props.textAlign || "inherit"};
`;

export const H3 = styled.h3<IHeaderProps>`
  color: ${(props) => props.color || "rgb(0 0 0 / 0.5)"};
  font-weight: ${(props) => props.weight || 300};
  font-size: ${(props) => props.size || "1rem"};
  text-transform: ${(props) => props.textTransform || "uppercase"};
  margin: ${(props) => props.margin || "-15px 0px 20px 0px"};
  padding: ${(props) => props.padding || "0px"};
  letter-spacing: ${(props) => props.spacing || "0.1em"};
  font-family: ${(props) =>
    props.family || "'Strawford', 'Source Sans Pro', Helvetica, sans-serif"};
  text-align: ${(props) => props.textAlign || "inherit"};
  max-width: ${(props) => props.maxWidth || "initial"};
`;

export const Image = styled.img<IImageProps>`
  width: ${(props) => props.width || "100%"};
  cursor: ${(props) => props.cursor || "default"};
  height: ${(props) => props.height || "auto"};
  display: flex;
  filter: ${(props) => props.filter || "initial"};
`;

export const P = styled.p<IParagraphProps>`
  flex: ${(props) => props.flex || "initial"};
  align-self: ${(props) => props.self || "auto"};
  color: ${(props) => props.color || "#000"};
  background: ${(props) => props.bg || "transparent"};
  font-weight: ${(props) => props.weight || 300};
  font-size: ${(props) => props.size || "inherit"};
  text-transform: ${(props) => props.textTransform || "inherit"};
  margin: ${(props) => props.margin || "20px 0px"};
  padding: ${(props) => props.padding || "0px"};
  line-height:${(props) => props.lineHeight || "auto"};
  letter-spacing: ${(props) => props.spacing || "inherit"};
  text-align: ${(props) => props.textAlign || "initial"};
`;

export const Para = styled(P)<IParagraphProps>`
  font-weight: ${(props) => props.weight || 300};
  letter-spacing: ${(props) => props.spacing || "0.02em"};
  font-size: ${(props) => props.size || "1.1em"};
  color: ${(props) => props.color || "#000000ee"};
`;

export const Span = styled.span<ISpanProps>`
  flex: ${(props) => props.flex || "initial"};
  align-self: ${(props) => props.self || "auto"};
  color: ${(props) => props.color || "#000"};
  background: ${(props) => props.bg || "transparent"};
  font-weight: ${(props) => props.weight || 300};
  font-size: ${(props) => props.size || "inherit"};
  text-transform: ${(props) => props.textTransform || "inherit"};
  margin: ${(props) => props.margin || "0px"};
  padding: ${(props) => props.padding || "0px"};
  letter-spacing: ${(props) => props.spacing || "inherit"};
  text-align: ${(props) => props.textAlign || "initial"};
  border-radius: ${(props) => props.bRadius || "initial"};
  min-width: ${(props) => props.minWidth || "auto"};
  position: ${(props) => props.pos || "initial"};
  right: ${(props) => props.right || "auto"};
  left: ${(props) => props.left || "auto"};
  bottom: ${(props) => props.bottom || "auto"};
  top: ${(props) => props.top || "auto"};
  cursor: ${(props) => props.cursor || "default"};
  z-index: ${(props) => props.z || "auto"};
`;

export const B = styled.span<IBoldSpanProps>`
  color: ${(props) => props.color || "inherit"};
  font-weight: ${(props) => props.weight || "bold"};
`;

export const UL = styled.ul``;

export const LI = styled.li`
  margin: 10px 0px;
`;

export const Anchor = styled.a<IAnchorProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  flex: ${(props) => props.flex || "initial"};
  align-self: ${(props) => props.self || "auto"};
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "center"};
  font-weight: ${(props) => props.weight || 400};
  font-size: ${(props) => props.size || "inherit"};
  color: ${(props) => props.color || "#fff"};
  background: ${(props) => props.bg || "transparent"};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "10px 15px"};
  letter-spacing: ${(props) => props.spacing || "0.2em"};
  border: ${(props) => props.border || "none"};
  border-radius: ${(props) => props.radius || "0px"};
  width: ${(props) => props.width || "initial"};
  position: relative;
  text-decoration: none;
  overflow: ${(props) => props.overflow || "hidden"};
  z-index: 3;
  filter: ${(props) => props.filter || "none"};
  cursor: pointer;
  pointer: hand;

  &:hover & {
    filter: ${(props) =>
      (props.filterHover
        ? props.filterHover
        : props.hover
        ? props.hover
        : "none") || "none"};
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${(props) =>
      props.hover || (props.bg ? props.bg : "transparent")};
    display: none;
    z-index: -1;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${(props) => props.hoverBG || "#000"};
    opacity: 0;
    z-index: -1;
  }

  &:hover:before {
    display: block;
  }

  &:hover:after {
    opacity: 0.08;
  }
  &:active:after {
    opacity: 0.15;
  }
`;

export const AnchorLink = styled(Anchor)<IAnchorLinkProps>`
  background-color: ${(props) =>
    props.theme.scheme === "dark" ? props.bg : "#d1cdcd"};
`;

export const RouterLink = styled(Link)<IRouterLinkProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  flex: ${(props) => props.flex || "initial"};
  align-self: ${(props) => props.self || "auto"};
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "center"};
  font-weight: ${(props) => props.weight || 400};
  font-size: ${(props) => props.size || "inherit"};
  color: ${(props) => props.color || "#fff"};
  background: ${(props) => props.bg || "transparent"};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "10px 15px"};
  letter-spacing: ${(props) => props.spacing || "0.2em"};
  border: ${(props) => props.border || "none"};
  border-radius: ${(props) => props.radius || "0px"};
  width: ${(props) => props.width || "initial"};
  position: relative;
  text-decoration: none;
  overflow: ${(props) => props.overflow || "hidden"};
  z-index: 3;
  filter: ${(props) => props.filter || "none"};
  cursor: pointer;
  pointer: hand;

  &:hover & {
    filter: ${(props) =>
      (props.filterHover
        ? props.filterHover
        : props.hover
        ? props.hover
        : "none") || "none"};
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${(props) =>
      props.hover || (props.bg ? props.bg : "transparent")};
    display: none;
    z-index: -1;
    // @media (max-width: 992px){
    //   background: transparent;
    // }
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${(props) => props.hoverBG || "#000"};
    opacity: 0;
    z-index: -1;
    
    // @media (max-width: 992px){
    //   background: transparent;
    // }
  }

  &:hover:before {
    display: block;
  }

  &:hover:after {
    opacity: 0.08;
  }
  &:active:after {
    opacity: 0.15;
  }
`;

export const A = styled(Anchor)<IAnchorProps>`
  display: inline;
  color: ${(props) => props.color || "#e1087f"};
  font-weight: ${(props) => props.weight || "300"};
  font-size: ${(props) => props.size || "initial"};
  margin: ${(props) => props.margin || "initial"};
  background: transparent;
  padding: 0px;
  letter-spacing: inherit;
  text-transform: initial;
`;

export const C = styled(Anchor)`
  display: inline;
  color: "#4292e4";
  background: transparent;
  padding: 0px;
  letter-spacing: inherit;
  text-transform: initial;
`;

export const Button = styled.button<IButtonProps>`
  display: flex;
  flex: ${(props) => props.flex || "initial"};
  align-self: ${(props) => props.self || "auto"};
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "center"};
  font-weight: ${(props) => props.weight || 400};
  font-size: ${(props) => props.size || "inherit"};
  color: ${(props) => props.color || "#fff"};
  background: ${(props) => props.bg || "tranparent"};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "10px 15px"};
  letter-spacing: ${(props) => props.spacing || "initial"};
  border: ${(props) => props.border || "none"};
  border-radius: ${(props) => props.radius || "0px"};
  text-transform: ${(props) => props.textTransform || "initial"};
  position: relative;
  text-decoration: none;
  overflow: ${(props) => props.overflow || "hidden"};
  z-index: 3;
  cursor: pointer;
  pointer: hand;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${(props) =>
      props.hover || (props.bg ? props.bg : "transparent")};
    display: none;
    z-index: -1;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${(props) => props.hoverBG || "#000"};
    opacity: 0;
    z-index: -1;
  }

  &:hover:before {
    display: block;
  }

  &:hover:after {
    opacity: 0.08;
  }
  &:active:after {
    opacity: 0.15;
  }

  & > div {
    display: flex;
  }
`;

export const Showoff = styled.div<IShowoffProps>`
  position: absolute;
  right: ${(props) => props.right || "auto"};
  left: ${(props) => props.left || "auto"};
  bottom: ${(props) => props.bottom || "auto"};
  top: ${(props) => props.top || "auto"};
  transform: ${(props) => props.transform || "initial"};
  opacity: ${(props) => props.opacity || "initial"};

  @media (max-width: 768px) {
    align-items: ${(props) =>
      (props.tabletAlign
        ? props.tabletAlign
        : props.align
        ? props.align
        : "center") || "center"};

    right: ${(props) =>
      (props.tabletRight
        ? props.tabletRight
        : props.right
        ? props.right
        : "auto") || "auto"};
    left: ${(props) =>
      (props.tabletLeft
        ? props.tabletLeft
        : props.left
        ? props.left
        : "auto") || "auto"};
    top: ${(props) =>
      (props.tabletTop ? props.tabletTop : props.top ? props.top : "auto") ||
      "auto"};
    bottom: ${(props) =>
      (props.tabletBottom
        ? props.tabletBottom
        : props.bottom
        ? props.bottom
        : "auto") || "auto"};

    transform: ${(props) =>
      (props.tabletTransform
        ? props.tabletTransform
        : props.transform
        ? props.transform
        : "auto") || "auto"};

    opacity: ${(props) =>
      (props.tabletOpacity
        ? props.tabletOpacity
        : props.opacity
        ? props.opacity
        : "auto") || "initial"};
  }
`;

export const FormSubmision = styled.form<IFormSubmissionProps>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  flex: ${(props) => props.flex || "initial"};
  align-self: ${(props) => props.self || "auto"};
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "center"};
  font-weight: ${(props) => props.weight || 400};
  font-size: ${(props) => props.size || "inherit"};
  text-transform: ${(props) => props.textTransform || "inherit"};
  color: ${(props) => props.color || "#fff"};
  background: ${(props) => props.bg || "transparent"};
  margin: ${(props) => props.margin || "0px"};
  padding: ${(props) => props.padding || "0px"};
  border: ${(props) => props.border || "none"};
  border-radius: ${(props) => props.radius || "0px"};
  position: relative;
`;

export const Input = styled.input<IInputProps>`
  display: ${(props) => props.display || "flex"};
  flex: ${(props) => props.flex || "initial"};
  align-self: ${(props) => props.self || "auto"};
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "center"};
  font-weight: ${(props) => props.weight || 300};
  font-size: ${(props) => props.size || "inherit"};
  text-transform: ${(props) => props.textTransform || "inherit"};
  color: ${(props) => props.color || "#000"};
  background: ${(props) => props.bg || "transparent"};
  margin: ${(props) => props.margin || "0px"};
  padding: ${(props) => props.padding || "0px"};
  letter-spacing: ${(props) => props.spacing || "inherit"};
  border: ${(props) => props.border || "none"};
  border-radius: ${(props) => props.radius || "0px"};
  outline: ${(props) => props.outline || "none"};
  overflow: ${(props) => props.overflow || "hidden"};
  position: relative;
  visibility: ${(props) => props.visibility || ""};
  width: ${(props) => props.maxllength};
  height: ${(props) => props.height};
  cursor: ${(props) => props.cursor || "initial"};
  pointer: ${(props) => props.hand || "initial"};

  &:focus {
    border: ${(props) => props.focusBorder || ""};
  }

  &:focus + span {
    opacity: 0;
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }
`;

export const TextField = styled.textarea<ITextFieldProps>`
  display: flex;
  flex: ${(props) => props.flex || "initial"};
  align-self: ${(props) => props.self || "auto"};
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "center"};
  font-weight: ${(props) => props.weight || 300};
  font-size: ${(props) => props.size || "inherit"};
  text-transform: ${(props) => props.textTransform || "inherit"};
  color: ${(props) => props.color || "#000"};
  background: ${(props) => props.bg || "transparent"};
  margin: ${(props) => props.margin || "0px"};
  padding: ${(props) => props.padding || "0px"};
  letter-spacing: ${(props) => props.spacing || "inherit"};
  border: ${(props) => props.border || "none"};
  border-radius: ${(props) => props.radius || "0px"};
  outline: ${(props) => props.outline || "none"};
  overflow: ${(props) => props.overflow || "hidden"};
  position: relative;
  resize: vertical;

  &:focus {
    border: ${(props) => props.focusBorder || ""};
  }

  /* &:focus + span {
    opacity: 0;

    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  } */
`;
