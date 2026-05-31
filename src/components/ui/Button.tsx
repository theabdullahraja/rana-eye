import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize    = 'sm' | 'md' | 'lg';

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-white hover:bg-primary-dark shadow-xs ' +
    'focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
  secondary:
    'bg-transparent text-primary border border-primary/30 ' +
    'hover:bg-primary-dim hover:border-primary/50',
  ghost:
    'bg-transparent text-ink-muted hover:text-ink hover:bg-primary-muted',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-1.5 text-xs min-h-[36px]',
  md: 'px-6 py-2.5 text-sm min-h-[44px]',
  lg: 'px-8 py-3 text-base min-h-[52px]',
};

const base =
  'inline-flex items-center justify-center gap-2 font-semibold rounded-full ' +
  'transition-colors duration-150 cursor-pointer select-none outline-none ' +
  'disabled:opacity-50 disabled:cursor-not-allowed';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function Button({ variant: v = 'primary', size: s = 'md', className, disabled, children, ...props }: ButtonProps) {
  return (
    <motion.button
      className={cn(base, variantClasses[v], sizeClasses[s], className)}
      whileTap={disabled ? undefined : { scale: 0.96 }}
      disabled={disabled}
      {...(props as React.ComponentPropsWithoutRef<typeof motion.button>)}
    >
      {children}
    </motion.button>
  );
}

interface ButtonLinkProps {
  to: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const MotionLink = motion(Link);

export function ButtonLink({ to, variant: v = 'primary', size: s = 'md', className, children, onClick }: ButtonLinkProps) {
  return (
    <MotionLink
      to={to}
      className={cn(base, variantClasses[v], sizeClasses[s], className)}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
    >
      {children}
    </MotionLink>
  );
}
