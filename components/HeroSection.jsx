import {HeroText1, HeroText2, subTitile1, subTitile2} from '../constants/HeroSection';

const HeroSection = () => {
  return (
    <>
      <div className="h-[calc(100vh-150px)] bg-gradient-to-r from-blue-800 via-purple-600 to-green-700">
        {HeroText1.map((item) => (
          <h1
            key={item.id}
            className="text-white text-7xl font-black pt-25 flex justify-center"
          >
            {item.title}
          </h1>
        ))}
        {HeroText2.map((item) => (
          <h1
            key={item.id}
            className="text-white text-7xl font-black pt-5 flex justify-center"
          >
            {item.title}
          </h1>
        ))}
        {subTitile1.map((item) => (
          <h1
            key={item.id}
            className="text-white text-3xl font-regular mt-12 flex justify-center"
          >
            {item.title}
          </h1>
        ))}
        {subTitile2.map((item) => (
          <h1
            key={item.id}
            className="text-white text-3xl font-regular mt-3 flex justify-center"
          >
            {item.title}
          </h1>
        ))}

        <div className='flex justify-center mt-12 space-x-10 '>
          <button className='bg-white text-2xl text-blue-700 font-semibold px-4 py-2 rounded-lg'>Explore Courses</button>
          <button className='bg-white text-2xl text-blue-700 font-semibold px-4 py-2 rounded-lg'>Explore Courses</button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
