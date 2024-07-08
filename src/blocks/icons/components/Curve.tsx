import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const Curve: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="Curve"
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="inherit"
          height="inherit"
          viewBox="0 0 20 19"
          fill="none"
          {...props}
        >
          <path
            d="M0.824219 0.19281V9.81388C0.824219 14.2322 4.40594 17.8139 8.82422 17.8139H19.0112"
            stroke="currentColor"
            stroke-width="1.5"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Curve;
