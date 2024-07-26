import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const Cube: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="Cube"
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
            d="M11.8471 12.1528L4.6665 7.95139L11.8471 3.75L19.3332 7.95139L11.8471 12.1528Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linejoin="round"
          />
          <path
            d="M4.6665 8.02783V16.457L11.8471 20.2501L19.3332 16.457V8.02783"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linejoin="round"
          />
          <path d="M11.8472 20.2501V12.1528" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Cube;
