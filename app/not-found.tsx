import { Metadata } from 'next';
import { FC } from 'react';

import PageBody from '@/src/components/layout/PageBody/PageBody';
import PageHeader from '@/src/components/layout/PageHeader/PageHeader';
import { generateStaticMetadata } from '@/src/utils/seo';

export async function generateMetadata(): Promise<Metadata> {
  return generateStaticMetadata({
    title: '404',
  });
}

const NotFoundPage: FC = () => {
  return (
    <>
      <PageHeader icon={'Error'}>Страница не найдена</PageHeader>

      <PageBody>Ошибка 404s</PageBody>
    </>
  );
};

export default NotFoundPage;
