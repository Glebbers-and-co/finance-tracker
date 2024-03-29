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
    <div className={cn(styles.pageBody)}>
      <div
        className={cn(styles.scrollable, className, 'pr-[1rem] -mr-[1rem]')}
        {...props}
      >
        {children}
      </div>
    </div>
  );
};

export default PageBody;
