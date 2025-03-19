import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsCalendarMinus } from "react-icons/bs";
function BlogCard({className='', blogImage, blogAuthor, blogDate, blogTitle, blogDes}) {
  return (
    <div className='group transition-all'>
        <Link href={""}>
            <div className='w-full overflow-hidden rounded-3xl'>
                <Image 
                    src={blogImage}
                    alt={blogTitle}
                    width={500}
                    height={500}
                    className='object-contain w-full group-hover:scale-110 duration-500'
                />
            </div>
        </Link>
        <div className='flex gap-8 my-3 text-lg font-normal text-blue-900'>
            <span>{blogAuthor}</span>
            <span className='flex items-center gap-2'><BsCalendarMinus /> {blogDate}</span>
        </div>
        <Link href={""}>
            <h2 className='text-xl font-bold text-blue-950 mb-2'>{blogTitle}</h2>
        </Link>
        <p className='text-lg text-blue-950'>{blogDes}</p>
    </div>
  )
}

export default BlogCard