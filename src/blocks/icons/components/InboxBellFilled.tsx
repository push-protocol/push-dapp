import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const InboxBellFilled: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="InboxBellFilled"
      icon={
        <svg
          width="inherit"
          height="inherit"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.49 5.3465C12.9761 3.95283 14.3639 2.94698 16 2.94698C17.6415 2.94698 19.033 3.95935 19.5148 5.36002C22.869 6.68821 25.2384 9.85827 25.2384 13.532V14.3075C25.2384 18.0543 26.0583 20.1735 26.7396 21.2877C26.908 21.553 26.9979 21.8562 27 22.1656C27.002 22.475 26.9161 22.7792 26.7512 23.0464C26.5895 23.3136 26.3556 23.5353 26.0736 23.6888C25.7915 23.8424 25.4714 23.9223 25.146 23.9203H6.85401C6.52859 23.9223 6.20846 23.8424 5.92641 23.6888C5.64437 23.5353 5.41053 23.3136 5.24884 23.0464C5.08394 22.7792 4.998 22.475 5.00004 22.1656C5.00207 21.8562 5.09199 21.553 5.26039 21.2877C5.94172 20.1735 6.76163 18.0543 6.76163 14.3075V13.4337C6.76011 12.2857 6.99803 11.1486 7.46176 10.0877C7.92549 9.02684 8.60593 8.06291 9.46409 7.25114C10.3223 6.43938 11.3413 5.79573 12.4628 5.35707C12.4719 5.35353 12.4809 5.35001 12.49 5.3465Z"
            fill="currentColor"
          />
          <path
            d="M16 27.1769C18.2091 27.1769 20 25.4683 20 23.3606H12C12 25.4683 13.7909 27.1769 16 27.1769Z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default InboxBellFilled;
