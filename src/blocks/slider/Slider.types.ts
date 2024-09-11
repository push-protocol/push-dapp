export type SliderBaseProps = {
  min: number;
  max: number;
  step: number;
};

export type SliderProps<T> = SliderBaseProps & {
  value?: T;
  onChange: (value: T) => void;
};
