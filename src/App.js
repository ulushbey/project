import Navbar from './components/Navbar';
import Hero from './containers/Hero';
import ClientSlider from './components/sliders/ClientSlider';
import Invest from './containers/Invest';
import Wallet from './containers/Wallet';
import Design from './containers/Design';
import WhyUs from './containers/WhyUs';
import Payments from './containers/Payments';
import Work from './containers/Work';
import Screenshot from './containers/Screenshot';
import Pricing from './containers/Pricing';
import Testimonials from './containers/Testimonials';
import AppContainer from './containers/AppContainer';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div>
      <Helmet>
        <script src='assets/js/main.js'></script>
      </Helmet>
      <Navbar />
      <Hero />
      <ClientSlider />
      <Invest />
      <Wallet />
      <Design />
      <WhyUs />
      <Payments />
      <Work />
      <Screenshot />
      <Pricing />
      <Testimonials />
      <AppContainer />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
