import { FC } from 'react';
import { IllustrationWrapper } from '../IllustrationWrapper';
import { IllustrationProps } from '../Illustrations.types';

const RewardsCircle: FC<IllustrationProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IllustrationWrapper
      componentName="RewardsCircle"
      illustration={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={restProps.width ?? '48'}
          height={restProps.height ?? '48'}
          viewBox="0 0 49 48"
          fill="none"
        >
          <circle
            cx="24.5"
            cy="24"
            r="24"
            fill="#17181B"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default RewardsCircle;
