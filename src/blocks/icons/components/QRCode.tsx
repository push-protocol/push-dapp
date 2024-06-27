import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const QRCode: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="QRCode"
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
            d="M10.3246 8.36371C10.927 8.36371 11.4155 8.8497 11.4155 9.44919V9.46005C11.4155 10.0595 10.927 10.5455 10.3246 10.5455C9.72206 10.5455 9.23364 10.0595 9.23364 9.46005V9.44919C9.23364 8.8497 9.72206 8.36371 10.3246 8.36371Z"
            fill="currentColor"
          />
          <rect
            x="5.87"
            y="5"
            width="8.90909"
            height="8.90909"
            rx="1.18182"
            stroke="currentColor"
            stroke-width="2"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M23.4155 8.36371C24.018 8.36371 24.5064 8.8497 24.5064 9.44919V9.46005C24.5064 10.0595 24.018 10.5455 23.4155 10.5455C22.813 10.5455 22.3246 10.0595 22.3246 9.46005V9.44919C22.3246 8.8497 22.813 8.36371 23.4155 8.36371Z"
            fill="currentColor"
          />
          <rect
            x="18.9609"
            y="5"
            width="8.90909"
            height="8.90909"
            rx="1.18182"
            stroke="currentColor"
            stroke-width="2"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.3246 21.4546C10.927 21.4546 11.4155 21.9406 11.4155 22.5401V22.5509C11.4155 23.1504 10.927 23.6364 10.3246 23.6364C9.72206 23.6364 9.23364 23.1504 9.23364 22.5509V22.5401C9.23364 21.9406 9.72206 21.4546 10.3246 21.4546Z"
            fill="currentColor"
          />
          <rect
            x="5.87"
            y="18.0909"
            width="8.90909"
            height="8.90909"
            rx="1.18182"
            stroke="currentColor"
            stroke-width="2"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.9609 26.9091C17.9609 26.3066 18.547 25.8182 19.27 25.8182H23.1973C23.9203 25.8182 24.5064 26.3066 24.5064 26.9091C24.5064 27.5116 23.9203 28 23.1973 28H19.27C18.547 28 17.9609 27.5116 17.9609 26.9091Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.9609 18.1818C17.9609 17.5793 18.547 17.0909 19.27 17.0909H23.1973C23.9203 17.0909 24.5064 17.5793 24.5064 18.1818C24.5064 18.7843 23.9203 19.2727 23.1973 19.2727H19.27C18.547 19.2727 17.9609 18.7843 17.9609 18.1818Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.0518 23.6364C19.6543 23.6364 20.1427 23.0503 20.1427 22.3273V18.4C20.1427 17.677 19.6543 17.0909 19.0518 17.0909C18.4493 17.0909 17.9609 17.677 17.9609 18.4V22.3273C17.9609 23.0503 18.4493 23.6364 19.0518 23.6364Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M28.87 22.5454C28.87 21.9429 28.2839 21.4545 27.5609 21.4545H23.6336C22.9106 21.4545 22.3245 21.9429 22.3245 22.5454C22.3245 23.1479 22.9106 23.6363 23.6336 23.6363H27.5609C28.2839 23.6363 28.87 23.1479 28.87 22.5454Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M27.7791 28C27.1766 28 26.6882 27.4139 26.6882 26.6909V22.7636C26.6882 22.0406 27.1766 21.4545 27.7791 21.4545C28.3817 21.4545 28.8701 22.0406 28.8701 22.7636V26.6909C28.8701 27.4139 28.3817 28 27.7791 28Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M27.7791 17.0909C28.3817 17.0909 28.8701 17.5769 28.8701 18.1764V18.1872C28.8701 18.7867 28.3817 19.2727 27.7791 19.2727C27.1766 19.2727 26.6882 18.7867 26.6882 18.1872V18.1764C26.6882 17.5769 27.1766 17.0909 27.7791 17.0909Z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default QRCode;
