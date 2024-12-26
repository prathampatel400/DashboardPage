import { useState, useRef } from "react";

const FaqsCard = ({ faqsList, idx }) => {
  const answerElRef = useRef();
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");

  const handleOpenAnswer = () => {
    const Result = answerElRef.current.childNodes[0].offsetHeight;
    setState(!state);
    setAnswerH(`${Result + 25}px`);
  };

  return (
    <div
      className="space-y-3 mt-5 overflow-hidden border-b"
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4 className="cursor-pointer pb-5 flex items-center text-lg text-gray-700 font-medium">
        {state ? (
          <i className="rounded-full fa-solid fa-minus bg-green-400 text-white p-1 mr-4"></i>
        ) : (
          <i className="rounded-full fa-solid fa-plus bg-green-400 text-white p-1 mr-4"></i>
        )}
        {faqsList.q}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300"
        style={state ? { height: answerH } : { height: "0px" }}
      >
        <div>
          <p className="text-gray-500">{faqsList.a}</p>
        </div>
      </div>
    </div>
  );
};

const FaqSection = () => {
  const faqsList = [
    {
      q: "What are some random questions to ask?",
      a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question.",
    },
    {
      q: "Do you include common questions?",
      a: "This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator.",
    },
    {
      q: "Can I use this for 21 questions?",
      a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated.",
    },
    {
      q: "Are these questions for girls or for boys?",
      a: "The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with).",
    },
    {
      q: "What do you wish you had more talent doing?",
      a: "If you've been searching for a way to get random questions, you've landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires.",
    },
  ];

  return (
    <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
      <div className="space-y-3 text-center">
        <p className="text-orange-300">FREQUENT QUESTION</p>
        <h2>Do you have any question</h2>
      </div>
      <div className="mt-14 max-w-2xl mx-auto">
        {faqsList.map((item, idx) => (
          <FaqsCard key={idx} idx={idx} faqsList={item} />
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
