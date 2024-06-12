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
            d="M9.45462 8.36371C10.0571 8.36371 10.5455 8.8497 10.5455 9.44919V9.46005C10.5455 10.0595 10.0571 10.5455 9.45462 10.5455C8.85213 10.5455 8.36371 10.0595 8.36371 9.46005V9.44919C8.36371 8.8497 8.85213 8.36371 9.45462 8.36371Z"
            fill="currentColor"
          />
          <rect
            x="5.09091"
            y="5.09091"
            width="8.72727"
            height="8.72727"
            rx="1.09091"
            stroke="currentColor"
            stroke-width="2.18182"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22.5455 8.36371C23.148 8.36371 23.6364 8.8497 23.6364 9.44919V9.46005C23.6364 10.0595 23.148 10.5455 22.5455 10.5455C21.943 10.5455 21.4546 10.0595 21.4546 9.46005V9.44919C21.4546 8.8497 21.943 8.36371 22.5455 8.36371Z"
            fill="currentColor"
          />
          <rect
            x="18.1818"
            y="5.09091"
            width="8.72727"
            height="8.72727"
            rx="1.09091"
            stroke="currentColor"
            stroke-width="2.18182"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.45462 21.4546C10.0571 21.4546 10.5455 21.9406 10.5455 22.5401V22.5509C10.5455 23.1504 10.0571 23.6364 9.45462 23.6364C8.85213 23.6364 8.36371 23.1504 8.36371 22.5509V22.5401C8.36371 21.9406 8.85213 21.4546 9.45462 21.4546Z"
            fill="currentColor"
          />
          <rect
            x="5.09091"
            y="18.1818"
            width="8.72727"
            height="8.72727"
            rx="1.09091"
            stroke="currentColor"
            stroke-width="2.18182"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.0909 26.9091C17.0909 26.3066 17.677 25.8182 18.4 25.8182H22.3272C23.0503 25.8182 23.6363 26.3066 23.6363 26.9091C23.6363 27.5116 23.0503 28 22.3272 28H18.4C17.677 28 17.0909 27.5116 17.0909 26.9091Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.0909 18.1818C17.0909 17.5793 17.677 17.0909 18.4 17.0909H22.3272C23.0503 17.0909 23.6363 17.5793 23.6363 18.1818C23.6363 18.7843 23.0503 19.2727 22.3272 19.2727H18.4C17.677 19.2727 17.0909 18.7843 17.0909 18.1818Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.1818 23.6364C18.7843 23.6364 19.2727 23.0503 19.2727 22.3273V18.4C19.2727 17.677 18.7843 17.0909 18.1818 17.0909C17.5793 17.0909 17.0909 17.677 17.0909 18.4V22.3273C17.0909 23.0503 17.5793 23.6364 18.1818 23.6364Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M28 22.5454C28 21.9429 27.4139 21.4545 26.6909 21.4545H22.7636C22.0406 21.4545 21.4545 21.9429 21.4545 22.5454C21.4545 23.1479 22.0406 23.6363 22.7636 23.6363H26.6909C27.4139 23.6363 28 23.1479 28 22.5454Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M26.9091 28C26.3066 28 25.8182 27.4139 25.8182 26.6909V22.7636C25.8182 22.0406 26.3066 21.4545 26.9091 21.4545C27.5116 21.4545 28 22.0406 28 22.7636V26.6909C28 27.4139 27.5116 28 26.9091 28Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M26.9091 17.0909C27.5116 17.0909 28 17.5769 28 18.1764V18.1872C28 18.7867 27.5116 19.2727 26.9091 19.2727C26.3066 19.2727 25.8182 18.7867 25.8182 18.1872V18.1764C25.8182 17.5769 26.3066 17.0909 26.9091 17.0909Z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default QRCode;
