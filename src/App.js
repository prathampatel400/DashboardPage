import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import SlickSilder from "./Components/SlickSlider";
import "./Components/Component.css";
import CardExample from "./Components/CardExample";
import FeaturesSection from "./Components/FeaturesSection";
import FunctionPage from "./Components/FunctionPage";
import FaqSection from "./Components/FaqSection";
import CourseCards from "./Components/CourseCards";
import LandingPage from "./Components/LandingPage";
function App() {
  return (
    <>
      <div className="bg-color">
        <Header />
        <Home />
      </div>
      <div className="flex justify-center items-center">
        <SlickSilder />
      </div>
      <FeaturesSection />
      <FunctionPage />
      <CourseCards />
      <CardExample />
      <FaqSection />
      <LandingPage/>
    </>
  );
}

export default App;
