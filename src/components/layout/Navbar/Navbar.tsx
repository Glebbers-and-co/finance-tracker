import { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';

import { IconKit } from '@/src/components/icons/icon-kit';
import NavbarItem from '@/src/components/ui/NavbarItem/NavbarItem';

import styles from './Navbar.module.scss';
import { NavbarProps } from './Navbar.props';

const Navbar: VariableFC<'nav', NavbarProps, 'children'> = ({
  className,
  expanded,
  ...props
}) => {
  return (
    <nav
      className={cn(styles.appNav, expanded && styles.expanded, className)}
      {...props}
    >
      <ul className={cn('flex')}>
        <li>
          <NavbarItem href={'/cards'}>
            <IconKit.Card /> Карты
          </NavbarItem>
        </li>

        <li>
          <NavbarItem href={'/history'}>
            <IconKit.Money /> Траты
          </NavbarItem>
        </li>

        <li>
          <NavbarItem href={'/window'}>
            <IconKit.Elephant /> Окно
          </NavbarItem>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
