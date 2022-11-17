// External Packages
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const Section = styled.section`
  align-items: ${props => props.align || 'initial'};
  align-self: stretch;
  background: ${props => props.gradient || 'undefined'};
  background: ${props => props.theme || 'transparent'};
  display: flex;
  flex: 1;
  flex-direction: ${props => props.direction || 'column'};
  justify-content: center;
  margin: ${props => props.margin || '0px'};
  overflow: ${props => props.overflow || 'initial'};
  padding: ${props => props.padding || '0px'};
  position: relative;
`

export const SectionFS = styled(Section)`
  min-height: 100vh;
`

export const SectionFSHero = styled(Section)`
  background: linear-gradient(283deg, rgba(31,23,47,1) 0%, rgba(62,9,40,1) 45%, rgba(17,58,72,1) 100%);
  background: rgb(31,23,47);
  min-height: 100vh;
`

export const SectionHero = styled(Section)`
  background: rgb(31,23,47);
  background: linear-gradient(283deg, rgba(31,23,47,1) 0%, rgba(62,9,40,1) 45%, rgba(17,58,72,1) 100%);
`

export const Content = styled.div`
  background: ${props => props.gradient || 'undefined'};
  background: ${props => props.theme || 'transparent'};
  display: flex;
  flex-direction: column;
  padding: ${props => props.padding || '40px 0px'};
  position: relative;
`

export const ItemBreak = styled.div`
  flex-basis: 100%;
`

export const Item = styled.div`
  align-items: ${props => props.align || 'center'};
  align-self: ${props => props.self || 'auto'};
  background: ${props => props.bg || 'transparent'};
  border: ${props => props.border || 'none'};
  border-radius: ${props => props.radius || '0px'};
  bottom: ${props => props.bottom || 'auto'};
  display: flex;
  filter: ${props => props.filter || 'none'};
  flex: ${props => props.flex || '1'};
  flex-basis: ${props => props.flexBasis || 'auto'};
  flex-direction: ${props => props.direction || 'column'};
  flex-direction: column;
  flex-wrap: ${props => props.wrap || 'wrap'};
  font-size: ${props => props.size || 'inherit'};
  height: ${props => props.height || 'auto'};
  justify-content: ${props => props.justify || 'center'};
  justify-content: center;
  left: ${props => props.left || 'auto'};
  margin: ${props => props.margin || '0px'};

  max-width: ${props => props.maxWidth || 'initial'};
  min-width: ${props => props.minWidth || 'auto'};
  overflow: ${props => props.overflow || 'initial'};
  padding: ${props => props.padding || '0px'};

  position: ${props => props.position || 'relative'};
  right: ${props => props.right || 'auto'};

  text-align: ${props => props.textAlign || 'inherit'};

  top: ${props => props.top || 'auto'};
  width: ${props => props.width || 'auto'};

  z-index: ${props => props.zIndex || 'auto'};

  &:hover & {
    filter: ${props => (props.filterHover ? props.filterHover : (props.hover ? props.hover : 'none')) || 'none'};
  }

  @media (max-width: 768px) {
    align-items: ${props => (props.tabletAlign ? props.tabletAlign : (props.align ? props.align : 'center')) || 'center'};
    text-align: ${props => (props.tabletTextAlign ? props.tabletTextAlign : (props.textAlign ? props.textAlign : 'inherit')) || 'inherit'};
  }

  ${ItemBreak} {
    width: 0;
  }
`

export const ItemH = styled(Item)`
  flex: ${props => props.flex || '1'};
  flex-direction: row;

  ${ItemBreak} {
    height: 0;
    width: auto;
  }
`

export const WaveOuter = styled.div`
  bottom: ${props => props.bottom || '-70px'};
  left: 0;
  position: absolute;
  right: 0;
  top: ${props => props.top || 'auto'};
  transform: ${props => props.transform || 'initial'};
`

export const WaveInner = styled.div`
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  transform: ${props => props.transform || 'initial'};
`

