import { logoData } from '../data/logosData';
const Logos = () => {
  return (
    <section className='w-full mt-28'>
      <div className='w-[90vw] mx-auto flex flex-wrap justify-center items-center gap-8'>
        {logoData.map((logo) => {
          return (
            <div
              className='p-4 shadow-xl rounded-xl flex flex-col justify-center items-center h-[100px] w-[180px] hover:scale-[1.02] transition-all'
              key={logo.id}
            >
              <img src={logo.icon} alt='' />
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Logos;
