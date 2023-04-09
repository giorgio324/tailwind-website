import { XMarkIcon } from '@heroicons/react/24/solid';
import { navLinks } from '../data/linksData';
const NavModal = ({ isNavOpen, setIsNavOpen }) => {
  const handleCloseNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <nav className='flex justify-center items-center w-full h-full fixed top-0 bg-[#FFF1DA] overflow-hidden'>
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
    </nav>
  );
};
export default NavModal;
