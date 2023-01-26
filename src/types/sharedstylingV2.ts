export interface ISectionV2Props {
  alignItems?: string;
  alignSelf?: string;
  gradient?: string;
  background?: string;
  display?: string;
  flex?: string;
  flexDirection?: string;
  justifyContent?: string;
  margin?: string;
  minHeight?: string;
  overflow?: string;
  padding?: string;
  position?: string;
}

export interface IItemHV2Props extends ISectionV2Props {
  border?: string;
  borderRadius?: string;
  bottom?: string;
  boxShadow?: string;
  filter?: string;
  flexBasis?: string | number;
  flexFlow?: string | number;
  flexWrap?: string;
  fontSize?: string;
  height?: string;
  left?: string;
  maxWidth?: string;
  minWidth?: string;
  overflowWrap?: string;
  right?: string;
  textAlign?: string;
  width?: string;
  top?: string;
  zIndex?: string;
  gap?: string;
  filterHover?: string;
  hover?: string;
}

export interface IH2V2Props {
  color?: string;
  family?: string;
  fontSize?: string;
  fontWeight?: string;
  letterSpacing?: string;
  margin?: string;
  padding?: string;
  textAlign?: string;
  textTransform?: string;
}

export interface IButtonV2Props {
  alignItems?: string;
  alignSelf?: string;
  background?: string;
  border?: string;
  borderRadius?: string;
  color?: string;
  cursor?: string;
  display?: string;
  flex?: number | string;
  flexDirection?: string;
  fontSize?: string;
  fontWeight?: string;
  justifyContent?: string;
  letterSpacing?: string;
  margin?: string;
  maxWidth?: string;
  minWidth?: string;
  overflow?: string;
  pointer?: string;
  padding?: string;
  position?: string;
  textDecoration?: string;
  textTransform?: string;
  zIndex?: string;
  hover?: string;
  hoverBackground?: string;
}

export interface ISpanV2Props {
  alignSelf?: string;
  background?: string;
  borderRadius?: string;
  bottom?: string;
  color?: string;
  flex?: string;
  fontSize?: string;
  fontWeight?: string;
  left?: string;
  letterSpacing?: string;
  lineHeight?: string;
  margin?: string;
  padding?: string;
  position?: string;
  right?: string;
  textAlign?: string;
  textTransform?: string;
  top?: string;
  zIndex?: number | string;
  maxWidth?: string;
}

export interface IImageV2Props {
  display?: string;
  height?: string;
  maxHeight?: string;
  padding?: string;
  width?: string;
  margin?: string;
  verticalAlign?: string;
  borderRadius?: string;
  overflow?: string;
  cursor?: string;
  filter?: string;
  alt?: string;
}
