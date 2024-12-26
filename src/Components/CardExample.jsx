import React from "react";
import LaptopImage from "./image/freetutorials.jpeg";

const CardPage = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src={LaptopImage}
            alt="Tutorial preview"
            className="w-full object-cover mb-4"
          />
          <div className="space-y-6">
            <div className="text-orange-500 font-medium">FREE TUTORIAL</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              More than a thousand free tutorials uploaded every week
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Get your tests delivered at home. Let us collect samples <br />
              from the victory of the managements that supply <br /> the best
              design system guidelines ever. Get your tests
              <br /> delivered at home collect samples.
            </p>
            <button
              type="button"
              variant="ghost"
              className="text-orange-500 hover:text-orange-600 hover:bg-orange-50 p-0 h-auto font-medium"
            >
              Explore details →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardPage;
