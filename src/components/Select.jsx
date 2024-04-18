import React from 'react'
import BoraBora from '../assets/borabora.jpg'
import BoraBora2 from '../assets/borabora2.jpg'
import keywest from '../assets/keywest.jpg'
import Maldives from '../assets/maldives.jpg'
import Maldives2 from '../assets/maldives2.jpg'
import Maldives3 from '../assets/maldives3.jpg'
import SelectCard from './SelectCard'

const Select = () => {
  return (
    <div className='mx-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        <SelectCard bg={BoraBora} text='Bora Bora'/>
        <SelectCard bg={BoraBora2} text='Antigua'/>
        <SelectCard bg={keywest} text='Key West'/>
        <SelectCard bg={Maldives} text='Maldives'/>
        <SelectCard bg={Maldives2} text='Jamaica'/>
        <SelectCard bg={Maldives3} text='Port Blair'/>
    </div>
  )
}

export default Select