import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { fadeUp, staggerContainer, staggerItem } from '../../config/animations';
import AnimatedHeadline from '../AnimatedHeadline/AnimatedHeadline';
import { diseasesData } from '../../data/diseases';

export default function Diseases() {
  const ref    = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="sykdommer" ref={ref} className="relative py-20 lg:py-28 bg-surface-2 border-t border-border overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[360px] rounded-full bg-primary/4 blur-3xl pointer-events-none" aria-hidden />

      <div className="container relative z-10">
        <motion.div className="max-w-2xl mb-12 lg:mb-16" variants={fadeUp(0)} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <span className="section-label">Øyesykdommer</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-ink mt-3 mb-4">
            <AnimatedHeadline
              parts={[{ text: 'Tilstander vi ', block: false }, { text: 'utreder og behandler', className: 'text-primary' }]}
              visible={inView}
            />
          </h2>
          <div className="divider" />
          <p className="text-sm lg:text-base text-ink-muted leading-relaxed">
            Vi tilbyr spesialisert utredning og behandling av en rekke øyesykdommer med moderne diagnostikk og individuelt tilpasset oppfølging.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={staggerContainer(0.07, 0.2)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {diseasesData.map((item, index) => (
            <motion.article
              key={item.slug}
              className="bg-surface border border-border rounded-lg shadow-sm p-5 flex flex-col cursor-pointer"
              variants={staggerItem}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[0.72rem] font-bold tracking-widest uppercase text-ink-label">{String(index + 1).padStart(2, '0')}</span>
                <span className="w-2.5 h-2.5 rounded-full bg-primary ring-[5px] ring-primary/15" aria-hidden />
              </div>
              <h3 className="text-base font-bold text-ink mb-2 line-clamp-2 min-h-[3em]">{item.title}</h3>
              <div className="h-0.5 w-full rounded-full bg-gradient-to-r from-primary to-primary/30 mb-3" />
              <p className="text-sm text-ink-muted leading-relaxed mb-2 flex-1">{item.summary}</p>
              <p className="text-xs text-ink-label mb-4 hidden md:block">{item.detail}</p>
              <Link
                to={`/diseases/${encodeURIComponent(item.slug)}`}
                className="inline-flex items-center gap-1.5 self-start text-xs font-bold uppercase tracking-wider text-primary border border-primary/25 bg-primary-dim px-4 py-2 rounded-full hover:bg-primary-dim/80 transition-colors min-h-[44px]"
              >
                Les mer <ArrowRight size={13} strokeWidth={2.5} aria-hidden />
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
