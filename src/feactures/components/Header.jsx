import React from 'react'

const Header = () => {
  return (
    <header className="header shadow bg-green-200 sticky top-0 z-10">
      <div className="logo-container max-w-screen-2xl mx-2 md:mx-[10%] px-3 md:px-5">
        <nav className="w-full">
          <div className='justify-between md:items-center md:flex'>
            <div className='flex items-center justify-between py-4 md:block'>
                <a href='/'>
                  <picture>
                  <img src='/' alt='Logo Subasta' className='max-w-[10rem]'></img>
                  </picture>
                </a>
              <div className='md:hidden'>
                <button className='p-2 text-gray-700 rounded-md outline-none text-2xl focus:border-gray-400 focus:border'>
                  <svg className='stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"'>
                    <path d="M64 384h384v-42.666H64V384zm0-106.666h384v-42.667H64v42.667zM64 128v42.665h384V128H64z">
                  </path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
            
        </nav>
       
      </div>
      
      <div className="menuHeader flex-1 justify-self-center pb-3 md:block md:pb-0 md:mt-0 hidden">
        <ul className='items-center justify-center md:flex md:space-x-4 md:space-y-0 text-gray-900'>
          <li >
            <a className='block py-2 px-2 hover:bg-gray-100 rounded-md font-bold undefined' href="#">Inicio
            </a>
          </li>


          <li>
            <a aria-current="page" className='block py-2 px-2 hover:bg-gray-100 rounded-md font-bold undefined active' href="#">Vehículos
            </a>
          </li>



          <li>
            <a className="block py-2 px-2 hover:bg-gray-100 rounded-md font-bold undefined"href="#">Ayuda
            </a>
          </li>




          <li>
            <button className='block text-left w-full py-2 px-2 hover:bg-gray-100 rounded-md font-bold' href="#">Contacto
            </button>
          </li>


          <li>
            <a className='block py-2 px-2 hover:bg-gray-100 rounded-md font-bold undefined' href="#">Políticas
            </a>
          </li>
        
        
        </ul>

            <div className='md:hidden mt-3 space-y-2'>

            </div>


      </div>

          <div className='hidden space-x-2 md:flex md:items-center'>

          </div>


          
      
    </header>
  );
}

export default Header;