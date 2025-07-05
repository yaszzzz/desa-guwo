"use client"
import { useRef, useEffect, useState } from "react"

export default function MusicPlayer() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const handler = () => {
      if (audioRef.current) {
        audioRef.current.play().catch((e) => console.log("Autoplay gagal", e))
        setPlaying(true)
      }
    }
    window.addEventListener("playMusic", handler)
    return () => window.removeEventListener("playMusic", handler)
  }, [])

  const handlePlayPause = () => {
    if (!audioRef.current) return
    if (playing) {
      audioRef.current.pause()
      setPlaying(false)
    } else {
      audioRef.current.play().catch((e) => console.log("play error", e))
      setPlaying(true)
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/Lagu nasional tanah airku instrumental.mp3"
      />
      <button
        onClick={handlePlayPause}
        className="fixed bottom-4 right-4 w-12 h-12 rounded-full bg-white-600 text-white flex justify-center items-center shadow z-50"
      >
        {playing ? "⏸" : "🎵"}
      </button>
    </>
  )
}
