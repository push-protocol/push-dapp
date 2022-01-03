import styled, { css } from 'styled-components';

export const Section = styled.section`
  display: flex;
  align-self: stretch;
  justify-content: center;
  align-items: ${props => props.align || 'initial'};
  flex-direction: ${props => props.direction || 'column'};
  background: ${props => props.theme || 'transparent'};
  background: ${props => props.gradient || 'undefined'};
  margin: ${props => props.margin || '0px'};
  padding: ${props => props.padding || '0px'};
  overflow: ${props => props.overflow || 'initial'};
  flex: 1;
  position: relative;
`

export const SectionFS = styled(Section)`
  min-height: 100vh;
`

export const SectionFSHero = styled(Section)`
  min-height: 100vh;
  background: rgb(31,23,47);
  background: linear-gradient(283deg, rgba(31,23,47,1) 0%, rgba(62,9,40,1) 45%, rgba(17,58,72,1) 100%);
`

export const SectionHero = styled(Section)`
  background: rgb(31,23,47);
  background: linear-gradient(283deg, rgba(31,23,47,1) 0%, rgba(62,9,40,1) 45%, rgba(17,58,72,1) 100%);
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${props => props.padding || "40px 0px"};
  background: ${props => props.theme || 'transparent'};
  background: ${props => props.gradient || 'undefined'};
  position: relative;
`

export const ItemBreak = styled.div`
  flex-basis: 100%;
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: ${props => props.wrap || 'wrap'};
  position: ${props => props.position || 'relative'};
  justify-content: center;
  background: ${props => props.bg || 'transparent'};
  flex: ${props => props.flex || '1'};
  flex-direction: ${props => props.direction || 'column'};
  align-self: ${props => props.self || 'auto'};
  align-items: ${props => props.align || 'center'};
  justify-content: ${props => props.justify || 'center'};
  padding: ${props => props.padding || "0px"};
  margin: ${props => props.margin || '0px'};
  min-width: ${props => props.minWidth || 'auto'};
  max-width: ${props => props.maxWidth || 'initial'};
  font-size: ${props => props.size || "inherit"};
  text-align: ${props => props.textAlign || "inherit"};
  filter: ${props => props.filter || "none"};

  width: ${props => props.width || "auto" };
  height: ${props => props.height || "auto" };

  border: ${props => props.border || "none"};

  border-radius: ${props => props.radius || "0px"};
  overflow: ${props => props.overflow || "initial"};

  &:hover & {
    filter: ${props => (props.filterHover ? props.filterHover : (props.hover ? props.hover : "none")) || "none"};
  }

  @media (max-width: 768px) {
    align-items: ${props => (props.tabletAlign ? props.tabletAlign : (props.align ? props.align : "center")) || "center"};
    text-align: ${props => (props.tabletTextAlign ? props.tabletTextAlign : (props.textAlign ? props.textAlign : "inherit")) || "inherit"};
  }

  ${ItemBreak} {
    width: 0;
  }
`

export const ItemH = styled(Item)`
  flex-direction: row;
  flex: ${props => props.flex || '1'};

  ${ItemBreak} {
    width: auto;
    height: 0;
  }
`

export const WaveOuter = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  bottom: ${props => props.bottom || '-70px'};
  top: ${props => props.top || 'auto'};
  transform: ${props => props.transform || 'initial'};
`;

export const WaveInner = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  transform: ${props => props.transform || 'initial'};
`;

export const Arc = styled.div`
  position: absolute;
	overflow: hidden;
	width: 100%;
	height: 300px;

  bottom: ${props => props.bottom || 'auto'};
  top: ${props => props.top || 'auto'};

  &:after {
    content: '';
    position: absolute;
  	width: 300%;
  	height: 300%;
  	top: -25%;
  	left: -100%;


    ${ props => props.arcRGB && css`
      	background: radial-gradient(ellipse at center, ${props.arcRGB}00 0%, ${props.arcRGB}00 50%, ${props.arcRGB}ff 50%, ${props.arcRGB}ff 100%);
    `};
  }
`

export const H1 = styled.h1`
  @media (max-width: 480px) {
    font-size: 2.1rem;
  }
`

export const H2 = styled.h2`
  color: ${props => props.color || '#000'};
  font-weight: ${props => props.weight || 600};
  font-size: ${props => props.size || "2rem"};
  text-transform: ${props => props.textTransform || "inherit"};
  margin: ${props => props.margin || "20px 0px"};
  padding: ${props => props.padding || "0px"};
  letter-spacing: ${props => props.spacing || "inherit"};
  font-family: ${props => props.family || "'Source Sans Pro', Helvetica, sans-serif"};
  text-align: ${props => props.textAlign || "inherit"};
`

