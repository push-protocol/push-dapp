import styled, { css } from 'styled-components';

import ReactSlider from 'react-slider';
import { SliderProps } from './Slider.types';
import { isArray } from 'lodash';

const StyledSlider = styled(ReactSlider)<{ range?: boolean }>`
  .horizontal-slider-track {
    height: var(--spacing-xxxs);
    background-color: var(--components-slider-background-default);
    border-radius: var(--border-sm);
  }

  .horizontal-slider-thumb {
    width: var(--spacing-sm);
    height: var(--spacing-sm);
    margin-top: -6px;
    background-color: var(--components-slider-icon-default);
    border: var(--border-sm) solid var(--components-slider-stroke-default);
    border-radius: 50%;
    cursor: pointer;
    &:active,
    &:focus {
      outline: none;
    }
  }

  ${({ range }) =>
    range
      ? css`
          .horizontal-slider-track-1 {
            background-color: var(--components-slider-background-progress);
          }
        `
      : css`
          .horizontal-slider-track-0 {
            background-color: var(--components-slider-background-progress);
          }
        `}
`;

const Slider = <T extends number | [number, number]>({ min, max, onChange, value, step }: SliderProps<T>) => {
  return (
    <StyledSlider
      {...{ min, max, value, step }}
      className="horizontal-slider"
      thumbClassName="horizontal-slider-thumb"
      trackClassName="horizontal-slider-track"
      ariaLabel={isArray(value) ? ['Lower thumb', 'Upper thumb'] : 'Thumb'}
      ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
      onChange={(value) => onChange(value as T)}
      value={value}
      range={isArray(value)}
    />
  );
};

Slider.displayName = 'Slider';

export { Slider };
