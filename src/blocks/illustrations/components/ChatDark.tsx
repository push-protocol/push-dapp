import { FC } from 'react';
import { IllustrationWrapper } from '../IllustrationWrapper';
import { IllustrationProps } from '../Illustrations.types';

const ChatDark: FC<IllustrationProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IllustrationWrapper
      componentName="ChatDark"
      illustration={
        <svg
          width={restProps.width ?? '57'}
          height={restProps.height ?? '45'}
          viewBox="0 0 57 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M10.31 44.5411C10.31 41.3375 7.72509 38.7346 4.5437 38.7346C7.72509 38.7346 10.31 36.1316 10.31 32.928C10.31 36.1316 12.8948 38.7346 16.0762 38.7346C12.8948 38.7346 10.31 41.3375 10.31 44.5411Z"
            stroke="#F5F6F8"
            stroke-width="1.26925"
            stroke-miterlimit="10"
          />
          <path
            d="M52.4129 20.1077C52.4129 17.5591 50.3565 15.4885 47.8257 15.4885C50.3565 15.4885 52.4129 13.4178 52.4129 10.8693C52.4129 13.4178 54.4692 15.4885 57 15.4885C54.4692 15.4885 52.4129 17.5591 52.4129 20.1077Z"
            stroke="#F5F6F8"
            stroke-width="1.26925"
            stroke-miterlimit="10"
          />
          <path
            d="M31.0368 43.0626C26.8736 43.0626 23.4932 39.6754 23.4932 35.519V28.4275C23.4932 27.692 24.0937 27.0915 24.8291 27.0915H47.2036C51.6029 27.0915 55.1857 30.6744 55.1857 35.0737C55.1857 39.473 51.6029 43.0559 47.2036 43.0559H31.0368V43.0626Z"
            stroke="#F5F6F8"
            stroke-width="1.26925"
            stroke-miterlimit="10"
          />
          <path
            d="M33.1575 21.834C38.6249 21.834 43.0643 17.5069 43.0643 12.1971V3.13769C43.0643 2.19813 42.2757 1.43097 41.3098 1.43097H11.926C6.14845 1.43097 1.44315 6.00808 1.44315 11.6282C1.44315 17.2483 6.14845 21.8254 11.926 21.8254H33.1575V21.834Z"
            stroke="#F5F6F8"
            stroke-width="1.26925"
            stroke-miterlimit="10"
          />
          <path
            d="M32.6548 37.2329C31.4605 37.2329 30.4956 36.268 30.4956 35.0805C30.4956 33.8929 31.4672 32.928 32.6548 32.928C33.8423 32.928 34.814 33.8929 34.814 35.0805C34.814 36.268 33.8423 37.2329 32.6548 37.2329Z"
            fill="#CF59E2"
            stroke="#F5F6F8"
          />
          <path
            d="M39.1606 37.2329C37.9663 37.2329 37.0015 36.268 37.0015 35.0805C37.0015 33.8929 37.9731 32.928 39.1606 32.928C40.3482 32.928 41.3198 33.8929 41.3198 35.0805C41.3198 36.268 40.3482 37.2329 39.1606 37.2329Z"
            fill="#CF59E2"
            stroke="#F5F6F8"
          />
          <path
            d="M45.6665 37.2329C44.4722 37.2329 43.5073 36.268 43.5073 35.0805C43.5073 33.8929 44.479 32.928 45.6665 32.928C46.854 32.928 47.8257 33.8929 47.8257 35.0805C47.8257 36.268 46.854 37.2329 45.6665 37.2329Z"
            fill="#CF59E2"
            stroke="#F5F6F8"
          />
          <path
            d="M10.3101 9.04584H34.1975"
            stroke="#F5F6F8"
            stroke-width="1.27"
            stroke-linecap="round"
          />
          <path
            d="M10.3101 14.6691H27.8573"
            stroke="#F5F6F8"
            stroke-width="1.27"
            stroke-linecap="round"
          />
          <circle
            cx="12.5268"
            cy="20.9869"
            r="7.3481"
            fill="#CF59E2"
            stroke="#F5F6F8"
            stroke-width="1.27"
          />
          <path
            d="M9.97559 22.9529C10.3958 23.9468 11.3798 24.6443 12.5268 24.6443C13.6738 24.6443 14.6578 23.9468 15.078 22.9529"
            stroke="#F5F6F8"
            stroke-width="1.27"
            stroke-linecap="round"
          />
          <circle
            cx="10.1241"
            cy="19.058"
            r="1.07354"
            fill="#F5F6F8"
          />
          <circle
            cx="14.9295"
            cy="19.058"
            r="1.07354"
            fill="#F5F6F8"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default ChatDark;
