import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const ChannelFilled: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="ChannelFilled"
      icon={
        <svg
          width="inherit"
          height="inherit"
          viewBox="0 0 33 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.6666 27C22.294 27 27.6666 21.6274 27.6666 15C27.6666 8.37258 22.294 3 15.6666 3C9.03921 3 3.66663 8.37258 3.66663 15C3.66663 21.6274 9.03921 27 15.6666 27ZM18.0849 17.478C18.0162 17.6301 17.8928 17.7508 17.7394 17.8164L10.7342 20.8084C10.1812 21.0446 9.62282 20.4857 9.85945 19.933L12.8546 12.9365C12.9201 12.7835 13.0405 12.6605 13.1921 12.5917L20.5157 9.26986C21.0759 9.01576 21.652 9.59125 21.3985 10.1517L18.0849 17.478Z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default ChannelFilled;
