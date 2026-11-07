import { describe, expect, it } from 'vitest'

import type { GitHubRepository } from '@/lib/github-data/types/GitHubRepository'
import { processGitHubRepositories } from '@/lib/github-data/processGitHubRepositories'

describe('processGitHubRepositories', () => {
  const repositories: GitHubRepository[] = [
    {
      name: 'older-project',
      description: 'An older project',
      topics: [],
      homepage: '',
      html_url: '',
      pushed_at: '2025-01-01T12:00:00Z',
    },
    {
      name: 'johndoe',
      description: 'Profile repository',
      topics: [],
      homepage: '',
      html_url: '',
      pushed_at: '2025-03-01T12:00:00Z',
    },
    {
      name: 'newer-project',
      description: 'A newer project',
      topics: [],
      homepage: '',
      html_url: '',
      pushed_at: '2025-02-01T12:00:00Z',
    },
  ]

  it('filters out the repository matching the username', () => {
    const result = processGitHubRepositories(repositories, 'johndoe')

    expect(result.map((repository) => repository.name)).toEqual(['newer-project', 'older-project'])
  })

  it('sorts repositories by most recently pushed', () => {
    const result = processGitHubRepositories(repositories, undefined)

    expect(result.map((repository) => repository.name)).toEqual([
      'johndoe',
      'newer-project',
      'older-project',
    ])
  })

  it('returns an empty array when no repositories are provided', () => {
    const result = processGitHubRepositories([], 'johndoe')

    expect(result).toEqual([])
  })

  it('keeps all repositories when the username is undefined', () => {
    const result = processGitHubRepositories(repositories, undefined)

    expect(result).toHaveLength(3)
  })
})
