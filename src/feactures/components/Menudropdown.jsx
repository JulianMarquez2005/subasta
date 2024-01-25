import React, {useState} from 'react;'
import './app.css';
import Dropdown from tailwind;


function Menudropdown() {
    const [isOpen, setIsopen] = (useState)
    return(
        <div>
            <button  
            onClick={() => setIsopen((prev) => !prev)}  
            className='class="p-3 w-full flex justify-between items-center gap-2 bg-white bg-gradient-to-br from-transparent via-tertiary-100/10 to-tertiary-100/50 text-lg'>
                marca
                {!isopen ? (
                    <Down className="h-8"/>
                ) : ( 
                    
                    <Up className="h-8"/>
                    )}
            </button>
        </div>  
    );
} 

export default Menudropdown;