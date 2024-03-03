import { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';

import { IconKit } from '@/src/components/icons/icon-kit';
import Card from '@/src/components/ui/Card/Card';
import Heading from '@/src/components/ui/Heading/Heading';
import Pressable from '@/src/components/ui/Pressable/Pressable';

import styles from './CardListSection.module.scss';
import type { CardListSectionProps } from './CardListSection.props';

const CardListSection: VariableFC<
  'section',
  CardListSectionProps,
  'children'
> = ({ className, ...props }) => {
  return (
    <section className={cn(styles.cardListSection, className)} {...props}>
      <header className={cn(styles.sectionHeader)}>
        <Heading as={'h2'}>Карты</Heading>

        <Pressable>
          <IconKit.Add />
        </Pressable>
      </header>

      <article className={cn(styles.cardGrid)}>
        <Card value={1488.5} title={'Зарплатная карта'} />
        <Card value={1488.5} title={'Кредитная карта'} />
        <Card value={1488.5} title={'Смешная карта'} />
        <Card value={1488.5} title={'Чёрная карта'} />
      </article>
    </section>
  );
};

export default CardListSection;
