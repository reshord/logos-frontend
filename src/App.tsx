import Header from './components/header/Header';
import Banner from './components/Ad/ad-banner';
import Content from './components/content/Content';
import styles from './styles/App.module.css'
import AboutUs from './components/about-us/AboutUs';
import AboutUsGPS from './components/GPS/GPS';
import Footer from './components/Footer/Footer';
import { useEffect, useRef } from 'react';
import ScrollTopButton from './components/ScrollTop';

function App() {

  const refApp = useRef<HTMLDivElement>(null)

  return (
    <div className={styles.App} ref={refApp}>
        <Header />
        <Banner />
        <Content />
        <AboutUs />
        <AboutUsGPS />
        <Footer />
    </div>
  );
}

export default App;
