import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const Refresh: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="Refresh"
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="inherit"
          height="inherit"
          viewBox="0 0 26 26"
          fill="none"
        >
          <path
            d="M22.6146 7.94739C20.0882 2.89476 16.0525 2.26318 13.1409 2.26318C6.86228 2.26318 1.77246 7.353 1.77246 13.6316C1.77246 19.9102 6.86228 25 13.1409 25C18.5512 25 23.0788 21.2206 24.2276 16.1579"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.6674 8.57895H23.2463V1"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Refresh;
