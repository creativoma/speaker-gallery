import { useState, useEffect } from 'react'
import { type TeamMember } from '@/types/team'

import speaker0 from '@/assets/images/speaker0.webp'
import speaker1 from '@/assets/images/speaker1.webp'
import speaker2 from '@/assets/images/speaker2.webp'

export const useTeamData = () => {
  const [members, setMembers] = useState<TeamMember[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const mockData: TeamMember[] = [
      {
        id: crypto.randomUUID(),
        name: 'WILLIAM RANCH',
        role: 'FOUNDER AND CEO, BERCELL',
        socialLinks: {
          twitter: 'https://marianoalvarez.dev/',
          linkedin: 'https://marianoalvarez.dev/',
        },
        image: speaker2,
      },
      {
        id: crypto.randomUUID(),
        name: 'JEANNE GROSSER',
        role: 'CTO, BERCELL',
        socialLinks: {
          twitter: 'https://marianoalvarez.dev/',
          linkedin: 'https://marianoalvarez.dev/',
        },
        image: speaker1,
      },
      {
        id: crypto.randomUUID(),
        name: 'MARIANO ALVAREZ',
        role: 'SOFTWARE ENGINEER, BERCELL',
        socialLinks: {
          twitter: 'https://marianoalvarez.dev/',
          linkedin: 'https://marianoalvarez.dev/',
        },
        image: speaker0,
      },
      {
        id: crypto.randomUUID(),
        name: 'PAOLA MARTINEZ',
        role: 'HEAD OF DESIGN, BERCELL',
        socialLinks: {
          twitter: 'https://marianoalvarez.dev/',
          linkedin: 'https://marianoalvarez.dev/',
        },
        image: speaker1,
      },
      {
        id: crypto.randomUUID(),
        name: 'LUCAS PEREZ',
        role: 'MARKETING MANAGER, BERCELL',
        socialLinks: {
          twitter: 'https://marianoalvarez.dev/',
          linkedin: 'https://marianoalvarez.dev/',
        },
        image: speaker2,
      },
      {
        id: crypto.randomUUID(),
        name: 'MARIA GONZALEZ',
        role: 'UX/UI DESIGNER, BERCELL',
        socialLinks: {
          twitter: 'https://marianoalvarez.dev/',
          linkedin: 'https://marianoalvarez.dev/',
        },
        image: speaker1,
      },
    ]

    setTimeout(() => {
      setMembers(mockData)
      setLoading(false)
    }, 1000)
  }, [])

  return { members, loading }
}
