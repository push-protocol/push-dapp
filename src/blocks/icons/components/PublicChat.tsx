import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const PublicChat: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="PublicChat"
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
            d="M16.8671 23.4C13.2819 23.4 10.1499 22.1411 7.55711 19.6594C6.49327 18.6375 5.58818 17.4723 4.87 16.2C5.58798 14.9276 6.49309 13.7623 7.55711 12.7406C10.1499 10.2589 13.2819 9 16.8671 9C20.4522 9 23.5843 10.2589 26.1771 12.7406C27.243 13.7621 28.15 14.9273 28.87 16.2C28.0302 17.7142 24.3717 23.4 16.8671 23.4ZM16.8671 19.8C16.1299 19.8 15.4093 19.5889 14.7963 19.1933C14.1834 18.7977 13.7057 18.2355 13.4236 17.5777C13.1414 16.9198 13.0676 16.196 13.2115 15.4977C13.3553 14.7993 13.7103 14.1579 14.2315 13.6544C14.7528 13.1509 15.4169 12.8081 16.1399 12.6692C16.8629 12.5303 17.6124 12.6016 18.2934 12.874C18.9745 13.1465 19.5566 13.6079 19.9662 14.1999C20.3757 14.792 20.5943 15.488 20.5943 16.2C20.5943 17.1548 20.2016 18.0705 19.5026 18.7456C18.8037 19.4207 17.8556 19.8 16.8671 19.8Z"
            stroke="currentColor"
            stroke-width="2"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default PublicChat;
