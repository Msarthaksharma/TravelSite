import { BsPerson } from "react-icons/bs"
import { BiSearch } from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai"
import { HiOutlineMenuAlt4 } from "react-icons/hi"
import { FaInstagram, FaFacebook, FaPinterest, FaYoutube } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa6"
import { useState } from "react"

const Navbar = () => {
    const [nav,setNav] = useState(false)
    const [logo,setLogo] = useState(false)

    const handleNav = () =>{
        setNav(!nav)
        setLogo(!logo)
    }

  return (
    <div className='w-full flex justify-between items-center h-20 px-4 absolute z-10 text-white'>
        <div>
            <h1 onclick = {handleNav} className={logo ? "hidden" : "block"}>BEACHES.</h1>
        </div>
        <ul className="hidden md:flex">
            <li>Home</li>
            <li>Destinations</li>
            <li>Travel</li>
            <li>View</li>
            <li>Book</li>
        </ul>
        <div className="hidden md:flex ">
            <BiSearch size={30}/>
            <BsPerson size={30}/>
        </div>
        {/* hamburger */}
        <div onClick={handleNav} className="md:hidden z-10">
            {nav ? <AiOutlineClose size={20}/> : <HiOutlineMenuAlt4 size={20}/>}
        </div>
        {/* mobile dropdown */}
        <div className={nav ? 'absolute left-0 top-0 w-full text-black bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}> 
        <ul>
            <h1>BEACHES.</h1>
            <li className="border-b ">Home</li>
            <li className="border-b ">Destinations</li>
            <li className="border-b ">Travel</li>
            <li className="border-b ">View</li>
            <li className="border-b ">Book</li>
            <div className="flex flex-col">
               <button className="my-6">Search</button>
               <button>Account</button>
            </div>
            <div className="flex justify-between my-6 text-[--primary-dark]">
                <FaFacebook className='icon'/>
                <FaTwitter className='icon'/>
                <FaYoutube className='icon'/>
                <FaPinterest className='icon'/>
                <FaInstagram className='icon'/>
            </div>
            </ul>
        </div>
    </div>
  )
}

export default Navbar