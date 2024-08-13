import React from 'react'
import NewNavbar from './components/NewNavbar'
import SignUp from './components/SignUp'
import Home from './pages/Home'







const App = () => {

 

 
  return (
    <>


      {/* <nav className='flex flex-wrap'>
        <a href="">Home</a>
        <a href="">Join</a>
        <a href="">Blog</a> 
      </nav> */}

      <NewNavbar />
      <Home />
      
      <SignUp />
    
    
    </>

  
  )
}

export default App
