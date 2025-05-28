import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { SpeakerGallery } from '@/components/speaker-gallery'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SpeakerGallery />
  </StrictMode>
)
