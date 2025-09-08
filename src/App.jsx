
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './component/Navbar'
import { Footer } from './component/Footer'
import { Home } from './pages/Home'
import { LogIn } from './pages/LogIn'
import { Register } from './pages/Register'
import { Profile } from './pages/Profile'
import { Post } from './pages/Post'
import { Bookmark } from './pages/Bookmark'
import { Settings } from './pages/Settings'

function App() {


  return (
    <>
      <BrowserRouter>
      <Navbar/>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/post' element={<Post />} />
          <Route path='/bookmark' element={<Bookmark />} />



        </Routes>
        <Footer/>

      </BrowserRouter>
    </>
  )
}

export default App
