import Link from 'next/link'
import React from 'react'

function ConferenceProgram() {
  return (
    <div className='ConferenceProgram font'>
        <div style={{marginBottom:"50px"}}  className='m-auto items-center flex flex-col md:flex-row  justify-center'>
            <Link href={'/about'}>
            <button className='m-3  w-1/2 md:w-auto'>
                <p style={{ backgroundColor: "rgba(24, 67, 83, 1)" }} className=' text-white py-3 px-6 border-2 rounded-lg border-black/[0.05]'>About Rourkela</p>
            </button>
            </Link>
            <Link href={'https://odishatourism.gov.in/content/tourism/en/discover/major-cities/rourkela.html'}>
            <button className='m-3  w-1/2  md:w-auto'>
                <p className='m-auto py-3 px-6 border-2 text-[#184353] rounded-lg border-[#184353]/[1]'>View Rourkela Tourism Website</p>
            </button></Link>
            <Link href={'https://nitrkl.ac.in/'}>
            <button className='m-3 w-1/2 md:w-auto'>
                <p style={{ backgroundColor: "rgba(24, 67, 83, 1)" }} className='text-white py-3 px-6 border-2 rounded-lg border-black/[0.05]'>View NITR Website</p>
            </button></Link>
        </div>
        <div style={{ backgroundColor: "rgba(16, 44, 58, 1)" }} className='text-white text-center flex flex-col py-4 ConferenceProgram_container items-center justify-center md:w-[78%] m-auto md:rounded-xl rounded-none
        '>
                <h1 className='text-3xl  mt-6'>CONFERENCE PROGRAM</h1>
                <div style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }} className=' h-1 w-1/5 my-4'></div>
                <p className='my-2 '>TENTATIVE PROGRAM (AS ON January 15, 2022)</p>
                <Link href={'/flyer.pdf'}>
                <a style={{ backgroundColor: "rgba(24, 67, 83, 1)" }} className="ConferenceProgram_button py-2 px-5 rounded-lg mt-8 mb-7">View Program</a>
        </Link>
        </div>
    </div>
  )
}

export default ConferenceProgram