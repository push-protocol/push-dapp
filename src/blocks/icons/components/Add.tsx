import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const Add: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="Add"
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
            d="M17.7143 5.71429C17.7143 4.76751 16.9468 4 16 4C15.0532 4 14.2857 4.76751 14.2857 5.71429V14.2857H5.71429C4.76751 14.2857 4 15.0532 4 16C4 16.9468 4.76751 17.7143 5.71429 17.7143H14.2857V26.2857C14.2857 27.2325 15.0532 28 16 28C16.9468 28 17.7143 27.2325 17.7143 26.2857V17.7143H26.2857C27.2325 17.7143 28 16.9468 28 16C28 15.0532 27.2325 14.2857 26.2857 14.2857H17.7143V5.71429Z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Add;
