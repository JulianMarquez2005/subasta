import { useState } from 'react'
import React from 'react';


// const CardMenu = ()  => {
//     return(

const Menudropdown = () => {
    const [open, setOpen] =useState(false);
    const Menus = ['ford', 'mercedez', 'kia', 'chevrolet']

    return(
        <>
            <button  className='bg-red-600' 
            onClick={() => setOpen(!open)}
            >Marca</button>
            <div >
                {
                    open && 
                    <ul>
                    {
                        Menus.map((menu) => (
                            <li className='p-2 text-lg cursor-pointer rounded hover:bg-orange-200' key={menu}>{menu}</li>
                        ))
                    }
                </ul>
                }
            </div>
                
        </>
    );  
}

export default Menudropdown;