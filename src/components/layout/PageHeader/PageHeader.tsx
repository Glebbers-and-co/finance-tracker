import cn from 'classnames';
import { FC } from 'react';

import styles from './PageHeader.module.scss';
import type { PageHeaderProps } from './PageHeader.props';

const PageHeader: FC<PageHeaderProps> = ({}) => {
  return <header className={cn(styles.pageHeader)}>Header</header>;
};

export default PageHeader;
