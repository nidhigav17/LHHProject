import { useState } from 'react'
import Header from './Components/Header';
import userContext from './Context/userContext';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Pages/Home';
import Footer from './Components/Footer';


function App() {
const [userName,setUserName]=useState("nidhi")

  return (
    <>
    <BrowserRouter>
    <userContext.Provider value={{currentUser:userName,setUserName}}>
        <Header/>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    <Footer/>
    </userContext.Provider>
    </BrowserRouter>
    
     
    </>
  )
}

export default App
