import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const NoRewards: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="NoRewards"
      icon={
        <svg
          width="inherit"
          height="inherit"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <circle
            cx="18"
            cy="7.66669"
            r="5"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21.8257 12.3213L22.4883 12.9839C22.433 13.2047 22.411 13.7348 22.7643 14.0881C23.0516 14.3754 25.182 16.5059 26.7899 18.1137C27.3292 18.653 28.2131 18.62 28.7107 18.0421V18.0421C29.1568 17.5242 29.1301 16.7504 28.6493 16.2644L24.476 12.0452C24.3103 11.9716 23.8907 11.8464 23.5373 11.9348L22.7643 11.217"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.3506 12.7628H5.70184L2.49939 16.407H8.04387L11.1359 12.8732L14.3383 16.407H21.981"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.87451 18.5834V25.3334H23.1245V18.5834"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11 16.6667V24.6667"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19.7103 5.71027L16.3432 9.0774"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19.7103 9.07739L16.3432 5.71026"
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

export default NoRewards;
