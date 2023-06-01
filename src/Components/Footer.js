import React from 'react'
import {hero} from '../Data/Hero'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {

    const links = hero.map((i, k) => {
        return (
            <button className={` w-[50px] hover:bg-white hover:text-black p-4 rounded-full text-white`} key={k}>
                <a href={i.url}>
                <FontAwesomeIcon icon={i.fa} />
                </a>
            </button>
        )
      });
      
      const sendEmail = () => {
        window.open('mailto:vincegabriel.flores@gmail.com')
      }

  return (
    <div className='footer w-full bg-black dark:bg-red-700 p-8  gap-8 flex flex-col justify-center items-center'>
        <div className='flex gap-2' >

        {links}
        <button onClick={sendEmail}  className={` w-[50px] hover:bg-white hover:text-black p-4 rounded-full text-white`} >
            
                <FontAwesomeIcon icon={faEnvelope} />

            </button>

        </div>

        <p className='w-full text-xs text-white text-center'>@vinceflores. All rights reserved</p>
    </div>
  )
}

export default Footer