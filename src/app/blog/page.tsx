import React from 'react'
import Link from "next/link";
import { wixClient } from '@/lib/wixClient';

const page  = async () => {

  // const {items:posts} = await wixClient.collections.getDataCollection("Exampleposts");

  return (
    <div className=' flex items-center justify-center flex-col h-full w-full px-6'>
      <div className="flex flex-col items-start">
        <span className='pb-3 font-semibold'><Link href="/">&#8592; Back</Link></span>
        <h1 className='bg-3'>Welcome to the blog page. <br />
          This is where you view all the blogs that I write.
          🤠</h1>

        <h2 className='pt-6 '>Blogs (<em>Coming sooon.</em><span>😛</span>)</h2>
        <p><strong>Wait! </strong>I'm studying for midsem. <br />
        See you after the exam.
        </p>
       
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