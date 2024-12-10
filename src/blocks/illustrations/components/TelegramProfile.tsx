import { FC } from 'react';
import { IllustrationWrapper } from '../IllustrationWrapper';
import { IllustrationProps } from '../Illustrations.types';

const TelegramProfile: FC<IllustrationProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IllustrationWrapper
      componentName="TelegramProfile"
      illustration={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={restProps?.width ?? '25'}
          height={restProps?.height ?? '21'}
          viewBox="0 0 25 21"
          fill="none"
          {...props}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.40809 9.44191C8.8863 6.61943 13.2062 4.75866 15.3676 3.8597C21.5389 1.29286 22.8213 0.846943 23.657 0.832186C23.8409 0.828974 24.2519 0.874547 24.5182 1.09061C24.9131 1.41109 24.9154 2.10675 24.8715 2.56717C24.5371 6.08106 23.09 14.6082 22.3538 18.5438C22.0423 20.2091 21.4289 20.7675 20.8352 20.8221C19.5447 20.9409 18.5648 19.9693 17.3149 19.15C15.359 17.8679 14.2541 17.0698 12.3556 15.8187C10.1616 14.3729 11.5839 13.5783 12.8342 12.2796C13.1615 11.9397 18.8473 6.76795 18.9574 6.29877C18.9712 6.24009 18.984 6.02134 18.854 5.90588C18.7241 5.79043 18.5323 5.82984 18.3939 5.86127C18.1978 5.9058 15.0733 7.97099 9.0205 12.0568C8.13361 12.6658 7.33031 12.9625 6.6106 12.9469C5.81711 12.9298 4.2909 12.4983 3.15626 12.1295C1.7646 11.6772 0.65852 11.4379 0.754875 10.6697C0.805048 10.2694 1.35609 9.86023 2.40809 9.44191Z"
            fill="#29A9EB"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default TelegramProfile;
