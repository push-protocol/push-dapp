import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const TickCircleFilled: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="TickCircleFilled"
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
            d="M4 16C4 12.8174 5.26428 9.76516 7.51472 7.51472C9.76516 5.26428 12.8174 4 16 4C19.1826 4 22.2348 5.26428 24.4853 7.51472C26.7357 9.76516 28 12.8174 28 16C28 19.1826 26.7357 22.2348 24.4853 24.4853C22.2348 26.7357 19.1826 28 16 28C12.8174 28 9.76516 26.7357 7.51472 24.4853C5.26428 22.2348 4 19.1826 4 16ZM15.3152 21.136L22.224 12.4992L20.976 11.5008L15.0848 18.8624L10.912 15.3856L9.888 16.6144L15.3152 21.1376V21.136Z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default TickCircleFilled;
