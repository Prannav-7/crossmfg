import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import PageWrapper from './components/layout/PageWrapper';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Infrastructure from './pages/Infrastructure';
import Quality from './pages/Quality';
import Contact from './pages/Contact';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <PageWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/infrastructure" element={<Infrastructure />} />
            <Route path="/quality" element={<Quality />} />
            <Route path="/contact" element={<Contact />} />
            {/* 404 fallback */}
            <Route path="*" element={
              <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4"
                style={{ background: '#020B18' }}>
                <h1 className="font-heading font-800 text-8xl mb-4 text-brand-grad"
                  style={{ fontSize: '8rem' }}>404</h1>
                <p className="text-textMuted text-lg mb-8 font-mono">Page not found.</p>
                <a href="/" className="btn-primary px-10 py-4">Return Home</a>
              </div>
            } />
          </Routes>
        </PageWrapper>
      </BrowserRouter>
    </HelmetProvider>
  );
}
