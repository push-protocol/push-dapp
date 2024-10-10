import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const Chat: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="Chat"
      icon={
        <svg
          style={{ width: 'inherit', height: 'inherit' }}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M5.57428 26.516V13.2243C5.57428 8.9993 8.9993 5.57428 13.2243 5.57428H19.8243C24.3806 5.57428 28.0743 9.26793 28.0743 13.8243C28.0743 18.3806 24.3806 22.0743 19.8243 22.0743H11.488C11.128 22.0743 10.7816 22.2113 10.519 22.4575L5.99527 26.6984C5.8356 26.8481 5.57428 26.7349 5.57428 26.516Z"
            stroke="currentColor"
            stroke-width="1.5"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Chat;
