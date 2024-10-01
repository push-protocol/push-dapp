import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const Sale: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="Sale"
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="inherit"
          height="inherit"
          viewBox="0 0 22 22"
          fill="none"
          {...props}
        >
          <path
            d="M1.22222 10.7778C6.49717 10.7778 10.7778 6.49717 10.7778 1.22222C10.7778 1.09984 10.8776 1 11 1C11.1224 1 11.2222 1.09984 11.2222 1.22222C11.2222 6.49717 15.5028 10.7778 20.7778 10.7778C20.9002 10.7778 21 10.8776 21 11C21 11.1224 20.9002 11.2222 20.7778 11.2222C15.5028 11.2222 11.2222 15.5028 11.2222 20.7778C11.2222 20.9002 11.1224 21 11 21C10.8776 21 10.7778 20.9002 10.7778 20.7778C10.7778 15.5028 6.49717 11.2222 1.22222 11.2222C1.09984 11.2222 1 11.1224 1 11C1 10.8776 1.09984 10.7778 1.22222 10.7778Z"
            stroke="currentColor"
            stroke-width="2"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Sale;
