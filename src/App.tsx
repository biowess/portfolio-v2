import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './lib/theme';
import { ToastProvider } from './components/Toast';
import { SplashScreen } from './components/SplashScreen';
import { Layout } from './components/Layout';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { Research } from './pages/Research';
import { Projects } from './pages/Projects';
import { Writing } from './pages/Writing';
import { Photography } from './pages/Photography';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <ToastProvider>
          <SplashScreen />
          <Router>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="research" element={<Research />} />
                <Route path="projects" element={<Projects />} />
                <Route path="writing" element={<Writing />} />
                <Route path="photography" element={<Photography />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
              </Route>
            </Routes>
          </Router>
        </ToastProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}
