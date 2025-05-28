import React from 'react'
import { type TeamMember as TeamMemberType } from '@/types/team'
import { SocialLinks } from '@/components/speaker-member/social-links'

export interface TeamMemberProps {
  member: TeamMemberType
  isActive: boolean
  onHover: () => void
}

export const TeamMember: React.FC<TeamMemberProps> = ({
  member,
  isActive = false,
  onHover,
}) => {
  const handleMouseEnter = () => {
    onHover()
  }

  return (
    <div
      className={`cursor-pointer p-6 transition-all duration-400 hover:bg-zinc-900/50 ${isActive ? 'bg-zinc-900' : ''} `}
      onMouseEnter={handleMouseEnter}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3
            className={`mb-2 font-mono text-lg font-medium tracking-wider transition-all duration-400 ${isActive ? 'text-zinc-300' : 'text-zinc-700'} `}
          >
            {member.name}
          </h3>
          <p
            className={`h-2 transform font-mono text-xs tracking-wide text-zinc-400 uppercase transition-all duration-400 ${isActive ? 'h-4 opacity-100' : 'h-0 opacity-0'}`}
          >
            {member.role}
          </p>
        </div>
        {member.socialLinks && isActive && (
          <SocialLinks links={member.socialLinks} />
        )}
      </div>
    </div>
  )
}