export const Arc = styled.div`
  bottom: ${props => props.bottom || 'auto'};
	height: 300px;
	overflow: hidden;
	position: absolute;

  top: ${props => props.top || 'auto'};
  width: 100%;

  &:after {
    content: '';
    height: 300%;
  	left: -100%;
  	position: absolute;
  	top: -25%;
  	width: 300%;


    ${props => props.arcRGB && css`
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
  font-family: ${props => props.family || "'Source Sans Pro', Helvetica, sans-serif"};
  font-size: ${props => props.size || '2rem'};
  font-weight: ${props => props.weight || 600};
  letter-spacing: ${props => props.spacing || 'inherit'};
  margin: ${props => props.margin || '20px 0px'};
  padding: ${props => props.padding || '0px'};
  text-align: ${props => props.textAlign || 'inherit'};
  text-transform: ${props => props.textTransform || 'inherit'};
`

export const H3 = styled.h3`
  color: ${props => props.color || 'rgb(0 0 0 / 0.5)'};
  font-family: ${props => props.family || "'Source Sans Pro', Helvetica, sans-serif"};
  font-size: ${props => props.size || '1rem'};
  font-weight: ${props => props.weight || 300};
  letter-spacing: ${props => props.spacing || '0.1em'};
  margin: ${props => props.margin || '-15px 0px 20px 0px'};
  max-width: ${props => props.maxWidth || 'initial'};
  padding: ${props => props.padding || '0px'};
  text-align: ${props => props.textAlign || 'inherit'};
  text-transform: ${props => props.textTransform || 'uppercase'};
`

export const Image = styled.img`
  display: flex;
  height: auto;
  width: 100%;
`

export const P = styled.p`
  align-self: ${props => props.self || 'auto'};
  background: ${props => props.bg || 'transparent'};

  color: ${props => props.color || '#000'};
  flex: ${props => props.flex || 'initial'};
  font-size: ${props => props.size || 'inherit'};
  font-weight: ${props => props.weight || 300};
  letter-spacing: ${props => props.spacing || 'inherit'};
  margin: ${props => props.margin || '20px 0px'};
  padding: ${props => props.padding || '0px'};
  text-align: ${props => props.textAlign || 'initial'};
  text-transform: ${props => props.textTransform || 'inherit'};
`

export const Para = styled(P)`
  color: ${props => props.color || '#000000ee'};
  font-size: ${props => props.size || '1.1em'};
  font-weight: ${props => props.weight || 300};
  letter-spacing: ${props => props.spacing || '0.02em'};
`

export const Span = styled.span`
  align-self: ${props => props.self || 'auto'};
  background: ${props => props.bg || 'transparent'};

  bottom: ${props => props.bottom || 'auto'};
  color: ${props => props.color || '#000'};
  flex: ${props => props.flex || 'initial'};
  font-size: ${props => props.size || 'inherit'};
  font-weight: ${props => props.weight || 300};
  left: ${props => props.left || 'auto'};
  letter-spacing: ${props => props.spacing || 'inherit'};
  margin: ${props => props.margin || '0px'};
  padding: ${props => props.padding || '0px'};

  position: ${props => props.pos || 'initial'};
  right: ${props => props.right || 'auto'};
  text-align: ${props => props.textAlign || 'initial'};
  text-transform: ${props => props.textTransform || 'inherit'};
  top: ${props => props.top || 'auto'};

  z-index: ${props => props.z || 'auto'};
`

export const B = styled.span`
  color: ${props => props.color || 'inherit'};
  font-weight: ${props => props.weight || 'bold'};
`

export const UL = styled.ul`

`

export const LI = styled.li`
  margin: 10px 0px;
