import React from "react";
import '../src/css/header.css';
import '../src/css/main.css';
import '../src/css/prefooter.css';
import '../src/css/footer.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/header.js';
import { CatalogMain } from './components/catalog.js'; // Переименовали импорт
import { AboutUs } from './components/aboutus.js'; // Исправлено имя файла (убрали пробел)
import { Conection } from './components/connection.js';
import { Main } from './components/main.js';
import { Prefooter } from './components/prefooter.js';
import { Footer } from './components/footer.js';

function App() {  // Изменили название главного компонента
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/catalog" element={<CatalogMain />} />
        
      </Routes>
      <Prefooter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;