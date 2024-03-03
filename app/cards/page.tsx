import cn from 'classnames';
import { Metadata } from 'next';
import { FC } from 'react';

import CardListSection from '@/app/cards/sections/CardListSection/CardListSection';
import FriendlyReminder from '@/app/cards/sections/FriendlyReminder/FriendlyReminder';
import PageBody from '@/src/components/layout/PageBody/PageBody';
import PageHeader from '@/src/components/layout/PageHeader/PageHeader';
import { generateStaticMetadata } from '@/src/utils/seo';

import styles from './cards-page.module.scss';

export async function generateMetadata(): Promise<Metadata> {
  return generateStaticMetadata({
    title: 'Карты',
  });
}

const CardsPage: FC = () => {
  return (
    <>
      <PageHeader icon={'Card'}>Мои финансы</PageHeader>

      <PageBody className={cn(styles.body)}>
        <CardListSection />
        <FriendlyReminder />
      </PageBody>
    </>
  );
};

export default CardsPage;
