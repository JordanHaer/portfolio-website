import type { GitHubRepository } from '@/lib/github-data/types/GitHubRepository'
import { processGitHubRepositories } from '@/lib/github-data/processGitHubRepositories'

export const getGitHubData = async () => {
  const result = await fetch(`https://api.github.com/users/${process.env.GITHUBUSERNAME}/repos`, {
    next: { revalidate: 60 },
  })
  const projects: GitHubRepository[] = await result.json()
  return processGitHubRepositories(projects, process.env.GITHUBUSERNAME)
}
