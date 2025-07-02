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
    <div className="min-h-[calc(100vh-150px)] bg-gradient-to-r from-blue-800 via-purple-600 to-green-700 px-4 md:px-8">
      {/* Main Titles */}
      <div className="pt-20 text-center">
        {HeroText1.map((item) => (
          <h1
            key={item.id}
            className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black"
          >
            {item.title}
          </h1>
        ))}
        {HeroText2.map((item) => (
          <h1
            key={item.id}
            className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black mt-3"
          >
            {item.title}
          </h1>
        ))}
      </div>

      {/* Subtitles */}
      <div className="mt-8 text-center">
        {subTitile1.map((item) => (
          <h2
            key={item.id}
            className="text-white text-base sm:text-xl md:text-2xl font-light"
          >
            {item.title}
          </h2>
        ))}
        {subTitile2.map((item) => (
          <h2
            key={item.id}
            className="text-white text-base sm:text-xl md:text-2xl font-light mt-2"
          >
            {item.title}
          </h2>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-10">
        {buttonText.map((item) => (
          <button
            key={item.id}
            className="flex items-center gap-2 bg-white text-blue-700 text-lg sm:text-xl md:text-2xl font-semibold px-6 py-3 rounded-lg"
          >
            <IoBookOutline />
            {item.text}
          </button>
        ))}
        <button className="bg-white text-blue-700 text-lg sm:text-xl md:text-2xl font-semibold px-6 py-3 rounded-lg">
          Explore Courses
        </button>
      </div>

      {/* Stats Section */}
      <div className="flex flex-wrap justify-center gap-12 md:gap-20 mt-16 font-black text-white text-center">
        <div className="flex flex-col items-center">
          <div className="text-3xl sm:text-4xl md:text-5xl">250K+</div>
          <div className="text-base sm:text-lg md:text-xl font-medium">
            Global Students
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-3xl sm:text-4xl md:text-5xl">500+</div>
          <div className="text-base sm:text-lg md:text-xl font-medium">
            Expert Courses
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-3xl sm:text-4xl md:text-5xl">50+</div>
          <div className="text-base sm:text-lg md:text-xl font-medium">
            Countries
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-3xl sm:text-4xl md:text-5xl">95%</div>
          <div className="text-base sm:text-lg md:text-xl font-medium">
            Success Rate
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
