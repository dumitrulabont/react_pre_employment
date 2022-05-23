import React from 'react';
// import './App.css';

import { Main } from './components/pages/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AddForm } from './components/pages/AddForm';
import { EditForm } from './components/pages/EditForm';
import { Delete } from './components/pages/Delete';


// function App() {
//   return (
//     <div className="App">
//       <Header/>
//       <Main/>
//       <Footer/>
//     </div>
//   );
// }
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element = {<Main/>} />
        <Route path='add' element={<AddForm/>} />
        <Route path='edit/:id' element={<EditForm/>}/>
        <Route path='/delete/:id/:name' element={<Delete/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App;
