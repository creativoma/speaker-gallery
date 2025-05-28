import React from 'react'
import { type SpeakerMember } from '@/types/speaker'
import { TwitterIcon } from '@/icons/twitter'
import { LinkedInIcon } from '@/icons/linkedin'
import { motion } from 'motion/react'

interface SocialLinksProps {
  links: SpeakerMember['socialLinks']
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  if (!links) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="ml-4 flex gap-3"
    >
      {links.twitter && (
        <a
          href={links.twitter}
          className="text-zinc-400 transition-colors duration-400 hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon />
        </a>
      )}
      {links.linkedin && (
        <a
          href={links.linkedin}
          className="text-zinc-400 transition-colors duration-400 hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </a>
      )}
    </motion.div>
  )
}
