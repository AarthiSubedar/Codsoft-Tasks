import About from "./Components/About";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
import Header from "./Components/Header";
import Hero from "./Components/Hero";

export default function App() {
  return (
    <>
      <Header></Header>
      <div className="pt-24">
          <Hero></Hero>
          <About></About>
          <Education></Education>
          <Contact></Contact>
      </div>
      
    </>
  )
}