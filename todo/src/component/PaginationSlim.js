import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function PaginationSlim() {
  const location = useLocation();
  const [colorF, setColorF] = useState(false);
  const [colorG, setColorG] = useState(false);
  const [colorS, setColorS] = useState(false);
  const [colorFin, setColorFin] = useState(false);

  useEffect(() => {
    switch (location.pathname) {
      case '/forget-pwd':
        setColorF(true);
        setColorG(false);
        setColorS(false);
        setColorFin(false);
        break;
      case '/get-code-pin':
        setColorF(false);
        setColorG(true);
        setColorS(false);
        setColorFin(false);
        break;
      case '/set-new-pwd':
        setColorF(false);
        setColorG(false);
        setColorS(true);
        setColorFin(false);
        break;
      case '/finished':
        setColorF(false);
        setColorG(false);
        setColorS(false);
        setColorFin(true);
        break;
      default:
        setColorF(false);
        setColorG(false);
        setColorS(false);
        setColorFin(false);
        break;
    }
  }, [location.pathname]);

  return (
    <div className='pagination flex gap-1'>
      <div className={` ${colorF ? 'bg-blue-400' : 'bg-gray-300'} w-20 h-2 rounded-3xl`}></div>
      <div className={` ${colorG ? 'bg-blue-400' : 'bg-gray-300'} w-20 h-2 rounded-3xl`}></div>
      <div className={` ${colorS ? 'bg-blue-400' : 'bg-gray-300'} w-20 h-2 rounded-3xl`}></div>
      <div className={` ${colorFin ? 'bg-blue-400' : 'bg-gray-300'} w-20 h-2 rounded-3xl`}></div>
    </div>
  );
}

export default PaginationSlim;