import { FC } from 'react';
import { IllustrationWrapper } from '../IllustrationWrapper';
import { IllustrationProps } from '../Illustrations.types';

const PushDev: FC<IllustrationProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IllustrationWrapper
      componentName="PushDev"
      illustration={
        <svg
          width={restProps.width ?? '48'}
          height={restProps.height ?? '48'}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <rect
            width="48"
            height="48"
            rx="24"
            fill="url(#paint0_linear_1854_13657)"
          />
          <path
            d="M8.4575 21.7669C8.52329 20.9627 9.2188 20.3666 10.0114 20.4334L10.4532 20.4715C11.2458 20.5383 11.8333 21.244 11.7675 22.0482L11.3148 27.5444C11.249 28.3486 10.5534 28.9446 9.76081 28.8779L9.31906 28.8397C8.52642 28.773 7.93899 28.0673 8.00478 27.2631L8.4575 21.7669Z"
            fill="url(#paint1_linear_1854_13657)"
          />
          <path
            d="M39.5425 21.7669C39.4767 20.9627 38.7812 20.3666 37.9886 20.4334L37.5468 20.4715C36.7542 20.5383 36.1668 21.244 36.2326 22.0482L36.6853 27.5444C36.7511 28.3486 37.4466 28.9446 38.2392 28.8779L38.681 28.8397C39.4736 28.773 40.061 28.0673 39.9952 27.2631L39.5425 21.7669Z"
            fill="url(#paint2_linear_1854_13657)"
          />
          <path
            d="M38.0575 25.8326C38.0575 28.6903 37.6393 30.2321 36.7746 31.6562C34.84 34.8381 30.6763 36 23.9812 36C17.7058 36 13.6549 34.8636 11.5794 32.2204C10.4499 30.782 9.90479 29.0909 9.90479 25.831C9.90165 16.5838 14.4711 12 23.9796 12C32.6814 12 38.0575 16.5838 38.0575 25.8326Z"
            fill="url(#paint3_linear_1854_13657)"
          />
          <rect
            x="13.8516"
            y="17.8903"
            width="20.5586"
            height="12.0134"
            rx="6"
            fill="black"
          />
          <path
            d="M22.3399 23.3232L19.6142 21.0165C19.3048 20.7546 18.8417 20.7932 18.5799 21.1027C18.3181 21.4121 18.3567 21.8753 18.6661 22.1371L20.7297 23.8835L18.6661 25.6299C18.3567 25.8918 18.3181 26.3549 18.5799 26.6643C18.8423 26.9745 19.3056 27.0117 19.6142 26.7505L22.3399 24.4438C22.6866 24.1504 22.6856 23.6158 22.3399 23.3232Z"
            fill="white"
          />
          <path
            d="M29.4561 25.4562H26.1538C25.7485 25.4562 25.4199 25.7848 25.4199 26.1902C25.4199 26.5956 25.7485 26.9242 26.1538 26.9242H29.4561C29.8614 26.9242 30.19 26.5956 30.19 26.1902C30.19 25.7848 29.8614 25.4562 29.4561 25.4562Z"
            fill="white"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1854_13657"
              x1="24"
              y1="0"
              x2="24"
              y2="48"
              gradientUnits="userSpaceOnUse"
            >
              <stop />
              <stop
                offset="1"
                stop-color="#3C3A95"
              />
            </linearGradient>
            <linearGradient
              id="paint1_linear_1854_13657"
              x1="10.1321"
              y1="31.0776"
              x2="9.3048"
              y2="10.1239"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D060ED" />
              <stop
                offset="0.23"
                stop-color="#CFC6EE"
              />
              <stop
                offset="0.47"
                stop-color="white"
              />
            </linearGradient>
            <linearGradient
              id="paint2_linear_1854_13657"
              x1="38.6105"
              y1="32.5399"
              x2="36.9416"
              y2="6.79144"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D060ED" />
              <stop
                offset="0.23"
                stop-color="#CFC6EE"
              />
              <stop
                offset="0.54"
                stop-color="white"
              />
            </linearGradient>
            <linearGradient
              id="paint3_linear_1854_13657"
              x1="26.3324"
              y1="38.6114"
              x2="21.1496"
              y2="11.1545"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D060ED" />
              <stop
                offset="0.16"
                stop-color="#CDC4ED"
              />
              <stop
                offset="1"
                stop-color="white"
              />
            </linearGradient>
          </defs>
        </svg>
      }
      {...restProps}
    />
  );
};

export default PushDev;
