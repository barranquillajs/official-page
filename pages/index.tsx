import Meetups from '../components/meetups/meetups';
import Header from '../components/header/header';
import Hero from '../components/hero/hero';

export default function Home() {
  return (
    <section>
      <Header />
      <Hero />
      <Meetups />
    </section>
  );
}
