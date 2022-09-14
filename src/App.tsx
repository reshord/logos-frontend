import Header from './components/header/Header';
import Banner from './components/Ad/ad-banner';
import Content from './components/content/Content';
import styles from './styles/App.module.css'
import AboutUs from './components/about-us/AboutUs';
import AboutUsGPS from './components/GPS/GPS';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className={styles.App}>
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
