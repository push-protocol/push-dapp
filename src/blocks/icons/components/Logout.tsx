import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const Logout: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="Logout"
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="inherit"
          height="inherit"
          viewBox="0 0 24 24"
          fill="none"
          {...props}
        >
          <path
            d="M10.0962 1H3.63464C2.53008 1 1.63464 1.89543 1.63464 3V21C1.63464 22.1046 2.53007 23 3.63464 23H10.0962"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M8.8269 11.5769H22.3654"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M17.7115 6.0769L22.3654 11.5769L17.7115 17.5"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Logout;
