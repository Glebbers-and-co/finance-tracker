import { Metadata } from 'next';

import PageBody from '@/src/components/layout/PageBody/PageBody';
import PageHeader from '@/src/components/layout/PageHeader/PageHeader';
import { generateStaticMetadata } from '@/src/utils/seo';

export async function generateMetadata(): Promise<Metadata> {
  return generateStaticMetadata({
    title: 'История',
  });
}

const HistoryPage = () => {
  return (
    <>
      <PageHeader icon={'Money'}>Траты</PageHeader>

      <PageBody>History</PageBody>
    </>
  );
};

export default HistoryPage;
