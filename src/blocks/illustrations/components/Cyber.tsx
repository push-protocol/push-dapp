import { FC } from 'react';
import { IllustrationWrapper } from '../IllustrationWrapper';
import { IllustrationProps } from '../Illustrations.types';

const PolygonZK: FC<IllustrationProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IllustrationWrapper
      componentName="Optimisim"
      illustration={
        <svg
          width={restProps?.width ?? '24'}
          height={restProps?.height ?? '24'}
          viewBox="0 0 33 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_2058_11417)">
            <path d="M16.0383 10.3896C19.2017 10.3896 21.7665 12.9478 21.7665 16.1032C21.7665 19.2585 19.2017 21.8169 16.0383 21.8169C12.8751 21.8169 10.3104 19.2585 10.3104 16.1032C10.3104 12.9478 12.8751 10.3896 16.0383 10.3896ZM16.0383 0.105011C13.8775 0.105011 11.7768 0.529248 9.79203 1.3663C7.8803 2.17192 6.1662 3.32465 4.69697 4.79019C3.22773 6.25574 2.07211 7.96554 1.26446 9.87247C0.425304 11.8508 0 13.9477 0 16.1032C0 18.2587 0.425304 20.3541 1.26446 22.3338C2.07211 24.2409 3.22773 25.9506 4.69697 27.4161C6.1662 28.8818 7.8803 30.0344 9.79203 30.8401C11.7754 31.6771 13.8775 32.1014 16.0383 32.1014C18.1992 32.1014 20.3001 31.6771 22.2848 30.8401C24.1965 30.0344 25.9106 28.8818 27.3799 27.4161C28.8491 25.9506 30.0047 24.2409 30.8124 22.3338C31.6515 20.3556 32.0768 18.2587 32.0768 16.1032C32.0768 13.9477 31.6515 11.8522 30.8124 9.87247C30.0047 7.96554 28.8491 6.25574 27.3799 4.79019C25.9106 3.32465 24.1965 2.17192 22.2848 1.3663C20.3014 0.529248 18.1992 0.105011 16.0383 0.105011Z" fill="#B7F7B0" />
            <path d="M16.0385 10.3896C19.2018 10.3896 21.7665 12.9478 21.7665 16.1032C21.7665 19.2585 19.2018 21.8169 16.0385 21.8169C12.8752 21.8169 10.3105 19.2585 10.3105 16.1032C10.3105 12.9478 12.8752 10.3896 16.0385 10.3896ZM16.0385 3.5332C9.09046 3.5332 3.43692 9.17255 3.43692 16.1032C3.43692 23.0338 9.09046 28.6732 16.0385 28.6732C22.9866 28.6732 28.6402 23.0338 28.6402 16.1032C28.6402 9.17255 22.9866 3.5332 16.0385 3.5332Z" fill="#07DC10" />
            <path d="M16.0387 10.3895C19.202 10.3895 21.7667 12.9478 21.7667 16.1032C21.7667 19.2585 19.202 21.8169 16.0387 21.8169C12.8753 21.8169 10.3106 19.2585 10.3106 16.1032C10.3106 12.9478 12.8753 10.3895 16.0387 10.3895ZM16.0387 6.96136C10.9851 6.96136 6.87384 11.0623 6.87384 16.1032C6.87384 21.144 10.9851 25.2449 16.0387 25.2449C21.0922 25.2449 25.2035 21.144 25.2035 16.1032C25.2035 11.0623 21.0922 6.96136 16.0387 6.96136Z" fill="#0C9B00" />
            <path d="M16.0382 10.3895C19.2015 10.3895 21.7662 12.9478 21.7662 16.1032C21.7662 19.2585 19.2015 21.8168 16.0382 21.8168C12.8749 21.8168 10.3102 19.2585 10.3102 16.1032C10.3102 12.9478 12.8749 10.3895 16.0382 10.3895Z" fill="#EAEAEA" />
          </g>
          <defs>
            <clipPath id="clip0_2058_11417">
              <rect width="32.1509" height="32" fill="white" transform="translate(0 0.105011)" />
            </clipPath>
          </defs>
        </svg>


      }
      {...restProps}
    />
  );
};

export default PolygonZK;