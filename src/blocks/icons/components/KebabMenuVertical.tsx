import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const KebabMenuVertical: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="KebabMenuVertical"
      icon={
        <svg
          width="inherit"
          height="inherit"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <g clip-path="url(#clip0_372_37265)">
            <path
              d="M16 9.00001C17.3807 9.00001 18.5 7.88072 18.5 6.5C18.5 5.11929 17.3807 4 16 4C14.6193 4 13.5 5.11929 13.5 6.5C13.5 7.88072 14.6193 9.00001 16 9.00001Z"
              fill="currentColor"
            />
            <path
              d="M16 18.5C17.3807 18.5 18.5 17.3807 18.5 16C18.5 14.6193 17.3807 13.5 16 13.5C14.6193 13.5 13.5 14.6193 13.5 16C13.5 17.3807 14.6193 18.5 16 18.5Z"
              fill="currentColor"
            />
            <path
              d="M16 28C17.3807 28 18.5 26.8807 18.5 25.5C18.5 24.1193 17.3807 23 16 23C14.6193 23 13.5 24.1193 13.5 25.5C13.5 26.8807 14.6193 28 16 28Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0_372_37265">
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

export default KebabMenuVertical;
