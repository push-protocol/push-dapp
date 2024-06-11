import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const SealCheckFilled: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="SealCheckFilled"
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
            d="M26.4893 13.3C26.0821 12.8821 25.6643 12.4429 25.5036 12.0679C25.3429 11.6929 25.3536 11.1357 25.3429 10.5679C25.3321 9.52857 25.3107 8.33929 24.4857 7.51429C23.6607 6.68929 22.4714 6.66786 21.4321 6.65714C20.8643 6.64643 20.2857 6.63571 19.9321 6.49643C19.5786 6.35714 19.1179 5.91786 18.7 5.51071C17.9607 4.80357 17.1143 4 16 4C14.8857 4 14.0393 4.80357 13.3 5.51071C12.8821 5.91786 12.4429 6.33571 12.0679 6.49643C11.6929 6.65714 11.1357 6.64643 10.5679 6.65714C9.52857 6.66786 8.33929 6.68929 7.51429 7.51429C6.68929 8.33929 6.66786 9.52857 6.65714 10.5679C6.64643 11.1357 6.63571 11.7143 6.49643 12.0679C6.35714 12.4214 5.91786 12.8821 5.51071 13.3C4.80357 14.0393 4 14.8857 4 16C4 17.1143 4.80357 17.9607 5.51071 18.7C5.91786 19.1179 6.33571 19.5571 6.49643 19.9321C6.65714 20.3071 6.64643 20.8643 6.65714 21.4321C6.66786 22.4714 6.68929 23.6607 7.51429 24.4857C8.33929 25.3107 9.52857 25.3321 10.5679 25.3429C11.1357 25.3536 11.7143 25.3643 12.0679 25.5036C12.4214 25.6429 12.8821 26.0821 13.3 26.4893C14.0393 27.1964 14.8857 28 16 28C17.1143 28 17.9607 27.1964 18.7 26.4893C19.1179 26.0821 19.5571 25.6643 19.9321 25.5036C20.3071 25.3429 20.8643 25.3536 21.4321 25.3429C22.4714 25.3321 23.6607 25.3107 24.4857 24.4857C25.3107 23.6607 25.3321 22.4714 25.3429 21.4321C25.3536 20.8643 25.3643 20.2857 25.5036 19.9321C25.6429 19.5786 26.0821 19.1179 26.4893 18.7C27.1964 17.9607 28 17.1143 28 16C28 14.8857 27.1964 14.0393 26.4893 13.3ZM21.3036 14.05L15.025 20.05C14.8627 20.2027 14.6478 20.2871 14.425 20.2857C14.2054 20.2865 13.9941 20.202 13.8357 20.05L10.6964 17.05C10.6094 16.974 10.5385 16.8812 10.4882 16.7772C10.4379 16.6732 10.4092 16.5601 10.4037 16.4446C10.3983 16.3292 10.4162 16.2139 10.4565 16.1056C10.4967 15.9972 10.5585 15.8982 10.638 15.8143C10.7175 15.7305 10.8131 15.6636 10.9191 15.6176C11.0252 15.5717 11.1394 15.5477 11.255 15.547C11.3705 15.5463 11.485 15.569 11.5916 15.6137C11.6981 15.6584 11.7945 15.7242 11.875 15.8071L14.425 18.2393L20.125 12.8071C20.2917 12.6617 20.5081 12.5864 20.729 12.5968C20.9499 12.6073 21.1583 12.7027 21.3105 12.8632C21.4627 13.0237 21.5469 13.2368 21.5456 13.458C21.5443 13.6792 21.4576 13.8913 21.3036 14.05Z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default SealCheckFilled;