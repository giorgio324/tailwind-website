import Navbar from './Navbar';
import elipse from '../assets/images/EllipseHero.svg';
import decor from '../assets/images/Decore.svg';
import HeroContent from './HeroContent';

const Hero = () => {
  return (
    <section className='w-full relative min-h-screen'>
      <img src={elipse} alt='' className='absolute top-0 left-0 -z-10' />
      <img src={decor} alt='' className='absolute right-0 top-0 -z-10 ' />
      <Navbar className='z-10 relative' />
      <HeroContent />
    </section>
  );
};

export default Hero;
