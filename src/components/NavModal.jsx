import { XMarkIcon } from '@heroicons/react/24/solid';
import { navLinks } from '../data/linksData';
const NavModal = ({ isNavOpen, setIsNavOpen }) => {
  const handleCloseNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <nav className='flex flex-col justify-center items-center w-full h-full fixed top-0 bg-[#FFF1DA] overflow-hidden z-50'>
      <button
        onClick={() => setIsNavOpen(!isNavOpen)}
        className='absolute left-[90vw] top-9 cursor-pointer w-6'
      >
        <XMarkIcon />
      </button>
      <ul className='flex flex-col gap-y-10 text-3xl justify-center items-center'>
        {navLinks.map((link) => (
          <li key={link.id}>
            <a href={`#${link.id}`} onClick={handleCloseNav}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <div className='flex flex-col gap-y-6 items-center mt-8 text-3xl'>
        <button>Login</button>
        <button className='px-4 py-1 border border-gray-800 rounded hover:bg-gray-600 hover:text-white transition duration-300 ease-in-out'>
          Sign Up
        </button>
      </div>
    </nav>
  );
};
export default NavModal;
