import React from 'react'
import { Link } from 'react-router-dom'

export const AppsRender = ({SecretSanta}) => {
  return (
      <>
      
          <div className="rounded-xl ml-10 border-2  border-gray-950 shadow-xl shadow-gray-950 ">
            <img
              className=" h-72 scale duration-500 cursor-pointer w-auto bg-current rounded-xl"
              src={SecretSanta}
              alt="Meta Img Invisible App"
              />
              <h3 className='mx-4 text-md greyFont'>Hover to zoom</h3>
          </div>
          <div className="flex flex-col  flex-wrap">
            <h2 className="mx-4 text-white font-serif text-3xl tracking-wide">Secret Santa</h2>
            <h3 className="mx-4 greyFont my-2 text-md text-white">Configure your settings and start</h3>
          <button className="m-20  yellowBg p-1 w-2/4 tracking-wide  font-bold rounded-md  hover:scale-110  hover:text-black  cursor-pointer  text-black shadow-md shadow-current"><Link to='/InvisibleFriend'><a>OPEN</a></Link></button>
              </div>
             
      </>
  )
}
