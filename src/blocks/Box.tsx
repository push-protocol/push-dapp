import { forwardRef, ElementRef, ReactNode } from 'react';

type BoxElement = ElementRef<'div'>;

type BoxProps = {
  children: ReactNode;
};

const Box = forwardRef<BoxElement, BoxProps>((props, ref) => {
  return <div ref={ref}>{props.children}</div>;
});

export { Box };
