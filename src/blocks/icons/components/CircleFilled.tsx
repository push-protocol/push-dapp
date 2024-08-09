import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const CircleFilled: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="CircleFilled"
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="inherit"
          height="inherit"
          viewBox="0 0 8 8"
          fill="none"
          {...props}
        >
          <circle cx="4" cy="4" r="4" fill="currentColor" />
        </svg>
      }
      {...restProps}
    />
  );
};

export default CircleFilled;
