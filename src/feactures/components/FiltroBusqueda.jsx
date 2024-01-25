import React from 'react'

const FiltroBusqueda = () => {
    return(
        <sesion className="mt-{28} p-8 h-2">
            <div className="contentFiltro mt-16">
                <form>
                    <input type="text"  className="block w-full px-4 py-2 mt-2 text-black-700 bg-white placeholder:text-gray-400 border border-gray-200 rounded-md focus:border-primary-50 focus:ring-primary-50 focus:outline-none focus:ring focus:ring-opacity-40 disabled:bg-gray-100 disabled:text-gray-400 pl-8 w-full rounded-xl mt-0 bg-gray-200 focus:ring-0"  placeholder='Buscar'/>
                </form>
            </div>
            <div className="limpiarFiltros  flex mt-5" >
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="text-gray-600" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"></path></svg>
                <h2 className='mx-5'>Filtros</h2>
                <button className=" mx-5 border-2 border-gray-400 bg-slate-500 rouded-lg hover:text-red-700 inline-flex justify-center items-center rounded-lg border disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none hover:opacity-80 focus:shadow-none focus:opacity-[0.85] active:shadow-none active:opacity-[0.85] disabled:shadow-none transition-opacity border-none text-tertiary hover:bg-tertiary/10 focus:bg-tertiary/10  text-sm p-2 md:block" >Limpiar</button>
            </div>
            <div className='bg-white rounded-xl shadow-lg flex justify-between items-center overflow-x-auto'>
                
            </div>
        </sesion>
        
    );     
}

export default FiltroBusqueda;