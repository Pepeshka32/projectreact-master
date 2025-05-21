import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/header.js';
import { CatalogMain } from './components/catalogmain.js';
import { AboutUs } from './components/abous us.js';
import { Conection } from './components/qa.js';
import { Main } from './components/main.js';
import { Prefooter } from './components/prefooter.js';
import { Footer } from './components/footer.js';
import { Blog } from './components/blog.js';
import { Signin } from './components/signin.js';
import { Forgotpassword } from './components/forgpass.js';
import { Repassword } from './components/reppass.js';
import { Done } from './components/done.js'

import '../src/css/header.css';
import '../src/css/main.css';
import '../src/css/prefooter.css';
import '../src/css/footer.css';
import '../src/css/blog.css';
import '../src/css/qa.css';
import '../src/css/signin.css'
import '../src/css/forgpass.css'



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
        <Route path="/catalog" element={
          <>
            <CatalogMain />
            <Prefooter />
            <Footer />
          </>} />
        <Route path="/about" element={<>
          <AboutUs />
          <Prefooter />
          <Footer />
        </>} />
        <Route path="/qa" element={
          <>
            <Conection />
            <Prefooter />
            <Footer />
          </>} />
        <Route path="/blog" element={
          <>
            <Blog />
            <Prefooter />
            <Footer />
          </>} />
        <Route path="/signin" element={
          <>
            <Signin />
            <Prefooter />
            <Footer />
          </>} />
        <Route path="/forgpass" element={
          <>
            <Forgotpassword />
            <Prefooter />
            <Footer />
          </>} />
        <Route path="/repass" element={
          <>
            <Repassword />
            <Prefooter />
            <Footer />
          </>} />
        <Route path="/done" element={
          <>
            <Done />
            <Prefooter />
            <Footer />
          </>} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;