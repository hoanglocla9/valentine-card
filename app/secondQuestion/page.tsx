'use client';

import React, { useEffect, useState } from 'react';
import JSConfetti from 'js-confetti';

export default function SecondQuestion() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  useEffect(() => {
    if (!yesPressed) return;

    const jsConfetti = new JSConfetti();
    setInterval(() => {
      jsConfetti.addConfetti({
        emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
    });
      jsConfetti.addConfetti();
    }, 1500)
  }, [yesPressed]);


  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Không",
      "Tú chắc hong??🙄",
      "Chắc chưa đó?🤔",
      "Nghĩ lại tí iii???😶",
      "Nghĩ thêm tí nữa nha?🙏",
      "Hãy suy nghĩ lại đi!🥺",
      "Tú hổng chịu, Lộc buồn lắm đó🙁",
      "Lộc sẽ rất buồn đó😕",
      "Lộc sẽ siêu to bự buồn đóo😓",
      "Lộc sẽ rất rất rất... buồn😖",
      "Ok fine, Lộc không hỏi nữa....",
      "Đùa đó, ĐỒNG Ý CÁI NÈ","Lộc sẽ rấttttttt siêuuuuuu buồn ấy🙏",
      "....1,2,3 nghĩ lại cái nha🥴",
      "Lộc buồn quá 😥😥😥",
      "Chịu...",
      "Thua...",
      "Xạo đó, Lộc không chịu thua đâu"
    ];

    return phrases[noCount % phrases.length];
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-rose-200">
      {yesPressed ? (
        <>
          <img src="https://gifdb.com/images/high/animated-bear-kiss-enngnq0gm2r405bt.webp" />
          <div className="text-[2rem] font-bold text-center leading-tight md:text-5xl md:leading-snug bg-gradient-to-r from-green-600 via-yellow-600 to-red-600 inline-block text-transparent bg-clip-text">
            <span>Ok yay!!!</span>
          </div>
        </>
      ) : (
        <>
          <img className="h-[200px]" src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif" />
          <h1 className="text-[2rem] text-center leading-tight md:text-5xl md:leading-snug bg-gradient-to-r from-green-600 via-yellow-600 to-red-600 inline-block text-transparent bg-clip-text">
            Tú cho Lộc cơ hội để nói "Ti Amo" mỗi ngày nha 😁
          </h1>
          <div className="text-center space-y-5">
            <button
              className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Ok lun
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              {noCount === 0 ? 
                "Không 😥"
                : getNoButtonText()
              }
            </button>
          </div>
        </>
      )}
    </div>
  );
}