`

export const Anchor = styled.a`
  align-items: ${props => props.align || 'center'};
  align-self: ${props => props.self || 'auto'};
  background: ${props => props.bg || 'transparent'};
  border: ${props => props.border || 'none'};
  border-radius: ${props => props.radius || '0px'};
  color: ${props => props.color || '#fff'};
  cursor: pointer;
  display: flex;
  filter: ${props => props.filter || 'none'};
  flex: ${props => props.flex || 'initial'};
  flex-direction: ${props => props.direction || 'row'};
  font-size: ${props => props.size || 'inherit'};
  font-weight: ${props => props.weight || 400};
  justify-content: ${props => props.justify || 'center'};
  letter-spacing: ${props => props.spacing || '0.2em'};
  margin: ${props => props.margin || '0'};

  overflow: ${props => props.overflow || 'hidden'};
  padding: ${props => props.padding || '10px 15px'};
  pointer: hand;
  position: relative;

  text-decoration: none;

  width: ${props => props.width || 'initial'};
  z-index: 3;

  &:hover & {
    filter: ${props => (props.filterHover ? props.filterHover : (props.hover ? props.hover : 'none')) || 'none'};
  }

  &:before {
    background: ${props => props.hover || (props.bg ? props.bg : 'transparent')};
    bottom: 0;
    content: '';
    display: none;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }

  &:after {
    background: ${props => props.hoverBG || '#000'};
    bottom: 0;
    content: '';
    left: 0;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
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

export const AnchorLink = styled(Anchor)`
  background-color:${props => props.theme.scheme === 'dark' ? props.bg : '#d1cdcd'};
`

export const RouterLink = styled(Link)`
  align-items: ${props => props.align || 'center'};
  align-self: ${props => props.self || 'auto'};
  background: ${props => props.bg || 'transparent'};
  border: ${props => props.border || 'none'};
  border-radius: ${props => props.radius || '0px'};
  color: ${props => props.color || '#fff'};
  cursor: pointer;
  display: flex;
  filter: ${props => props.filter || 'none'};
  flex: ${props => props.flex || 'initial'};
  flex-direction: ${props => props.direction || 'row'};
  font-size: ${props => props.size || 'inherit'};
  font-weight: ${props => props.weight || 400};
  justify-content: ${props => props.justify || 'center'};
  letter-spacing: ${props => props.spacing || '0.2em'};
  margin: ${props => props.margin || '0'};

  overflow: ${props => props.overflow || 'hidden'};
  padding: ${props => props.padding || '10px 15px'};
  pointer: hand;
  position: relative;

  text-decoration: none;

  width: ${props => props.width || 'initial'};
  z-index: 3;

  &:hover & {
    filter: ${props => (props.filterHover ? props.filterHover : (props.hover ? props.hover : 'none')) || 'none'};
  }

  &:before {
    background: ${props => props.hover || (props.bg ? props.bg : 'transparent')};
    bottom: 0;
    content: '';
    display: none;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }

  &:after {
    background: ${props => props.hoverBG || '#000'};
    bottom: 0;
    content: '';
    left: 0;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
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
  background: transparent;
  color: #e1087f;
  display: inline;
  letter-spacing: inherit;
  padding: 0px;
  text-transform: initial;
`

export const C = styled(Anchor)`
  background: transparent;
  color: #4292e4;
  display: inline;
  letter-spacing: inherit;
  padding: 0px;
  text-transform: initial;
`

export const Button = styled.button`
  align-items: ${props => props.align || 'center'};
  align-self: ${props => props.self || 'auto'};
  background: ${props => props.bg || 'tranparent'};
  border: ${props => props.border || 'none'};
  border-radius: ${props => props.radius || '0px'};
  color: ${props => props.color || '#fff'};
  cursor: pointer;
  display: flex;
  flex: ${props => props.flex || 'initial'};
  font-size: ${props => props.size || 'inherit'};
  font-weight: ${props => props.weight || 400};
  justify-content: ${props => props.justify || 'center'};
  letter-spacing: ${props => props.spacing || 'initial'};
  margin: ${props => props.margin || '0'};
  overflow: ${props => props.overflow || 'hidden'};

  padding: ${props => props.padding || '10px 15px'};
  pointer: hand;
  position: relative;
  text-decoration: none;

  text-transform: ${props => props.textTransform || 'initial'};
  z-index: 3;

  &:before {
    background: ${props => props.hover || (props.bg ? props.bg : 'transparent')};
    bottom: 0;
    content: '';
    display: none;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }

  &:after {
    background: ${props => props.hoverBG || '#000'};
    bottom: 0;
    content: '';
    left: 0;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
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
  bottom: ${props => props.bottom || 'auto'};
  left: ${props => props.left || 'auto'};
  opacity: ${props => props.opacity || 'initial'};
  position: absolute;
  right: ${props => props.right || 'auto'};
  top: ${props => props.top || 'auto'};
  transform: ${props => props.transform || 'initial'};

  @media (max-width: 768px) {
    align-items: ${props => (props.tabletAlign ? props.tabletAlign : (props.align ? props.align : 'center')) || 'center'};

    right: ${props => (props.tabletRight ? props.tabletRight : (props.right ? props.right : 'auto')) || 'auto'};
    left: ${props => (props.tabletLeft ? props.tabletLeft : (props.left ? props.left : 'auto')) || 'auto'};
    top: ${props => (props.tabletTop ? props.tabletTop : (props.top ? props.top : 'auto')) || 'auto'};
    bottom: ${props => (props.tabletBottom ? props.tabletBottom : (props.bottom ? props.bottom : 'auto')) || 'auto'};

    transform: ${props => (props.tabletTransform ? props.tabletTransform : (props.transform ? props.transform : 'auto')) || 'auto'};

    opacity: ${props => (props.tabletOpacity ? props.tabletOpacity : (props.opacity ? props.opacity : 'auto')) || 'initial'};
  }
`

export const FormSubmision = styled.form`
  align-items: ${props => props.align || 'center'};
  align-self: ${props => props.self || 'auto'};
  background: ${props => props.bg || 'transparent'};

  border: ${props => props.border || 'none'};
  border-radius: ${props => props.radius || '0px'};
  color: ${props => props.color || '#fff'};
  display: flex;
  flex: ${props => props.flex || 'initial'};
  flex-direction: column;
  flex-wrap: wrap;
  font-size: ${props => props.size || 'inherit'};
  font-weight: ${props => props.weight || 400};
  justify-content: ${props => props.justify || 'center'};
  margin: ${props => props.margin || '0px'};
  padding: ${props => props.padding || '0px'};
  position: relative;
  text-transform: ${props => props.textTransform || 'inherit'};
`

export const Input = styled.input`
  align-items: ${props => props.align || 'center'};
  align-self: ${props => props.self || 'auto'};
  background: ${props => props.bg || 'transparent'};
  border: ${props => props.border || 'none'};
  border-radius: ${props => props.radius || '0px'};
  color: ${props => props.color || '#000'};
  cursor: ${props => props.cursor || 'initial'};
  display: ${props => props.display || 'flex'};
  flex: ${props => props.flex || 'initial'};
  font-size: ${props => props.size || 'inherit'};
  font-weight: ${props => props.weight || 300};
  justify-content: ${props => props.justify || 'center'};
  letter-spacing: ${props => props.spacing || 'inherit'};
  margin: ${props => props.margin || '0px'};
  outline: ${props => props.outline || 'none'};
  overflow: ${props => props.overflow || 'hidden'};
  padding: ${props => props.padding || '0px'};
  pointer: ${props => props.hand || 'initial'};

  position: relative;
  text-transform: ${props => props.textTransform || 'inherit'};

  &:focus + span {
    -moz-transition: all 0.2s ease-in-out;

    -o-transition: all 0.2s ease-in-out;
    -webkit-transition: all 0.2s ease-in-out;
    opacity: 0;
    transition: all 0.2s ease-in-out;
  }
`

export const TextField = styled.textarea`
  align-items: ${props => props.align || 'center'};
  align-self: ${props => props.self || 'auto'};
  background: ${props => props.bg || 'transparent'};
  border: ${props => props.border || 'none'};
  border-radius: ${props => props.radius || '0px'};
  color: ${props => props.color || '#000'};
  display: flex;
  flex: ${props => props.flex || 'initial'};
  font-size: ${props => props.size || 'inherit'};
  font-weight: ${props => props.weight || 300};
  justify-content: ${props => props.justify || 'center'};
  letter-spacing: ${props => props.spacing || 'inherit'};
  margin: ${props => props.margin || '0px'};
  outline: ${props => props.outline || 'none'};
  overflow: ${props => props.overflow || 'hidden'};
  padding: ${props => props.padding || '0px'};
  position: relative;
  resize: vertical;
  text-transform: ${props => props.textTransform || 'inherit'};

  &:focus + span {
    -moz-transition: all 0.2s ease-in-out;

    -o-transition: all 0.2s ease-in-out;
    -webkit-transition: all 0.2s ease-in-out;
    opacity: 0;
    transition: all 0.2s ease-in-out;
  }
`
