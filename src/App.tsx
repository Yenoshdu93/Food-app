import Food from "./components/Food";
import HeadlineCard from "./components/HeadlineCard";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";

const App = () => {
  return (
    <div className="w-full max-w-[1640px] mx-auto">
      <Navbar />
      <Hero />
      <HeadlineCard />
      <Food />
      <Categories />
    </div>
  );
};
export default App;
