import cn from 'classnames';
import { FC } from 'react';

import { IconKit } from '@/src/components/icons/icon-kit';

import styles from './PageHeader.module.scss';
import type { PageHeaderProps } from './PageHeader.props';

const PageHeader: FC<PageHeaderProps & { children?: string }> = ({
  icon,
  children,
}) => {
  const Icon = IconKit[icon];

  return (
    <header className={cn(styles.pageHeader)}>
      <Icon width={'1.33em'} height={'1.33em'} />

      <h1>{children}</h1>
    </header>
  );
};

export default PageHeader;
