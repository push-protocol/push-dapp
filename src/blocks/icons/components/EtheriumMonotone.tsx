import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const EtheriumMonotone: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="EtheriumMonotone"
      icon={
        <svg
          width="inherit"
          height="inherit"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M0 8C0 3.58172 3.58172 0 8 0H12C16.4183 0 20 3.58172 20 8V12C20 16.4183 16.4183 20 12 20H8C3.58172 20 0 16.4183 0 12V8Z"
            fill="var(--surface-tertiary)"
          />
          <path
            d="M5.76962 9.82823L9.99885 3.39282V12.12L5.76962 9.82823Z"
            fill="var(--icon-primary)"
          />
          <path
            d="M9.99885 3.39282L14.2287 9.82823L9.99885 12.12V3.39282Z"
            fill="var(--icon-primary)"
          />
          <path
            d="M9.99842 13.4332V16.6072L5.76917 11.1414L9.99842 13.4332Z"
            fill="var(--icon-primary)"
          />
          <path
            d="M9.99842 16.6072V13.4332L14.2308 11.1414L9.99842 16.6072Z"
            fill="var(--icon-primary)"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default EtheriumMonotone;
