import { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';

import type { PressableProps } from './Pressable.props';

const Pressable: VariableFC<'button', PressableProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <button className={cn(className)} {...props}>
      {children}
    </button>
  );
};

export default Pressable;
