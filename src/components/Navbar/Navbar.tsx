import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import { EASING } from '../../config/animations';
import { SECTIONS } from '../../config/routes';
import { cn } from '../../lib/utils';
import { ButtonLink } from '../ui/Button';

interface NavLink { label: string; href: string; }

const navLinks: NavLink[] = [
  { label: 'Hjem',         href: `/#${SECTIONS.HOME}`     },
  { label: 'Om oss',       href: `/#${SECTIONS.ABOUT}`    },
  { label: 'Ansatte',      href: `/#${SECTIONS.TEAM}`     },
  { label: 'Øyesykdommer', href: `/#${SECTIONS.DISEASES}` },
  { label: 'Katarakt',     href: `/#${SECTIONS.CATARACT}` },
  { label: 'Priser',       href: `/#${SECTIONS.PRICING}`  },
  { label: 'Partnere',     href: `/#${SECTIONS.PARTNERS}` },
  { label: 'Kontakt',      href: `/#${SECTIONS.CONTACT}`  },
];

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active,   setActive]   = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    const onResize = () => { clearTimeout(t); t = setTimeout(() => { if (window.innerWidth >= 1024) setMenuOpen(false); }, 100); };
    window.addEventListener('resize', onResize);
    return () => { window.removeEventListener('resize', onResize); clearTimeout(t); };
  }, []);

  useEffect(() => {
    if (location.pathname !== '/') { setActive(''); return; }
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting && e.target.id) setActive(`/#${e.target.id}`); }),
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 },
    );
    document.querySelectorAll('section[id]').forEach(s => observer.observe(s));
    if (!location.hash) setActive(`/#${SECTIONS.HOME}`);
    else setActive(`/${location.hash}`);
    return () => observer.disconnect();
  }, [location.hash, location.pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const y = window.scrollY;
    Object.assign(document.body.style, { position: 'fixed', top: `-${y}px`, width: '100%', overflow: 'hidden' });
    return () => {
      Object.assign(document.body.style, { position: '', top: '', width: '', overflow: '' });
      window.scrollTo(0, y);
    };
  }, [menuOpen]);

  useEffect(() => setMenuOpen(false), [location.hash, location.pathname]);

  const scrollTo = (href: string) => {
    setActive(href);
    setMenuOpen(false);
    if (!href.startsWith('/#')) return;
    const el = document.getElementById(href.substring(2));
    if (!el) return;
    const navH = (document.querySelector('.navbar') as HTMLElement | null)?.getBoundingClientRect().height ?? 72;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - navH - 8, behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        className={cn(
          'navbar fixed top-0 inset-x-0 z-50 border-b transition-all duration-200',
          scrolled ? 'bg-white/90 backdrop-blur-lg border-primary/15 shadow-sm' : 'bg-white/70 backdrop-blur-md border-primary/10',
        )}
        style={{ paddingTop: 'env(safe-area-inset-top)' }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: EASING }}
      >
        <div className="container flex items-center justify-between h-16 lg:h-20">
          <Link
            to={`/#${SECTIONS.HOME}`}
            className="flex items-center gap-3 shrink-0"
            aria-label="Rana Øyelegesenter hjem"
            onClick={() => scrollTo(`/#${SECTIONS.HOME}`)}
          >
            <img src="/images/logo-r.svg" alt="Rana Øyelegesenter" className="h-8 lg:h-9 w-auto" />
            <div className="hidden lg:flex flex-col leading-tight">
              <span className="font-display font-bold text-sm text-ink">Rana Øyelegesenter</span>
              <span className="text-[0.68rem] font-semibold tracking-widest uppercase text-ink-muted">Spesialisert øyeklinikk</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Hovedmeny">
            {navLinks.map(link => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => scrollTo(link.href)}
                className={cn(
                  'relative px-3 py-1.5 text-[0.82rem] font-medium rounded-full transition-colors duration-150',
                  active === link.href ? 'text-primary font-semibold' : 'text-ink-muted hover:text-ink hover:bg-primary-muted',
                )}
              >
                {link.label}
                {active === link.href && <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-primary rounded-full" />}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            <ButtonLink
              to={`/#${SECTIONS.CONTACT}`}
              variant="primary"
              size="sm"
              className="hidden xl:inline-flex"
              onClick={() => scrollTo(`/#${SECTIONS.CONTACT}`)}
            >
              Book konsultasjon
            </ButtonLink>
            <motion.button
              className="lg:hidden flex flex-col gap-[5px] w-11 h-11 min-w-[44px] min-h-[44px] items-center justify-center rounded-md hover:bg-primary-muted transition-colors p-1.5"
              aria-label={menuOpen ? 'Lukk meny' : 'Åpne meny'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(v => !v)}
              whileTap={{ scale: 0.88 }}
            >
              <motion.span className="block w-5 h-0.5 bg-ink rounded-full origin-center" animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} transition={{ duration: 0.2 }} />
              <motion.span className="block w-5 h-0.5 bg-ink rounded-full" animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }} transition={{ duration: 0.2 }} />
              <motion.span className="block w-5 h-0.5 bg-ink rounded-full origin-center" animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} transition={{ duration: 0.2 }} />
            </motion.button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[60] bg-ink/50"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.18 } }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.nav
              className="fixed inset-0 z-[70] flex flex-col bg-surface overflow-y-auto"
              style={{ paddingTop: 'calc(env(safe-area-inset-top) + 1.5rem)', paddingBottom: 'max(1.5rem, env(safe-area-inset-bottom))' }}
              initial={{ x: '100%' }} animate={{ x: 0 }}
              exit={{ x: '100%', transition: { duration: 0.22, ease: [0.4, 0, 1, 1] } }}
              transition={{ type: 'spring', stiffness: 360, damping: 38 }}
              aria-label="Mobilmeny"
            >
              <div className="container flex items-center justify-between mb-6">
                <img src="/images/logo-r.svg" alt="Rana Øyelegesenter" className="h-8 w-auto" />
                <button
                  className="flex items-center justify-center w-11 h-11 rounded-full text-ink-muted hover:bg-primary-dim hover:text-ink transition-colors"
                  aria-label="Lukk meny"
                  onClick={() => setMenuOpen(false)}
                >
                  <X size={20} strokeWidth={2.5} aria-hidden />
                </button>
              </div>

              <ul className="container flex flex-col gap-1 flex-1">
                {navLinks.map((link, i) => (
                  <motion.li key={link.href} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 24 }} transition={{ delay: i * 0.04, duration: 0.28, ease: EASING }}>
                    <Link
                      to={link.href}
                      className={cn(
                        'flex items-center min-h-[44px] px-4 py-2 rounded-lg text-base font-semibold transition-colors',
                        active === link.href ? 'bg-primary-dim text-primary' : 'text-ink-muted hover:bg-primary-muted hover:text-ink',
                      )}
                      onClick={() => scrollTo(link.href)}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="container mt-6">
                <ButtonLink to={`/#${SECTIONS.CONTACT}`} variant="primary" size="lg" className="w-full justify-center" onClick={() => scrollTo(`/#${SECTIONS.CONTACT}`)}>
                  Book konsultasjon
                </ButtonLink>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
