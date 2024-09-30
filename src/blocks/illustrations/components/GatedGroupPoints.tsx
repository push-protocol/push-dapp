import { FC } from 'react';
import { IllustrationWrapper } from '../IllustrationWrapper';
import { IllustrationProps } from '../Illustrations.types';

const GatedGroupPoints: FC<IllustrationProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IllustrationWrapper
      componentName="GatedGroupPoints"
      illustration={
        <svg
          width={restProps?.width ?? '24'}
          height={restProps?.height ?? '24'}
          viewBox="0 0 48 48"
          fill="none"
          {...props}
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="24"
            cy="24"
            r="24"
            fill="#45C97C"
          />
          <circle
            cx="24"
            cy="24"
            r="20.874"
            fill="#45C97C"
            stroke="white"
            stroke-width="2"
          />
          <path
            d="M12 20.4V33.6918C12 34.5672 13.0453 35.0201 13.6839 34.4213L18.2076 30.1803C18.3312 30.0645 18.4943 30 18.6637 30H27C31.9706 30 36 25.9706 36 21C36 16.0294 31.9706 12 27 12H20.4C15.7608 12 12 15.7608 12 20.4Z"
            fill="white"
          />
          <path
            d="M29.6926 38.0659C33.853 38.0659 37.2256 34.6933 37.2256 30.533C37.2256 26.3726 33.853 23 29.6926 23C25.5323 23 22.1597 26.3726 22.1597 30.533C22.1597 34.6933 25.5323 38.0659 29.6926 38.0659Z"
            fill="#627EEA"
          />
          <path
            d="M29.9272 24.8832V29.0593L33.4569 30.6365L29.9272 24.8832Z"
            fill="white"
            fill-opacity="0.602"
          />
          <path
            d="M29.9271 24.8832L26.397 30.6365L29.9271 29.0593V24.8832Z"
            fill="white"
          />
          <path
            d="M29.9272 33.3428V36.1803L33.4593 31.2938L29.9272 33.3428Z"
            fill="white"
            fill-opacity="0.602"
          />
          <path
            d="M29.9271 36.1803V33.3423L26.397 31.2938L29.9271 36.1803Z"
            fill="white"
          />
          <path
            d="M29.9272 32.686L33.4569 30.6365L29.9272 29.0603V32.686Z"
            fill="white"
            fill-opacity="0.2"
          />
          <path
            d="M26.397 30.6365L29.9271 32.686V29.0603L26.397 30.6365Z"
            fill="white"
            fill-opacity="0.602"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default GatedGroupPoints;
