import { IconKit } from '@/src/components/icons/icon-kit';

export interface CardProps {
  icon?: keyof typeof IconKit;
  value: number;
  title?: string;
}
