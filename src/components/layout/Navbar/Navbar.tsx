import { NavbarProps } from './Navbar.props';
import { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';

const Navbar: VariableFC<'nav', NavbarProps, 'children'> = ({
  className,
  ...props
}) => {
  return (
    <nav className={cn(className)} {...props}>
      Navbar
    </nav>
  );
};

export default Navbar;
