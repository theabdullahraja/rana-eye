import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { EASING } from '../../config/animations';
import { SECTIONS } from '../../config/routes';
import AnimatedHeadline from '../AnimatedHeadline/AnimatedHeadline';
import { ButtonLink } from '../ui/Button';
import { GlassCard } from '../ui/GlassCard';

const MotionLink = motion(Link);

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i, duration: 0.5, ease: EASING } }),
};

const highlights = ['Avtalespesialist i Helse Nord', 'Moderne utstyr og kirurgi', 'Henvisning fra fastlege og optiker'];

const info = [
  { id: 'phone',   label: 'Telefon',    value: '+47 75 57 77 99',         href: 'tel:+4775577799',                                                         Icon: Phone   },
  { id: 'address', label: 'Adresse',    value: 'Kirkegata 10, Mo i Rana',  href: 'https://www.google.com/maps?q=Kirkegata%2010,%208622%20Mo%20i%20Rana',    Icon: MapPin  },
  { id: 'hours',   label: 'Besøkstid',  value: '08:00 – 16:00',           href: undefined,                                                                   Icon: Clock   },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused,      setPaused]      = useState(false);
  const ref    = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || paused) return;
    const t = setInterval(() => setActiveSlide(p => (p + 1) % 2), 5500);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section id="hjem" ref={ref} className="relative min-h-dvh flex items-center overflow-hidden bg-gradient-to-br from-surface via-surface-2 to-surface-3">
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/8 blur-3xl pointer-events-none" aria-hidden />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-primary/6 blur-3xl pointer-events-none" aria-hidden />

      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center py-8 lg:py-16">
        <div className="flex flex-col gap-5 order-2 lg:order-1">
          <motion.div className="flex items-center gap-2 text-sm font-semibold text-primary" variants={reveal} initial="hidden" animate="visible" custom={0.08}>
            <span className="w-2 h-2 rounded-full bg-primary badge-pulse shrink-0" />
            Spesialisert øyeklinikk i Mo i Rana
          </motion.div>

          <motion.h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ink leading-tight" variants={reveal} initial="hidden" animate="visible" custom={0.22}>
            <AnimatedHeadline
              parts={[
                { text: 'Presis øyehelse ', block: false },
                { text: 'for et skarpere hverdagsliv', className: 'text-primary' },
              ]}
              visible={inView}
            />
          </motion.h1>

          <motion.span className="w-12 h-1 rounded-full bg-primary block" variants={reveal} initial="hidden" animate="visible" custom={0.34} />

          <motion.p className="text-base lg:text-lg text-ink-muted leading-relaxed max-w-lg" variants={reveal} initial="hidden" animate="visible" custom={0.42}>
            Rana Øyelegesenter kombinerer erfarne spesialister, moderne diagnostikk og trygg oppfølging gjennom hele pasientforløpet.
          </motion.p>

          <motion.ul className="flex flex-col gap-2" variants={reveal} initial="hidden" animate="visible" custom={0.52}>
            {highlights.map(item => (
              <li key={item} className="flex items-center gap-2 text-sm text-ink-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                {item}
              </li>
            ))}
          </motion.ul>

          <motion.div className="flex flex-wrap gap-3" variants={reveal} initial="hidden" animate="visible" custom={0.62}>
            <ButtonLink to={`/#${SECTIONS.CONTACT}`} variant="primary" size="lg">
              Book konsultasjon <ArrowRight size={16} strokeWidth={2.5} aria-hidden />
            </ButtonLink>
            <ButtonLink to={`/#${SECTIONS.ABOUT}`} variant="secondary" size="lg">Les mer om oss</ButtonLink>
          </motion.div>

          <motion.div variants={reveal} initial="hidden" animate="visible" custom={0.74}>
            <GlassCard className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-3 divide-y sm:divide-y-0 sm:divide-x divide-border/50">
              {info.map(({ id, label, value, href, Icon }) => (
                <div key={id} className="flex flex-col gap-0.5 sm:px-4 first:pl-0 last:pr-0 py-2 sm:py-0">
                  <span className="text-[0.68rem] font-bold uppercase tracking-widest text-ink-label flex items-center gap-1">
                    <Icon size={11} aria-hidden /> {label}
                  </span>
                  {href ? (
                    <a href={href} target={id === 'address' ? '_blank' : undefined} rel={id === 'address' ? 'noreferrer' : undefined} className="text-sm font-semibold text-ink hover:text-primary transition-colors">
                      {value}
                    </a>
                  ) : (
                    <span className="text-sm font-semibold text-ink">{value}</span>
                  )}
                </div>
              ))}
            </GlassCard>
          </motion.div>
        </div>

        <motion.div className="order-1 lg:order-2 relative h-64 sm:h-80 lg:h-auto" initial={{ opacity: 0, scale: 0.93, x: 32 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: EASING }}>
          <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
            <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-2xl -z-10 scale-105" aria-hidden />
            <div className="absolute inset-0" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)} aria-live="polite">
              {[
                { src: '/images/clinic-view.png',             alt: 'Klinikkmiljø med behandlingsrom',  eager: true  },
                { src: '/images/optometry-4161052-1280.jpg',  alt: 'Moderne optometri utstyr',         eager: false },
              ].map((slide, i) => (
                <div key={i} className={`absolute inset-0 transition-opacity duration-700 ${activeSlide === i ? 'opacity-100' : 'opacity-0'}`}>
                  <img src={slide.src} alt={slide.alt} className="w-full h-full object-cover" loading={slide.eager ? 'eager' : 'lazy'} decoding="async" />
                </div>
              ))}
            </div>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10" aria-hidden>
              {[0, 1].map(i => (
                <span key={i} className={`block h-1.5 rounded-full transition-all duration-300 ${activeSlide === i ? 'w-5 bg-white' : 'w-1.5 bg-white/50'}`} />
              ))}
            </div>
          </div>

          <motion.div className="hidden lg:block absolute -bottom-4 -left-4 z-10" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.88, duration: 0.5, ease: EASING }}>
            <GlassCard className="flex items-center gap-3 px-4 py-3">
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <ShieldCheck size={18} className="text-primary" aria-hidden />
              </div>
              <div>
                <p className="text-xs font-bold text-ink leading-tight">Helse Nord avtale</p>
                <p className="text-[0.68rem] text-ink-muted">Trygg vurdering, diagnostikk og kirurgi</p>
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>

      <MotionLink to={`/#${SECTIONS.ABOUT}`} className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-ink-dim" aria-label="Scroll ned" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}>
        <span className="w-5 h-8 rounded-full border-2 border-ink-dim/40 flex items-start justify-center pt-1.5">
          <motion.span className="w-1 h-1.5 rounded-full bg-ink-dim" animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }} />
        </span>
      </MotionLink>
    </section>
  );
}
