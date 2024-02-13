import React from 'react';
import Link from 'next/link';

export default function FirstQuestion() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-rose-200">
      <>
          <img src="https://gifdb.com/images/high/cute-love-window-kisses-yw6u6pvmy6uwh6hr.gif" />
          <div className="text-[2rem] font-bold text-center leading-tight md:text-5xl md:leading-snug bg-gradient-to-r from-green-600 via-yellow-600 to-red-600 inline-block text-transparent bg-clip-text">
            Question 1 go here
          </div>

          <button
              className="bg-rose-700 hover:bg-rose-800 text-white py-2 px-4 rounded"
            >
              <Link href="/secondQuestion">Button</Link>
            </button>
        </>
    </div>
  )
}