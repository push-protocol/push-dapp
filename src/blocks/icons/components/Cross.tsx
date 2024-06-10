import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const Cross: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="Cross"
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.93907 7.51472C9.2696 6.84525 8.18417 6.84525 7.5147 7.51472C6.84523 8.18419 6.84523 9.26961 7.5147 9.93908L13.5756 16L7.5147 22.0609C6.84523 22.7304 6.84523 23.8158 7.5147 24.4853C8.18417 25.1548 9.26959 25.1548 9.93907 24.4853L16 18.4244L22.0609 24.4853C22.7304 25.1548 23.8158 25.1548 24.4853 24.4853C25.1547 23.8158 25.1547 22.7304 24.4853 22.0609L18.4243 16L24.4853 9.93909C25.1547 9.26961 25.1547 8.18419 24.4853 7.51472C23.8158 6.84525 22.7304 6.84525 22.0609 7.51472L16 13.5756L9.93907 7.51472Z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Cross;
