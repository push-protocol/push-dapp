import { FC } from 'react';
import { IllustrationWrapper } from '../IllustrationWrapper';
import { IllustrationProps } from '../Illustrations.types';

const StakePushPurpleCoin: FC<IllustrationProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IllustrationWrapper
      componentName="StakePushPurpleCoin"
      illustration={
        <svg
          width={restProps?.width ?? '24'}
          height={restProps?.height ?? '24'}
          viewBox="0 0 48 48"
          fill="none"
          {...props}
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="24"
            cy="26.0035"
            rx="24"
            ry="22.5634"
            fill="black"
          />
          <ellipse
            cx="24"
            cy="23.2313"
            rx="24"
            ry="22.6644"
            fill="#DB88F0"
          />
          <ellipse
            cx="23.8184"
            cy="23.0629"
            rx="19.6577"
            ry="18.5638"
            fill="black"
          />
          <ellipse
            cx="23.8184"
            cy="25.5991"
            rx="19.6577"
            ry="18.8792"
            fill="#DB88F0"
          />
          <path
            d="M24.0003 36.5917C25.3975 36.5917 26.5967 35.7546 27.1296 34.5554C27.2589 34.2634 27.0431 33.9347 26.7239 33.9347H21.2773C20.9581 33.9347 20.741 34.2627 20.8716 34.5554C21.4045 35.7546 22.6037 36.5917 24.0009 36.5917"
            fill="white"
          />
          <path
            d="M31.7673 30.3544C30.944 30.3544 30.277 29.6873 30.277 28.8641V23.4504C30.277 20.5166 28.2631 18.0539 25.543 17.3666C25.4431 16.5933 24.7836 15.9945 23.9825 15.9945C23.1814 15.9945 22.5169 16.5983 22.4214 17.3761C19.9801 18.0096 18.1174 20.0759 17.7823 22.624C17.7773 22.6614 17.7722 22.698 17.7678 22.736C17.7614 22.7865 17.7564 22.8365 17.7526 22.8877C17.7488 22.9389 17.7444 22.9895 17.7412 23.0401C17.738 23.0831 17.7349 23.1242 17.733 23.1672C17.7292 23.2525 17.7267 23.3392 17.7267 23.4264V28.8635C17.7267 29.6829 17.0659 30.3474 16.2477 30.3538C15.8576 30.3569 15.5352 30.6579 15.5352 31.0493V31.0556C15.5352 31.4426 15.8494 31.7568 16.2364 31.7568H31.7641C32.1511 31.7568 32.4653 31.4426 32.4653 31.0556C32.4672 30.6693 32.153 30.355 31.766 30.355L31.7673 30.3544Z"
            fill="white"
          />
          <path
            d="M28.8388 16.322C30.7186 16.7249 32.1539 18.3426 32.3309 20.2578C32.3506 20.4701 32.5357 20.6287 32.7522 20.6076C32.8549 20.5981 32.9482 20.5484 33.0149 20.4694C33.0802 20.3898 33.1122 20.2891 33.1026 20.1863C32.9985 19.0681 32.548 18.0343 31.7987 17.1938C31.0548 16.3615 30.0877 15.7979 29.0008 15.5645C28.9736 15.5591 28.9464 15.5557 28.9198 15.5557C28.7415 15.5557 28.5795 15.6802 28.5414 15.8619C28.4965 16.0709 28.6299 16.2764 28.8388 16.3213V16.322Z"
            fill="white"
          />
          <path
            d="M29.2735 13.8296C32.1979 14.4564 34.4329 16.9752 34.7092 19.9534C34.729 20.1657 34.9141 20.323 35.1305 20.3032C35.2333 20.2937 35.3265 20.244 35.3932 20.1651C35.4585 20.0854 35.4905 19.9847 35.481 19.8819C35.3292 18.2356 34.6636 16.7104 33.5584 15.4738C32.462 14.2461 31.0362 13.4158 29.4368 13.0721C29.4096 13.0666 29.3823 13.0632 29.3558 13.0632C29.1775 13.0632 29.0155 13.1878 28.9774 13.3695C28.9311 13.5784 29.0652 13.784 29.2741 13.8289L29.2735 13.8296Z"
            fill="white"
          />
          <path
            d="M19.1595 16.3218C19.3685 16.2769 19.5019 16.07 19.457 15.8611C19.4175 15.6794 19.2569 15.5548 19.0785 15.5548C19.052 15.5548 19.0248 15.5582 18.9976 15.5637C17.9114 15.7964 16.9443 16.3599 16.1997 17.193C15.4504 18.0321 14.9985 19.0673 14.8957 20.1855C14.8862 20.2882 14.9175 20.389 14.9835 20.4686C15.0488 20.5482 15.1435 20.5979 15.2462 20.6067C15.464 20.6265 15.6478 20.4686 15.6675 20.2569C15.8444 18.3445 17.2811 16.7261 19.1595 16.3225V16.3218Z"
            fill="white"
          />
          <path
            d="M18.7254 13.8296C18.9344 13.7847 19.0678 13.5778 19.0229 13.3689C18.9834 13.1872 18.8228 13.0626 18.6445 13.0626C18.6172 13.0626 18.5907 13.066 18.5635 13.0715C16.9627 13.4152 15.5383 14.2455 14.4419 15.4732C13.3366 16.7105 12.6724 18.235 12.5193 19.8813C12.5097 19.9841 12.541 20.0848 12.607 20.1644C12.6724 20.2441 12.767 20.2938 12.8698 20.3026C13.0862 20.3223 13.2713 20.1644 13.291 19.9528C13.5667 16.9759 15.8017 14.4585 18.7254 13.8303V13.8296Z"
            fill="white"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default StakePushPurpleCoin;
