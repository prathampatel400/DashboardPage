import React from 'react'

function FeaturesSection() {
    return (
        <section className="bg-white py-10 px-28">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center mt-24 h-40">
                  <h2 className="text-4xl font-bold text-orange-300 mb-2">80K+</h2>
                  <p className="text-gray-600">We have more than students</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center h-40">
                  <h2 className="text-4xl font-bold text-orange-500 mb-2">150+</h2>
                  <p className="text-gray-600">Free online tutorials videos available</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                  <h2 className="text-4xl font-bold text-pink-300 mb-2">90+</h2>
                  <p className="text-gray-600">Daily updated blog post maintain</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center -mt-20 h-36">
                  <h2 className="text-4xl font-bold text-purple-300 mb-2">& 3M</h2>
                  <p className="text-gray-600">Job posted every day with qualification</p>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-orange-400  ">CORE FEATURES</h3>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  Smart Jackpots that you may love this anytime & anywhere
                </h1>
                <p className="text-gray-600 leading-relaxed">
                  Get your tests delivered at let home collect sample from the victory
                  of the managements that supplies best design system guidelines ever.
                  Get your tests delivered at let home collect sample.
                </p>
                <button
                  variant="ghost" 
                  className="text-orange-400 p-0 h-auto font-medium"
                >
                  Explore details →
                </button>
              </div>
            </div>
          </div>
        </section>
      )
}

export default FeaturesSection
