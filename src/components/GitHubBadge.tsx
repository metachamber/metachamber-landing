import { useEffect, useState } from 'react'
import { Star, GitFork, Users } from 'lucide-react'
import { getRepository, getContributors } from '@/services/github'

export function GitHubBadge() {
  const [stats, setStats] = useState<{
    stars: number
    forks: number
    contributors: number
  } | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchStats() {
      try {
        const [repo, contributors] = await Promise.all([
          getRepository('metachamber', 'metachamber-back'),
          getContributors('metachamber', 'metachamber-back')
        ])
        
        setStats({
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          contributors: contributors.length
        })
      } catch (error) {
        console.error('Failed to fetch GitHub stats:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  if (loading || !stats) {
    return (
      <div className="flex items-center justify-center space-x-6 text-gray-600">
        <div className="animate-pulse flex space-x-6">
          <div className="h-4 w-16 bg-gray-300 rounded"></div>
          <div className="h-4 w-16 bg-gray-300 rounded"></div>
          <div className="h-4 w-20 bg-gray-300 rounded"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center space-x-6 text-gray-600">
      <div className="flex items-center space-x-1">
        <Star className="h-4 w-4 text-yellow-500" />
        <span className="font-semibold">{stats.stars}</span>
        <span className="text-sm">stars</span>
      </div>
      <div className="flex items-center space-x-1">
        <GitFork className="h-4 w-4 text-blue-500" />
        <span className="font-semibold">{stats.forks}</span>
        <span className="text-sm">forks</span>
      </div>
      <div className="flex items-center space-x-1">
        <Users className="h-4 w-4 text-green-500" />
        <span className="font-semibold">{stats.contributors}</span>
        <span className="text-sm">contributors</span>
      </div>
    </div>
  )
}