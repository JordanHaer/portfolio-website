import ProjectCard from "./ProjectCard";
import ViewAll from "../ViewAll";
import { GitHubRepository, getGitHubData } from "../../../../lib/getGitHubData";

export default async function Projects() {
  const projectsSortedByDate: GitHubRepository[] = await getGitHubData();
  return (
    <section id="projects" aria-label="Projects">
      <div className="pt-20 lg:pt-24">
        <h2 className="pb-12 text-4xl font-bold leading-tight tracking-tight text-slate-200  lg:pt-2 lg:text-5xl">
          Projects
        </h2>
        <ul className="group/list">
          {projectsSortedByDate.map((project) => (
            <ProjectCard
              key={project.name}
              image={`/${project.name}.jpg`}
              demoLink={project.homepage}
              title={project.name}
              description={project.description}
              skills={project.topics}
            />
          ))}
        </ul>
        <ViewAll href={"/projects"} label={"Projects & Source Code"} />
      </div>
    </section>
  );
}
