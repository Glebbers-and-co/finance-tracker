import cn from 'classnames';
import { FC } from 'react';

import PageBody from '@/src/components/layout/PageBody/PageBody';
import PageHeader from '@/src/components/layout/PageHeader/PageHeader';

const CardsPage: FC = () => {
  return (
    <>
      <PageHeader icon={'Card'}>Мои финансы</PageHeader>

      <PageBody>
        <p>Page content here</p>
        <p>Page content here</p>
        <p>Page content here</p>
        <p>Page content here</p>
        <p>Page content here</p>
        <p>Page content here</p>
        <p>Page content here</p>
        <p>Page content here</p>
        <p>Page content here</p>
        <p>Page content here</p>
        <p>Page content here</p>
        <p>Page content here</p>
        <p>Page content here</p>
      </PageBody>
    </>
  );
};

export default CardsPage;
