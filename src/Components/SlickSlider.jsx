import React, { useState, useEffect } from 'react';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const videos = [
    {
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      alt: "Video 1",
      title: "⭐⭐⭐⭐",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at consectetur nibh."
    },
    {
      src: "https://www.w3schools.com/html/movie.mp4",
      alt: "Video 2",
      title: "⭐⭐⭐⭐",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at consectetur nibh."
    },
    {
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      alt: "Video 3",
      title: "⭐⭐⭐⭐",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at consectetur nibh."
    },
    {
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      alt: "Video 4",
      title: "⭐⭐⭐⭐",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at consectetur nibh."
    },
    {
      src: "https://www.w3schools.com/html/movie.mp4",
      alt: "Video 5",
      title:"⭐⭐⭐⭐⭐",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at consectetur nibh."
    }
  ];

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (videos.length - 2));
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + videos.length - 2) % (videos.length - 2)
    );
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 3000);
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="relative flex justify-center items-center flex-col py-10 px-28 leading-8">
        <p className='text-orange-300'>QUALITY FEATURES</p>
        <h2>Tutorials that people love most</h2>
      <div className="flex justify-center items-center space-x-4 mt-8">
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / 3)}%)`,
            }}
          >
            {videos.map((video, index) => (
              <div key={index} className="flex-none w-1/3 px-2">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <video
                    controls
                    className="w-full h-[30vh] object-cover rounded-lg"
                    src={video.src}
                    alt={video.alt}
                  />
                  <div className="p-4">
                    <h3 className="text-xs font-semibold">{video.title}</h3>
                    <h2 className="text-gray-600">{video.description}</h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
