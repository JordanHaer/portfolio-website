import type { GitHubRepository } from '@/lib/github-data/types/GitHubRepository'

export const processGitHubRepositories = (
  repositories: GitHubRepository[],
  username: string | undefined,
): GitHubRepository[] => {
  return repositories
    .filter((repository) => repository.name !== username)
    .sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())
}
