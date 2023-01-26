  export interface ISectionProps{
    align?:string;
    direction?:string;
    theme?:string;
    gradient?:string;
    margin?:string;
    padding?:string;
    overflow?:string;
  }
  
  export interface IContentProps{
    padding?:string;
    theme?:string;
    gradient?:string;
  }
  
  export interface IItemProps{
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
    zIndex?:number|string;
    filterHover?:string;
    hover?:string;
    tabletMaxWidth?:string;
    tabletAlign?:string;
    tabletTextAlign?:string;
  }
  
  export interface IItemHProps{
    flex?:string|number;
  }
  
  export interface IWaveInnerProps{
    transform?:string;
  }
  
  export interface IWaveOuterProps extends IWaveInnerProps{
    bottom?:string;
    top?:string;
  }
  
  export interface IArcProps{
    bottom?:string|number;
    top?:string|number;
    arcRGB?:string|number;
  }
  
  export interface IBoldSpanProps{
    color?:string;
    weight?:number|string;
  }
  
  export interface IHeaderProps extends IBoldSpanProps{
    size?:string;
    textTransform?:string;
    margin?:string;
    padding?:string;
    spacing?:string;
    family?:string;
    textAlign?:string;
    maxWidth?:string;
  }
  
  export interface IImageProps{
    width?:string;
    cursor?:string;
    height?:string;
    filter?:string;
  }
  
  export interface IParagraphProps{
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
  
  export interface ISpanProps{
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
    z?:number|string;
  }
  
  export interface IAnchorProps{
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
  
  export interface IAnchorLinkProps extends IAnchorProps{
    theme?:any;
  }
  
  export interface IRouterLinkProps{
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
  
  export interface IButtonProps{
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
  
  export interface IShowoffProps{
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
  
  export interface IFormSubmissionProps{
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
  
  export interface ITextFieldProps extends IFormSubmissionProps{
    outline?:string;
    overflow?:string;
    spacing?:number|string;
    focusBorder?:string;
  }
  
  export interface IInputProps extends ITextFieldProps{
    display?:string;
    visibility?:string;
    maxllength?:string;
    height?:string;
    cursor?:string;
    hand?:string;
  }