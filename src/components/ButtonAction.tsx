
import {  Pencil, Trash } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface Props {}

const ButtonAction = () => {
  return(
   <div className='flex items-center'>
    <Link href='/edit/1' className='btn mr-2'><Pencil />Edit</Link>
    <button className='btn btn-error '><Trash />Delete</button>
   </div>
  )
}

export default ButtonAction