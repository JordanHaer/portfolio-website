import ProjectCard from './ProjectCard'
import View from '../View'
import type { GitHubRepository } from '@/lib/github-data/types/GitHubRepository'
import { getGitHubData } from '@/lib/github-data/getGitHubData'

export default async function Projects() {
  const projectsSortedByDate: GitHubRepository[] = await getGitHubData()
  return (
    <section id="projects" aria-label="Projects">
      <div className="pt-20 lg:pt-24">
        <h2 className="pb-12 text-4xl leading-tight font-bold tracking-tight text-slate-200 lg:pt-2 lg:text-5xl">
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
        <View href={'/projects'} label={'View all Projects & Source Code'} />
      </div>
    </section>
  )
}
