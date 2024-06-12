import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const NFTGated: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="NFTGated"
      icon={
        <svg
          width="inherit"
          height="inherit"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M27.96 8.26877L16.96 2.25002C16.6661 2.08763 16.3358 2.00244 16 2.00244C15.6642 2.00244 15.3339 2.08763 15.04 2.25002L4.04 8.27127C3.72586 8.44315 3.46363 8.69622 3.28069 9.00405C3.09775 9.31188 3.00081 9.66319 3 10.0213V21.9763C3.00081 22.3344 3.09775 22.6857 3.28069 22.9935C3.46363 23.3013 3.72586 23.5544 4.04 23.7263L15.04 29.7475C15.3339 29.9099 15.6642 29.9951 16 29.9951C16.3358 29.9951 16.6661 29.9099 16.96 29.7475L27.96 23.7263C28.2741 23.5544 28.5364 23.3013 28.7193 22.9935C28.9023 22.6857 28.9992 22.3344 29 21.9763V10.0225C28.9999 9.6638 28.9032 9.31172 28.7203 9.00317C28.5373 8.69462 28.2747 8.44096 27.96 8.26877ZM27 21.9775L16 28L5 21.9775V10.0225L16 4.00002L27 10.0213V21.9775Z"
            fill="currentColor"
          />
          <path
            d="M12.6415 20H11.1255L9.19596 15.73L8.51604 20H7L8.13014 13H9.64617L11.5849 17.25L12.2556 13H13.7716L12.6415 20Z"
            fill="currentColor"
          />
          <path
            d="M15.4614 20H13.927L15.0571 13H19.2744L19.0356 14.52H16.3526L16.1321 15.88H18.5486L18.3005 17.38H15.884L15.4614 20Z"
            fill="currentColor"
          />
          <path
            d="M22.0506 20H20.4519L21.3339 14.55H19.5147L19.7628 13H25L24.7519 14.55H22.9327L22.0506 20Z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default NFTGated;
