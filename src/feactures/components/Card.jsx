import React from 'react';


const Card = () => {

  return (
    <section className=''>
      <article>
        <div className="image-container">
          <figure>
            <img src='/src/assets/0-0.jpg' className="card1" />
          </figure>
        </div>
        <div className='texto-1'>
          <figure className='' >
            <ul>
              <a href="#" className='text-white'>360° WalkAround</a>
            </ul>
          </figure>
        </div>


        <div className='p-4 flex justify-between'>
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
              $ 619.822
            </span>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Card;
