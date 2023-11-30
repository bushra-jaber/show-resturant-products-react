import React from 'react'
import Navbar from './components/navbar/Navbar.jsx'
import Products from './components/products/Products.jsx'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import PageNotFound from './components/PageNotFound/PageNotFound.jsx'
import Resturant from './components/resturant/Resturant.jsx'


export default function App() {
  return (
    <>
    <BrowserRouter> 
    <Navbar />
    <Routes>
   
    <Route path='/resturant' element={<Resturant/>}/>
    <Route path='/products' element={<Products />}/>
   <Route path='*' element={ <PageNotFound/>}/>
    </Routes>
    </BrowserRouter>
   
     
    </>
  )
}
