import decoreImg from '../assets/images/decoreFooter.svg';
import facebookIcon from '../assets/images/facebook.svg';
import twitterIcon from '../assets/images/twitter.svg';
import instagramIcon from '../assets/images/instagram.svg';
import googlePlayIcon from '../assets/images/googlePlay.svg';
import appStoreIcon from '../assets/images/appStore.svg';
const Footer = () => {
  return (
    <footer className='w-full mt-28 relative '>
      <div className='w-[90vw] mx-auto grid md:grid-cols-2  lg:grid-cols-3  gap-8 lg:gap-20'>
        <div className='hidden md:flex flex-col gap-y-4 self-center justify-self-center '>
          <h1 className='text-[44px] font-bold font-[Poppins] text-primaryFont'>
            Jadoo.
          </h1>
          <p className='w-[200px] text-primaryFontGray'>
            Book your trip in minute, get full Control for much longer.
          </p>
        </div>
        {/* contact thing */}
        <div className='flex gap-x-8 lg:gap-x-12 self-center justify-self-center'>
          <div className='flex flex-col gap-y-4'>
            <h1 className='font-bold text-primaryFont text-xl'>Company</h1>
            <ul className='flex flex-col gap-y-2 text-primaryFontGray'>
              <li>About</li>
              <li>Careers</li>
              <li>Mobile</li>
            </ul>
          </div>
          <div className='flex flex-col gap-y-4'>
            <h1 className='font-bold text-primaryFont text-xl'>Contact</h1>
            <ul className='flex flex-col gap-y-2 text-primaryFontGray'>
              <li>Help/FAQ</li>
              <li>Press</li>
              <li>Affiliates</li>
            </ul>
          </div>
          <div className='flex flex-col gap-y-4'>
            <h1 className='font-bold text-primaryFont text-xl'>More</h1>
            <ul className='flex flex-col gap-y-2 text-primaryFontGray'>
              <li>Airlinereefs</li>
              <li>Airline</li>
              <li>Low fare tips</li>
            </ul>
          </div>
        </div>
        {/* social media */}
        <div className='flex flex-col gap-y-8 self-center justify-self-center'>
          <div className='flex gap-x-8'>
            <a href='https://facebook.com' target='_blank'>
              <div className='w-[40px] h-[40px] rounded-full shadow-xl flex items-center justify-center cursor-pointer '>
                <img src={facebookIcon} alt='' />
              </div>
            </a>
            <a href='https://instagram.com' target='_blank'>
              <div className='w-[40px] h-[40px] rounded-full shadow-xl flex items-center justify-center cursor-pointer  bg-black'>
                <img src={instagramIcon} alt='' className='' />
              </div>
            </a>
            <a href='https://twitter.com' target='_blank'>
              <div className='w-[40px] h-[40px] rounded-full shadow-xl flex items-center justify-center cursor-pointer '>
                <img src={twitterIcon} alt='' />
              </div>
            </a>
          </div>
          <div className='flex flex-col gap-y-4'>
            <h1 className='font-bold text-primaryFontGray text-xl'>
              Discover our app
            </h1>
            <div className='flex gap-x-2'>
              <img src={googlePlayIcon} alt='' />
              <img src={appStoreIcon} alt='' />
            </div>
          </div>
        </div>
      </div>

      <img src={decoreImg} alt='' className='absolute right-0 bottom-0' />
      <div className='py-12'>
        <p className='text-center text-primaryFontGray font-medium'>
          All rights reserved@jadoo.co
        </p>
      </div>
    </footer>
  );
};
export default Footer;
