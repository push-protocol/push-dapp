import { FC } from 'react';
import { IllustrationWrapper } from '../IllustrationWrapper';
import { IllustrationProps } from '../Illustrations.types';

const EmailProfile: FC<IllustrationProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IllustrationWrapper
      componentName="EmailProfile"
      illustration={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={restProps?.width ?? '23'}
          height={restProps?.height ?? '17'}
          viewBox="0 0 23 17"
          fill="none"
          {...props}
        >
          <path
            d="M19.8248 0.854492H3.81389C2.16087 0.856473 0.821316 2.19602 0.819336 3.84905V13.8149C0.821316 15.468 2.16087 16.8075 3.81389 16.8095H19.8248C21.4778 16.8075 22.8174 15.468 22.8193 13.8149V3.84905C22.8174 2.19602 21.4778 0.856473 19.8248 0.854492ZM20.3039 5.35431L12.1348 10.453C11.9423 10.5755 11.6964 10.5755 11.5039 10.453L3.33476 5.35431C3.05361 5.179 2.9678 4.80897 3.14311 4.52781C3.31842 4.24666 3.68845 4.16085 3.96961 4.33616L11.8193 9.23925L19.6691 4.33616C19.9502 4.16085 20.3203 4.24666 20.4956 4.52781C20.6709 4.80897 20.5851 5.179 20.3039 5.35431Z"
            fill="#EF9CFF"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default EmailProfile;
