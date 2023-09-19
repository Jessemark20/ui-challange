import React from 'react'

export default function
    () {
    return (
        <div className='pt-6 pb-4 border-b border-gray-500'>
            <nav className="navabar container mx-auto flex justify-between items-center text-white">
                <div>
                    <h3 className='text-[30px] font-[700] font-robo'>get<span className='text-secondary'>linked</span> </h3>
                </div>

                <div className="flex gap-20 items-center">
                    <div className='flex gap-16 font-[16px]'>
                        <div className='font-mon'>Timeline</div>
                        <div className='font-mon text-gray-300'>Overview</div>
                        <div className='font-mon'>FAQs</div>
                        <div className='font-mon'>Contact</div>


                    </div>

                    <div>
                        <button className='font-mon bg-gradient-to-r from-secondary from-56% via-[#FF26B9] via-99% to-[#FE34B9] to-100% w-[172px] h-[53px] rounded-[4px]'>Register</button>
                    </div>

                </div>
                
            </nav>
        </div>
    )
}
