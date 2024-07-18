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
          xmlns="http://www.w3.org/2000/svg"
          width="inherit"
          height="inherit"
          viewBox="0 0 18 18"
          fill="none"
          {...props}
        >
          <path
            d="M8.84706 9.15278L1.6665 4.95139L8.84706 0.75L16.3332 4.95139L8.84706 9.15278Z"
            stroke="#202124"
            stroke-width="1.5"
            stroke-linejoin="round"
          />
          <path
            d="M1.6665 5.02783V13.457L8.84706 17.2501L16.3332 13.457V5.02783"
            stroke="#202124"
            stroke-width="1.5"
            stroke-linejoin="round"
          />
          <path d="M8.84717 17.2501V9.15283" stroke="#202124" stroke-width="1.5" stroke-linejoin="round" />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Cube;