export const H3 = styled.h3`
  color: ${props => props.color || 'rgb(0 0 0 / 0.5)'};
  font-weight: ${props => props.weight || 300};
  font-size: ${props => props.size || "1rem"};
  text-transform: ${props => props.textTransform || "uppercase"};
  margin: ${props => props.margin || "-15px 0px 20px 0px"};
  padding: ${props => props.padding || "0px"};
  letter-spacing: ${props => props.spacing || "0.1em"};
  font-family: ${props => props.family || "'Source Sans Pro', Helvetica, sans-serif"};
  text-align: ${props => props.textAlign || "inherit"};
  max-width: ${props => props.maxWidth || 'initial'};
`

export const Image = styled.img`
  width: 100%;
  height: auto;
  display: flex;
`

export const P = styled.p`
  flex: ${props => props.flex || 'initial'};
  align-self: ${props => props.self || 'auto'};

  color: ${props => props.color || '#000'};
  background: ${props => props.bg || 'transparent'};
  font-weight: ${props => props.weight || 300};
  font-size: ${props => props.size || "inherit"};
  text-transform: ${props => props.textTransform || "inherit"};
  margin: ${props => props.margin || "20px 0px"};
  padding: ${props => props.padding || "0px"};
  letter-spacing: ${props => props.spacing || "inherit"};
  text-align: ${props => props.textAlign || "initial"};
`

export const Para = styled(P)`
  font-weight: ${props => props.weight || 300};
  letter-spacing: ${props => props.spacing || "0.02em"};
  font-size: ${props => props.size || "1.1em"};
  color: ${props => props.color || "#000000ee"};
`

export const Span = styled.span`
  flex: ${props => props.flex || 'initial'};
  align-self: ${props => props.self || 'auto'};

  color: ${props => props.color || '#000'};
  background: ${props => props.bg || 'transparent'};
  font-weight: ${props => props.weight || 300};
  font-size: ${props => props.size || "inherit"};
  text-transform: ${props => props.textTransform || "inherit"};
  margin: ${props => props.margin || "0px"};
  padding: ${props => props.padding || "0px"};
  letter-spacing: ${props => props.spacing || "inherit"};
  text-align: ${props => props.textAlign || "initial"};

  position: ${props => props.pos || 'initial'};
  right: ${props => props.right || 'auto'};
  left: ${props => props.left || 'auto'};
  bottom: ${props => props.bottom || 'auto'};
  top: ${props => props.top || 'auto'};

  z-index: ${props => props.z || 'auto'};
`

export const B = styled.span`
  color: ${props => props.color || '#000'};
  font-weight: ${props => props.weight || 'bold'};
`

export const UL = styled.ul`

`

export const LI = styled.li`
  margin: 10px 0px;
`

export const Anchor = styled.a`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  flex: ${props => props.flex || 'initial'};
  align-self: ${props => props.self || 'auto'};
  align-items: ${props => props.align || 'center'};
  justify-content: ${props => props.justify || 'center'};
  font-weight: ${props => props.weight || 400};
  font-size: ${props => props.size || "inherit"};
  color: ${props => props.color || "#fff"};
  background: ${props => props.bg || "transparent"};
  margin: ${props => props.margin || "0"};
  padding: ${props => props.padding || "10px 15px"};
  letter-spacing: ${props => props.spacing || "0.2em"};
  border: ${props => props.border || "none"};
  border-radius: ${props => props.radius || "0px"};
  width: ${props => props.width || "initial" };

  position: relative;
  text-decoration: none;
  overflow: ${props => props.overflow || "hidden"};
  z-index: 3;

  filter: ${props => props.filter || "none"};

  cursor: pointer;
  pointer: hand;

  &:hover & {
    filter: ${props => (props.filterHover ? props.filterHover : (props.hover ? props.hover : "none")) || "none"};
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.hover || (props.bg ? props.bg : "transparent")};
    display: none;
    z-index: -1;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.hoverBG || "#000"};
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
`

export const A = styled(Anchor)`
  display: inline;
  color: #e1087f;
  background: transparent;
  padding: 0px;
  letter-spacing: inherit;
  text-transform: initial;
`

