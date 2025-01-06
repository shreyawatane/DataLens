import { About } from "./components/About";
import { Cta } from "./components/Cta";
import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { Newsletter } from "./components/Newsletter";
import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { Sponsors } from "./components/Sponsors";
import { Team } from "./components/Team";
import { Testimonials } from "./components/Testimonials";
import "./App.css";
import { Dashboard } from "./components/Dashboard";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import { Dashboard } from "./components/Dashboard";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<>
          <Hero />
          <Sponsors />
          <About />
          <HowItWorks />
          <Features />
          <Services />
          <Cta />
          <Testimonials />
          <Team />
          <Pricing />
          <Newsletter />
          <FAQ />
          <Footer />
          <ScrollToTop />
        </>} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}


export default App;
