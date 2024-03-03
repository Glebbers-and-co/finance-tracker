import { PropsWith } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { FC } from 'react';

import Header from '@/src/components/layout/Header/Header';
import BackgroundImage from '@/src/components/ui/BackgroundImage/BackgroundImage';
import bgImage from '@/src/images/backgrounds/background-simple.png';

import styles from './CoreLayout.module.scss';
import type { CoreLayoutProps } from './CoreLayout.props';

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
        className={cn('absolute top-0 left-0 w-full h-full select-none')}
        src={bgImage}
        alt={'Background'}
        style={{
          objectPosition: 'center bottom',
        }}
        aria-hidden
        priority={true}
        width={2880}
        height={1620}
      />

      <Header />

      {children}

      {/*<Footer />*/}
    </div>
  );
};

export default CoreLayout;
