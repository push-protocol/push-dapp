import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const Asterisk: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="Asterisk"
      icon={
        <svg
          width="inherit"
          height="inherit"
          viewBox="0 0 5 5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          {...props}
        >
          <path
            d="M0.687978 4.28802L0.795978 4.14402L1.43198 3.32202L1.83998 2.84202C1.82798 2.81802 1.82198 2.79402 1.81598 2.76402L1.20998 2.62002L0.207978 2.33802L0.039978 2.28402L0.327978 1.40202L0.495978 1.45602L1.47398 1.81002L2.04398 2.04402C2.06798 2.02602 2.09198 2.00802 2.11598 1.99002L2.07398 1.39002L2.03798 0.346015V0.166016H2.96198V0.346015L2.92598 1.39002L2.87798 1.99002C2.90198 2.00802 2.92598 2.02602 2.94998 2.04402L3.51998 1.81002L4.50398 1.45602L4.67198 1.40202L4.95998 2.28402L4.78598 2.33802L3.78398 2.62002L3.17798 2.76402C3.17198 2.79402 3.16598 2.81802 3.15398 2.84202L3.56198 3.32202L4.20398 4.14402L4.30598 4.28802L3.55598 4.83402L3.45398 4.68402L2.87198 3.82002L2.54798 3.29202C2.52998 3.29202 2.51198 3.29202 2.49998 3.29202C2.48198 3.29202 2.46398 3.29202 2.44598 3.29202L2.12198 3.82002L1.53998 4.68402L1.43798 4.83402L0.687978 4.28802Z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Asterisk;
