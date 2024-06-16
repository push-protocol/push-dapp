import { FC } from 'react';
import { IllustrationWrapper } from '../IllustrationWrapper';
import { IllustrationProps } from '../Illustrations.types';

const BNB: FC<IllustrationProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IllustrationWrapper
      componentName="BNB"
      illustration={
        <svg
          width={restProps?.width ?? '24'}
          height={restProps?.height ?? '24'}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <g clip-path="url(#clip0_248_8319)">
            <circle
              cx="16"
              cy="16"
              r="16"
              fill="#FFEBAA"
            />
            <path
              d="M10.8826 16L8.77729 18.1053L6.66669 16L8.77199 13.8947L10.8826 16ZM16 10.8826L19.6114 14.4939L21.7167 12.3886L16 6.66666L10.2781 12.3886L12.3834 14.4939L16 10.8826ZM23.2227 13.8947L21.1174 16L23.2227 18.1053L25.3281 16L23.2227 13.8947ZM16 21.1174L12.3887 17.5061L10.2834 19.6114L16 25.3333L21.7167 19.6114L19.6114 17.5061L16 21.1174ZM16 18.1053L18.1053 16L16 13.8947L13.8894 16L16 18.1053Z"
              fill="#F0B90B"
            />
          </g>
          <defs>
            <clipPath id="clip0_248_8319">
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

export default BNB;
