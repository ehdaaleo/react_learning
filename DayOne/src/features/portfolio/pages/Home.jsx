import About from "../components/About";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Footer from "../Footer";
import { projects } from "../data/projects";
import { focus, skills } from "../data/skills";


function Home({ portfolio }) {
  return (
    <>
      <Hero hero={portfolio.hero} />
      <About about={portfolio.about} />
      <Skills title="Skills" intro="My focus is creating usable interfaces with strong front-end foundations." focus={focus} skills={skills} />
      <Projects title="Portfolio" projects={projects} />
      <Footer contact={portfolio.contact} socials={portfolio.socials} />
    </>
  );
}

export default Home;
