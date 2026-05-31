import { cn } from '../../lib/utils';

interface GlassCardProps {
  className?: string;
  children: React.ReactNode;
}

export function GlassCard({ className, children }: GlassCardProps) {
  return (
    <div className={cn('backdrop-blur-md bg-white/80 border border-white/50 rounded-xl shadow-md', className)}>
      {children}
    </div>
  );
}
