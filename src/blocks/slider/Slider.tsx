import styled from 'styled-components';

import { Slider as MuiSlider } from '@material-ui/core';
import { SliderProps } from './Slider.types';

const StyledSlider = styled(MuiSlider)`
  .MuiSlider-rail {
    color: var(--components-slider-background-default);
    height: var(--spacing-xxxs);
    opacity: 1;
  }

  .MuiSlider-track {
    color: var(--components-slider-background-progress);
    height: var(--spacing-xxxs);
  }

  .MuiSlider-thumb {
    width: var(--spacing-sm);
    height: var(--spacing-sm);
    margin-top: -6px;
    background-color: var(--components-slider-icon-default);
    border: var(--border-sm) solid var(--components-slider-stroke-default);
  }

  .MuiSlider-thumb:hover,
  .MuiSlider-thumb:active,
  .MuiSlider-thumb:focus {
    box-shadow: none;
  }

  .MuiSlider-valueLabel {
    display: none;
  }
`;

const Slider = <T extends number | [number, number]>({
  min,
  max,
  onChange,
  value,
  step,
  defaultValue,
}: SliderProps<T>) => {
  return (
    <StyledSlider
      {...{ min, max, value, step, defaultValue }}
      onChange={(_: MouseEvent, value: T) => onChange(value)}
    />
  );
};

Slider.displayName = 'Slider';

export { Slider };
