import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const FillCircle: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="FillCircle"
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="inherit"
          height="inherit"
          viewBox="0 0 20 20"
          fill="none"
          {...props}
        >
          <circle
            cx="10"
            cy="10"
            r="10"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default FillCircle;
