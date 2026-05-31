import './AnimatedHeadline.css';

interface HeadlinePart {
  text: string;
  className?: string;
  block?: boolean;
}

interface AnimatedHeadlineProps {
  parts: HeadlinePart[];
  className?: string;
  stagger?: number;
  delay?: number;
  duration?: number;
  visible?: boolean;
}

export default function AnimatedHeadline({
  parts,
  className,
  stagger = 0.12,
  delay = 0.22,
  duration = 0.65,
  visible = true,
}: AnimatedHeadlineProps) {
  return (
    <span className={`animated-headline${className ? ` ${className}` : ''}`} data-visible={visible ? 'true' : 'false'}>
      {parts.map((part, partIndex) => (
        <span
          key={`${part.text}-${partIndex}`}
          className="animated-headline__part"
          style={{
            transitionDelay: `${delay + partIndex * stagger}s`,
            transitionDuration: `${duration}s`,
            display: part.block ? 'block' : 'inline-block',
          }}
        >
          <span className={part.className}>{part.text}</span>
        </span>
      ))}
    </span>
  );
}