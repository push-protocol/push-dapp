import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const Clockwise: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="Clockwise"
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="inherit"
          height="inherit"
          viewBox="0 0 25 24"
          fill="none"
          {...props}
        >
          <g clip-path="url(#clip0_5344_11356)">
            <path
              d="M12.1157 7.5V12L15.8657 14.25"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.3657 9.75H21.1157V6"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.7782 18C16.5989 19.1128 15.1177 19.8535 13.5199 20.1294C11.922 20.4052 10.2783 20.2041 8.79405 19.5512C7.30983 18.8982 6.05093 17.8224 5.17465 16.458C4.29837 15.0937 3.84357 13.5014 3.86708 11.88C3.89058 10.2587 4.39135 8.68026 5.30681 7.3419C6.22227 6.00354 7.51183 4.96462 9.01435 4.35497C10.5169 3.74531 12.1658 3.59194 13.7549 3.91403C15.3441 4.23612 16.8032 5.01937 17.9498 6.16593C19.0532 7.28343 19.9645 8.33718 21.1157 9.75"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_5344_11356">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(0.115723)"
              />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  );
};

export default Clockwise;
