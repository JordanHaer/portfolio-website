import ProjectTableRow from "./ProjectsTableRow";
import { GitHubRepository, getGitHubData } from "../../../lib/getGitHubData";

export default async function ProjectTable() {
  const projectsSortedByDate: GitHubRepository[] = await getGitHubData();
  return (
    <table id="content" className="mt-12 w-full border-collapse overflow-x-auto text-left ">
      <thead className=" border-b border-slate-300/10 px-6 py-5  ">
        <tr>
          <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Project</th>
          <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell">Description</th>
          <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">Built with</th>
          <th className="py-4 text-sm font-semibold text-slate-200">Demo/Source Code Links</th>
        </tr>
      </thead>
      <tbody>
        {projectsSortedByDate.map((project) => (
          <ProjectTableRow
            key={project.name}
            title={project.name}
            description={project.description}
            skills={project.topics}
            demoLink={project.homepage}
            sourceCodeLink={project.html_url}
          />
        ))}
      </tbody>
    </table>
  );
}
