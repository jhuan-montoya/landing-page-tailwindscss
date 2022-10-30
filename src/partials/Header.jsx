import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/Know-Stuff-Logo-300x233.png'

function Header() {

  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out`}>
      <div className='ml-5 mt-2 text-white'>

        
<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24 30.65q4.15-3.8 5.325-5.3 1.175-1.5 1.175-3t-1.05-2.55q-1.05-1.05-2.55-1.05-.85 0-1.625.35T24 20.05q-.5-.6-1.275-.95-.775-.35-1.625-.35-1.5 0-2.55 1.05-1.05 1.05-1.05 2.55 0 .75.2 1.4.2.65.9 1.55t1.975 2.15Q21.85 28.7 24 30.65Zm0 12.3q-6.5-1.8-10.75-7.775Q9 29.2 9 21.95v-11.3l15-5.6 15 5.6v11.3q0 7.25-4.25 13.225T24 42.95Zm0-2.4q5.6-1.8 9.175-7 3.575-5.2 3.575-11.6v-9.7L24 7.45l-12.75 4.8v9.7q0 6.4 3.575 11.6 3.575 5.2 9.175 7ZM24 24Z"/></svg>
      </div>
    </header>
  );
}

export default Header;
