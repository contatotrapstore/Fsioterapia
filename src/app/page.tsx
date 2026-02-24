import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Benefits from '@/components/sections/Benefits';
import TargetAudience from '@/components/sections/TargetAudience';
import Testimonials from '@/components/sections/Testimonials';
import ServiceArea from '@/components/sections/ServiceArea';
import Contact from '@/components/sections/Contact';
import SectionDivider from '@/components/layout/SectionDivider';

export default function Home() {
  return (
    <>
      <Hero />
      <SectionDivider variant="wave" color="#ffffff" />

      <About />
      <SectionDivider variant="slant" color="#fafafa" />

      <Services />
      <SectionDivider variant="wave" color="#f0fdf4" flip />

      <Benefits />
      <SectionDivider variant="slant" color="#ffffff" flip />

      <TargetAudience />
      <SectionDivider variant="wave" color="#fafafa" />

      <Testimonials />
      <SectionDivider variant="slant" color="#ffffff" />

      <ServiceArea />
      <SectionDivider variant="wave" color="#14532d" />

      <Contact />
    </>
  );
}
