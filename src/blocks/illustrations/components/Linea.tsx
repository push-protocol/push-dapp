import { FC } from 'react';
import { IllustrationWrapper } from '../IllustrationWrapper';
import { IllustrationProps } from '../Illustrations.types';

const Linea: FC<IllustrationProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IllustrationWrapper
      componentName="Linea"
      illustration={
        <svg
          width={restProps?.width ?? '24'}
          height={restProps?.height ?? '24'}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <circle
            cx="16"
            cy="16"
            r="16"
            fill="black"
          />
          <path
            d="M21.2577 12.8345C22.8689 12.8345 24.1749 11.5284 24.1749 9.91725C24.1749 8.3061 22.8689 7 21.2577 7C19.6465 7 18.3405 8.3061 18.3405 9.91725C18.3405 11.5284 19.6465 12.8345 21.2577 12.8345Z"
            fill="white"
          />
          <path
            d="M10.3821 22.0437L21.3482 22.0451C21.3674 22.0451 21.3858 22.0527 21.3994 22.0663C21.413 22.0799 21.4206 22.0983 21.4206 22.1175L21.422 24.9276C21.422 24.9468 21.4143 24.9652 21.4008 24.9787C21.3872 24.9923 21.3688 25 21.3496 25H7.07237C7.05317 25 7.0348 24.9923 7.02123 24.9787C7.00766 24.9652 7 24.9468 7 24.9276L7.00278 9.87093C7.00278 9.85172 7.01044 9.83328 7.02401 9.81971C7.03758 9.80614 7.05595 9.79855 7.07516 9.79855L10.2346 9.79995C10.2538 9.79995 10.2722 9.80753 10.2857 9.8211C10.2993 9.83467 10.307 9.85311 10.307 9.87232L10.3097 21.9714C10.3097 21.9906 10.3174 22.009 10.331 22.0225C10.3445 22.0361 10.3629 22.0437 10.3821 22.0437Z"
            fill="white"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Linea;
