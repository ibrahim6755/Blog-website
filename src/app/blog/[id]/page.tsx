import BackButton from '@/components/BackButton'
import ButtonAction from '@/components/ButtonAction'
import React from 'react'

interface Props {}

const BlogDetailPage = () => {
  return(
   <>
    
    <div className='mb-8'>
    <BackButton/>
    <h2 className='text-2xl font-bold my-4'>Post One</h2>
    <ButtonAction/>
    <p className='text-slate-700 my-2'>Post one content</p>
    </div>
   </>
  )
}

export default BlogDetailPage