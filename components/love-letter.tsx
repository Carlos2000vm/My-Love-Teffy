"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export function LoveLetter() {
  return (
    <motion.div
      className="relative z-20 mx-auto max-w-lg p-8 rounded-3xl"
      style={{
        background: "rgba(255, 255, 255, 0.25)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255, 255, 255, 0.4)",
        boxShadow: "0 25px 50px -12px rgba(199, 21, 133, 0.25)",
      }}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.div
        className="flex justify-center mb-6"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Heart className="w-12 h-12 text-pink-500 fill-pink-400" />
      </motion.div>

      <h1 className="text-3xl font-bold text-center mb-6 text-pink-700">
        Para Ti, Mi Amor
      </h1>

      <div className="space-y-4 text-pink-800 leading-relaxed">
        <p>
          Cada dia que pasa, mi amor por ti crece mas y mas. Eres la razon de
          mi sonrisa, la luz que ilumina mis dias oscuros.
        </p>
        <p>
          Tu presencia en mi vida es el regalo mas hermoso que el destino me ha
          dado. Contigo, cada momento se convierte en un recuerdo precioso.
        </p>
        <p>
          Gracias por ser tu, por amarme como lo haces, y por hacer de mi
          mundo un lugar mejor simplemente estando en el.
        </p>
        <p className="text-center font-semibold text-pink-600 pt-4">
          Te amo hoy, manana y siempre.
        </p>
      </div>

      <motion.div
        className="flex justify-center gap-2 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 1.5,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Heart className="w-5 h-5 text-pink-400 fill-pink-300" />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
