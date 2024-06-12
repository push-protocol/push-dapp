import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const Front: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="Front"
      icon={
        <svg
          width="inherit"
          height="inherit"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.5812 25.1009C16.084 24.5843 16.1015 23.7643 16.6203 23.2692L22.8812 17.2955L5.30115 17.2955C4.58254 17.2955 4 16.7155 4 16C4 15.2845 4.58254 14.7045 5.30115 14.7045L22.8812 14.7045L16.6203 8.73076C16.1015 8.23573 16.084 7.41568 16.5812 6.89912C17.0784 6.38257 17.902 6.36512 18.4209 6.86015L28 16L18.4209 25.1398C17.902 25.6349 17.0784 25.6174 16.5812 25.1009Z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Front;
