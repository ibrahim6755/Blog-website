'use client'

import { ChevronLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

interface Props { }

const BackButton = () => {
    const router = useRouter()
    return (
        <button
            onClick={() => router.back()}
            className='btn'>
            <ChevronLeft />
            Back
        </button>
    )
}

export default BackButton