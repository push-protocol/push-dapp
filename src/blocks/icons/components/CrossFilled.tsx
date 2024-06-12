import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const CrossFilled: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="CrossFilled"
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
            d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37259 22.6274 4 16 4C9.37256 4 4 9.37259 4 16C4 22.6274 9.37256 28 16 28ZM11.4705 11.4706C11.8255 11.1155 12.4011 11.1155 12.7562 11.4706L15.9705 14.6849L19.1848 11.4706C19.5398 11.1155 20.1154 11.1155 20.4705 11.4706C20.8255 11.8256 20.8255 12.4012 20.4705 12.7563L17.2562 15.9706L20.4705 19.1849C20.8255 19.5399 20.8255 20.1156 20.4705 20.4706C20.1154 20.8257 19.5398 20.8257 19.1848 20.4706L15.9705 17.2563L12.7562 20.4706C12.4011 20.8256 11.8255 20.8256 11.4705 20.4706C11.1154 20.1155 11.1154 19.5399 11.4705 19.1849L14.6848 15.9706L11.4705 12.7563C11.1154 12.4012 11.1154 11.8256 11.4705 11.4706Z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default CrossFilled;
