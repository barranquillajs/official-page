import Header from '../components/header/header';
import Hero from '../components/hero/hero';
import { InfoSection } from '../modules';

export default function Home() {
  return (
    <section>
      <Header />
      <Hero />
      <InfoSection />
    </section>
  );
}
