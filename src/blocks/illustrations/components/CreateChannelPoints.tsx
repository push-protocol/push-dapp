import { FC } from 'react';
import { IllustrationWrapper } from '../IllustrationWrapper';
import { IllustrationProps } from '../Illustrations.types';

const CreateChannelPoints: FC<IllustrationProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IllustrationWrapper
      componentName="CreateChannelPoints"
      illustration={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={restProps?.width ?? '24'}
          height={restProps?.height ?? '24'}
          viewBox="0 0 48 48"
          fill="none"
          {...props}
        >
          <path
            d="M47.8929 18.1014C49.2024 20.3695 49.2024 23.164 47.8929 25.4321L39.5583 39.8681C38.2487 42.1362 35.8287 43.5335 33.2096 43.5335H16.5404C13.9214 43.5335 11.5013 42.1362 10.1918 39.8681L1.85714 25.4321C0.547621 23.164 0.547621 20.3695 1.85714 18.1014L10.1918 3.66539C11.5013 1.39724 13.9214 0 16.5404 0H33.2096C35.8287 0 38.2487 1.39724 39.5582 3.66539L47.8929 18.1014Z"
            fill="url(#paint0_linear_8581_29503)"
          />
          <path
            d="M43.6128 18.3027C44.6788 20.1491 44.6788 22.424 43.6128 24.2704L36.8279 36.0221C35.7619 37.8685 33.7918 39.006 31.6597 39.006H18.09C15.9579 39.006 13.9878 37.8685 12.9218 36.0221L6.13692 24.2704C5.0709 22.424 5.0709 20.1491 6.13692 18.3027L12.9218 6.55092C13.9878 4.70451 15.9579 3.56708 18.09 3.56708H31.6597C33.7918 3.56708 35.7619 4.70451 36.8279 6.55092L43.6128 18.3027Z"
            fill="black"
          />
          <path
            d="M43.6127 20.1927C44.6787 21.969 44.6787 24.1573 43.6127 25.9335L36.8278 37.2385C35.7618 39.0147 33.7917 40.1089 31.6597 40.1089H18.0899C15.9579 40.1089 13.9878 39.0147 12.9218 37.2385L6.13692 25.9335C5.0709 24.1573 5.0709 21.969 6.13692 20.1927L12.9218 8.88779C13.9878 7.11159 15.9579 6.0174 18.0899 6.0174H31.6597C33.7917 6.0174 35.7618 7.11158 36.8278 8.88779L43.6127 20.1927Z"
            fill="url(#paint1_linear_8581_29503)"
          />
          <path
            d="M35.6529 22.0766L27.6624 20.0786L25.6644 12.0881C25.6203 11.9121 25.5186 11.7559 25.3756 11.6443C25.2326 11.5327 25.0564 11.472 24.8749 11.472C24.6935 11.472 24.5173 11.5327 24.3743 11.6443C24.2312 11.7559 24.1296 11.9121 24.0855 12.0881L22.0875 20.0786L14.097 22.0766C13.921 22.1207 13.7648 22.2223 13.6532 22.3654C13.5416 22.5084 13.481 22.6846 13.481 22.866C13.481 23.0475 13.5416 23.2237 13.6532 23.3667C13.7648 23.5097 13.921 23.6114 14.097 23.6555L22.0875 25.6535L24.0855 33.644C24.1296 33.82 24.2312 33.9762 24.3743 34.0878C24.5173 34.1994 24.6935 34.26 24.8749 34.26C25.0564 34.26 25.2326 34.1994 25.3756 34.0878C25.5186 33.9762 25.6203 33.82 25.6644 33.644L27.6624 25.6535L35.6529 23.6555C35.8289 23.6114 35.9851 23.5097 36.0967 23.3667C36.2083 23.2237 36.2689 23.0475 36.2689 22.866C36.2689 22.6846 36.2083 22.5084 36.0967 22.3654C35.9851 22.2223 35.8289 22.1207 35.6529 22.0766ZM24.8912 23.6799C24.6754 23.681 24.4679 23.5963 24.3145 23.4444C24.1611 23.2925 24.0744 23.0859 24.0733 22.8701C24.0722 22.6542 24.1569 22.4468 24.3088 22.2934C24.4606 22.14 24.6672 22.0532 24.8831 22.0522H24.8912C25.1071 22.0522 25.3141 22.1379 25.4667 22.2905C25.6193 22.4432 25.7051 22.6502 25.7051 22.866C25.7051 23.0819 25.6193 23.2889 25.4667 23.4415C25.3141 23.5941 25.1071 23.6799 24.8912 23.6799ZM17.4346 16.5317C17.3492 16.3772 17.3163 16.1991 17.341 16.0242C17.3657 15.8494 17.4465 15.6873 17.5714 15.5625C17.6962 15.4376 17.8583 15.3567 18.0332 15.3321C18.208 15.3074 18.3861 15.3403 18.5407 15.4257L21.2036 16.9037L20.7454 18.7365L18.9126 19.1947L17.4346 16.5317ZM28.5463 16.9037L31.2092 15.4257C31.3638 15.3403 31.5419 15.3074 31.7167 15.3321C31.8916 15.3567 32.0536 15.4376 32.1785 15.5625C32.3034 15.6873 32.3842 15.8494 32.4089 16.0242C32.4336 16.1991 32.4007 16.3772 32.3153 16.5317L30.8373 19.1947L29.0045 18.7365L28.5463 16.9037ZM32.3153 29.2003C32.4007 29.3548 32.4336 29.533 32.4089 29.7078C32.3842 29.8827 32.3034 30.0447 32.1785 30.1696C32.0536 30.2944 31.8916 30.3753 31.7167 30.4C31.5419 30.4247 31.3638 30.3918 31.2092 30.3064L28.5463 28.8284L29.0045 26.9956L30.8373 26.5374L32.3153 29.2003ZM21.2036 28.8284L18.5407 30.3064C18.3861 30.3918 18.208 30.4247 18.0332 30.4C17.8583 30.3753 17.6962 30.2944 17.5714 30.1696C17.4465 30.0447 17.3657 29.8827 17.341 29.7078C17.3163 29.533 17.3492 29.3548 17.4346 29.2003L18.9126 26.5374L20.7454 26.9956L21.2036 28.8284Z"
            fill="white"
          />
          <defs>
            <linearGradient
              id="paint0_linear_8581_29503"
              x1="24.875"
              y1="0"
              x2="24.875"
              y2="43.5335"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D267FC" />
              <stop
                offset="0.48"
                stop-color="#9982FF"
              />
              <stop
                offset="0.945"
                stop-color="#F0B571"
              />
            </linearGradient>
            <linearGradient
              id="paint1_linear_8581_29503"
              x1="24.8748"
              y1="6.0174"
              x2="24.8748"
              y2="40.1089"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D267FC" />
              <stop
                offset="0.45"
                stop-color="#9982FF"
              />
              <stop
                offset="1"
                stop-color="#F0B571"
              />
            </linearGradient>
          </defs>
        </svg>
      }
      {...restProps}
    />
  );
};

export default CreateChannelPoints;
