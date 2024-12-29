import { Route,Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import About from '@/pages/about/About'

function Router() {
    return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
     

    </Routes>
    )
  }
  
  export default Router