export const Button = styled.button`
  display: flex;
  flex: ${props => props.flex || 'initial'};
  align-self: ${props => props.self || 'auto'};
  align-items: ${props => props.align || 'center'};
  justify-content: ${props => props.justify || 'center'};
  font-weight: ${props => props.weight || 400};
  font-size: ${props => props.size || "inherit"};
  color: ${props => props.color || "#fff"};
  background: ${props => props.bg || "tranparent"};
  margin: ${props => props.margin || "0"};
  padding: ${props => props.padding || "10px 15px"};
  letter-spacing: ${props => props.spacing || "initial"};
  border: ${props => props.border || "none"};
  border-radius: ${props => props.radius || "0px"};
  text-transform: ${props => props.textTransform || "initial"};

  position: relative;
  text-decoration: none;
  overflow: ${props => props.overflow || "hidden"};
  z-index: 3;

  cursor: pointer;
  pointer: hand;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.hover || (props.bg ? props.bg : "transparent")};
    display: none;
    z-index: -1;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.hoverBG || "#000"};
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
`

export const Showoff = styled.div`
  position: absolute;
  right: ${props => props.right || 'auto'};
  left: ${props => props.left || 'auto'};
  bottom: ${props => props.bottom || 'auto'};
  top: ${props => props.top || 'auto'};
  transform: ${props => props.transform || 'initial'};
  opacity: ${props => props.opacity || 'initial'};

  @media (max-width: 768px) {
    align-items: ${props => (props.tabletAlign ? props.tabletAlign : (props.align ? props.align : "center")) || "center"};

    right: ${props => (props.tabletRight ? props.tabletRight : (props.right ? props.right : "auto")) || "auto"};
    left: ${props => (props.tabletLeft ? props.tabletLeft : (props.left ? props.left : "auto")) || "auto"};
    top: ${props => (props.tabletTop ? props.tabletTop : (props.top ? props.top : "auto")) || "auto"};
    bottom: ${props => (props.tabletBottom ? props.tabletBottom : (props.bottom ? props.bottom : "auto")) || "auto"};

    transform: ${props => (props.tabletTransform ? props.tabletTransform : (props.transform ? props.transform : "auto")) || "auto"};

    opacity: ${props => (props.tabletOpacity ? props.tabletOpacity : (props.opacity ? props.opacity : "auto")) || "initial"};
  }
`

export const FormSubmision = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  flex: ${props => props.flex || 'initial'};
  align-self: ${props => props.self || 'auto'};
  align-items: ${props => props.align || 'center'};
  justify-content: ${props => props.justify || 'center'};
  font-weight: ${props => props.weight || 400};
  font-size: ${props => props.size || "inherit"};
  text-transform: ${props => props.textTransform || "inherit"};
  color: ${props => props.color || "#fff"};
  background: ${props => props.bg || "transparent"};
  margin: ${props => props.margin || "0px"};
  padding: ${props => props.padding || "0px"};
  border: ${props => props.border || "none"};
  border-radius: ${props => props.radius || "0px"};
  position: relative;
`

export const Input = styled.input`
  display: ${props => props.display || 'flex'};
  flex: ${props => props.flex || 'initial'};
  align-self: ${props => props.self || 'auto'};
  align-items: ${props => props.align || 'center'};
  justify-content: ${props => props.justify || 'center'};
  font-weight: ${props => props.weight || 300};
  font-size: ${props => props.size || "inherit"};
  text-transform: ${props => props.textTransform || "inherit"};
  color: ${props => props.color || "#000"};
  background: ${props => props.bg || "transparent"};
  margin: ${props => props.margin || "0px"};
  padding: ${props => props.padding || "0px"};
  letter-spacing: ${props => props.spacing || "inherit"};
  border: ${props => props.border || "none"};
  border-radius: ${props => props.radius || "0px"};
  outline: ${props => props.outline || "none"};
  overflow: ${props => props.overflow || "hidden"};
  position: relative;

  cursor: ${props => props.cursor || "initial"};
  pointer: ${props => props.hand || "initial"};

  &:focus + span {
    opacity: 0;

    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }
`

export const TextField = styled.textarea`
  display: flex;
  flex: ${props => props.flex || 'initial'};
  align-self: ${props => props.self || 'auto'};
  align-items: ${props => props.align || 'center'};
  justify-content: ${props => props.justify || 'center'};
  font-weight: ${props => props.weight || 300};
  font-size: ${props => props.size || "inherit"};
  text-transform: ${props => props.textTransform || "inherit"};
  color: ${props => props.color || "#000"};
  background: ${props => props.bg || "transparent"};
  margin: ${props => props.margin || "0px"};
  padding: ${props => props.padding || "0px"};
  letter-spacing: ${props => props.spacing || "inherit"};
  border: ${props => props.border || "none"};
  border-radius: ${props => props.radius || "0px"};
  outline: ${props => props.outline || "none"};
  overflow: ${props => props.overflow || "hidden"};
  position: relative;
  resize: vertical;

  &:focus + span {
    opacity: 0;

    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }
`
