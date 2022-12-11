import { BrowserRouter } from "react-router-dom";
import Aboutme from "./aboutme/Aboutme";
import Form from "./Form/Form";
import Hero from "./Hero/Hero";
import Navbar from "./navbar/Navbar";
import Projects from "./Projects/Projects";
import SkillsBanner from "./Skillsbanner/SkillsBanner";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Hero></Hero>
      <SkillsBanner></SkillsBanner>
      <Aboutme></Aboutme>
      <Projects></Projects>
      <Form></Form>
    </BrowserRouter>
  );
}

export default App;
