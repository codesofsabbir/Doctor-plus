import React from 'react'
import Title from '../Title'
import TitleDes from '../TitleDes'
import BlogCard from './BlogCard'

function Blog() {
  return (
    <div className='w-full py-20'>
        <div className="mx-auto w-[80%]">
            <div className='flex flex-col items-center pb-16'>
                <Title title={"Latest News"}/>
                <TitleDes titleDes={"Mavis Clinics Latest Articles On Holistic Health"} className='w-4/5'/>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                <BlogCard blogImage={"https://themes.envytheme.com/mavis/wp-content/uploads/2024/04/blog1-515x400.jpg"} blogAuthor={"Sabbir"} blogDate={"19 Mar, 2025"} blogTitle={"The Heart of the Matter: UnderStanding Cardiovascular"} blogDes={"Moving beyond the basics, we discuss the significance of maintaining a healthy heart through"}/>
                <BlogCard blogImage={"https://themes.envytheme.com/mavis/wp-content/uploads/2024/04/blog2-515x400.jpg"} blogAuthor={"Sabbir"} blogDate={"19 Mar, 2025"} blogTitle={"The Heart of the Matter: UnderStanding Cardiovascular"} blogDes={"Moving beyond the basics, we discuss the significance of maintaining a healthy heart through"}/>
                <BlogCard blogImage={"https://themes.envytheme.com/mavis/wp-content/uploads/2024/04/blog3-515x400.jpg"} blogAuthor={"Sabbir"} blogDate={"19 Mar, 2025"} blogTitle={"The Heart of the Matter: UnderStanding Cardiovascular"} blogDes={"Moving beyond the basics, we discuss the significance of maintaining a healthy heart through"}/>
            </div>
        </div>
    </div>
  )
}

export default Blog