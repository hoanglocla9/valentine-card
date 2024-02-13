import React from 'react';
import Link from 'next/link';

export default function FirstQuestion() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-rose-200">
      <>
        
          <button
              className="bg-rose-700 hover:bg-rose-800 text-white py-2 px-4 rounded"
            >
              <Link href="/secondQuestion">Button</Link>
            </button>
        </>
    </div>
  )
}