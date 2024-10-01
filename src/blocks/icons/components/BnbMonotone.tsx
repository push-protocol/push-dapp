import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const BnbMonotone: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="BnbMonotone"
      icon={
        <svg
          width="inherit"
          height="inherit"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <g clip-path="url(#clip0_8547_11030)">
            <path
              d="M0 8C0 3.58172 3.58172 0 8 0H12C16.4183 0 20 3.58172 20 8V12C20 16.4183 16.4183 20 12 20H8C3.58172 20 0 16.4183 0 12V8Z"
              fill="var(--surface-tertiary)"
            />
            <path
              d="M7.56919 9.00324L9.99996 6.57247L12.4319 9.00427L13.8462 7.58992L9.99996 3.74377L6.15498 7.5888L7.56919 9.00324ZM3.74182 10.0019L5.15621 8.58734L6.57052 10.0016L5.15611 11.416L3.74182 10.0019ZM7.56919 11.0008L9.99996 13.4314L12.4319 10.9996L13.8469 12.4132L13.8462 12.414L9.99996 16.2601L6.15498 12.4151L6.15297 12.4131L7.56919 11.0008ZM13.4294 10.0025L14.8438 8.58814L16.2581 10.0024L14.8438 11.4168L13.4294 10.0025Z"
              fill="var(--icon-primary)"
            />
            <path
              d="M11.6051 10.0017H11.6058L10.0006 8.39648L8.81418 9.58258L8.67788 9.71894L8.39673 10.0001L8.39453 10.0023L8.39673 10.0046L10.0006 11.6087L11.6059 10.0034L11.6067 10.0025L11.6051 10.0017Z"
              fill="var(--icon-primary)"
            />
          </g>
          <defs>
            <clipPath id="clip0_8547_11030">
              <path
                d="M0 8C0 3.58172 3.58172 0 8 0H12C16.4183 0 20 3.58172 20 8V12C20 16.4183 16.4183 20 12 20H8C3.58172 20 0 16.4183 0 12V8Z"
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

export default BnbMonotone;
