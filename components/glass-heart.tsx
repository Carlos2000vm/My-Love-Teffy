"use client"

import { motion } from "framer-motion"

interface GlassHeartProps {
  size?: number
  delay?: number
  duration?: number
  x: number
  y: number
}

export function GlassHeart({ size = 60, delay = 0, duration = 8, x, y }: GlassHeartProps) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: `${x}%`, top: `${y}%` }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 0.8, 0.6, 0.8, 0],
        scale: [0.5, 1, 0.9, 1.1, 0.5],
        y: [0, -30, -15, -40, -60],
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
      >
        <defs>
          <linearGradient id={`heartGradient-${x}-${y}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255, 182, 193, 0.6)" />
            <stop offset="50%" stopColor="rgba(255, 105, 135, 0.4)" />
            <stop offset="100%" stopColor="rgba(255, 182, 193, 0.6)" />
          </linearGradient>
          <filter id={`blur-${x}-${y}`}>
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" />
          </filter>
        </defs>
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          fill={`url(#heartGradient-${x}-${y})`}
          stroke="rgba(255, 255, 255, 0.5)"
          strokeWidth="0.5"
          filter={`url(#blur-${x}-${y})`}
          style={{
            backdropFilter: "blur(10px)",
          }}
        />
        <path
          d="M8 8c-0.5-1 0.5-2.5 2-2"
          stroke="rgba(255, 255, 255, 0.7)"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  )
}
