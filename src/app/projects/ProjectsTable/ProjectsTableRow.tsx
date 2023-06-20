import ProjectTableSkill from "./ProjectsTableSkill";
import ProjectTableLink from "./ProjectsTableLink";

interface ProjectTabelRowProps {
  title: string;
  description: string;
  skills: string[];
  demoLink: string;
  sourceCodeLink: string;
}

export default function ProjectTableRow({
  title,
  description,
  skills,
  demoLink,
  sourceCodeLink,
}: ProjectTabelRowProps) {
  return (
    <tr className="border-b border-slate-300/10 last:border-none">
      <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">{title}</td>
      <td className="hidden py-4 pr-4 align-top text-sm sm:table-cell">
        <div className="translate-y-px">{description}</div>
      </td>
      <td className="hidden py-4 pr-4 align-top lg:table-cell">
        <ul className="flex -translate-y-1.5 flex-wrap">
          {skills.sort().map((skill) => (
            <ProjectTableSkill key={skill} skill={skill} />
          ))}
        </ul>
      </td>
      <td className=" py-4 align-top ">
        <div className="-translate-y-px">
          <ProjectTableLink externalLink={demoLink} />
          <ProjectTableLink externalLink={sourceCodeLink} />
        </div>
      </td>
    </tr>
  );
}
