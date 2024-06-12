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
            x="4.5"
            y="4.5"
            width="10"
            height="10"
            rx="2"
            stroke="currentColor"
            stroke-width="2"
            stroke-linejoin="round"
          />
          <rect
            x="17.5"
            y="4.5"
            width="10"
            height="10"
            rx="2"
            stroke="currentColor"
            stroke-width="2"
            stroke-linejoin="round"
          />
          <rect
            x="4.5"
            y="17.5"
            width="10"
            height="10"
            rx="2"
            stroke="currentColor"
            stroke-width="2"
            stroke-linejoin="round"
          />
          <rect
            x="17.5"
            y="17.5"
            width="10"
            height="10"
            rx="2"
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
