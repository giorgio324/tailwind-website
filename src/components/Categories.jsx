import { serviceData } from '../data/servicesData';
import plusDecor from '../assets/images/plusDecor.svg';
import { useRef, useState } from 'react';
import redDecor from '../assets/images/redRectDecor.png';
const Categories = () => {
  const [activeCard, setActiveCard] = useState(null);
  const cardRef = useRef([]);
  // after adding all refs in cardref loop over them and remove classes, setactive card to the one you clicked and add the class to only that one
  const activateCard = (service) => {
    cardRef.current.forEach((card) =>
      card.classList.remove('bg-white', 'shadow-xl')
    );
    setActiveCard(service.id);
    cardRef.current[service.id].classList.add('bg-white', 'shadow-xl');
  };
  return (
    <div className='w-[90vw] mx-auto mt-20 relative'>
      <img src={plusDecor} alt='' className='absolute right-0 -z-10' />
      <div className='text-center'>
        <p className='text-primaryFontGray font-medium'>category</p>
        <h1 className='text-4xl text-primaryFont font-bold my-4'>
          We Offer Best Services
        </h1>
      </div>
      <div
        className='grid sm:grid-cols-2 lg:grid-cols-4 gap-x-16
      lg:gap-x-10 gap-y-12 justify-items-center items-center mt-24 '
      >
        {serviceData.map((service, index) => {
          const isFirstCard = index === 0;
          const isActiveCard =
            activeCard === service.id || (isFirstCard && !activeCard);
          return (
            <div
              className={`flex flex-col justify-center items-center text-center rounded-3xl sm:p-4 lg:px-2 relative cursor-pointer ${
                isFirstCard ? 'bg-white shadow-xl' : ''
              }`}
              key={service.id}
              onClick={() => activateCard(service)}
              ref={(el) => (cardRef.current[service.id] = el)}
            >
              {isActiveCard && (
                <img
                  src={redDecor}
                  alt=''
                  className='absolute left-2 bottom-4 transform -translate-x-1/2 translate-y-1/2 -z-10'
                />
              )}

              <div className='w-[150px] h-[150px] flex justify-center items-center'>
                <img src={service.img} alt={service.text} />
              </div>
              <h2 className='text-primaryFont font-bold mb-4'>
                {service.title}
              </h2>
              <p className='text-primaryFontGray font-medium max-w-[270px]'>
                {service.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Categories;
