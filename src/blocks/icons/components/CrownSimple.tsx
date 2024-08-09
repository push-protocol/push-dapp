import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const CrownSimple: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="CrownSimple"
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="inherit"
          height="inherit"
          viewBox="0 0 32 33"
          fill="none"
          {...props}
        >
          <g clip-path="url(#clip0_5441_8171)">
            <path
              d="M5.84358 26.76H26.1623C26.4231 26.7601 26.6755 26.6792 26.8752 26.5315C27.075 26.3838 27.2093 26.1789 27.2546 25.9526L30.4013 13.2489C30.4408 13.0399 30.4021 12.8252 30.2911 12.6372C30.18 12.4492 30.0027 12.2981 29.7857 12.2067C29.5687 12.1153 29.3239 12.0885 29.0881 12.1305C28.8523 12.1724 28.6384 12.2807 28.4786 12.4391L22.6567 17.9652L17.0093 6.80669C16.9204 6.63745 16.7784 6.49416 16.6001 6.39374C16.4218 6.29332 16.2146 6.23996 16.003 6.23996C15.7913 6.23996 15.5841 6.29332 15.4058 6.39374C15.2275 6.49416 15.0855 6.63745 14.9966 6.80669L9.34925 17.9652L3.52726 12.4391C3.36781 12.2784 3.15302 12.1681 2.91574 12.1251C2.67846 12.0821 2.43173 12.1088 2.21327 12.201C1.99481 12.2933 1.81663 12.446 1.70597 12.6359C1.59531 12.8258 1.55825 13.0424 1.60046 13.2526L4.74711 25.9563C4.79341 26.1825 4.92872 26.3871 5.12926 26.5341C5.3298 26.6811 5.58273 26.7611 5.84358 26.76Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_5441_8171">
              <rect width="32" height="32" fill="white" transform="translate(0 0.5)" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  );
};

export default CrownSimple;
