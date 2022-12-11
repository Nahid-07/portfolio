import { BrowserRouter } from "react-router-dom";
import Aboutme from "./aboutme/Aboutme";
import Form from "./Form/Form";
import Hero from "./Hero/Hero";
import Navbar from "./navbar/Navbar";
import Details1 from "./projectDetails/Details1";
import Details2 from "./projectDetails/Details2";
import Details3 from "./projectDetails/Details3";
import Projects from "./Projects/Projects";
import SkillsBanner from "./Skillsbanner/SkillsBanner";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Hero></Hero>
        <SkillsBanner></SkillsBanner>
        <Aboutme></Aboutme>
        <Projects></Projects>
        <Form></Form>
      </BrowserRouter>
      <Details1></Details1>
      <Details2></Details2>
      <Details3></Details3>
    </>
  );
}

export default App;
