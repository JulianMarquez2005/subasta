import React from 'react';
import Menudropdown from '../menudropdown/Menudropdown';



// estilo del clase div que contiene el Menudropdown //flex justify-evenly items-center

const CardMenu = ()  => {
    return(
        <div className=" mt-12 h-20 bg-slate-50 rounded-xl shadow-lg overflow-x-auto h-34 p-3 w-full flex justify-between items-center gap-2 text-lg">
                 
            <div  className='bg-white p-4 w-28 shadow-lg  absolute'>
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