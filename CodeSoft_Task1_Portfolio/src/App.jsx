import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Project from "./Components/Project";
import Skills from "./Components/Skills";

export default function App() {
  return (
    <>
      <div className="">
        <Header></Header>
      </div>
      <div className="pt-24 lg:px-32 px-10">
          <Hero></Hero>
          <About></About>
          <Skills></Skills>
          <Project></Project>
          <Contact></Contact>
      </div>
      <Footer></Footer>
      
    </>
  )
}