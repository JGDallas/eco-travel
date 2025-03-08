"use client"

import { useState, useEffect, useRef } from "react"

// Array of video sources - in a real app, this could come from an API or CMS
const videoSources = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mexican-waterfall-mikhail-nilov-61FkuyYYljxVgcpxdXsdfHNb0IcZZk.mp4", // The provided waterfall video
  // In a real implementation, you would add more videos here
]

export default function VideoBackground() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Handle video ended event to play the next video
  const handleVideoEnded = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoSources.length)
  }

  // When the current video index changes, load and play the new video
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load()
      // Only autoplay if the user has interacted with the document
      const playPromise = videoRef.current.play()

      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          // Auto-play was prevented
          console.log("Autoplay prevented:", error)
          // We'll show a play button in the UI for this case
        })
      }
    }
  }, [currentVideoIndex]) // Only currentVideoIndex is needed here

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <video
        ref={videoRef}
        className="absolute min-w-full min-h-full object-cover"
        playsInline
        muted
        loop
        onEnded={handleVideoEnded}
        preload="auto"
        poster="/placeholder.svg?height=1080&width=1920"
        aria-hidden="true"
      >
        <source src={videoSources[currentVideoIndex]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

