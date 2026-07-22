import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import Industries from './pages/Industries';
import Contact from './pages/Contact';

function App(){
  return (
    <BrowserRouter>

      <MainLayout>

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/solutions' element={<Solutions />} />
          <Route path='/industries' element={<Industries />} />
          <Route path='/contact' element={<Contact />} />

        </Routes>

      </MainLayout>
      
    </BrowserRouter>
  );
};

export default App;