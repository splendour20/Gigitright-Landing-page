import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Struggle from './components/Struggle'
import WhyJoin from './components/WhyJoin'
import Opportunities from './components/Opportunities'
import Process from './components/Process'
import EarlyAccess from './components/EarlyAccess'
import Platform from './components/Platform'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <div id="why-gigitright"><Hero /></div>
      <Struggle />
      <div id="why-join"><WhyJoin /></div>
      <div id="opportunities"><Opportunities /></div>
      <div id="how-it-works"><Process /></div>
      <EarlyAccess />
      <Platform />
      <div id="faqs"><FAQ /></div>
      <CTA />
      <Footer />
    </div>
  )
}

export default App