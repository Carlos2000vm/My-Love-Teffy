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
        La amo completamente, Estephanía.
      </h1>

      <div className="space-y-4 text-pink-800 leading-relaxed">
        <p>
          Cada día que pasa, mi amor por ti crece más y más. Eres la razón de
          mi sonrisa, la luz que ilumina mis días oscuros.
        </p>
        <p>
          Enserio lo siento, quisiera ir y pasar tiempo con ud lo que mas disfruto es estar a su lado,
          quiero que pueda escribirme y hablar como lo haciamos, la extraño mucho, no quiero
          que ud se aleje de mi, quiero que me de la oportunidad de demostrarle que estoy cambiando .
        </p>
        <p>
          Quiero que sepa que la amo mucho y noo queria que ud estuviera asi conmigo, porque ud es tan
          especial para mi ya que la amo profundamente desde mi alma, pienso siempre en usted desde que me despierto
          hasta que me llego a dormir y siento un deseo de poderle escribir porque amo cada mensaje que teniamos juntos
          extraño tanto sus voz y sus caricias tambien sus presencias y aroma.
        </p>
        <p>
          quisiera estar junto a ud hoy mañana y siempre, cada semana era muy impaciente por ir a verla era lo que mas 
          esperaba cada fin de semana, y ahora la extraño tanto que no se lo imagina, siento en el corazon su falta que 
          me hace cada dia, No me gusta que se aleje ni que me rechace aunque sea vernos porque me gustaria verla todos 
          los dias cada minuto y cada segundo, quiero que sepa que la amo mucho y que no quiero perderla, quiero que se de cuenta 
          cuanta falta me esta siendo, perdon por haber sido asi, No queria que esto pasara estoy mal por eso y quiero reparar esto
          quiero que separ que la amo cada segundo del dia
        </p>
        <p>
          La amo con todo mi corazon, he estado muy mal porque quiero estar con ud porque ud es lo mas importante y especial la amo tanto
          cada que le escribo le escribo desde el corazon y lo que le dedico es con todo el amor que le tengo, amo estar a su lado, amo y extraño su amor y cariño 
          extaño sus besos y abrazos, extraño escucharla y que me escriba, todo esto es especial para mi.
        </p>
        <p>
          Escribame quiro que seamos todo, estar alejados no es la solucion, que hablemos comprendo que tengo que cambiar  y ser mejor para ud, 
          en verdad queiro que me hable me tenga la confianzaa de decirme que hago mal para poder mejorar yo quiero ser todo lo mejor para ud
          estoy dispuesto a darlo todo por ud, ud es mi todo mi cielo mi luna y mis estrellas, me encantan esos ojitoos que son luceros que iluminan 
          mi vida, deme un abrazo que tengo muchas ganas de verla por siempre 
          yo amo cada sentimiento de ud cada gesto y su risa es lo que mas amo escuchar.
        </p>
        <p className="text-center font-semibold text-pink-600 pt-4">
          Te amo hoy, mañana y siempre.
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
