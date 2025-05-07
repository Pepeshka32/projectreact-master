import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/header.js';
import { CatalogMain } from './components/catalogmain.js';
import { AboutUs } from './components/abous us.js';
import { Conection } from './components/connection.js';
import { Main } from './components/main.js';
import { Prefooter } from './components/prefooter.js';
import { Footer } from './components/footer.js';

import '../src/css/header.css';
import '../src/css/main.css';
import '../src/css/prefooter.css';
import '../src/css/footer.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Main />
            <Prefooter />
            <Footer />
          </>
        } />
        <Route path="/catalog" element={<CatalogMain />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/qa" element={<Conection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;