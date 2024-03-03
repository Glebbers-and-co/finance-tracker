import cn from 'classnames';
import { FC } from 'react';

import Heading from '@/src/components/ui/Heading/Heading';

import styles from './FriendlyReminder.module.scss';
import { FriendlyReminderProps } from './FriendlyReminder.props';

const FriendlyReminder: FC<FriendlyReminderProps> = () => {
  return (
    <section className={cn(styles.reminder)}>
      <Heading as={'h2'}>Блок(Александр)</Heading>

      <article className={cn(styles.message)}>
        Здесь могла быть ваша реклама :))))))
      </article>
    </section>
  );
};

export default FriendlyReminder;
