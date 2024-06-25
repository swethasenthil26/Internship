import React from 'react'
import skctintern from './assets/skctintern.jpg'
import { FaBus } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const App = () => {
  return (
    <div>
    <div className=' bg-sky-300  w-screen h-auto'>
    <div className='flex  flex-row items-center  justify-between p-6 space-x-4  '>
      <h3 className='italic'>Sri Krishna College of Technology</h3>
    <div className = "flex space-x-4 items-center gap-3 ">
    <a href="#" className=' hover:bg-sky-700 rounded-full p-1 w-20 text-center'> Home </a>  
<a href="#" className=' hover:bg-sky-700 rounded-full p-1 w-20 text-center'> About </a>  
<a href="#" className=' hover:bg-sky-700 rounded-full p-1 w-20 text-center'> Contact </a>   
<a href="#" className=' hover:bg-sky-700 rounded-full p-1 w-25 text-center'> Examination </a>  
<a href="#" className=' hover:bg-sky-700 rounded-full p-1 w-20 text-center'> Fees </a>
<a href="#" className=' hover:bg-sky-700 rounded-full p-1 w-20 text-center'> Hostel </a>
<a href="#" className=' hover:bg-sky-700 rounded-full p-1 w-20 text-center'> Timetable</a>

<a href="#" className=' hover:bg-sky-700 rounded-full p-1 w-20 text-center'> Join Us </a>
</div>
    </div>
    <div className='flex p-10 flex-row items-center' >
    <div className='flex flex-col items-start gap-6'>
    <p className='w-[70%] text-justify'>
    Sri Krishna College of Technology (SKCT), situated in Coimbatore, Tamil Nadu and established in 1985 under Sri Krishna Institutions, thrives on a sprawling 52-acre campus in Kovaipudur, nestled at the foothills of the Western Ghats. SKCT operates as an autonomous institute affiliated with Anna University, Chennai, and is approved by the All India Council for Technical Education (AICTE), New Delhi. At SKCT we prioritize providing our students with extensive and collaborative research opportunities, industry-led knowledge, and a holistic approach to life. Under the dynamic leadership of Smt. S Malarvizhi, the Chairperson and Managing Trustee, SKCT has emerged as a premier institution over its 38-year journey. Accredited with an A Grade by the National Assessment and Accreditation Council (NAAC), and with eligible undergraduate programs accredited by the National Board of Accreditation (NBA), New Delhi, SKCT upholds a commitment to excellence in education. Offering 11 undergraduate and 6 postgraduate programs in engineering, technology, and management studies, SKCT caters to the evolving needs of the industry, fostering innovation and skill development among its students.</p>
    
    <button className='hover:bg-sky-800 rounded-full bg-clip-padding p-3 flex flex-col items-start gap-6 bg-blue-800 px-8'>Get Started</button>
    </div>
    <div className='flex flex-row items-center'>
     <img src={skctintern} alt="skct" className='h-[20rem] w-[150rem]' /> 
    </div>
    </div>
  </div>


    <div className='w-screen h-20 bg-slate-400'>
      <div className='flex items-center gap-10 justify-center pt-4'>

<FaInstagram className='size-10'/>
<FaFacebook className='size-10'/>
<FaTwitter className='size-10'/>
<CiLinkedin className='size-10'/>
</div>
</div>
<div className='w-screen h-10 bg-slate-800'> 
<h1 className='text-cyan-50 text-center'>ABOUT US</h1>
</div>
    </div>
  )
}

export default App