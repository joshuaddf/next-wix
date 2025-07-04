import React from 'react'
import Link from "next/link";
import { wixClient } from '@/lib/wixClient';

const page  = async () => {

  // const {items:posts} = await wixClient.collections.getDataCollection("Exampleposts");

  return (
    <div className='font-geist-mono flex items-center justify-center flex-col h-screen'>
      <div className="flex flex-col items-start">
        <span className='pb-3 font-semibold'><Link href="/">Back</Link></span>
        <h1>Welcome to the blog page. 🤠</h1>

        <h2 className='py-6 '>Blogs</h2>
        <ul>
          <li>
            {/* {posts.map((post: any) => (
              <div key={post.id}>
                <h3>{post.title}</h3>
                </div>
            ))} */}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default page