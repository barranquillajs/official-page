import { AnalyticsSection, PlanSection, PrincipalSection, SponsorSection } from '@/app/sponsors/_components';
import { Footer, GradientBackground, Header } from '@/components';
import { getAllSponsors } from '@/controllers';
import { returnMetadata } from '@/utils';

export const metadata = returnMetadata({ title: 'Haz parte de nuestros sponsors - Barranquilla JS' });

const Sponsors = async () => {
  const sponsorsData = getAllSponsors();
  const [sponsors] = await Promise.all([sponsorsData]);

  return (
    <section>
      <GradientBackground />
      <Header />
      <div className="container px-2 mx-auto xl:px-48">
        <PrincipalSection />
        <PlanSection />
        <AnalyticsSection />
        <SponsorSection sponsors={sponsors} />
      </div>

      <Footer />
    </section>
  );
};

export default Sponsors;
