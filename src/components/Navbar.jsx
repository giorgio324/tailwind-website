import logo from '../assets/images/Logo.svg';
import { Bars3Icon } from '@heroicons/react/24/outline';
const Navbar = () => {
  return (
    <nav className='w-[90vw] font-medium mx-auto flex justify-between py-8 z-20'>
      <img src={logo} alt='' />
      <div className='w-6 md:hidden cursor-pointer'>
        <Bars3Icon />
      </div>
      <div className='hidden md:flex gap-x-12'>
        <ul className='flex gap-x-6 items-center'>
          <li>
            <a href='#destinations'>Destinations</a>
          </li>
          <li>
            <a href='#hotels'>Hotels</a>
          </li>
          <li>
            <a href='#flights'>Flights</a>
          </li>
          <li>
            <a href='#bookings'>Bookings</a>
          </li>
        </ul>
        <div className='flex gap-x-6 items-center'>
          <button>Login</button>
          <button className='px-4 py-1 border border-gray-800 rounded hover:bg-gray-600 hover:text-white transition duration-300 ease-in-out'>
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
