import { cn } from '../../lib/utils';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export function Card({ className, children }: CardProps) {
  return (
    <div className={cn('bg-surface border border-border rounded-lg shadow-sm', className)}>
      {children}
    </div>
  );
}
