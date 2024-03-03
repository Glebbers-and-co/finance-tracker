'use client';

import cn from 'classnames';
import { FC, useState } from 'react';

import Navbar from '@/src/components/layout/Navbar/Navbar';
import BurgerButton from '@/src/components/ui/BurgerButton/BurgerButton';
import Logotype from '@/src/components/ui/Logotype/Logotype';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer';

import styles from './Header.module.scss';
import type { HeaderProps } from './Header.props';

const Header: FC<HeaderProps> = () => {
  const [isMenuExpanded, setIsMenuExpanded] = useState<boolean>(false);

  return (
    <header className={cn(styles.appHeader)}>
      <UiContainer as={'div'} className={cn(styles.container, 'select-none')}>
        <section className={cn(styles.main)}>
          <BurgerButton
            aria-hidden
            className={cn(styles.burger)}
            expanded={isMenuExpanded}
            onClick={() => {
              setIsMenuExpanded(prev => !prev);
            }}
          />

          <Navbar
            className={cn('text-[.8em]', styles.appNav)}
            expanded={isMenuExpanded}
          />

          <Logotype className={cn('text-[.8em]', styles.logo)} />
        </section>

        <div aria-hidden className={cn(styles.separator)}></div>
      </UiContainer>
    </header>
  );
};

export default Header;
