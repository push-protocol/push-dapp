import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const CaretLeft: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="CaretLeft"
      icon={
        <svg
          width="inherit"
          height="inherit"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M14.8389 17.5875L9.25137 12L14.8389 6.41248"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default CaretLeft;
