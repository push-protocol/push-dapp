import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const Moon: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="Moon"
      icon={
        <svg
          width="inherit"
          height="inherit"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <g clip-path="url(#clip0_256_10919)">
            <path
              d="M13.5137 3.51373C12.8851 5.59381 12.8325 7.80548 13.3616 9.91309C13.8907 12.0207 14.9816 13.9453 16.5181 15.4818C18.0547 17.0184 19.9793 18.1093 22.0869 18.6384C24.1945 19.1675 26.4062 19.1149 28.4862 18.4862C27.8832 20.469 26.777 22.2618 25.2752 23.69C23.7735 25.1182 21.9275 26.1331 19.917 26.6359C17.9065 27.1387 15.8001 27.1123 13.8028 26.5592C11.8056 26.0061 9.98563 24.9452 8.52021 23.4798C7.05479 22.0143 5.99386 20.1944 5.44076 18.1971C4.88766 16.1999 4.86123 14.0934 5.36406 12.0829C5.86689 10.0725 6.88183 8.22645 8.31003 6.72473C9.73823 5.22301 11.531 4.11676 13.5137 3.51373Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_256_10919">
              <rect
                width="32"
                height="32"
                fill="white"
              />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  );
};

export default Moon;
