import { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';

import { IconKit } from '@/src/components/icons/icon-kit';
import Pressable from '@/src/components/ui/Pressable/Pressable';

import type { BurgerButtonProps } from './BurgerButton.props';

const BurgerButton: VariableFC<
  typeof Pressable,
  BurgerButtonProps,
  'children'
> = ({ className, expanded, ...props }) => {
  return (
    <Pressable className={cn(className)} {...props}>
      {!expanded ? <IconKit.BurgerHidden /> : <IconKit.BurgerShown />}
    </Pressable>
  );
};

export default BurgerButton;
