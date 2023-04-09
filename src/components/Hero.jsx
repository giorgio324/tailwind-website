import Navbar from './Navbar';
import elipse from '../assets/images/EllipseHero.svg';
import decor from '../assets/images/Decore.svg';

const Hero = () => {
  return (
    <section className='w-full relative min-h-screen'>
      <Navbar className='z-10 relative' />
      <img src={elipse} alt='' className='absolute top-0 left-0' />
      <img src={decor} alt='' className='absolute right-0 top-0 -z-10 ' />
    </section>
  );
};

export default Hero;
