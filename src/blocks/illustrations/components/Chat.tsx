import { FC } from 'react';
import { IllustrationWrapper } from '../IllustrationWrapper';
import { IllustrationProps } from '../Illustrations.types';

const ChatIllustration: FC<IllustrationProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IllustrationWrapper
      componentName="Chat"
      illustration={
        <svg
          width={restProps.width ?? '56'}
          height={restProps.height ?? '44'}
          viewBox="0 0 57 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M10.31 43.7705C10.31 40.5669 7.72509 37.964 4.5437 37.964C7.72509 37.964 10.31 35.3611 10.31 32.1575C10.31 35.3611 12.8948 37.964 16.0762 37.964C12.8948 37.964 10.31 40.5669 10.31 43.7705Z"
            stroke="#17181B"
            stroke-width="1.26925"
            stroke-miterlimit="10"
          />
          <path
            d="M52.4129 19.3371C52.4129 16.7886 50.3565 14.7179 47.8257 14.7179C50.3565 14.7179 52.4129 12.6472 52.4129 10.0987C52.4129 12.6472 54.4692 14.7179 57 14.7179C54.4692 14.7179 52.4129 16.7886 52.4129 19.3371Z"
            stroke="#17181B"
            stroke-width="1.26925"
            stroke-miterlimit="10"
          />
          <path
            d="M31.0367 42.292C26.8735 42.292 23.4931 38.9048 23.4931 34.7484V27.6569C23.4931 26.9214 24.0936 26.3209 24.8291 26.3209H47.2035C51.6028 26.3209 55.1857 29.9038 55.1857 34.3031C55.1857 38.7024 51.6028 42.2853 47.2035 42.2853H31.0367V42.292Z"
            stroke="#17181B"
            stroke-width="1.26925"
            stroke-miterlimit="10"
          />
          <path
            d="M33.1575 21.0634C38.6249 21.0634 43.0643 16.7363 43.0643 11.4265V2.36712C43.0643 1.42756 42.2757 0.6604 41.3098 0.6604H11.926C6.14845 0.6604 1.44315 5.23751 1.44315 10.8576C1.44315 16.4777 6.14845 21.0548 11.926 21.0548H33.1575V21.0634Z"
            stroke="#17181B"
            stroke-width="1.26925"
            stroke-miterlimit="10"
          />
          <path
            d="M32.6548 36.4623C31.4605 36.4623 30.4956 35.4974 30.4956 34.3099C30.4956 33.1223 31.4672 32.1575 32.6548 32.1575C33.8423 32.1575 34.814 33.1223 34.814 34.3099C34.814 35.4974 33.8423 36.4623 32.6548 36.4623Z"
            fill="#F3AEFF"
            stroke="#17181B"
          />
          <path
            d="M39.1606 36.4623C37.9663 36.4623 37.0015 35.4974 37.0015 34.3099C37.0015 33.1223 37.9731 32.1575 39.1606 32.1575C40.3482 32.1575 41.3198 33.1223 41.3198 34.3099C41.3198 35.4974 40.3482 36.4623 39.1606 36.4623Z"
            fill="#F3AEFF"
            stroke="#17181B"
          />
          <path
            d="M45.6665 36.4623C44.4722 36.4623 43.5073 35.4974 43.5073 34.3099C43.5073 33.1223 44.479 32.1575 45.6665 32.1575C46.854 32.1575 47.8257 33.1223 47.8257 34.3099C47.8257 35.4974 46.854 36.4623 45.6665 36.4623Z"
            fill="#F3AEFF"
            stroke="#17181B"
          />
          <path
            d="M10.3101 8.27527H34.1975"
            stroke="#17181B"
            stroke-width="1.27"
            stroke-linecap="round"
          />
          <path
            d="M10.3101 13.8986H27.8573"
            stroke="#17181B"
            stroke-width="1.27"
            stroke-linecap="round"
          />
          <circle
            cx="12.5268"
            cy="20.2164"
            r="7.3481"
            fill="#F3AEFF"
            stroke="#17181B"
            stroke-width="1.27"
          />
          <path
            d="M9.97559 22.1823C10.3958 23.1763 11.3798 23.8737 12.5268 23.8737C13.6738 23.8737 14.6578 23.1763 15.078 22.1823"
            stroke="#17181B"
            stroke-width="1.27"
            stroke-linecap="round"
          />
          <circle
            cx="10.1241"
            cy="18.2874"
            r="1.07354"
            fill="#17181B"
          />
          <circle
            cx="14.9295"
            cy="18.2874"
            r="1.07354"
            fill="#17181B"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default ChatIllustration;
