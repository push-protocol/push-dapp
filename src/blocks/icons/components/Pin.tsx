import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const Pin: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="Pin"
      icon={
        <svg
          width="inherit"
          height="inherit"
          viewBox="0 0 32 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M17.9927 10.1852L7.58023 20.9687C7.23551 21.3562 7.0503 21.8639 7.06293 22.3866C7.07557 22.9094 7.28509 23.4072 7.64811 23.7769C8.01114 24.1466 8.49986 24.36 9.0131 24.3729C9.52634 24.3858 10.0248 24.1971 10.4052 23.846L22.8177 11.0254C23.5072 10.2504 23.8776 9.2351 23.8523 8.18962C23.8271 7.14413 23.408 6.14858 22.682 5.40909C21.9559 4.6696 20.9785 4.2428 19.952 4.21706C18.9255 4.19131 17.9286 4.5686 17.1677 5.27081L4.75523 18.0914C3.63138 19.2361 3 20.7886 3 22.4074C3 24.0262 3.63138 25.5787 4.75523 26.7234C5.87908 27.868 7.40336 28.5111 8.99273 28.5111C10.5821 28.5111 12.1064 27.868 13.2302 26.7234L23.4927 16.2963"
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

export default Pin;
