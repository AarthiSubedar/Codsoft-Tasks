import About from "./Components/About";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
import Header from "./Components/Header";
import Hero from "./Components/Hero";

export default function App() {
  return (
    <>
      <div className="">
        <Header></Header>
      </div>
      <div className="pt-24 lg:px-40 px-20">
          <Hero></Hero>
          <About></About>
          <Education></Education>
          <Contact></Contact>
      </div>
      
    </>
  )
}