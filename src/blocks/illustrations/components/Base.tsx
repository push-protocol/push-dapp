import { FC } from 'react';
import { IllustrationWrapper } from '../IllustrationWrapper';
import { IllustrationProps } from '../Illustrations.types';

const Base: FC<IllustrationProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IllustrationWrapper
      componentName="Base"
      illustration={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={restProps?.width ?? '24'}
          height={restProps?.height ?? '24'}
          viewBox="0 0 32 32"
          fill="none"
          {...props}
        >
          <g clip-path="url(#clip0_6893_17837)">
            <path
              d="M15.9718 32C24.8243 32 32 24.8371 32 16C32 7.16288 24.8243 0 15.9718 0C7.57376 0 0.6848 6.44864 0 14.6547H21.1853V17.3453H0C0.6848 25.5514 7.57376 32 15.9718 32Z"
              fill="#0052FF"
            />
          </g>
          <defs>
            <clipPath id="clip0_6893_17837">
              <rect
                width="32"
                height="32"
                fill="white"
              />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  );
};

export default Base;
