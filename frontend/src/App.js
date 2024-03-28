import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Input from './Input';
function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Input/>} />
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
