import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/header.js';
import { CatalogMain } from './components/catalogmain.js';
import { AboutUs } from './components/abous us.js';
import { Conection } from './components/qa.js';
import { Main } from './components/main.js';
import { Prefooter } from './components/prefooter.js';
import { Footer } from './components/footer.js';
import {Blog} from './components/blog.js'

import '../src/css/header.css';
import '../src/css/main.css';
import '../src/css/prefooter.css';
import '../src/css/footer.css';
import '../src/css/blog.css';
import '../src/css/qa.css'



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
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;