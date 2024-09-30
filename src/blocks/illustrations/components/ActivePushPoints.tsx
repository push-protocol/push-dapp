import { FC } from 'react';
import { IllustrationWrapper } from '../IllustrationWrapper';
import { IllustrationProps } from '../Illustrations.types';

const ActivePushPoints: FC<IllustrationProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IllustrationWrapper
      componentName="ActivePushPoints"
      illustration={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={restProps?.width ?? '24'}
          height={restProps?.height ?? '24'}
          viewBox="0 0 48 48"
          fill="none"
          {...props}
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
          <rect
            x="20.7144"
            y="24"
            width="18.416"
            height="12.4739"
            rx="6.23697"
            fill="#E251F9"
          />
          <path
            d="M35.4032 31.4347C35.4032 32.796 34.4508 33.8158 32.8682 33.8158C31.2327 33.8158 30.1216 32.8105 30.1216 30.415C30.1216 27.7694 31.2424 26.6582 32.8971 26.6582C34.4893 26.6582 35.1098 27.6491 35.2108 28.4717V28.616H34.167C34.1044 28.0435 33.7581 27.524 32.9067 27.524C31.9783 27.524 31.2664 28.1542 31.2568 30.0494H31.3482C31.5743 29.6261 32.0841 29.1547 33.0799 29.1547C34.4315 29.1547 35.4032 30.0686 35.4032 31.4347ZM34.2872 31.4877C34.2872 30.6026 33.71 30.0205 32.8538 30.0205C31.9976 30.0205 31.4107 30.6026 31.4107 31.4877C31.4107 32.3679 31.9976 32.95 32.8538 32.95C33.71 32.95 34.2872 32.3679 34.2872 31.4877Z"
            fill="white"
          />
          <path
            d="M26.3222 32.6084V30.641H24.4414V29.8185H26.3222V27.8511H27.2361V29.8185H29.1169V30.641H27.2361V32.6084H26.3222Z"
            fill="white"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default ActivePushPoints;
