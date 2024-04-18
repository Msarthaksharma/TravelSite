import React from 'react'
import { RiCustomerService2Fill } from 'react-icons/ri'
import { MdOutlineTravelExplore } from 'react-icons/md'

const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
        <div className='lg:col-span-2 flex flex-col justify-evenly'>
            <div>
                <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Optio quos iure magni incidunt odio quidem inventore enim 
                    unde nam ullam, nostrum maxime neque pariatur ea laudantium
                    aliquid voluptatibus deleniti. Lorem ipsum dolor sit amet 
                    consectetur adipisicing elit. Quo, voluptas sunt cupiditate 
                    fugiat earum quidem inventore! Tempora nam repellat facilis 
                    beatae officiis, at illum earum dolor ad ducimus nisi nihil.
                </p>
            </div>
            <div className='grid sm:grid-cols-2 gap-8 py-4'>
                <div className='flex flex-col lg:flex-row items-center text-center'>
                    <button><RiCustomerService2Fill size={50}/></button>
                    <div>
                        <h3 className='py-2'>LEADING SERVICE</h3>
                        <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20YEARS IN-A-ROW</p>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row items-center text-center'>
                    <button><MdOutlineTravelExplore size={50}/></button>
                    <div>
                        <h3 className='py-2'>LEADING SERVICE</h3>
                        <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20YEARS IN-A-ROW</p>
                    </div>
                </div>
                
            </div>
        </div>
        <div>
            <div className='border text-center'>
                <p className='pt-2'>GET AN ADDITIONAL 10% OFF</p>
                <p className='py-4'>12 HOURS LEFT</p>
                <p className='bg-gray-800 text-gray-200 py-2'>BOOK NOW AND SAFE</p>
            </div>
            <form className='w-full'>
                <div className='flex flex-col my-2'>
                    <label>Destination</label>
                    <select className='border rounded-md p-2'>
                        <option>Grande Antigua</option>
                        <option>Key West</option>
                        <option>Maldives</option>
                        <option>Cozumel</option>
                    </select>
                </div>
                <div className='flex flex-col my-4' >
                    <label>Check-In</label>
                    <input  className='border rounded-md p-2' type='date'/>
                </div>
                <div className='flex flex-col my-2'>
                    <label >Check-Out</label>
                    <input  className='border rounded-md p-2' type='date'/>
                </div>
                <button className='w-full my-4'> Rates & Avalabilities</button>
            </form>
        </div>
    </div>
  )
}

export default Search