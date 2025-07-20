import { useEffect, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Github, Star, GitFork, Users, ExternalLink } from 'lucide-react'
import { getRepository, getContributors, getOrganization, type GitHubRepo, type GitHubContributor, type GitHubOrg } from '@/services/github'

interface GitHubStatsProps {
  showContributors?: boolean
  className?: string
}

export function GitHubStats({ showContributors = false, className = '' }: GitHubStatsProps) {
  const [repoData, setRepoData] = useState<GitHubRepo | null>(null)
  const [contributors, setContributors] = useState<GitHubContributor[]>([])
  const [orgData, setOrgData] = useState<GitHubOrg | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        setLoading(true)
        
        // Fetch main repository data
        const repo = await getRepository('metachamber', 'metachamber-back')
        setRepoData(repo)
        
        // Fetch organization data
        const org = await getOrganization('metachamber')
        setOrgData(org)
        
        if (showContributors) {
          // Fetch contributors
          const repoContributors = await getContributors('metachamber', 'metachamber-back')
          setContributors(repoContributors.slice(0, 12)) // Show top 12 contributors
        }
      } catch (err) {
        setError('Failed to fetch GitHub data')
        console.error('GitHub API error:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchGitHubData()
  }, [showContributors])

  if (loading) {
    return (
      <div className={`${className}`}>
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      </div>
    )
  }

  if (error || !repoData) {
    return (
      <div className={`${className}`}>
        <div className="text-center py-8">
          <p className="text-gray-600">Unable to load GitHub stats</p>
          <Button variant="outline" asChild className="mt-4">
            <a href="https://github.com/metachamber" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Visit GitHub
            </a>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className={className}>
      {/* Repository Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card className="border-2 border-yellow-100 hover:border-yellow-300 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center mb-2">
              <Star className="h-5 w-5 text-yellow-500 mr-2" />
              <span className="text-2xl font-bold text-gray-900">{repoData.stargazers_count}</span>
            </div>
            <p className="text-sm text-gray-700 font-medium">Stars</p>
          </CardContent>
        </Card>

        <Card className="border-2 border-blue-100 hover:border-blue-300 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center mb-2">
              <GitFork className="h-5 w-5 text-blue-500 mr-2" />
              <span className="text-2xl font-bold text-gray-900">{repoData.forks_count}</span>
            </div>
            <p className="text-sm text-gray-700 font-medium">Forks</p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-100 hover:border-green-300 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center mb-2">
              <Users className="h-5 w-5 text-green-500 mr-2" />
              <span className="text-2xl font-bold text-gray-900">{contributors.length}</span>
            </div>
            <p className="text-sm text-gray-700 font-medium">Contributors</p>
          </CardContent>
        </Card>

        <Card className="border-2 border-gray-200 hover:border-gray-400 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center mb-2">
              <Github className="h-5 w-5 text-gray-700 mr-2" />
              <span className="text-2xl font-bold text-gray-900">{orgData?.public_repos || 0}</span>
            </div>
            <p className="text-sm text-gray-700 font-medium">Repositories</p>
          </CardContent>
        </Card>
      </div>

      {/* Contributors Section */}
      {showContributors && contributors.length > 0 && (
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Our Contributors
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
            {contributors.map((contributor) => (
              <Card key={contributor.id} className="hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-300 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-4 text-center">
                  <a
                    href={contributor.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <img
                      src={contributor.avatar_url}
                      alt={contributor.login}
                      className="w-16 h-16 rounded-full mx-auto mb-3"
                    />
                    <h4 className="font-semibold text-gray-900 text-sm mb-1 truncate">
                      {contributor.login}
                    </h4>
                    <p className="text-xs text-gray-600">
                      {contributor.contributions} contributions
                    </p>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="outline" asChild>
              <a href="https://github.com/metachamber/metachamber-back/graphs/contributors" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                View All Contributors
              </a>
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}