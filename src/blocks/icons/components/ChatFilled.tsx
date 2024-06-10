import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const ChatFilled: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="ChatFilled"
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
            d="M4.07745 11.8108V25.1026C4.07745 25.978 5.12273 26.4309 5.76139 25.8321L10.2851 21.5912C10.4087 21.4753 10.5717 21.4108 10.7411 21.4108H19.0775C24.048 21.4108 28.0775 17.3814 28.0775 12.4108C28.0775 7.44027 24.048 3.41083 19.0775 3.41083H12.4775C7.83826 3.41083 4.07745 7.17164 4.07745 11.8108Z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default ChatFilled;
