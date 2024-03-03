'use client';

import { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './NavbarItem.module.scss';
import { NavbarItemProps } from './NavbarItem.props';

const NavbarItem: VariableFC<typeof Link, NavbarItemProps> = ({
  className,
  children,
  href,
  ...props
}) => {
  const pathName = usePathname();

  const isActive = (): boolean => {
    /** If href points to main page, we have to check if it equals to pathname. */
    if (href === '/') {
      return href === pathName;
    }

    return pathName.startsWith(href.toString());
  };

  return (
    <Link
      className={cn(styles.navItem, isActive() && styles.active, className)}
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
};

export default NavbarItem;
