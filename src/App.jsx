import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import CoursePreview from '../components/CoursePreview'
import { useEffect, useState } from 'react';
import { debounce } from 'lodash';

const App = () => {
  const [height, setHeight] = useState(64);

  useEffect(() => {
    const updatedDimensions = () => {
      const screenHeight = window.innerHeight;

      if (screenHeight < 600) setHeight(56);
      else if (screenHeight < 800) setHeight(64);
      else if (screenHeight < 1000) setHeight(80);
      else setHeight(96);
    };

    const debouncedUpdate = debounce(updatedDimensions, 200);
    updatedDimensions();
    window.addEventListener('resize', debouncedUpdate);
    return () => {
      window.removeEventListener('resize', debouncedUpdate);
      debouncedUpdate.cancel();
    };
  }, []);
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: `${height}px` }}>
        <HeroSection />
        <CoursePreview />
        <Footer />
      </div>
    </>
  );
};

export default App;
