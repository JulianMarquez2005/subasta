import { useState } from 'react'
import React from 'react';


const Menudropdown = () => {
    const [open, setOpen] =useState(false);
    const Menus = ['renault','ford','mercedez benz','kia','chevrolet','volkswagen', 'mazda', 'hyundai','nissan','mitsubishi']

    return(
        <>
            <button  className=' hover:bg-transparent focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-transparent' 
            onClick={() => setOpen(!open)}
            >Marca
            </button>
            <div className='after:absolute after:contnent-[""]   z-40'>
                {
                    open && 
                    <ul className=' margin-bottom: 2px place-items-center'>
                    {
                        Menus.map((menu) => (
                            <li className='p-2 text-lg cursor-pointer rounded hover:bg-orange-200  ' key={menu}>{menu}</li>
                        ))
                    }
                </ul>
                }
            </div>
                
        </>
    );  
}

export default Menudropdown;