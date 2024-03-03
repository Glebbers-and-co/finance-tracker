import { FC } from 'react';

import CardListSection from '@/app/cards/sections/CardListSection/CardListSection';
import PageBody from '@/src/components/layout/PageBody/PageBody';
import PageHeader from '@/src/components/layout/PageHeader/PageHeader';

const CardsPage: FC = () => {
  return (
    <>
      <PageHeader icon={'Card'}>Мои финансы</PageHeader>

      <PageBody>
        <CardListSection />
      </PageBody>
    </>
  );
};

export default CardsPage;
