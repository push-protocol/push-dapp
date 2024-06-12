import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const ExternalLink: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="ExternalLink"
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
            d="M13 7H7C6.20435 7 5.44129 7.31607 4.87868 7.87868C4.31607 8.44129 4 9.20435 4 10V25C4 25.7956 4.31607 26.5587 4.87868 27.1213C5.44129 27.6839 6.20435 28 7 28H22C22.7956 28 23.5587 27.6839 24.1213 27.1213C24.6839 26.5587 25 25.7956 25 25V19M19 4H28M28 4V13M28 4L13 19"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default ExternalLink;
