import React from 'react';
import { Link } from 'react-router-dom';

function CTA() {
  return (
    <div className='h-[500px] flex flex-col justify-center items-center relative gap-y-12 bg-indigo-400'>
      <div>
        <h2 className='text-center font-semibold text-3xl mb-5'>
          Don't lose time, find your dream Home
        </h2>
        <p className=' font-serif'>
          At our property booking service, we are committed to providing you with the best offers and top-notch services to ensure your satisfaction.
        </p>
        <p className='text-center'>
          Whether you're looking to buy, rent, or invest, we've got the perfect property for you!
        </p>
      </div>
      
      <div className="flex gap-x-4 ">
        <Link to="/find-props" className='btn-primary'>
          Get NOW !
        </Link>
      </div>
    </div>
  );
}

export default CTA;
