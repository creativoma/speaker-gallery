import { type FC } from 'react'
import { type TeamMember } from '@/types/team'
import { motion } from 'motion/react'

interface TeamProfileProps {
  member: TeamMember
}

export const TeamProfile: FC<TeamProfileProps> = ({ member }) => {
  return (
    <div className="absolute inset-0">
      {member.image ? (
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          key={member.image}
          src={member.image}
          alt={member.name}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-800">
          <span className="text-6xl font-bold text-zinc-400">
            {member.name.charAt(0)}
          </span>
        </div>
      )}
    </div>
  )
}
