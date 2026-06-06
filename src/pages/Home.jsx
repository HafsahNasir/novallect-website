import Hero from '../components/Hero'
import Stats from '../components/Stats'
import ServiceCategories from '../components/ServiceCategories'
import WhyNovallect from '../components/WhyNovallect'
import Process from '../components/Process'
import CTASection from '../components/CTASection'
import usePageTitle from '../hooks/usePageTitle'

export default function Home() {
  usePageTitle('Home')
  return (
    <>
      <Hero />
      <Stats />
      <ServiceCategories />
      <WhyNovallect />
      <Process />
      <CTASection />
    </>
  )
}
