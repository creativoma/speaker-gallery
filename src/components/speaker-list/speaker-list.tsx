import React, { useState } from 'react'
import { type TeamMember as TeamMemberType } from '@/types/team'
import { TeamMember } from '@/components/speaker-member/speaker-member'
import { TeamProfile } from '@/components/speaker-profile/speaker-profile'

interface TeamListProps {
  members: TeamMemberType[]
}

export const TeamList: React.FC<TeamListProps> = ({ members }) => {
  const [selectedMember, setSelectedMember] = useState<TeamMemberType | null>(
    members[0] || null
  )

  const handleMemberHover = (member: TeamMemberType) => {
    setSelectedMember(member)
  }

  return (
    <div className="flex items-stretch divide-x divide-zinc-800">
      <div className="w-3/5 min-w-0 divide-y divide-zinc-800">
        {members.map((member) => (
          <TeamMember
            key={member.id}
            member={member}
            isActive={selectedMember?.id === member.id}
            onHover={() => handleMemberHover(member)}
          />
        ))}
      </div>

      <div className="relative w-2/5 flex-shrink-0">
        {selectedMember && <TeamProfile member={selectedMember} />}
      </div>
    </div>
  )
}
