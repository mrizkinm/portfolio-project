import About from "@/components/about";
import Main from "@/components/main";
import Skill from "@/components/skill";
import Project from "@/components/project";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div>
      <Main />
      <About />
      <Skill />
      <Project />
      <Contact />
    </div>
  );
}
