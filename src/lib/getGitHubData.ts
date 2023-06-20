export interface GitHubRepository {
  name: string;
  description: string;
  topics: string[];
  homepage: string;
  html_url: string;
  updated_at: string;
}

export const getGitHubData = async () => {
  const result = await fetch(`https://api.github.com/users/${process.env.GITHUBUSERNAME}/repos`, {
    next: { revalidate: 60 },
  });
  const projects: GitHubRepository[] = await result.json();
  return projects
    .filter((project) => project.name !== process.env.GITHUBUSERNAME)
    .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
};
