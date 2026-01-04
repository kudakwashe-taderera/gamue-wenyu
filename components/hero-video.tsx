"use client"

import { useEffect, useRef } from "react"

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const playPromise = video.play()
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay was prevented, try again on user interaction
        const handleInteraction = () => {
          video.play().catch(() => {})
          document.removeEventListener("click", handleInteraction)
          document.removeEventListener("touchstart", handleInteraction)
        }
        document.addEventListener("click", handleInteraction, { once: true })
        document.addEventListener("touchstart", handleInteraction, { once: true })
      })
    }
  }, [])

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      className="absolute inset-0 w-full h-full object-cover opacity-30 z-0 pointer-events-none"
    >
      <source src="/IMG_7116.MOV" type="video/quicktime" />
      <source src="/IMG_7116.MOV" type="video/mp4" />
    </video>
  )
}

