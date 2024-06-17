import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const Copy: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="Copy"
      icon={
        <svg
          width="inherit"
          height="inherit"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <g clip-path="url(#clip0_3130_4650)">
            <path
              d="M15.75 15.75H17.25C18.9069 15.75 20.25 14.4069 20.25 12.75V6.75C20.25 5.09315 18.9069 3.75 17.25 3.75H11.25C9.59315 3.75 8.25 5.09315 8.25 6.75V8.25"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.75 8.25H6.75C5.09315 8.25 3.75 9.59315 3.75 11.25V17.25C3.75 18.9069 5.09315 20.25 6.75 20.25H12.75C14.4069 20.25 15.75 18.9069 15.75 17.25V11.25C15.75 9.59315 14.4069 8.25 12.75 8.25Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_3130_4650">
              <rect
                width="18"
                height="18"
                fill="white"
                transform="translate(3 3)"
              />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  );
};

export default Copy;
