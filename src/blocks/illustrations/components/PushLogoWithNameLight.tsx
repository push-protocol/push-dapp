import { FC } from 'react';
import { IllustrationWrapper } from '../IllustrationWrapper';
import { IllustrationProps } from '../Illustrations.types';

const PushLogoWithNameLight: FC<IllustrationProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IllustrationWrapper
      componentName="PushLogoWithNameLight"
      illustration={
        <svg
          width={restProps.width ?? '134'}
          height={restProps.height ?? '44'}
          viewBox="0 0 134 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M27.1896 43.5824C29.6679 43.5824 31.7941 42.099 32.7375 39.9728C32.967 39.4546 32.5852 38.8731 32.0176 38.8731H22.3597C21.794 38.8731 21.4083 39.4546 21.6397 39.9728C22.5852 42.099 24.7114 43.5824 27.1876 43.5824"
            fill="url(#paint0_linear_10648_67510)"
          />
          <path
            d="M42.0078 33.0246C40.4373 33.0246 39.1636 31.7528 39.1636 30.1804V19.8481C39.1636 14.2487 35.3206 9.54934 30.1287 8.23801C29.9388 6.76253 28.6789 5.61932 27.1501 5.61932C25.6212 5.61932 24.3534 6.77242 24.1694 8.25581C19.5096 9.46429 15.9553 13.4081 15.3145 18.2717C15.3046 18.3429 15.2947 18.4141 15.2868 18.4853C15.275 18.5822 15.2651 18.6772 15.2572 18.7741C15.2493 18.871 15.2413 18.9679 15.2354 19.0648C15.2295 19.1459 15.2235 19.225 15.2196 19.3081C15.2117 19.4703 15.2077 19.6364 15.2077 19.8026V30.1804C15.2077 31.7449 13.9458 33.0127 12.3853 33.0246C11.6397 33.0305 11.0245 33.6041 11.0245 34.3517V34.3636C11.0245 35.1033 11.6238 35.7026 12.3635 35.7026H41.9998C42.7396 35.7026 43.3389 35.1033 43.3389 34.3636C43.3428 33.6259 42.7435 33.0266 42.0038 33.0266L42.0078 33.0246Z"
            fill="url(#paint1_linear_10648_67510)"
          />
          <path
            d="M35.7696 6.19689C39.1023 6.9109 41.6478 9.78078 41.9623 13.1748C41.9979 13.5506 42.3242 13.8334 42.7099 13.7958C42.8919 13.778 43.058 13.691 43.1747 13.5506C43.2914 13.4082 43.3468 13.2302 43.329 13.0482C43.145 11.0664 42.346 9.23291 41.0169 7.7416C39.6976 6.26612 37.9828 5.26532 36.0564 4.85194C36.0069 4.84205 35.9595 4.83612 35.912 4.83612C35.5955 4.83612 35.3087 5.05764 35.2415 5.38003C35.1624 5.74989 35.3977 6.1158 35.7696 6.19491V6.19689Z"
            fill="url(#paint2_linear_10648_67510)"
          />
          <path
            d="M36.539 1.77829C41.7249 2.88985 45.6885 7.35586 46.1771 12.6368C46.2127 13.0125 46.539 13.2934 46.9247 13.2578C47.1067 13.24 47.2728 13.153 47.3895 13.0125C47.5062 12.8701 47.5616 12.6921 47.5438 12.5102C47.2748 9.59084 46.094 6.88513 44.1359 4.69366C42.1917 2.51603 39.664 1.0445 36.8277 0.435318C36.7783 0.425428 36.7308 0.419495 36.6833 0.419495C36.3669 0.419495 36.0801 0.641015 36.0128 0.963407C35.9318 1.33327 36.1671 1.69917 36.539 1.77829Z"
            fill="url(#paint3_linear_10648_67510)"
          />
          <path
            d="M18.6058 6.19689C18.9756 6.11778 19.213 5.74989 19.1339 5.38003C19.0646 5.05764 18.7798 4.83612 18.4634 4.83612C18.4159 4.83612 18.3684 4.84205 18.319 4.85194C16.3925 5.26532 14.6777 6.26414 13.3585 7.7416C12.0294 9.22895 11.2283 11.0644 11.0464 13.0482C11.0286 13.2302 11.0859 13.4082 11.2006 13.5506C11.3154 13.693 11.4835 13.78 11.6654 13.7958C12.0511 13.8314 12.3775 13.5506 12.4131 13.1748C12.7276 9.78275 15.275 6.91485 18.6058 6.19887V6.19689Z"
            fill="url(#paint4_linear_10648_67510)"
          />
          <path
            d="M17.8363 1.77831C18.2062 1.6992 18.4435 1.33131 18.3644 0.961454C18.2952 0.639062 18.0104 0.417542 17.6939 0.417542C17.6445 0.417542 17.599 0.423475 17.5495 0.433364C14.7113 1.04255 12.1856 2.51408 10.2413 4.6917C8.28125 6.88515 7.10442 9.58889 6.83345 12.5082C6.81565 12.6902 6.87301 12.8682 6.98773 13.0106C7.10442 13.153 7.27056 13.24 7.45252 13.2559C7.83623 13.2915 8.16456 13.0106 8.20016 12.6348C8.68869 7.35589 12.6523 2.89185 17.8363 1.77831Z"
            fill="url(#paint5_linear_10648_67510)"
          />
          <path
            d="M67.0217 8.94625H57.5616C57.4786 8.94625 57.3975 8.97988 57.3381 9.03921C57.2808 9.09657 57.2511 9.17173 57.2511 9.25084V34.791C57.2511 34.9571 57.3895 35.0936 57.5596 35.0936H61.0743C61.2444 35.0936 61.3829 34.9571 61.3829 34.791L61.4046 24.7968C61.4046 24.694 61.4897 24.6109 61.5945 24.6109H67.0178C71.4442 24.6109 74.9114 21.1694 74.9114 16.7746C74.9114 14.6445 74.1005 12.6686 72.627 11.2069C71.1555 9.74729 69.1638 8.94427 67.0198 8.94427L67.0217 8.94625ZM69.9252 19.2964C69.2231 20.1073 68.2183 20.5741 67.0929 20.6097L64.6503 20.6137C63.5862 20.6156 62.6685 21.2842 62.3619 22.2751L62.2432 22.6568C62.2254 22.7142 62.172 22.7537 62.1087 22.7537H61.5272C61.4481 22.7537 61.3848 22.6924 61.3848 22.6172V13.3767C61.3848 13.1314 61.5905 12.9336 61.8417 12.9336H66.8062C68.8592 12.9336 70.576 14.4071 70.7975 16.3613C70.9241 17.457 70.6135 18.4993 69.9233 19.2964H69.9252Z"
            fill="#17181B"
          />
          <path
            d="M92.469 16.6895H88.6893C88.5864 16.6895 88.5034 16.7705 88.5034 16.8714V27.6923C88.5034 28.6041 88.1315 29.4605 87.4571 30.1053C86.7529 30.7758 85.7858 31.1318 84.7909 31.0883C82.908 30.9993 81.4345 29.4645 81.4345 27.5934V16.8734C81.4345 16.7745 81.3514 16.6914 81.2485 16.6914H77.4708C77.368 16.6914 77.2849 16.7725 77.2849 16.8734V27.538C77.2849 31.5828 80.6295 34.9708 84.7395 35.0895C84.8186 35.0915 84.8977 35.0935 84.9768 35.0935C87.0397 35.0935 88.9681 34.3201 90.4298 32.898C91.8657 31.5017 92.6588 29.6524 92.6588 27.6923V16.8694C92.6549 16.7705 92.5698 16.6914 92.4709 16.6914L92.469 16.6895Z"
            fill="#17181B"
          />
          <path
            d="M102.749 23.9403C100.583 23.5942 99.6576 22.9534 99.6576 21.7924C99.6576 20.7144 100.68 19.9905 102.203 19.9905C103.582 19.9905 104.741 20.7184 105.16 21.8438C105.174 21.8833 105.203 21.915 105.245 21.9328C105.283 21.9486 105.322 21.9486 105.362 21.9328L108.469 20.6195C108.542 20.5878 108.578 20.5048 108.55 20.4336C107.591 18.0918 105.203 16.6934 102.164 16.6934C97.8577 16.6934 95.6049 19.2785 95.6049 21.8299C95.6049 24.8442 97.6777 26.6618 101.942 27.3877C104.169 27.813 105.118 28.4795 105.118 29.6148C105.118 30.8391 103.967 31.5709 102.041 31.5709C100.567 31.5709 99.2145 30.7718 98.5955 29.5377C98.5697 29.4862 98.5183 29.4546 98.459 29.4546C98.4432 29.4546 98.4194 29.4566 98.3977 29.4665L95.1243 30.8648C95.0867 30.8787 95.059 30.9063 95.0432 30.94C95.0274 30.9756 95.0294 31.0151 95.0452 31.0507C95.7711 32.5618 97.6401 35.0935 101.997 35.0935C106.98 35.0935 109.211 32.3007 109.211 29.5337C109.211 26.4977 107.096 24.6682 102.747 23.9383L102.749 23.9403Z"
            fill="#17181B"
          />
          <path
            d="M120.465 17.3086C120.451 17.3086 120.437 17.3086 120.421 17.3086C118.671 17.3086 117.023 17.9454 115.761 19.1084V9.08858C115.761 8.98969 115.678 8.90662 115.576 8.90662H111.778C111.675 8.90662 111.592 8.98771 111.592 9.08858L111.584 34.9116C111.584 35.0104 111.667 35.0935 111.77 35.0935H115.568C115.67 35.0935 115.754 35.0124 115.754 34.9116L115.761 24.3933C115.761 22.4649 117.282 20.8806 119.223 20.7876C120.769 20.7125 122.182 21.5827 122.714 23.0444C123.072 24.0353 123.052 25.0737 123.052 26.1101V28.2284C123.052 30.1271 123.044 32.0338 123.044 33.9325C123.044 34.2589 123.044 34.5852 123.044 34.9116C123.044 35.0104 123.127 35.0935 123.23 35.0935H126.976C127.079 35.0935 127.162 35.0124 127.162 34.9116L127.17 23.9483C127.17 20.307 124.161 17.3284 120.463 17.3066L120.465 17.3086Z"
            fill="#17181B"
          />
          <defs>
            <linearGradient
              id="paint0_linear_10648_67510"
              x1="33.681"
              y1="28.6535"
              x2="25.7755"
              y2="42.0911"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF94A6" />
              <stop
                offset="0.17"
                stop-color="#EA6AC0"
              />
              <stop
                offset="0.33"
                stop-color="#DA4AD5"
              />
              <stop
                offset="0.42"
                stop-color="#D53EDD"
              />
              <stop
                offset="0.53"
                stop-color="#CB3EDD"
              />
              <stop
                offset="0.72"
                stop-color="#B341E0"
              />
              <stop
                offset="0.95"
                stop-color="#8B45E4"
              />
              <stop
                offset="1"
                stop-color="#8247E5"
              />
            </linearGradient>
            <linearGradient
              id="paint1_linear_10648_67510"
              x1="42.2293"
              y1="9.01136"
              x2="18.4989"
              y2="38.7485"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF94A6" />
              <stop
                offset="0.17"
                stop-color="#EA6AC0"
              />
              <stop
                offset="0.33"
                stop-color="#DA4AD5"
              />
              <stop
                offset="0.42"
                stop-color="#D53EDD"
              />
              <stop
                offset="0.53"
                stop-color="#CB3EDD"
              />
              <stop
                offset="0.72"
                stop-color="#B341E0"
              />
              <stop
                offset="0.95"
                stop-color="#8B45E4"
              />
              <stop
                offset="1"
                stop-color="#8247E5"
              />
            </linearGradient>
            <linearGradient
              id="paint2_linear_10648_67510"
              x1="50.8983"
              y1="1.60825"
              x2="10.4055"
              y2="28.4854"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF94A6" />
              <stop
                offset="0.17"
                stop-color="#EA6AC0"
              />
              <stop
                offset="0.33"
                stop-color="#DA4AD5"
              />
              <stop
                offset="0.42"
                stop-color="#D53EDD"
              />
              <stop
                offset="0.53"
                stop-color="#CB3EDD"
              />
              <stop
                offset="0.72"
                stop-color="#B341E0"
              />
              <stop
                offset="0.95"
                stop-color="#8B45E4"
              />
              <stop
                offset="1"
                stop-color="#8247E5"
              />
            </linearGradient>
            <linearGradient
              id="paint3_linear_10648_67510"
              x1="50.5185"
              y1="1.03659"
              x2="10.0257"
              y2="27.9138"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF94A6" />
              <stop
                offset="0.17"
                stop-color="#EA6AC0"
              />
              <stop
                offset="0.33"
                stop-color="#DA4AD5"
              />
              <stop
                offset="0.42"
                stop-color="#D53EDD"
              />
              <stop
                offset="0.53"
                stop-color="#CB3EDD"
              />
              <stop
                offset="0.72"
                stop-color="#B341E0"
              />
              <stop
                offset="0.95"
                stop-color="#8B45E4"
              />
              <stop
                offset="1"
                stop-color="#8247E5"
              />
            </linearGradient>
            <linearGradient
              id="paint4_linear_10648_67510"
              x1="43.337"
              y1="-9.78424"
              x2="2.84418"
              y2="17.0949"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF94A6" />
              <stop
                offset="0.17"
                stop-color="#EA6AC0"
              />
              <stop
                offset="0.33"
                stop-color="#DA4AD5"
              />
              <stop
                offset="0.42"
                stop-color="#D53EDD"
              />
              <stop
                offset="0.53"
                stop-color="#CB3EDD"
              />
              <stop
                offset="0.72"
                stop-color="#B341E0"
              />
              <stop
                offset="0.95"
                stop-color="#8B45E4"
              />
              <stop
                offset="1"
                stop-color="#8247E5"
              />
            </linearGradient>
            <linearGradient
              id="paint5_linear_10648_67510"
              x1="41.3472"
              y1="-12.7788"
              x2="0.87415"
              y2="14.0885"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF94A6" />
              <stop
                offset="0.17"
                stop-color="#EA6AC0"
              />
              <stop
                offset="0.33"
                stop-color="#DA4AD5"
              />
              <stop
                offset="0.42"
                stop-color="#D53EDD"
              />
              <stop
                offset="0.53"
                stop-color="#CB3EDD"
              />
              <stop
                offset="0.72"
                stop-color="#B341E0"
              />
              <stop
                offset="0.95"
                stop-color="#8B45E4"
              />
              <stop
                offset="1"
                stop-color="#8247E5"
              />
            </linearGradient>
          </defs>
        </svg>
      }
      {...restProps}
    />
  );
};

export default PushLogoWithNameLight;
