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
        <Route path="/fpcap" element={<Home />} exact />
        <Route path="/fpcap/about" element={<About />} exact />
        <Route path="/fpcap/services" element={<Services />} exact />
        <Route path="/fpcap/clients" element={<Clients />} exact />
        <Route path="/fpcap/contact-us" element={<Contact />} exact />
        <Route path='/fpcap/*' element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default App;
