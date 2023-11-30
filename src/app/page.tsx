import PostCard from '@/components/PostCard'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='grid items-center justify-center md:grid-col-2 lg:grid-cols-3 gap-4 mt-10'>
      <PostCard/>
    </main>
  )
}
