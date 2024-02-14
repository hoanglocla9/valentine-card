import React from 'react';
import Link from 'next/link';

export default function FirstQuestion() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-rose-200 p-60">
      <>
        <div className="text-[0.5rem] mb-20 text-center leading-tight md:text-4xl md:leading-snug bg-gradient-to-r from-green-600 via-yellow-600 to-red-600 inline-block text-transparent bg-clip-text">
          <span>Hi Tú, 
            <br />
            Chúc mừng kỷ niệm một tháng kể từ ngày chúng mình quen nhau nha. Vậy là … 1 tháng nói chuyện với nhau rồi á, Lộc không biết nên dùng từ “đã” hay “mới” nữa. 
            <br /><br />
            Thật may mắn khi Lộc được quen Tú, mọi chuyện đều thật trùng hợp bất ngờ nhỉ! Mặc dù tụi mình chỉ mới nói chuyện với nhau qua chat, nhưng Lộc cảm thấy 2 đứa nên quen biết nhau từ lâu lắm rồi ấy. Không biết Tú cũng có cảm giác đó không nhỉ !?
            <br /><br />
            Mà thôi mình cứ nhìn về phía trước ha. Lộc mong rằng Tú sẽ không còn sợ yêu nữa, hãy mạnh mẽ lên, dũng cảm lên nha! Tú xứng đáng với những điều tốt đẹp mà, đừng lo sợ nha. Nếu có thể, Lộc mong rằng sẽ được đồng hành với Tú để cùng nhau vượt qua nỗi sợ này ^^.
            <br /><br />
            Lộc biết chứ tình yêu không phải lúc nào cũng màu hồng, cũng là giai đoạn honey moon. Nhưng Lộc mong rằng, sự kiên nhẫn, dịu dàng, nỗ lực, chia sẻ và thấu hiểu của 2 người sẽ giúp nhau vượt qua.
            <br /><br/> 
            Anyway, 1 ngày Va lung tung vui nha, ở nhà xem phim ăn cơm tró điiiii, lêu lêu.</span>
        </div>
          <button
              className="bg-rose-700 hover:bg-rose-800 text-white py-2 px-4 rounded"
            >
              <Link href="/secondQuestion">Còn tiếp</Link>
            </button>
        </>
    </div>
  )
}