import '../src/css/header.css';
import '../src/css/main.css';
import '../src/css/prefooter.css';
import '../src/css/footer.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/header.js';
import {CatalogMain} from './components/catalogmain.js'
import { AboutUs } from './components/abous us.js';
import { Conection } from './components/connection.js';
import { Main } from './components/main.js';
import { Prefooter } from './components/prefooter.js';
import { Footer } from './components/footer.js';


function App() {
  return (
    <BrowserRouter>
      <Header>
      </Header>
      <Main>
      </Main>

      <Prefooter>
      </Prefooter>
      <Footer>
      </Footer>
    </BrowserRouter>


  );
}

export default App;