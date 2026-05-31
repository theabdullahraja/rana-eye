import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { X, FileText, Download } from 'lucide-react';
import { EASING, fadeUp } from '../../config/animations';
import AnimatedHeadline from '../AnimatedHeadline/AnimatedHeadline';
import { Button } from '../ui/Button';

type DocumentKey = 'katarakt' | 'takstplakat';

const documents: Record<DocumentKey, { title: string; src: string; description: string }> = {
  katarakt:    { title: 'Katarakt / grå stær',  src: '/docs/Operasjon-for-gra_-staer-pasientinformasjon.pdf', description: 'Pasientinformasjon for operasjon og forundersøkelse.' },
  takstplakat: { title: 'Takstplakat 2026',      src: '/docs/Takstplakat-avtalespesialist_1januar_2026.pdf',  description: 'Takster og informasjon for avtalespesialist.'        },
};

const isIOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

export default function Documents() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [activeDocument, setActiveDocument] = useState<DocumentKey | null>(null);
  const activeMeta = activeDocument ? documents[activeDocument] : null;

  useEffect(() => {
    if (!activeDocument) return;
    const y = window.scrollY;
    Object.assign(document.body.style, { position: 'fixed', top: `-${y}px`, width: '100%', overflow: 'hidden' });
    return () => {
      Object.assign(document.body.style, { position: '', top: '', width: '', overflow: '' });
      window.scrollTo(0, y);
    };
  }, [activeDocument]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setActiveDocument(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <section id="priser" ref={ref} className="relative py-20 lg:py-28 bg-surface border-t border-border">
      <div className="container">
        <motion.div className="max-w-2xl mb-12" variants={fadeUp(0)} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <span className="section-label">Pasientinformasjon</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-ink mt-3 mb-4">
            <AnimatedHeadline parts={[{ text: 'Viktige dokumenter og ', block: false }, { text: 'prisoversikt', className: 'text-primary' }]} visible={inView} />
          </h2>
          <div className="divider" />
          <p className="text-sm lg:text-base text-ink-muted leading-relaxed">Åpne en av PDF-filene i en fullskjermsvisning for rask lesing og utskrift.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl">
          {(Object.keys(documents) as DocumentKey[]).map((key, index) => {
            const item = documents[key];
            return (
              <motion.article
                key={item.title}
                className="bg-surface-2 border border-border rounded-xl p-6 flex flex-col gap-4 cursor-pointer"
                variants={fadeUp(0.08 + index * 0.08)} initial="hidden" animate={inView ? 'visible' : 'hidden'}
                whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.25 } }} whileTap={{ scale: 0.99 }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText size={20} className="text-primary" aria-hidden />
                </div>
                <div>
                  <span className="text-[0.68rem] font-bold uppercase tracking-widest text-ink-label">PDF dokument</span>
                  <p className="text-base font-bold text-ink mt-1">{item.title}</p>
                  <p className="text-sm text-ink-muted mt-1">{item.description}</p>
                </div>
                <div className="flex gap-3 mt-auto">
                  <Button variant="primary" size="sm" onClick={() => setActiveDocument(key)}>Åpne PDF</Button>
                  <a href={item.src} download className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-full border border-primary/30 text-primary hover:bg-primary-dim transition-colors min-h-[36px]">
                    <Download size={13} aria-hidden /> Last ned
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {activeMeta && (
          <motion.div
            className="fixed inset-0 z-[80] bg-ink/60 flex items-center justify-center p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
            onClick={() => setActiveDocument(null)}
          >
            <motion.div
              className="w-full max-w-4xl max-h-[90dvh] flex flex-col bg-surface rounded-2xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, scale: 0.92, y: 18 }} animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 18 }} transition={{ duration: 0.32, ease: EASING }}
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b border-border shrink-0">
                <div>
                  <span className="section-label !mb-0">PDF viewer</span>
                  <h3 className="text-base font-bold text-ink mt-1">{activeMeta.title}</h3>
                </div>
                <div className="flex items-center gap-2">
                  <a href={activeMeta.src} download className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full border border-primary/30 text-primary hover:bg-primary-dim transition-colors min-h-[36px]">
                    <Download size={13} aria-hidden /> Last ned PDF
                  </a>
                  <button className="flex items-center justify-center w-9 h-9 rounded-full text-ink-muted hover:bg-surface-2 transition-colors" onClick={() => setActiveDocument(null)} aria-label="Lukk dokument">
                    <X size={18} strokeWidth={2.5} aria-hidden />
                  </button>
                </div>
              </div>
              <div className="flex-1 overflow-hidden min-h-[400px]">
                {isIOS ? (
                  <div className="flex flex-col items-center justify-center h-full gap-4 p-8 text-center">
                    <p className="text-sm text-ink-muted">iOS støtter ikke innebygd PDF-visning. Åpne dokumentet direkte:</p>
                    <a href={activeMeta.src} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary-dark transition-colors">
                      Åpne PDF i ny fane
                    </a>
                  </div>
                ) : (
                  <iframe className="w-full h-full border-0" src={activeMeta.src} title={activeMeta.title} sandbox="allow-scripts allow-same-origin" />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
