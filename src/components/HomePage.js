import React from 'react'
// import img from '../assets/img5.png'
import img from '../assets/img9.jpg'
function HomePage() {
  return (
    <div>
<div className='flex flex-col items-center lg:flex-row lg:items-center lg:text-left lg:h-[600px] h-[550px]'>
  <img src={img} alt="football quiz" className='lg:h-[500px] lg:w-[700px] h-[300px] w-[400px] ' />
  <div className="text-center lg:text-left">
    <h1 className='lg:text-7xl text-5xl font-bold font-sans mt-6'>To Win Big</h1>
    <h1 className='lg:text-7xl text-5xl font-bold text-red-700'>On Instant Game</h1>
  </div>
</div>

      <div className='bg-black text-white'>
        <h2 className='flex justify-center lg:text-4xl text-2xl font-mono items-center font-bold'> About Instant Game</h2>
        <div class="w-[250px] lg:w-[700px] md:w-[300px] mx-auto p-6">
  <p class="text-left lg:text-3xl text-sm">
    Welcome to Instant Game, where you have the chance to win rewards immediately! With subscription fees ranging from N20 to N200, participate in the instant win game multiple times. On-demand fees are charged for additional game requests, providing you with more opportunities to win. Users on subscription will receive an auto-generated result if no request is input by 6 pm daily. Enjoy the thrill of the game and the excitement of potentially winning cash or airtime instantly. Remember, entries must be received by EMT NETWORKS. By participating, winners agree to allow the display of their videos, pictures, and testimonies. Thank you for joining us in this exciting adventure!
  </p>
</div>

      </div>
    </div>
  )
}

export default HomePage
