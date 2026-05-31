import { cn } from '../../lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outline';
}

export function Badge({ children, className, variant = 'default' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full',
        variant === 'default' && 'bg-primary-dim text-primary',
        variant === 'outline' && 'border border-primary/30 text-primary-light',
        className,
      )}
    >
      {children}
    </span>
  );
}
