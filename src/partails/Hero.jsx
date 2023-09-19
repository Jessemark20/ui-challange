import React from 'react'
import chain from '../assets/images/chain-9365116-7621444.png'

export default function Hero() {
  return (
    <div className='hero-section p-6'>
        <div className="flex w-full">
            <div className="w-1/2">
                <div className="flex-col">

                    <div className='flex-flex-col'>
                    <h1 className='text-white text-[50px] font-mon font-bold'>getlinked Tech</h1>
                    <h1 className='text-white text-[50px] font-bold flex items-center'>Hackathon <span className='text-secondary'>1.0</span> 

                    <img src={chain} className='h-[70px]' alt="" />
                    </h1>
                    </div>
                    
                    <div className="mt-6">
                        <p className='text-white font-mon text-[20px]'>
                        Participate in getlinked tech Hackathon 2023 stand 
                        a chance to win a Big prize
                        </p>
                    </div>


                    <div className='mt-8'>
                    <button className='font-mon bg-gradient-to-r from-secondary from-56% via-[#FF26B9] via-99% to-[#FE34B9] to-100% w-[160px] h-[50px] rounded-[4px] text-white'>Register</button>
                    </div>
                </div>
            </div>

            <div className="flex">

            </div>
        </div>
    </div>
  )
}
