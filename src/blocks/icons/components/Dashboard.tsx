import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const Dashboard: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="Dashboard"
      icon={
        <svg
          width="inherit"
          height="inherit"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <rect
            x="6.87"
            y="6"
            width="8"
            height="8"
            rx="1"
            stroke="currentColor"
            stroke-width="2"
            stroke-linejoin="round"
          />
          <rect
            x="18.87"
            y="6"
            width="8"
            height="8"
            rx="1"
            stroke="currentColor"
            stroke-width="2"
            stroke-linejoin="round"
          />
          <rect
            x="6.87"
            y="18"
            width="8"
            height="8"
            rx="1"
            stroke="currentColor"
            stroke-width="2"
            stroke-linejoin="round"
          />
          <rect
            x="18.87"
            y="18"
            width="8"
            height="8"
            rx="1"
            stroke="currentColor"
            stroke-width="2"
            stroke-linejoin="round"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Dashboard;
