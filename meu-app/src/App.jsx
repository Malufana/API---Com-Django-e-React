// import logo from './logo.svg';
import './App.css';
import { Login } from './Paginas/Login';
import CsvUploadForm from './CsvUploadForm';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NovoUsuario } from './Paginas/NovoUsuario';
import { Home } from './Paginas/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/CsvUploadForm' element={<CsvUploadForm />}/>
        <Route path='/Novousuario' element={<NovoUsuario />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
