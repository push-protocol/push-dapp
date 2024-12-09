import { FC } from 'react';
import { IllustrationWrapper } from '../IllustrationWrapper';
import { IllustrationProps } from '../Illustrations.types';

const Telegram: FC<IllustrationProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IllustrationWrapper
      componentName="Telegram"
      illustration={
        <svg
          width={restProps?.width ?? '48'}
          height={restProps?.height ?? '48'}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
            fill="#25A2E0"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.13931 23.5154C16.9132 20.1285 22.097 17.8956 24.6907 16.8168C32.0963 13.7366 33.6352 13.2015 34.6381 13.1838C34.8587 13.1799 35.3519 13.2346 35.6714 13.4939C36.1454 13.8785 36.1481 14.7133 36.0955 15.2658C35.6941 19.4824 33.9577 29.715 33.0742 34.4377C32.7004 36.4361 31.9643 37.1062 31.2518 37.1717C29.7033 37.3142 28.5273 36.1483 27.0274 35.1651C24.6805 33.6266 23.3545 32.6689 21.0763 31.1676C18.4435 29.4326 20.1503 28.4791 21.6507 26.9207C22.0434 26.5128 28.8664 20.3067 28.9985 19.7437C29.0151 19.6733 29.0304 19.4108 28.8744 19.2722C28.7185 19.1337 28.4884 19.181 28.3223 19.2187C28.0869 19.2721 24.3375 21.7503 17.0742 26.6533C16.0099 27.3841 15.046 27.7401 14.1823 27.7215C13.2301 27.701 11.3987 27.1832 10.0371 26.7406C8.36713 26.1977 7.03983 25.9107 7.15546 24.9888C7.21567 24.5085 7.87692 24.0174 9.13931 23.5154Z"
            fill="white"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Telegram;
