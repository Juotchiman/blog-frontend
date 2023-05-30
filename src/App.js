import React from  'react'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Signup from './Pages/Signup'
import NotFound from './Pages/NotFound'
import Footer from './components/Footer'
import Login from './Pages/Login'
import Updateuser from './Pages/Updateuser'
import Post from './Pages/Post'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div>
    {/* {<h1 style={{backgroundColor: "red", padding:"2rem"}}>{name}</h1>
    <h2 style={style}>{country}</h2>
    <img src="./../logo192.png" alt="" />
    <img src="./../logo512.png" alt="Alternative" />
    <img src={logo} alt="" />} */}

    <BrowserRouter>
    <Navbar/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/update' element={<Updateuser/>}/>
      <Route path='/Post' element={<Post/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>

    <Footer/>

    </BrowserRouter>


  </div>
  )
}

// const style = {
//   fontSize: "3rem",
//   backgroundColor: "Blue",
// }

export default App