import React from 'react'
import Link from 'next/link';
import { wixClient } from '@/lib/wixClient';

const page = async ({ params }: { params: { slug: string } }) => {
    const { slug } = params;

    const posts = await wixClient.items.query("Exampleposts").eq("slug", slug).find();
    const blogPosts = posts.items[0];
    console.log(blogPosts);

    return (
        <div className=" flex items-center justify-center flex-col h-screen">

            <div className="flex flex-col items-start px-6">
                <span className='pb-6 font-semibold'><Link href="/blog">&larr; Back</Link></span>

                <h1 className='font-semibold'>&#9824; {blogPosts.title}</h1>
                <p className='py-4'>{blogPosts.description}</p>
                <div className="items-end flex flex-col w-full gap-2">
                    <p className='text-sm font-semibold'>Author: {blogPosts.author}&#9816;</p>
                    <p className='text-sm font-semibold'>Date published: {blogPosts.date}</p>
                    <ul className='flex gap-3'>
                       <span className='font-extrabold'>&#127991;</span> <li className='text-black/[.4] text-sm'>{blogPosts.arraystring}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default page