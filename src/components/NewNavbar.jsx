import React from 'react'
import { Link } from 'react-router-dom'
import About from '../pages/About'
import { useNavigate } from 'react-router-dom'

import { getDatabase, ref, set } from "firebase/database" ; 
import {app} from "../firebase"

const db = getDatabase(app); 


function NewNavbar() {

    const navigate = useNavigate(); 
    const putData = ()=>{
        set(ref(db,'users/Parth'),{
          id : 1, 
          name : "Parth", 
          age : 21,
        }); 
        console.log("I am clicked"); 
    }; 

    

  return (
    <>

   <header className='text-gray-400 bg-gray-900 body-font'>

   

    <div className='container mx-auto flex  p-5 flex-col md:flex-row items-center'>

    
    
  
         
        <a href="#" className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center '>
            <img src="" alt="" />
            <span className=' ml-3 text-xl'>MNK</span>
        </a>
        <nav className='md:ml-auto flex items-center text-base justify-center' >
            <a href="#" className='mr-5 hover:text-white' onClick={()=> navigate('/')}> Home </a>
            
            <p className='mr-5 hover:text-white' onClick={()=> navigate('/about')} > About </p>

            <a href="#" className='mr-5 hover:text-white' onClick={()=> navigate('/join')}> Join </a>
            <button className='mr-5  hover:text-blue-800' onClick={putData}> PutData </button>
            
        </nav>


    </div>
   
  </header>

  

  </>
 
    

    
  )
}

export default NewNavbar





{/* <nav>
        <a href="">
            <img src="" alt="" />
            <span>MNK</span>
        </a>
        <button> Join </button>
        <div>
            <ul className='flex flex-wrap outline-none'>
                <li> Home </li>
                <li> About </li>
            </ul>
        </div>
</nav> */}
