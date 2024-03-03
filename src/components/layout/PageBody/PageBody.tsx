import { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';

import styles from './PageBody.module.scss';
import type { PageBodyProps } from './PageBody.props';

const PageBody: VariableFC<'div', PageBodyProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={cn(styles.pageBody, className)} {...props}>
      <section className={cn(styles.scrollable)}>{children}</section>
    </div>
  );
};

export default PageBody;
