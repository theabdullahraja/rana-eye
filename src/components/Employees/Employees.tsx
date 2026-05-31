import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeUp } from '../../config/animations';
import { SECTIONS } from '../../config/routes';
import AnimatedHeadline from '../AnimatedHeadline/AnimatedHeadline';
import { ButtonLink } from '../ui/Button';

interface TeamMember { name: string; role: string; specialty: string; certification: string; bio: string; img: string; tags: string[]; }

const team: TeamMember[] = [{
  name: 'Sofyan Iqbal', role: 'Øyelege / Spesialist', specialty: 'Katarakt og øyekirurgi', certification: '15+ års erfaring',
  bio: 'Studert ved UiO og har jobbet ved Stavanger Sykehus og Oslo Universitetssykehus. Sofyan Iqbal er spesialist i øyesykdommer, og har jobbet som kirurg og overlege ved øyeavdelingen på OUS.',
  img: '/images/318832.jpg', tags: ['Øyekirurgi', 'Grå stær', 'Øyelokkskirurgi'],
}];

export default function Employees() {
  const ref    = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="ansatte" ref={ref} className="relative py-20 lg:py-28 bg-surface overflow-hidden border-t border-border">
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/6 blur-3xl pointer-events-none" aria-hidden />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-primary/4 blur-3xl pointer-events-none" aria-hidden />

      <div className="container relative z-10">
        <motion.div className="text-center max-w-2xl mx-auto mb-14" variants={fadeUp(0)} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <span className="section-label">Ophthalmologist</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-ink mt-3 mb-4">
            <AnimatedHeadline parts={[{ text: 'Dr. Sofyan ', block: false }, { text: 'Iqbal', className: 'text-primary' }]} visible={inView} />
          </h2>
          <div className="divider mx-auto" />
          <p className="text-sm lg:text-base text-ink-muted leading-relaxed">Vårt team kombinerer kirurgisk erfaring, moderne diagnostikk og trygg oppfølging gjennom hele pasientforløpet.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {team.map((member, i) => (
            <motion.article
              key={member.name}
              className="bg-surface border border-border rounded-xl shadow-sm overflow-hidden"
              variants={fadeUp(0.15 + i * 0.1)} initial="hidden" animate={inView ? 'visible' : 'hidden'}
              whileHover={{ y: -6, transition: { duration: 0.2 } }} whileTap={{ scale: 0.99 }}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-surface-2">
                <img src={member.img} alt={member.name} className="absolute inset-0 w-full h-full object-cover object-top" loading="eager" decoding="async" />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent p-4">
                  <p className="text-white font-bold text-base leading-tight">{member.name}</p>
                  <p className="text-white/80 text-xs">{member.role}</p>
                </div>
                <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-primary text-[0.68rem] font-bold px-2.5 py-1 rounded-full border border-primary/20">{member.certification}</span>
              </div>
              <div className="p-5 flex flex-col gap-4">
                <p className="text-sm text-ink-muted leading-relaxed">{member.bio}</p>
                <div className="flex items-center gap-2">
                  <span className="w-6 h-0.5 rounded-full bg-primary shrink-0" />
                  <p className="text-xs font-semibold text-primary">{member.specialty}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {member.tags.map(tag => <span key={tag} className="text-[0.68rem] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-primary-dim text-primary">{tag}</span>)}
                </div>
              </div>
            </motion.article>
          ))}

          <motion.div
            className="bg-surface-2 border border-border rounded-xl shadow-sm p-6 flex flex-col gap-4"
            variants={fadeUp(0.25)} initial="hidden" animate={inView ? 'visible' : 'hidden'}
            whileHover={{ y: -6, transition: { duration: 0.2 } }} whileTap={{ scale: 0.99 }}
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
              <img src="/images/icon.svg" alt="Rana Øyelegesenter ikon" className="w-8 h-8" />
            </div>
            <div>
              <p className="font-bold text-base text-ink">Rana Øyelegesenter</p>
              <p className="text-xs text-ink-muted">Spesialisthelsetjeneste</p>
            </div>
            <p className="text-sm text-ink-muted leading-relaxed flex-1">Vi kombinerer moderne øyehelse, presise undersøkelser og personlig oppfølging for å gi trygg behandling og tydelig kommunikasjon gjennom hele pasientforløpet.</p>
            <div className="flex flex-wrap gap-2">
              {['Helse Nord', 'Offentlig avtale', 'Mo i Rana'].map(tag => <span key={tag} className="text-[0.68rem] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-primary-dim text-primary">{tag}</span>)}
            </div>
            <ButtonLink to={`/#${SECTIONS.CONTACT}`} variant="primary" size="md" className="self-start mt-auto">Book konsultasjon</ButtonLink>
          </motion.div>
        </div>

        <motion.div className="text-center mt-12 flex flex-col sm:flex-row items-center justify-center gap-4" variants={fadeUp(0.35)} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <p className="text-sm text-ink-muted">Ønsker du time hos vårt team?</p>
          <ButtonLink to={`/#${SECTIONS.CONTACT}`} variant="secondary" size="md">Kontakt oss</ButtonLink>
        </motion.div>
      </div>
    </section>
  );
}
