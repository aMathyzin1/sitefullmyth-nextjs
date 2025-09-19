import { CommunitySection } from '@/components/sections/community-section';
import { FeaturesSection } from '@/components/sections/features-section';
import { HeroSection } from '@/components/sections/hero-section';
import { SpotlightSection } from '@/components/sections/spotlight-section';
import { StepsSection } from '@/components/sections/steps-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { getDictionary } from '@/lib/dictionaries';

export default function HomePage({ params }: { params: { locale: string } }) {
  const dictionary = getDictionary(params.locale);

  return (
    <div className="space-y-10">
      <HeroSection content={dictionary.home.hero} locale={dictionary.locale} />
      <FeaturesSection features={dictionary.home.features} />
      <StepsSection steps={dictionary.home.steps} locale={dictionary.locale} />
      <SpotlightSection spotlight={dictionary.home.spotlight} locale={dictionary.locale} />
      <TestimonialsSection testimonials={dictionary.home.testimonials} locale={dictionary.locale} />
      <CommunitySection community={dictionary.home.communityCta} />
    </div>
  );
}
