import { topDestinationsData } from '../data/topDestinations';
import tripDurationIcon from '../assets/images/tripDurationIcon.svg';
import springDecor from '../assets/images/springDecor.svg';
const Destinations = () => {
  return (
    <section className='w-full mt-28' id='destinations'>
      <div className='w-[90vw] mx-auto'>
        <div className='text-center'>
          <p className='text-primaryFontGray'>Top Selling</p>
          <h1 className='text-4xl text-primaryFont font-bold my-4'>
            Top Destinations
          </h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center mt-16 gap-y-16'>
          {topDestinationsData.map((destination, index) => {
            return (
              <div
                className='relative hover:scale-105 transition-all cursor-pointer'
                key={destination.id}
              >
                {/* if it is a last img add this decore */}
                {index === topDestinationsData.length - 1 && (
                  <img
                    src={springDecor}
                    className='absolute hidden sm:inline-block right-0 bottom-0 transform translate-x-[50%] -translate-y-8 -z-10'
                    alt=''
                  />
                )}
                <img
                  src={destination.img}
                  alt={destination.title}
                  className='w-[275px] h-[400px] object-cover rounded-xl'
                />
                <div className='px-4 py-8 rounded-bl-xl rounded-br-xl bg-white text-primaryFontGray flex flex-col gap-y-4 absolute bottom-0 w-full scale-[1.01] shadow-xl'>
                  <div className='flex justify-between'>
                    <p>{destination.title}</p>
                    <p>${destination.price}K</p>
                  </div>
                  <div className='flex gap-x-6'>
                    <img src={tripDurationIcon} alt='' />
                    <p>{destination.duration} Days Trip</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Destinations;
