import { FC } from 'react';

import PageBody from '@/src/components/layout/PageBody/PageBody';
import PageHeader from '@/src/components/layout/PageHeader/PageHeader';
import Heading from '@/src/components/ui/Heading/Heading';

const CardsPage: FC = () => {
  return (
    <>
      <PageHeader icon={'Card'}>Мои финансы</PageHeader>

      <PageBody>
        <Heading as={'h2'}>Heading 2</Heading>
      </PageBody>
    </>
  );
};

export default CardsPage;
