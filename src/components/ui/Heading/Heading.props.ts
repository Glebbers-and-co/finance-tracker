import { ClassAttributes, ElementType, HTMLAttributes } from 'react';

interface HtmlHeadingProps
  extends ClassAttributes<HTMLHeadingElement>,
    HTMLAttributes<HTMLHeadingElement> {}

export interface HeadingProps extends HtmlHeadingProps {
  as: Extract<ElementType, `h${number}`>;
}
