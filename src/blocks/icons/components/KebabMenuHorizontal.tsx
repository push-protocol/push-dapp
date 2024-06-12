import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const KebabMenuHorizontal: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="KebabMenuHorizontal"
      icon={
        <svg
          width="inherit"
          height="inherit"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <g clip-path="url(#clip0_372_37305)">
            <path
              d="M23 16C23 17.3807 24.1193 18.5 25.5 18.5C26.8807 18.5 28 17.3807 28 16C28 14.6193 26.8807 13.5 25.5 13.5C24.1193 13.5 23 14.6193 23 16Z"
              fill="currentColor"
            />
            <path
              d="M13.5 16C13.5 17.3807 14.6193 18.5 16 18.5C17.3807 18.5 18.5 17.3807 18.5 16C18.5 14.6193 17.3807 13.5 16 13.5C14.6193 13.5 13.5 14.6193 13.5 16Z"
              fill="currentColor"
            />
            <path
              d="M3.99999 16C3.99999 17.3807 5.11928 18.5 6.5 18.5C7.88071 18.5 9 17.3807 9 16C9 14.6193 7.88071 13.5 6.5 13.5C5.11928 13.5 3.99999 14.6193 3.99999 16Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0_372_37305">
              <rect
                width="32"
                height="32"
                fill="white"
                transform="translate(32) rotate(90)"
              />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  );
};

export default KebabMenuHorizontal;
