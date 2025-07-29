import { useState } from 'react'
import Users from './Users'
import CreatUser from './CreatUser'
import UpdateUser from './UpdateUser'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ComponentA from './Component/ComponentA';

function App() {

  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users /> }/>
        <Route path="/create" element={<CreatUser /> }/>
        <Route path="/update/:id" element={<UpdateUser /> }/>

        {/* <Route path='/todo' element={ <ComponentA /> }/> */}
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
