import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Value from './Input'
import Home from './Home'
import Layout from "./Layout"
import NoPage from "./NoPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <>
    <h1>Hello !</h1>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Counter" element={<Counter />} />
          <Route path="Input" element={<Value />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
      
    
    </>
  )
}

export default App
