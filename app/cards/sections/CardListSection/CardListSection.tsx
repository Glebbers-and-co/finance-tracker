import { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';

import { IconKit } from '@/src/components/icons/icon-kit';
import Card from '@/src/components/ui/Card/Card';
import Pressable from '@/src/components/ui/Pressable/Pressable';
import Section from '@/src/components/ui/Section/Section';

import styles from './CardListSection.module.scss';
import type { CardListSectionProps } from './CardListSection.props';

const CardListSection: VariableFC<
  typeof Section,
  CardListSectionProps,
  'children' | 'title'
> = ({ className, ...props }) => {
  return (
    <>
      <Section
        className={cn(styles.cardListSection, className)}
        title={'Карты'}
        headerChildren={
          <>
            <Pressable>
              <IconKit.Add />
            </Pressable>
          </>
        }
        {...props}
      >
        <article className={cn(styles.cardGrid)}>
          <Card value={1488.5} title={'Зарплатная карта'} />
          <Card value={1488.5} title={'Кредитная карта'} />
          <Card value={1488.5} title={'Смешная карта'} />
          <Card value={1488.5} title={'Чёрная карта'} />
        </article>
      </Section>
    </>
  );
};

export default CardListSection;
