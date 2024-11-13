import About from "@/components/about";
import Main from "@/components/main";
import Navbar from "@/components/navbar";
import Skill from "@/components/skill";
import Project from "@/components/project";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Skill />
      <Project />
    </div>
  );
}
