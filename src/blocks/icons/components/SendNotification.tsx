import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const SendNotification: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="SendNotification"
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
            d="M25.0515 4.48548L2.94964 10.7105C2.76149 10.762 2.59378 10.8702 2.46934 11.0204C2.34491 11.1706 2.2698 11.3555 2.25424 11.5499C2.23869 11.7443 2.28345 11.9388 2.38242 12.1069C2.4814 12.275 2.62978 12.4084 2.80735 12.4891L12.9572 17.2913C13.156 17.3834 13.3157 17.5431 13.4077 17.7419L18.2099 27.8917C18.2906 28.0693 18.4241 28.2176 18.5922 28.3166C18.7602 28.4156 18.9547 28.4603 19.1491 28.4448C19.3436 28.4292 19.5285 28.3541 19.6787 28.2297C19.8289 28.1053 19.9371 27.9375 19.9885 27.7494L26.2136 5.64749C26.2607 5.4862 26.2636 5.3152 26.222 5.1524C26.1804 4.9896 26.0957 4.841 25.9769 4.72217C25.858 4.60335 25.7094 4.51868 25.5466 4.47703C25.3838 4.43539 25.2128 4.43831 25.0515 4.48548V4.48548Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14 17L18 13"
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

export default SendNotification;
