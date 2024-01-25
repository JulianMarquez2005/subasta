import React from 'react';


const Card = () => {

  return (
    <section className='grid gap-16 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
      <article className='flex flex-col justify-between bg-white rounded-xl shadow-lg'>
            <input type='hidden'>
              </input>
        <div className="h-72 md:h-60 rounded-t-xl overflow-hidden">
          <figure className='h-full relative'>
            <img src='/src/assets/0-0.jpg' className="card1 h-full w-full object-cover object-center" loading='lazy' />
            <div>
              <img src="data:image/png;base64,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" alt="Imagen Normal" class=" absolute top-0 right-4 h-12  hover:top-3"></img>
              <div className='bg-tertiary absolute top-0 right-4 w-[3.51rem] h-[1.1rem] border-l-[1.34px] border-r-[1.34px] border-white transition duration-700 hover:border-r-5'>
              </div>
            </div>
          </figure>
        </div>




        
            <div className=" texto-1 spincar-srp-360-wa-button display: block; width: 100%; background-color: rgb(0, 161, 155); text-align: center; font-weight: bold; cursor: pointer; z-index: 1" >360° WalkAround
            </div>




        <div className='datos p-4 flex justify-between'>
          <div>
            <div className='flex flex-wrap gap-1 text-lg font-semibold md:text-xl'>
              <h2 className='capitalize'>Kia</h2>

            </div>
            <span className='block text-gray-800 text-md md:text-lg mt-2'>
              2015|63.505 Km
            </span>
            <span className='block text-gray-800 text-md md:text-lg mt-2'>
              Cuota mensual:
            </span>
            <span className='block text-gray-800 text-md md:text-lg mt-2'>
              $619.822
            </span>
            <span className='mx-2'>Ver detalles</span>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Card;
