"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

const loveNotes = [
  "Te amo",
  "Eres mi todo",
  "Mi corazon es tuyo",
  "Siempre juntos",
  "Te adoro",
  "Eres mi sol",
  "Mi amor eterno",
  "Contigo soy feliz",
  "Te quiero mucho",
  "Eres especial",
  "Mi vida eres tu",
  "Por siempre tuyo/a",
]

interface Note {
  id: number
  text: string
  x: number
  y: number
}

export function FloatingNotes() {
  const [notes, setNotes] = useState<Note[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      const newNote: Note = {
        id: Date.now(),
        text: loveNotes[Math.floor(Math.random() * loveNotes.length)],
        x: Math.random() * 80 + 10,
        y: Math.random() * 60 + 20,
      }
      setNotes((prev) => [...prev.slice(-6), newNote])
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      <AnimatePresence>
        {notes.map((note) => (
          <motion.div
            key={note.id}
            className="absolute px-4 py-2 rounded-xl text-sm font-medium"
            style={{
              left: `${note.x}%`,
              top: `${note.y}%`,
              background: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              boxShadow: "0 8px 32px rgba(199, 21, 133, 0.15)",
              color: "#be185d",
            }}
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: -30 }}
            exit={{ opacity: 0, scale: 0.5, y: -80 }}
            transition={{ duration: 3, ease: "easeOut" }}
          >
            {note.text}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
