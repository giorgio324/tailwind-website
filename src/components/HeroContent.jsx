import traveler from '../assets/images/Traveller.png';
import plane from '../assets/images/plane.svg';
import underline from '../assets/images/DecoreUnderline.svg';
import { PlayIcon } from '@heroicons/react/24/solid';
const HeroContent = () => {
  return (
    <section className='w-[90vw] mx-auto flex justify-center items-center my-14'>
      <div className='max-w-[540px] break-words flex justify-center flex-col items-center md:inline-block'>
        <p className='text-primaryOrange font-bold uppercase'>
          best destinations around the world
        </p>
        <h1 className='text-5xl text-center md:text-left md:text-6xl lg:text-7xl my-8 font-[Volkhov] text-primaryFont'>
          Travel,{' '}
          <span className='relative'>
            enjoy{' '}
            <img
              className='absolute bottom-2 left-0 md:left-5 md:bottom-0 md:scale-110 '
              src={underline}
              alt=''
            />
          </span>{' '}
          and live a new and full life
        </h1>
        <p className='text-primaryFontGray max-w-[470px] font-medium'>
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
        <div className='flex gap-x-10 my-8 z-20'>
          <button className='p-3 bg-yellow-500 text-white rounded-md text-sm shadow-md cursor-pointer '>
            Find out more
          </button>
          <div className='flex gap-x-8 justify-center items-center cursor-pointer'>
            <button className='bg-primaryOrange w-[40px] h-[40px] rounded-full flex justify-center items-center'>
              <PlayIcon className='w-4 text-white' />
            </button>
            <p className='text-primaryFontGray text-sm'>Play Demo</p>
          </div>
        </div>
      </div>
      <div className='hidden md:inline-block relative'>
        <img src={traveler} className='min-w-[355px]' alt='' />
        <img
          src={plane}
          alt=''
          className='absolute top-0 left-[15%] -z-10 w-[130px]'
        />
        <img
          src={plane}
          alt=''
          className='absolute top-[10%] right-0 -z-10 w-[130px]'
        />
      </div>
    </section>
  );
};
export default HeroContent;
