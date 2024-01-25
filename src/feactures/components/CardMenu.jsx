import React from 'react';


const CardMenu = ()  => {
    return(
        <div className="bg-slate-50 rounded-xl shadow-lg flex justify-evenly items-center overflow-x-auto h-34 p-3 w-full flex justify-between items-center gap-2 text-lg">
        
            <div>
                <button className='p-5'>Marca</button>
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