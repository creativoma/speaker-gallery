import React, { useState } from 'react'
import { type SpeakerMember as SpeakerMemberType } from '@/types/speaker'
import { SpeakerMember } from '@/components/speaker-member/speaker-member'
import { SpeakerProfile } from '@/components/speaker-profile/speaker-profile'

interface SpeakerListProps {
  members: SpeakerMemberType[]
}

export const SpeakerList: React.FC<SpeakerListProps> = ({ members }) => {
  const [selectedMember, setSelectedMember] = useState<SpeakerMemberType | null>(
    members[0] || null
  )

  const handleMemberHover = (member: SpeakerMemberType) => {
    setSelectedMember(member)
  }

  return (
    <div className="flex items-stretch divide-x divide-zinc-800">
      <div className="w-3/5 min-w-0 divide-y divide-zinc-800">
        {members.map((member) => (
          <SpeakerMember
            key={member.id}
            member={member}
            isActive={selectedMember?.id === member.id}
            onHover={() => handleMemberHover(member)}
          />
        ))}
      </div>

      <div className="relative w-2/5 flex-shrink-0">
        {selectedMember && <SpeakerProfile member={selectedMember} />}
      </div>
    </div>
  )
}
