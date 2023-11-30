'use client'

import FormPost from '@/components/FormPost'
import { FormInputPost } from '@/types'
import React from 'react'
import { SubmitHandler } from 'react-hook-form'

interface Props { }

const EditPostPage = () => {
    const handleEditPost: SubmitHandler<FormInputPost> = (data) => {
        console.log(data)
    }
    return (
        <>
            <h1 className='text-2xl my04 font-bold text-center'>Edit post</h1>
            <FormPost submit={handleEditPost} isEditing/>
        </>
    )
}


export default EditPostPage