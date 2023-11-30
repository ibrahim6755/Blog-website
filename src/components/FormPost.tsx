'use client'

import { FormInputPost } from '@/types'
import React, { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

interface FormPostProps {
    submit: SubmitHandler<FormInputPost>
    isEditing: boolean
}

const FormPost = ({ submit, isEditing }: FormPostProps) => {
    const { register, handleSubmit } = useForm<FormInputPost>();

    return (
        <form onSubmit={handleSubmit(submit)} className='flex flex-col items-center justify-center gap-5 mt-10'>
            <input
                type="text"
                {...register('title', { required: true })}
                placeholder="Post title..."
                className="input input-bordered w-full max-w-lg"
            />

            <textarea
                className="textarea textarea-bordered w-full max-w-lg"
                {...register('content', { required: true })}
                placeholder="Post content...">
            </textarea>

            <select {...register('tag', { required: true })}
                className="select select-bordered w-full max-w-lg"
                defaultValue=''
            >


                <option disabled value=''>Select tags</option>
                <option>javascript</option>
                <option>python</option>
                <option>php</option>
            </select>
            <button className='btn btn-primary w-full max-w-lg uppercase'>
                {isEditing ? "Update" :
                    "Create"
                }
            </button>
        </form>
    )
}

export default FormPost