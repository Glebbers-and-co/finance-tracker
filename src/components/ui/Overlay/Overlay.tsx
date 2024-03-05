'use client';

import { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { motion } from 'framer-motion';
import { ComponentProps } from 'react';

import { OverlayProps } from './Overlay.props';

const Overlay: VariableFC<typeof motion.div, OverlayProps> = ({
  className,
  children,
  'aria-hidden': ariaHidden = true,
  style,
  shown,
  ...props
}) => {
  const animation: ComponentProps<typeof motion.div>['initial'] = {
    opacity: shown ? 1 : 0,
    pointerEvents: shown ? 'all' : 'none',
  };

  return (
    <motion.div
      className={cn('fixed z-[99999] top-0 left-0 bg-black/60', className)}
      aria-hidden={ariaHidden}
      initial={animation}
      animate={animation}
      transition={{
        duration: 0.15,
      }}
      style={{
        width: '100vw',
        height: '100dvh',
        ...style,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Overlay;
