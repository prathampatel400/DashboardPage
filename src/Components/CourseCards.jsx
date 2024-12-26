import React, { useState } from 'react';

const cardData = [
  {
    id: 1,
    title: "Professional graphic design tutorial full course with exercise file",
    rating: 5,
    reviews: 392,
    studentsWatched: 2538,
    videoClasses: 7,
    duration: "4 hrs",
    description: "Get your tutorials delivered at let home collect sample from the victory of the managments.",
    courseDetails: [
      "Comprehensive coverage of graphic design principles",
      "Real-world project examples and case studies",
      "Hands-on exercises with downloadable files",
      "Expert tips and tricks to enhance your workflow"
    ]
  },
  {
    id: 2,
    title: "Advanced Photoshop Techniques for Designers",
    rating: 4.8,
    reviews: 280,
    studentsWatched: 1789,
    videoClasses: 5,
    duration: "3 hrs 30 min",
    description: "Master Photoshop with advanced techniques and real-world projects.",
    courseDetails: [
      "Learn advanced Photoshop tools and features",
      "Create stunning designs and digital art",
      "Enhance your workflow with shortcuts and tips",
      "Work on real-life projects to apply skills"
    ]
  },
  {
    id: 3,
    title: "UI/UX Design Fundamentals with Figma",
    rating: 4.9,
    reviews: 412,
    studentsWatched: 3091,
    videoClasses: 8,
    duration: "5 hrs",
    description: "Learn the basics of UI/UX design with Figma and build stunning interfaces.",
    courseDetails: [
      "Understand user-centered design principles",
      "Learn to use Figma for wireframing and prototyping",
      "Create user interfaces with real-world projects",
      "Get feedback and tips from industry experts"
    ]
  },
  {
    id: 4,
    title: "Intro to Motion Graphics in After Effects",
    rating: 4.7,
    reviews: 210,
    studentsWatched: 1890,
    videoClasses: 6,
    duration: "3 hrs",
    description: "Get started with motion graphics and animation in After Effects.",
    courseDetails: [
      "Learn the basics of motion design and animation",
      "Explore After Effects tools and techniques",
      "Work on projects to build your portfolio",
      "Discover how to animate text, shapes, and images"
    ]
  }
];

function CourseCards() {
  const [expanded, setExpanded] = useState(null);

  const handleArrowClick = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <section className="flex justify-center items-center flex-col py-10 px-28 leading-8">
      <p className='text-orange-300'>QUALITY FEATURES</p>
      <h2>Popular Designing Courses</h2>
      {cardData.map((card) => (
        <section
          key={card.id}
          className="w-[80%] mx-auto bg-white rounded-lg shadow-md p-4 mt-8"
        >
            <div className='flex'>
          <div className="flex-shrink-0 bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-orange-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.752 11.168l-6.584-3.588A1 1 0 007 8.423v7.154a1 1 0 001.168.987l6.584-3.588a1 1 0 000-1.808z"
              />
            </svg>
          </div>

          <div className="flex flex-col justify-start text-start flex-grow">
            <div className="flex items-center text-sm text-gray-500 space-x-4">
              <div className="flex items-center">
                <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                <span className="ml-2">{card.rating} ({card.reviews} reviews)</span>
              </div>
              <div className="flex items-center space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.232 10.232a4 4 0 10-5.464-5.464M18.364 18.364A9 9 0 105.636 5.636a9 9 0 1012.728 12.728z"
                  />
                </svg>
                <span>{card.studentsWatched} students watched</span>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mt-2">{card.title}</h3>

            <p className="text-sm text-gray-500 mt-1">{card.description}</p>
          </div>

          <div className="flex justify-center items-center bg-green-300 rounded-md h-8 mt-4 mr-4">
            <div className="text-white text-sm px-3 py-2">{card.videoClasses} Video Classes</div>
            <div className="h-4 w-[2px] bg-white"></div>
            <div className="text-white text-sm px-3 py-2 ">{card.duration}</div>
          </div>

          <div
            className="cursor-pointer ml-auto mt-4"
            onClick={() => handleArrowClick(card.id)}
          >
            <i className={`fa-solid fa-angle-down ${expanded === card.id ? 'rotate-180' : ''}`}></i>
          </div>
          </div>
          {expanded === card.id && (
            <div className="mt-2 bg-gray-100 p-4 rounded-md w-full">
              <h4 className="text-sm font-semibold">Course Details:</h4>
              <ul className="list-disc pl-5 text-sm text-gray-700 mt-2">
                {card.courseDetails.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          )}
        </section>
      ))}
    </section>
  );
}

export default CourseCards;
