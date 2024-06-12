import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const Back: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="Back"
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
            d="M15.4188 6.89912C15.916 7.41568 15.8985 8.23573 15.3797 8.73076L9.11877 14.7045H26.6989C27.4175 14.7045 28 15.2845 28 16C28 16.7155 27.4175 17.2955 26.6989 17.2955H9.11877L15.3797 23.2692C15.8985 23.7643 15.916 24.5843 15.4188 25.1009C14.9216 25.6174 14.098 25.6349 13.5791 25.1398L4 16L13.5791 6.86015C14.098 6.36512 14.9216 6.38257 15.4188 6.89912Z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Back;
