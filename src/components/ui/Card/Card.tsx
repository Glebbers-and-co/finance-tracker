import cn from 'classnames';
import { FC, useCallback } from 'react';

import { IconKit } from '@/src/components/icons/icon-kit';

import styles from './Card.module.scss';
import type { CardProps } from './Card.props';

const Card: FC<CardProps> = ({ icon = 'Card', value, title }) => {
  const Icon = IconKit[icon];

  const [roubles, copeikas] = value.toString().split(/\./gi);

  const formatCopeikas = useCallback(() => {
    if (typeof copeikas === 'undefined') {
      return '00';
    }

    if (copeikas?.length === 1) {
      return `${copeikas}0`;
    }

    if (copeikas?.length > 2) {
      return copeikas.toString().slice(0, 2);
    }

    return `${copeikas}`;
  }, [copeikas]);

  return (
    <div className={cn(styles.card)}>
      <div className={cn('flex flex-col gap-[.625em]')}>
        <strong>
          {roubles},
          <span className={cn('text-secondary-accent')}>
            {formatCopeikas()} ₽
          </span>
        </strong>

        {title && <p className={cn('font-light')}>{title}</p>}
      </div>

      <Icon width={32} height={32} />
    </div>
  );
};

export default Card;
