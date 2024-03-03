import { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { FC } from 'react';

import { IconKit } from '@/src/components/icons/icon-kit';
import Heading from '@/src/components/ui/Heading/Heading';
import Pressable from '@/src/components/ui/Pressable/Pressable';

import styles from './Section.module.scss';
import { SectionProps } from './Section.props';

const Section: VariableFC<'section', SectionProps> = ({
  className,
  children,
  headerChildren,
  title,
  ...props
}) => {
  return (
    <section className={cn(styles.uiSection, className)} {...props}>
      <header className={cn(styles.sectionHeader)}>
        <Heading as={'h2'}>{title}</Heading>

        {headerChildren}
      </header>

      {children}
    </section>
  );
};

export default Section;
