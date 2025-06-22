import "./App.css";
import AboutMe from "./components/aboutMe/AboutMe";
import ContactMe from "./components/contactMe/ContactMe";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HeroSection from "./components/heroSection/HeroSection";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutMe />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
