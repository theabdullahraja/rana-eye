import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Employees from '../../components/Employees/Employees';
import Diseases from '../../components/Diseases/Diseases';
import Cataract from '../../components/Cataract/Cataract';
import Documents from '../../components/Documents/Documents';
import Partners from '../../components/Partners/Partners';
import Contact from '../../components/Contact/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Employees />
      <Diseases />
      <Cataract />
      <Documents />
      <Partners />
      <Contact />
    </>
  );
}
