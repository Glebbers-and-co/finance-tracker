import { PropsWith } from '@xenopomp/advanced-types';
import { FC } from 'react';
import cn from 'classnames';

import Footer from '@/src/components/layout/Footer/Footer';
import Header from '@/src/components/layout/Header/Header';
import bgImage from '@/public/backgrounds/1614320957_69-p-foto-raduzhnogo-fona-89.jpg';

import styles from './CoreLayout.module.scss';
import type { CoreLayoutProps } from './CoreLayout.props';
import BackgroundImage from '@/src/components/ui/BackgroundImage/BackgroundImage';

/**
 * Wrapper for core layout. Provides access to fully manageable
 * page layout.
 *
 * @param children
 * @constructor
 *
 * @example
 * // Header and footer will be added
 * // automatically
 * <CoreLayout>
 *   <main>
 *     Index page
 *   </main>
 * </CoreLayout>
 */
const CoreLayout: FC<PropsWith<'children', CoreLayoutProps>> = ({
  children,
}) => {
  return (
    <div className={cn(styles.layoutWrapper)}>
      <BackgroundImage
        className={cn('absolute top-0 left-0 w-full h-full')}
        src={bgImage}
        alt={'Background'}
        style={{
          objectPosition: 'center bottom',
        }}
        aria-hidden
      />

      <Header />

      {children}

      <Footer />
    </div>
  );
};

export default CoreLayout;
