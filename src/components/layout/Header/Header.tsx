import { FC } from 'react';
import cn from 'classnames';

import UiContainer from '@/src/components/ui/UiContainer/UiContainer';
import Navbar from '@/src/components/layout/Navbar/Navbar';

import styles from './Header.module.scss';
import type { HeaderProps } from './Header.props';
import Logotype from '@/src/components/ui/Logotype/Logotype';

const Header: FC<HeaderProps> = () => {
  return (
    <header className={cn(styles.appHeader)}>
      <UiContainer as={'div'} className={cn(styles.container)}>
        <Navbar className={cn('text-[.8em]')} />

        <Logotype className={cn('text-[.8em]')} />
      </UiContainer>
    </header>
  );
};

export default Header;
