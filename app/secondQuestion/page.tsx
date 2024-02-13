'use client';

import React, { useEffect } from 'react';
import JSConfetti from 'js-confetti';

export default function SecondQuestion() {
  useEffect(() => {
    const jsConfetti = new JSConfetti();
    

   setInterval(() => {
    jsConfetti.addConfetti({
      emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
   });
    jsConfetti.addConfetti();
   }, 3000)
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-rose-200">
      <>
          <img src="https://gifdb.com/images/high/cute-brown-bear-i-love-you-wjg3bpkzqbmprhbt.gif" />
          <div className="text-[2rem] font-bold text-center leading-tight md:text-5xl md:leading-snug bg-gradient-to-r from-green-600 via-yellow-600 to-red-600 inline-block text-transparent bg-clip-text">
            Question 2 go here
          </div>

        </>
    </div>
  )
}