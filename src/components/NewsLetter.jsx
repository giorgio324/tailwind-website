import sendIcon from '../assets/images/subscribtionSendIcon.svg';
import decoreCirclesLeft from '../assets/images/subscriptionDecoreCircles1.svg';
import decoreCirclesRight from '../assets/images/subscriptionDecoreCircles.svg';
import decorePluses from '../assets/images/subscriptionDecore.svg';
const NewsLetter = () => {
  return (
    <section className='w-full mt-28'>
      <div className='w-[85vw] mx-auto rounded-2xl sm:rounded-tl-[200px] relative bg-[#DFD7F9]'>
        <div className='relative flex flex-col justify-center items-center'>
          <img
            src={decoreCirclesLeft}
            alt=''
            className='absolute left-0 bottom-0'
          />
          <img
            src={decoreCirclesRight}
            alt=''
            className='absolute right-0 top-0'
          />
          <img
            src={decorePluses}
            alt=''
            className='absolute hidden lg:inline-block bottom-0 right-0 transform translate-x-1/3 -z-10 translate-y-1/2'
          />
          <img
            src={sendIcon}
            alt=''
            className='absolute hidden sm:inline-block right-0 top-0 transform translate-x-1/4 -translate-y-1/4'
          />
          <div className='flex justify-center items-center pt-[100px]'>
            <h2 className='text-xl md:text-[28px] lg:text-[33px] text-center sm:w-[280px] md:w-[550px] lg:w-[850px] text-primaryFontGray font-bold px-4 '>
              Subscribe to get information, latest news and other interesting
              offers about Cobham
            </h2>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            action='#'
            className='flex  gap-y-4 flex-col md:flex-row justify-center items-center gap-x-4 py-[100px] relative max-w-xs sm:max-w-none'
          >
            <input
              type='text'
              className='text-xl border border-none rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent pl-4 w-full md:max-w-md lg:max-w-xl md:w-auto py-3 sm:w-[350px] min-w-[200px] md:min-w-[420px]'
              placeholder={`Your email`}
            />
            <button className='bg-primaryOrange rounded-md text-white py-3 px-10 transition-colors hover:bg-orange-500 w-full text-xl'>
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default NewsLetter;
