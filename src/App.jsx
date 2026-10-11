import { BrowserRouter,Routes,Route } from 'react-router-dom'

import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Register from './Components/Register'
import Gallery from './Components/Gallery' 
import View from './Components/View'
import Classes from './Components/Classes'
import Contact from './Components/Contact'
import Login from './Components/Login'


function App() {


  return (
    <>
     <BrowserRouter>
     <Navbar/>
     
     <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/register' element={<Register/>}/>
      <Route path='/view' element={<View/>}/> 
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/classes' element={<Classes/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
     </Routes>
     </BrowserRouter>

     </>
  )
}

export default App
