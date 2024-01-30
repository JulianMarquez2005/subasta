import React from 'react';
import Menudropdown from './Menudropdown';


// estilo del clase div que contiene el Menudropdown //flex justify-evenly items-center

const CardMenu = ()  => {
    return(
        <div className="  mb-8 mt-12 h-20 bg-orange-500 rounded-xl shadow-lg overflow-x-auto  p-3 flex   items- gap-2 text-lg ">       
            <div  className=' absolute  z-10 bg-white'>
                <Menudropdown/>
            </div>
            
            <span>|</span>
            <div>
                <button>Año</button>
            </div>
            <span>|</span>
            <div>
                <button>Kilometraje</button>
            </div>
            <span>|</span>
            <div>
                <button>Cuota mensual</button>
            </div>
            <span>|</span>
            <div>
                <button>Tipo de carro</button>
            </div>
            <span>|</span>
            <div>
                <button>Caracteristicas</button>
            </div> 
        </div>
    );

}

export default CardMenu;