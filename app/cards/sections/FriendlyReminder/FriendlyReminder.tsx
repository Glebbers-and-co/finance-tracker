import cn from 'classnames';
import { FC } from 'react';

import Section from '@/src/components/ui/Section/Section';

import styles from './FriendlyReminder.module.scss';
import { FriendlyReminderProps } from './FriendlyReminder.props';

const FriendlyReminder: FC<FriendlyReminderProps> = () => {
  return (
    <>
      <Section className={cn(styles.reminder)} title={'Блок(Александр)'}>
        <article className={cn(styles.message)}>
          Здесь могла быть ваша реклама :))))))
        </article>
      </Section>
    </>
  );
};

export default FriendlyReminder;
