import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Set disbursement Instructions',
    description: 'Get your blood tests delivered at home. Collect a sample from your blood tests.'
  },
  {
    number: '02',
    title: 'Choose your preferred method',
    description: 'Select the most convenient way to receive your results.'
  },
  {
    number: '03',
    title: 'Confirm your appointment',
    description: 'Finalize the date and time for your blood sample collection.'
  },
  {
    number: '04',
    title: 'Receive your results',
    description: 'Get your results delivered to your inbox or through your preferred platform.'
  }
];

function FunctionPage() {
  return (
    <section className="flex flex-col justify-center items-center leading-10 p-10 px-40 bg-slate-100 h-[70vh]">
      <p className="text-orange-300">WHAT'S THE FUNCTION</p>
      <h2>Let's see how it works</h2>

      <div className="flex gap-10 items-center justify-center mt-8 h-40">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col justify-between text-start p-6 rounded-lg w-80 h-52">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 box-number flex items-center justify-center bg-white">
                {step.number}
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FunctionPage;
