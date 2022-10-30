import React from 'react';


import Socrates from '../images/Socrates1.jpg';

function Testimonials() {
  return (
    <section className="relative">

      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
         
      

          {/* Items */}
          

          {/* Testimonials */}
          <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">

              {/* Testimonial */}
              <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">

                  <img className="relative rounded-full" src={Socrates} width="126" height="126" alt="Socrates" />
                </div>
                <blockquote className="text-xl font-medium mb-4">
                  “ Se alguém procura a saúde, pergunta-lhe primeiro se está disposto a evitar no futuro as causas da doença; em caso contrário, abstém-te de o ajudar. “
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">Socrates</cite>
               
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Testimonials;