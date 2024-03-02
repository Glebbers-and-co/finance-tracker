import cn from 'classnames';
import { VariableFC } from '@xenopomp/advanced-types';
import Link from 'next/link';

import styles from './Logotype.module.scss';
import { LogotypeProps } from './Logotype.props';

const Logotype: VariableFC<typeof Link, LogotypeProps, 'children' | 'href'> = ({
  className,
  ...props
}) => {
  return (
    <Link
      href={'/'}
      className={cn(
        'select-none font-semibold flex items-center',
        styles.logo,
        className,
      )}
      {...props}
    >
      Наш Банк Онлайн
      <svg
        width='32'
        height='32'
        viewBox='0 0 32 32'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M20.6839 8.50006C23.3177 7.94506 29 8.62068 29 14.6169V26H25.1845V22.1131H14.2853V26H10.4698V19.0594C10.0161 18.6894 9.23478 21.6394 7.74563 22.3906C6.86618 22.8344 6.11023 23.1231 5.29318 22.9462C3.52323 22.5631 2.67693 21.4469 3.11308 18.7819C3.93078 19.7069 6.38258 20.7144 6.65558 18.7819V10.7307C6.92793 9.06443 8.50808 5.78882 12.6505 6.01069H17.1154C19.0225 6.00007 21.8565 8.50943 21.2026 11.8407C20.9998 12.875 20.225 14.9406 17.493 15.1719C16.403 15.265 14.6005 14.8394 13.5105 12.3963'
          stroke='#04285C'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M10.0001 14C10.7365 14 11.3334 13.4031 11.3334 12.6667C11.3334 11.9303 10.7365 11.3333 10.0001 11.3333C9.2637 11.3333 8.66675 11.9303 8.66675 12.6667C8.66675 13.4031 9.2637 14 10.0001 14Z'
          fill='#04285C'
        />
      </svg>
    </Link>
  );
};

export default Logotype;
