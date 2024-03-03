import { type VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import Image from 'next/image';

import { BackgroundImageProps } from './BackgroundImage.props';

/**
 * This component represents background image.
 *
 * Has to be placed inside relative block.
 *
 * @param className
 * @param objectFit
 * @param style
 * @param alt
 * @param props
 * @constructor
 */
const BackgroundImage: VariableFC<
  typeof Image,
  BackgroundImageProps,
  'children'
> = ({ className, objectFit = 'cover', style, alt, ...props }) => {
  return (
    <Image
      className={cn('z-[-2]', className)}
      alt={alt}
      style={{
        objectFit,
        ...style,
      }}
      {...props}
    />
  );
};

export default BackgroundImage;
