import cn from 'classnames';
import { VariableFC } from '@xenopomp/advanced-types';
import Link from 'next/link';

import styles from './NavbarItem.module.scss';
import { NavbarItemProps } from './NavbarItem.props';

const NavbarItem: VariableFC<typeof Link, NavbarItemProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <Link className={cn(styles.navItem, '', className)} {...props}>
      {children}
    </Link>
  );
};

export default NavbarItem;
