import { FC } from 'react';
import { IllustrationWrapper } from '../IllustrationWrapper';
import { IllustrationProps } from '../Illustrations.types';

const Twitter: FC<IllustrationProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IllustrationWrapper
      componentName="Twitter"
      illustration={
        <svg
          width={restProps?.width ?? '24'}
          height={restProps?.height ?? '24'}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M0 24C0 10.7452 10.7452 0 24 0V0C37.2548 0 48 10.7452 48 24V24C48 37.2548 37.2548 48 24 48V48C10.7452 48 0 37.2548 0 24V24Z"
            fill="black"
          />
          <path
            d="M26.093 22.3155L34.283 13H32.3422L25.2308 21.0885L19.551 13H13L21.589 25.2313L13 35H14.9409L22.4507 26.4583L28.449 35H35L26.093 22.3155ZM23.4347 25.339L22.5644 24.1211L15.6402 14.4296H18.6213L24.2092 22.2509L25.0795 23.4689L32.3431 33.6354H29.3621L23.4347 25.339Z"
            fill="white"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Twitter;
