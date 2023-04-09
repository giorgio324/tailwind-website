import logo from '../assets/images/Logo.svg';
import { Bars3Icon } from '@heroicons/react/24/outline';
import NavModal from './NavModal';
import { useState } from 'react';
import { navLinks } from '../data/linksData';
const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <section>
      {isNavOpen ? (
        <NavModal isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      ) : (
        ''
      )}
      <nav className='w-[90vw] font-medium mx-auto flex justify-between py-8 z-20 items-center'>
        <img src={logo} alt='' />
        <div
          onClick={() => setIsNavOpen(!isNavOpen)}
          className='w-6 md:hidden cursor-pointer'
        >
          <Bars3Icon />
        </div>
        <div className='hidden md:flex gap-x-12'>
          <ul className='flex gap-x-6 items-center'>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`}>{link.label}</a>
              </li>
            ))}
          </ul>
          <div className='flex gap-x-6 items-center'>
            <button>Login</button>
            <button className='px-4 py-1 border border-gray-800 rounded hover:bg-gray-600 hover:text-white transition duration-300 ease-in-out'>
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </section>
  );
};
export default Navbar;
