import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { Team } from "./components/Team";
import "./App.css";
import { Dashboard } from "./components/Dashboard";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import { Dashboard } from "./components/Dashboard";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
            <>
              <Hero />
              <HowItWorks />
              <Features />
              <Services />
              <Team />
              <Footer />
              <ScrollToTop />
            </>
          } />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}


export default App;
