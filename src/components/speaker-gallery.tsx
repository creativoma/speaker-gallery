import { type FC } from 'react'
import { SpeakerList } from '@/components/speaker-list/speaker-list'
import { useSpeakerData } from '@/hooks/useSpeakerData'
import { LoaderIcon } from '@/icons/loader'

export const SpeakerGallery: FC = () => {
  const { members, loading } = useSpeakerData()

  if (loading) {
    return (
      <div className="mx-autoflex animate-spin items-center justify-center text-zinc-400">
        <LoaderIcon />
      </div>
    )
  }

  return (
    <div className="mx-auto w-7xl overflow-hidden border border-zinc-800">
      <SpeakerList members={members} />
    </div>
  )
}
