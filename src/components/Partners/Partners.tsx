import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeUp } from '../../config/animations';
import AnimatedHeadline from '../AnimatedHeadline/AnimatedHeadline';

interface Partner { name: string; logo: string; blurb: string; }

const partners: Partner[] = [
  { name: 'Optos',              logo: '/images/optos-logo-no-tag-300x62.png',   blurb: 'Netthinneavbildning og diagnostikk' },
  { name: 'Helse Nord',         logo: '/images/hs-logo-550x132-1-300x72.png',   blurb: 'Offentlig driftsavtale'             },
  { name: 'Rana Øyelegesenter', logo: '/images/logo-r.svg',                     blurb: 'Klinikk og visuell identitet'       },
  { name: 'Visuell profil',     logo: '/images/images-300x52.png',              blurb: 'Grafisk støtte og materiell'        },
];

export default function Partners() {
  const ref    = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="partnere" ref={ref} className="relative py-20 lg:py-28 bg-surface-2 border-t border-border">
      <div className="container">
        <motion.div className="text-center max-w-2xl mx-auto mb-12" variants={fadeUp(0)} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <span className="section-label">Partnere</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-ink mt-3 mb-4">
            <AnimatedHeadline parts={[{ text: 'Et nettverk av ', block: false }, { text: 'tillit og kvalitet', className: 'text-primary' }]} visible={inView} />
          </h2>
          <div className="divider mx-auto" />
          <p className="text-sm lg:text-base text-ink-muted leading-relaxed">Et lite utvalg av merkevarer og samarbeid som støtter klinikkens drift og uttrykk.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {partners.map((partner, index) => (
            <motion.article
              key={partner.name}
              className="bg-surface border border-border rounded-xl p-6 flex flex-col items-center gap-4 text-center"
              variants={fadeUp(0.08 + index * 0.06)} initial="hidden" animate={inView ? 'visible' : 'hidden'}
              whileHover={{ y: -5, scale: 1.01, transition: { duration: 0.25 } }} whileTap={{ scale: 0.99 }}
            >
              <div className="h-12 flex items-center justify-center w-full">
                <img src={partner.logo} alt={partner.name} className="max-h-12 max-w-full w-auto object-contain" loading="lazy" decoding="async" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-ink">{partner.name}</h3>
                <p className="text-xs text-ink-muted mt-0.5">{partner.blurb}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
