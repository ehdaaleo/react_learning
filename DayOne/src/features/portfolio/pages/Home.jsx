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
      <Skills title="Skills" intro="My focus is creating usable interfaces with strong front-end foundations.'I build clean, responsive websites with a focus on simple layouts, readable code, and smooth user experiences. My background includes front-end development, UI design, and creating reusable React components Flutter developer with over two years of experience in building cross-platform mobile applications using the Flutter framework. Proficient in AI productivity tools (ChatGPT, Replit Notion AI, Trae, Cline) to enhance development processes and optimize workflows. Strong problem-solving, time management, and communication skills, with a proven ability to deliver high-quality projects on time. Motivated to contribute to team success through innovation, technical expertise, and a collaborative approach.',
    " focus={focus} skills={skills} />
      <Projects title="Portfolio" projects={projects} />
      <Footer contact={portfolio.contact} socials={portfolio.socials} />
    </>
  );
}

export default Home;
