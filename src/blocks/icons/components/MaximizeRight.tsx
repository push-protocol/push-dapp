import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const MaximizeRight: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="MaximizeRight"
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
            d="M11 2C6.02944 2 2 6.02944 2 11V21C2 25.9706 6.02944 30 11 30H21C25.9706 30 30 25.9706 30 21V11C30 6.02944 25.9706 2 21 2H11ZM13.941 8.94998C13.4389 8.51785 12.6927 8.58791 12.2743 9.10647C11.8559 9.62503 11.9237 10.3957 12.4258 10.8278L18.2135 15.8093C18.3288 15.9085 18.3288 16.0915 18.2135 16.1907L12.4258 21.1722C11.9237 21.6043 11.8559 22.375 12.2743 22.8935C12.6927 23.4121 13.4389 23.4822 13.9409 23.05L19.7286 18.0686C20.9794 16.9921 20.9794 15.0079 19.7286 13.9314L13.941 8.94998Z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default MaximizeRight;
