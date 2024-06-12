import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const MaximizeLeft: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="MaximizeLeft"
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
            d="M21 2C25.9706 2 30 6.02944 30 11V21C30 25.9706 25.9706 30 21 30H11C6.02944 30 2 25.9706 2 21V11C2 6.02944 6.02944 2 11 2H21ZM18.059 8.94998C18.5611 8.51785 19.3073 8.58791 19.7257 9.10647C20.1441 9.62503 20.0763 10.3957 19.5742 10.8278L13.7865 15.8093C13.6712 15.9085 13.6712 16.0915 13.7865 16.1907L19.5742 21.1722C20.0763 21.6043 20.1441 22.375 19.7257 22.8935C19.3073 23.4121 18.5611 23.4822 18.0591 23.05L12.2714 18.0686C11.0206 16.9921 11.0206 15.0079 12.2714 13.9314L18.059 8.94998Z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default MaximizeLeft;
