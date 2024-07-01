import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const Info: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="Info"
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
            d="M15.5972 10.9092C15.5972 10.2063 16.167 9.63647 16.8699 9.63647C17.5728 9.63647 18.1426 10.2063 18.1426 10.9092C18.1426 11.6121 17.5728 12.1819 16.8699 12.1819C16.167 12.1819 15.5972 11.6121 15.5972 10.9092ZM15.5972 16.0001C15.5972 15.2972 16.167 14.7274 16.8699 14.7274C17.5728 14.7274 18.1426 15.2972 18.1426 16.0001V21.091C18.1426 21.7939 17.5728 22.3637 16.8699 22.3637C16.167 22.3637 15.5972 21.7939 15.5972 21.091V16.0001Z"
            fill="currentColor"
          />
          <circle
            cx="16.87"
            cy="16"
            r="12"
            stroke="currentColor"
            stroke-width="2"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Info;
