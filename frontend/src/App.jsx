import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Component } from "react";

import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

import Home from "./pages/Home.jsx";
import Solution from "./pages/Solution.jsx";
import SolutionDetail from "./pages/SolutionDetail.jsx";
import WhoWeServe from "./pages/WhoWeServe.jsx";
import About from "./pages/About.jsx";
import Careers from "./pages/Careers.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import AppDashboard from "./pages/AppDashboard.jsx";
import Security from "./pages/Security.jsx";
import Legal from "./pages/Legal.jsx";
import Privacy from "./pages/Privacy.jsx";
import Cookies from "./pages/Cookies.jsx";
import Terms from "./pages/Terms.jsx";
import Regulatory from "./pages/Regulatory.jsx";
import Accessibility from "./pages/Accessibility.jsx";
import Complaints from "./pages/Complaints.jsx";
import NotFound from "./pages/NotFound.jsx";

class ErrorBoundary extends Component {
  constructor(props) { super(props); this.state = { hasError: false }; }
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(error, info) { console.error("Bard Santner caught:", error, info); }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[60vh] flex items-center justify-center p-10 text-center bg-milk">
          <div>
            <p className="eyebrow eyebrow-accent mb-4">A service interruption</p>
            <h1 className="display-lg mb-4 text-navy-600">
              We were unable to complete that request.
            </h1>
            <p className="text-bone-600 mb-8 max-w-md mx-auto">
              The fault is on our side. Please refresh, or return to the
              homepage and try again.
            </p>
            <button onClick={() => window.location.reload()} className="btn btn-navy">
              Refresh
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  const location = useLocation();

  // Routes that run their own application shell (own topbar / sidebar /
  // no public Nav + Footer).
  const isAppShellRoute =
    location.pathname === "/login" || location.pathname.startsWith("/app");

  return (
    <>
      <ScrollToTop />
      {!isAppShellRoute && <Nav />}

      <main>
        <ErrorBoundary>
          <AnimatePresence mode="popLayout">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />

              {/* Nav dropdown destinations */}
              <Route path="/solutions/:slug" element={<Solution />} />
              <Route path="/solutions/:slug/:capability" element={<SolutionDetail />} />
              <Route path="/who-we-serve/:slug" element={<WhoWeServe />} />
              <Route path="/about" element={<About />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />

              {/* Online Banking flow — own app shell */}
              <Route path="/login" element={<Login />} />
              <Route path="/app" element={<AppDashboard />} />

              {/* Trust + legal */}
              <Route path="/security" element={<Security />} />
              <Route path="/legal" element={<Legal />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/regulatory" element={<Regulatory />} />
              <Route path="/accessibility" element={<Accessibility />} />
              <Route path="/complaints" element={<Complaints />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </ErrorBoundary>
      </main>

      {!isAppShellRoute && <Footer />}
    </>
  );
}
