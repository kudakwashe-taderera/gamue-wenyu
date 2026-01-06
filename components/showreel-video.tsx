"use client"

import { useState, useRef, useEffect } from "react"
import { Volume2, VolumeX } from "lucide-react"

export function ShowreelVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState(true)

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

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return

    video.muted = !video.muted
    setIsMuted(video.muted)
  }

  return (
    <div className="relative group">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="w-full h-auto"
      >
        <source src="/Showreel.mp4" type="video/mp4" />
      </video>
      <button
        onClick={toggleMute}
        className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 p-2 sm:p-3 bg-charcoal-warm/80 hover:bg-charcoal-warm border border-border-subtle hover:border-[var(--burgundy-muted)] text-cream transition-all focus-visible:outline-2 focus-visible:outline-[var(--burgundy)] focus-visible:outline-offset-2"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5 sm:w-6 sm:h-6" />
        ) : (
          <Volume2 className="w-5 h-5 sm:w-6 sm:h-6" />
        )}
      </button>
    </div>
  )
}

