import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Clients from './components/Clients'
import Contact from './components/Contact'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/services" element={<Services />} exact />
        <Route path="/clients" element={<Clients />} exact />
        <Route path="/contact-us" element={<Contact />} exact />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default App;
