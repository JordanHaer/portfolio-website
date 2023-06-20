import ProjectCard from "./ProjectCard";
import ViewAll from "../ViewAll";
import { GitHubRepository, getGitHubData } from "../../../../lib/getGitHubData";

export default async function Projects() {
  const projectsSortedByDate: GitHubRepository[] = await getGitHubData();
  return (
    <section id="projects" aria-label="Projects">
      <div className="pt-14 lg:pb-0 lg:pt-24">
        <div className="bg-inherit/75 sticky top-0 z-20 -mx-6 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:hidden lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-3xl font-extrabold text-slate-200 sm:text-4xl lg:hidden">Projects</h2>
        </div>
        <h2 className="hidden font-bold leading-tight tracking-tight text-slate-200 lg:block lg:pb-12 lg:pt-2 lg:text-5xl">
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
