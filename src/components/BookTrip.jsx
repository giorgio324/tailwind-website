import { bookData } from '../data/bookData';
import travelImg from '../assets/images/tripImg.jpg';
import heartIcon from '../assets/images/hearIcon.svg';
import buildingIcon from '../assets/images/buildingIcon.svg';
import leafIcon from '../assets/images/leafIcon.svg';
import sendIcon from '../assets/images/sendIcon.svg';
import mapIcon from '../assets/images/mapIcon.svg';
import greeceProgress from '../assets/images/greeceProgress.jpg';
const BookTrip = () => {
  return (
    <section className='w-full mt-28' id='bookings'>
      <div className='w-[90vw] mx-auto grid justify-items-center lg:grid-cols-2'>
        <div className='flex flex-col gap-y-8'>
          <p className='text-primaryFontGray font-medium text-center lg:text-left'>
            Easy and Fast
          </p>
          <h2 className='text-center lg:text-left text-primaryFont text-4xl font-bold lg:max-w-sm font font-[Volkhov]'>
            Book Your Next Trip In 3 Easy Steps
          </h2>
          <div className='flex flex-col gap-y-8'>
            {bookData.map((book) => {
              return (
                <div className='flex items-start gap-x-4 ' key={book.id}>
                  <img src={book.icon} alt={book.title} className='' />
                  <div>
                    <h3 className='text-primaryFontGray font-bold mb-2'>
                      {book.title}
                    </h3>
                    <p className='text-primaryFontGray'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Non, inventore.
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className='self-center justify-self-center relative transition-all hover:scale-[1.01] cursor-pointer hidden lg:inline-block'>
          <div className='p-4 shadow-xl rounded-xl'>
            <img src={travelImg} alt='' className='my-4' />
            <h3 className='text-lg font-bold mb-2'>Trip To Greece</h3>
            <p className='mb-4'>14-29 june| by Robbin joseph</p>
            <div className='flex gap-x-4 mb-6'>
              <img src={leafIcon} alt='' />
              <img src={mapIcon} alt='' />
              <img src={sendIcon} alt='' />
            </div>
            <div className='flex justify-between'>
              <div className='flex gap-x-4'>
                <img src={buildingIcon} alt='' />
                <p>24 people going</p>
              </div>
              <img src={heartIcon} alt='' />
            </div>
          </div>

          <div className='flex justify-start gap-x-4 p-4 bg-white shadow-xl rounded-xl absolute top-[60%] -right-[20%]'>
            <img
              src={greeceProgress}
              alt=''
              className='w-[50px] h-[50px] object-cover rounded-full'
            />
            <div className=''>
              <p className='text-primaryFontGray'>Ongoing</p>
              <h3 className='font-bold'>Trip to rome</h3>
              <p className='font-bold flex  gap-x-2 mb-1'>
                <span className='text-purple-400 font-normal'>40%</span>
                completed
              </p>
              <div className='h-[5px] w-full rounded-xl bg-gray-400'>
                <div className='h-[5px] bg-purple-400 w-[40%] rounded-xl'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BookTrip;
