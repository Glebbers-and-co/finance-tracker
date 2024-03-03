import { PropsWith } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { CSSProperties, FC } from 'react';

import UiContainer from '@/src/components/ui/UiContainer/UiContainer';

import styles from './UiGrid.module.scss';
import type { UiGridProps } from './UiGrid.props';

interface UiGridNestedProps
  extends PropsWith<'children' | 'className' | 'id' | 'style', UiGridProps> {}

const getInlineStyles = ({
  columns,
  rows,
  gap,
}: Pick<UiGridNestedProps, 'columns' | 'rows' | 'gap'>): CSSProperties => {
  return {
    gridTemplateColumns: `repeat(var(--cols-count), 1fr)`,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gap,
    display: 'grid',
  };
};

const UiGrid: FC<UiGridNestedProps> = ({
  children,
  className,
  id,
  style,
  columns = 12,
  rows = 1,
  gap = '1rem',
  margin,
  ...props
}) => {
  return (
    <UiContainer
      className={cn(styles.grid, className)}
      id={id}
      style={
        {
          ...getInlineStyles({ columns, rows, gap }),

          // Provide column count via variables
          '--cols-count': columns,

          ...style,
        } as CSSProperties
      }
      margin={margin}
      {...props}
    >
      {children}
    </UiContainer>
  );
};

export default UiGrid;
