import { Metadata } from 'next';

import PageBody from '@/src/components/layout/PageBody/PageBody';
import PageHeader from '@/src/components/layout/PageHeader/PageHeader';
import { generateStaticMetadata } from '@/src/utils/seo';

export const metadata: Metadata = generateStaticMetadata({
  title: 'Мои финансы',
});

export default function Home() {
  return (
    <>
      <PageHeader icon={'Card'}>Мои финансы</PageHeader>

      <PageBody>
        <p>Sus</p>
        <p>Sus</p>
        <p>Sus</p>
        <p>Sus</p>
        <p>Sus</p>
        <p>Sus</p>
        <p>Sus</p>
        <p>Sus</p>
        <p>Sus</p>
        <p>Sus</p>
        <p>Sus</p>
        <p>Sus</p>
        <p>Sus</p>
        <p>Sus</p>
        <p>Sus</p>
        <p>Sus</p>
        <p>Sus</p>
        <p>Sus</p>
        <p>Sus</p>
        <p>Sus</p>
        <p>Sus</p>
        <p>Sus</p>
        <p>Sus</p>
        <p>Sus</p>
      </PageBody>
    </>
  );
}
