import { type FC } from 'react'
import { SpeakerList } from '@/components/speaker-list/speaker-list'
import { useSpeakerData } from '@/hooks/useSpeakerData'

export const SpeakerGallery: FC = () => {
  const { members, loading } = useSpeakerData()

  if (loading) {
    return (
      <div className="mx-autoflex animate-pulse items-center justify-center text-zinc-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 6l0 -3" />
          <path d="M16.25 7.75l2.15 -2.15" />
          <path d="M18 12l3 0" />
          <path d="M16.25 16.25l2.15 2.15" />
          <path d="M12 18l0 3" />
          <path d="M7.75 16.25l-2.15 2.15" />
          <path d="M6 12l-3 0" />
          <path d="M7.75 7.75l-2.15 -2.15" />
        </svg>
      </div>
    )
  }

  return (
    <div className="mx-auto w-7xl overflow-hidden border border-zinc-800">
      <SpeakerList members={members} />
    </div>
  )
}
