import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Benefits from '@/components/sections/Benefits';
import TargetAudience from '@/components/sections/TargetAudience';
import Testimonials from '@/components/sections/Testimonials';
import ServiceArea from '@/components/sections/ServiceArea';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Benefits />
      <TargetAudience />
      <Testimonials />
      <ServiceArea />
      <Contact />
    </>
  );
}
