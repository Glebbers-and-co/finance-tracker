import cn from 'classnames';
import { Metadata } from 'next';

import CoreLayout from '@/src/components/layout/CoreLayout/CoreLayout';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer';
import { generateStaticMetadata } from '@/src/utils/seo';

import styles from './main-page.module.scss';

export const metadata: Metadata = generateStaticMetadata({
  title: 'Main',
});

export default function Home() {
  return (
    <CoreLayout>
      <main className={cn(styles.mainPage)}>
        <UiContainer>index page</UiContainer>
      </main>
    </CoreLayout>
  );
}
