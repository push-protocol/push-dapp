import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const ChannelHomeFilled: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="ChannelHomeFilled"
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
            d="M26.4136 15.8859L26.1538 15.6175V24.4747C26.1538 26.0041 24.914 27.244 23.3846 27.244H8.61539C7.08598 27.244 5.84615 26.0041 5.84615 24.4747V15.6175L5.58638 15.8859C5.23184 16.2522 4.64746 16.2618 4.28113 15.9073C3.91479 15.5527 3.90524 14.9683 4.25978 14.602L6.10593 12.6945L6.1187 12.6815L14.0484 4.80457C15.1283 3.73181 16.8717 3.73181 17.9516 4.80457L25.8813 12.6815L25.8941 12.6945L27.7402 14.602C28.0948 14.9683 28.0852 15.5527 27.7189 15.9073C27.3525 16.2618 26.7682 16.2522 26.4136 15.8859ZM16.9231 18.9363C16.9231 18.4265 16.5098 18.0132 16 18.0132C15.4902 18.0132 15.0769 18.4265 15.0769 18.9363V22.6286C15.0769 23.1384 15.4902 23.5517 16 23.5517C16.5098 23.5517 16.9231 23.1384 16.9231 22.6286V18.9363Z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default ChannelHomeFilled;
