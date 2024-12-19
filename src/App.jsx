import React from 'react'
import { Route, Routes } from "react-router"

import './First.css'
import PostApi from './component/PostApi';
import GetApi from './component/GetApi';
const App = () => {
  return (
   <>
   <Routes>
    <Route path='/' element={<GetApi></GetApi>}></Route>
    <Route path='/addBook' element={<PostApi></PostApi>}></Route>
   </Routes>
   </>
  )
}

export default App