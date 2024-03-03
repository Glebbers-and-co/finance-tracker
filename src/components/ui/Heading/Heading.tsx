import cn from 'classnames';
import { FC } from 'react';

import styles from './Heading.module.scss';
import type { HeadingProps } from './Heading.props';

const Heading: FC<HeadingProps> = ({
  as: Component = 'h2',
  className,
  children,
  ...props
}) => {
  return (
    <Component className={cn(styles.heading, className)} {...props}>
      {children}
    </Component>
  );
};

export default Heading;
