"use client"

import { GlassHeart } from "@/components/glass-heart"
import { FloatingNotes } from "@/components/floating-note"
import { LoveLetter } from "@/components/love-letter"
import { useState, useEffect } from "react"

const hearts = [
  { x: 5, y: 10, size: 40, delay: 0, duration: 7 },
  { x: 15, y: 60, size: 55, delay: 1.5, duration: 9 },
  { x: 25, y: 30, size: 35, delay: 0.5, duration: 8 },
  { x: 75, y: 15, size: 50, delay: 2, duration: 10 },
  { x: 85, y: 50, size: 45, delay: 1, duration: 7 },
  { x: 90, y: 80, size: 60, delay: 3, duration: 9 },
  { x: 10, y: 85, size: 38, delay: 2.5, duration: 8 },
  { x: 50, y: 5, size: 42, delay: 0.8, duration: 7 },
  { x: 65, y: 75, size: 48, delay: 1.8, duration: 10 },
  { x: 35, y: 90, size: 36, delay: 3.5, duration: 8 },
  { x: 80, y: 25, size: 52, delay: 0.3, duration: 9 },
  { x: 45, y: 45, size: 30, delay: 2.2, duration: 7 },
]

export default function LoveLetterPage() {
  const [sparkles, setSparkles] = useState<Array<{left: string, top: string, delay: string, duration: string}>>([])

  useEffect(() => {
    const generatedSparkles = [...Array(30)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      duration: `${2 + Math.random() * 2}s`,
    }))
    setSparkles(generatedSparkles)
  }, [])

  return (
    <main
      className="min-h-screen relative overflow-hidden flex items-center justify-center p-4"
      style={{
        background: `
          radial-gradient(ellipse at 20% 20%, rgba(255, 182, 193, 0.4) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 80%, rgba(255, 105, 180, 0.3) 0%, transparent 50%),
          radial-gradient(ellipse at 50% 50%, rgba(255, 240, 245, 1) 0%, rgba(255, 228, 235, 1) 100%)
        `,
      }}
    >
      {/* Sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {sparkles.map((sparkle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: sparkle.left,
              top: sparkle.top,
              animationDelay: sparkle.delay,
              animationDuration: sparkle.duration,
              opacity: 0.6,
            }}
          />
        ))}
      </div>

      {/* Glass Hearts */}
      {hearts.map((heart, i) => (
        <GlassHeart
          key={i}
          x={heart.x}
          y={heart.y}
          size={heart.size}
          delay={heart.delay}
          duration={heart.duration}
        />
      ))}

      {/* Floating Notes */}
      <FloatingNotes />

      {/* Love Letter */}
      <LoveLetter />
    </main>
  )
}
