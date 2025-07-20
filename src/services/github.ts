export interface GitHubRepo {
  name: string
  full_name: string
  stargazers_count: number
  forks_count: number
  open_issues_count: number
  description: string
  html_url: string
}

export interface GitHubContributor {
  login: string
  id: number
  avatar_url: string
  html_url: string
  contributions: number
}

export interface GitHubOrg {
  login: string
  id: number
  avatar_url: string
  html_url: string
  name: string
  description: string
  public_repos: number
  followers: number
}

const GITHUB_API_BASE = 'https://api.github.com'

export async function getRepository(owner: string, repo: string): Promise<GitHubRepo> {
  const response = await fetch(`${GITHUB_API_BASE}/repos/${owner}/${repo}`)
  if (!response.ok) {
    throw new Error(`Failed to fetch repository: ${response.statusText}`)
  }
  return response.json()
}

export async function getContributors(owner: string, repo: string): Promise<GitHubContributor[]> {
  const response = await fetch(`${GITHUB_API_BASE}/repos/${owner}/${repo}/contributors`)
  if (!response.ok) {
    throw new Error(`Failed to fetch contributors: ${response.statusText}`)
  }
  return response.json()
}

export async function getOrganization(org: string): Promise<GitHubOrg> {
  const response = await fetch(`${GITHUB_API_BASE}/orgs/${org}`)
  if (!response.ok) {
    throw new Error(`Failed to fetch organization: ${response.statusText}`)
  }
  return response.json()
}

export async function getOrganizationMembers(org: string): Promise<GitHubContributor[]> {
  const response = await fetch(`${GITHUB_API_BASE}/orgs/${org}/members`)
  if (!response.ok) {
    throw new Error(`Failed to fetch organization members: ${response.statusText}`)
  }
  return response.json()
}

export async function getOrganizationRepos(org: string): Promise<GitHubRepo[]> {
  const response = await fetch(`${GITHUB_API_BASE}/orgs/${org}/repos?sort=stars&direction=desc`)
  if (!response.ok) {
    throw new Error(`Failed to fetch organization repositories: ${response.statusText}`)
  }
  return response.json()
}