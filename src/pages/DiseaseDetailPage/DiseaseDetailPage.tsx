import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Phone } from 'lucide-react';
import { EASING, staggerContainer, staggerItem } from '../../config/animations';
import { SECTIONS } from '../../config/routes';
import { getDiseaseBySlug } from '../../data/diseases';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';

export default function DiseaseDetailPage() {
  const { slug }    = useParams();
  const navigate    = useNavigate();
  const decodedSlug = slug ? decodeURIComponent(slug) : undefined;
  const disease     = decodedSlug ? getDiseaseBySlug(decodedSlug) : undefined;

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'auto' }); }, [decodedSlug]);

  if (!disease) {
    return (
      <section className="py-20 lg:py-28 bg-surface-2">
        <div className="container">
          <Card className="p-8 text-center max-w-md mx-auto flex flex-col gap-4 items-center">
            <h1 className="text-xl font-bold text-ink">Siden ble ikke funnet</h1>
            <p className="text-sm text-ink-muted">Vi fant ikke sykdomssiden du prøvde å åpne.</p>
            <Button onClick={() => navigate(`/#${SECTIONS.DISEASES}`)} variant="primary" size="md">
              Tilbake til øyesykdommer
            </Button>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <>
      <title>{disease.title} – Rana Øyelegesenter</title>
      <section className="py-20 lg:py-28 bg-surface-2">
        <div className="container">
          <motion.div className="max-w-3xl mb-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: EASING }}>
            <button
              className="inline-flex items-center gap-1.5 text-sm text-ink-muted hover:text-primary transition-colors mb-6 cursor-pointer"
              onClick={() => navigate(`/#${SECTIONS.DISEASES}`)}
              aria-label="Tilbake til øyesykdommer"
            >
              <ArrowLeft size={16} aria-hidden /> Tilbake til øyesykdommer
            </button>
            <span className="section-label">Øyesykdom</span>
            <h1 className="text-3xl lg:text-4xl font-bold text-ink mt-3 mb-4">{disease.title}</h1>
            <div className="divider" />
            <p className="text-base lg:text-lg text-ink-muted leading-relaxed mt-4">{disease.summary}</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8"
            variants={staggerContainer(0.06, 0.15)}
            initial="hidden"
            animate="visible"
          >
            {[
              { title: 'Om tilstanden',        content: disease.overview,    list: undefined           },
              { title: 'Vanlige symptomer',     content: undefined,           list: disease.symptoms    },
              { title: 'Når du bør søke hjelp', content: disease.whenToSeek, list: undefined           },
              { title: 'Vurdering hos oss',     content: disease.assessment,  list: undefined           },
              { title: 'Aktuelle behandlinger', content: disease.treatment,   list: undefined           },
              { title: 'Videre oppfølging',     content: disease.followUp,    list: undefined           },
            ].map(card => (
              <motion.article key={card.title} className="bg-surface border border-border rounded-lg shadow-sm p-5" variants={staggerItem}>
                <h2 className="text-base font-bold text-ink mb-3">{card.title}</h2>
                {card.list ? (
                  <ul className="flex flex-col gap-1.5">
                    {card.list.map(s => (
                      <li key={s} className="flex items-start gap-2 text-sm text-ink-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                        {s}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-ink-muted leading-relaxed">{card.content}</p>
                )}
              </motion.article>
            ))}
          </motion.div>

          <motion.div
            className="bg-surface border border-border rounded-xl shadow-sm p-6 lg:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5, ease: EASING }}
          >
            <div>
              <h3 className="text-lg font-bold text-ink mb-1">Ønsker du en vurdering?</h3>
              <p className="text-sm text-ink-muted">Ta kontakt for konsultasjon og videre plan basert på symptomene dine.</p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Button onClick={() => navigate(`/#${SECTIONS.CONTACT}`)} variant="primary" size="md">Book konsultasjon</Button>
              <a href="tel:+4775577799" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/30 text-primary text-sm font-semibold hover:bg-primary-dim transition-colors min-h-[44px]">
                <Phone size={15} aria-hidden /> Ring klinikken
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
