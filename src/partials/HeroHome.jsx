import React, { useState } from 'react';
import Modal from '../utils/Modal';


import HeroImage from '../images/a.jpg';

function HeroHome() {

  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative">
       {/* Section background (needs .relative class on parent and next sibling elements) */}
       <div className="relative h-screen bg-cover bg-[url('src/images/a.jpg')]" aria-hidden="true">
        <div className='flex items-center font-mono inset-0 absolute text-6xl w-full bg-gray-400/50'>
          <div className='p-6 font-bold text-white w-2/5	'>
          Projeto <span className=''>para contruir </span><span>um novo futuro</span>
          <div className='font-normal text-lg'>
            <p>Criando um movimento de conscientização e cooperação!</p>
          </div>

          </div>
        </div>
        </div>  

    </section>
  );
}

export default HeroHome;