import cn from 'classnames';
import { FC } from 'react';

import Navbar from '@/src/components/layout/Navbar/Navbar';
import Logotype from '@/src/components/ui/Logotype/Logotype';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer';

import styles from './Header.module.scss';
import type { HeaderProps } from './Header.props';

const Header: FC<HeaderProps> = () => {
  return (
    <header className={cn(styles.appHeader)}>
      <UiContainer as={'div'} className={cn(styles.container, 'select-none')}>
        <Navbar className={cn('text-[.8em]')} />

        <Logotype className={cn('text-[.8em]')} />
      </UiContainer>
    </header>
  );
};

export default Header;
