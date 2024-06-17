import { FC } from 'react';
import { IllustrationWrapper } from '../IllustrationWrapper';
import { IllustrationProps } from '../Illustrations.types';

const PushBot: FC<IllustrationProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IllustrationWrapper
      componentName="PushBot"
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
            fill="url(#paint0_linear_1854_13658)"
          />
          <path
            d="M8.4575 21.7669C8.52329 20.9627 9.2188 20.3666 10.0114 20.4334L10.4532 20.4715C11.2458 20.5383 11.8333 21.244 11.7675 22.0482L11.3148 27.5444C11.249 28.3486 10.5534 28.9446 9.76081 28.8779L9.31906 28.8397C8.52642 28.773 7.93899 28.0673 8.00478 27.2631L8.4575 21.7669Z"
            fill="url(#paint1_linear_1854_13658)"
          />
          <path
            d="M39.5425 21.7669C39.4767 20.9627 38.7812 20.3666 37.9886 20.4334L37.5468 20.4715C36.7542 20.5383 36.1668 21.244 36.2326 22.0482L36.6853 27.5444C36.7511 28.3486 37.4466 28.9446 38.2392 28.8779L38.681 28.8397C39.4736 28.773 40.061 28.0673 39.9952 27.2631L39.5425 21.7669Z"
            fill="url(#paint2_linear_1854_13658)"
          />
          <path
            d="M38.0575 25.8326C38.0575 28.6903 37.6393 30.2321 36.7746 31.6562C34.84 34.8381 30.6763 36 23.9812 36C17.7058 36 13.6549 34.8636 11.5794 32.2204C10.4499 30.782 9.90479 29.0909 9.90479 25.831C9.90165 16.5838 14.4711 12 23.9796 12C32.6814 12 38.0575 16.5838 38.0575 25.8326Z"
            fill="url(#paint3_linear_1854_13658)"
          />
          <path
            d="M13.9072 22.7809L13.8508 31.3986C13.8461 32.16 14.739 32.5589 15.2889 32.0424L17.9018 29.5883C17.9315 29.5597 17.9707 29.5438 18.013 29.5454L28.6259 29.582C31.7995 29.6026 34.3889 27.0103 34.4093 23.7902C34.4297 20.57 31.8747 17.9428 28.7011 17.9221L18.7915 17.8903C16.1113 17.8728 13.9245 20.063 13.9072 22.7825V22.7809Z"
            fill="black"
          />
          <path
            d="M21.2979 22.6617C21.2979 21.7559 20.5741 21.0215 19.6813 21.0215C18.7885 21.0215 18.0647 21.7559 18.0647 22.6617V24.7931C18.0647 25.699 18.7885 26.4334 19.6813 26.4334C20.5741 26.4334 21.2979 25.699 21.2979 24.7931V22.6617Z"
            fill="white"
          />
          <path
            d="M30.3802 22.6617C30.3802 21.7559 29.6564 21.0215 28.7636 21.0215C27.8708 21.0215 27.147 21.7559 27.147 22.6617V24.7931C27.147 25.699 27.8708 26.4334 28.7636 26.4334C29.6564 26.4334 30.3802 25.699 30.3802 24.7931V22.6617Z"
            fill="white"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1854_13658"
              x1="24"
              y1="0"
              x2="24"
              y2="48"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E895DF" />
              <stop
                offset="1"
                stop-color="#7792F1"
              />
            </linearGradient>
            <linearGradient
              id="paint1_linear_1854_13658"
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
              id="paint2_linear_1854_13658"
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
              id="paint3_linear_1854_13658"
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

export default PushBot;
