import {
  HeroText1,
  HeroText2,
  subTitile1,
  subTitile2,
  buttonText,
} from '../constants/HeroSection';
import { IoBookOutline } from 'react-icons/io5';

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

        <div className="flex justify-center mt-12 space-x-10 ">
          {buttonText.map((item) => (
            <button
              key={item.id}
              className="flex items-center gap-2 bg-white text-2xl text-blue-700 font-semibold px-6 py-3 rounded-lg"
            >
              {' '}
              <IoBookOutline /> {item.text}
            </button>
          ))}
          <button className="bg-white text-2xl text-white font-semibold px-4 py-2 rounded-lg">
            Explore Courses
          </button>
        </div>

        <div className="flex justify-center mt-15 space-x-60 font-black text-white text-[40px]">
          <div className="flex flex-col items-center">
            <div>250K+</div>
            <div className="text-xl font-medium ">Global Students</div>
          </div>
          <div className="flex flex-col items-center">
            <div>500+</div>
            <div className="text-xl font-medium ">Expert Courses</div>
          </div>
          <div className="flex flex-col items-center">
            <div>50+</div>
            <div className="text-xl font-medium ">Countries</div>
          </div>
          <div className="flex flex-col items-center">
            <div>95%</div>
            <div className="text-xl font-medium ">Success Rate</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
