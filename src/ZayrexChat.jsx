import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ZayrexChat() {
  const [isOpen, setIsOpen] = useState(false);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-[#020617] text-white overflow-hidden relative">
      {/* 🌌 Fondo con partículas animadas */}
      <Particles
        id="zayrex-particles"
        init={particlesInit}
        options={{
          background: { color: { value: "#020617" } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          particles: {
            color: { value: "#38bdf8" },
            links: {
              color: "#38bdf8",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: true,
              speed: 0.6,
              straight: false,
            },
            number: { density: { enable: true, area: 800 }, value: 65 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0"
      />

      <AnimatePresence mode="wait">
        {!isOpen ? (
          // 🌟 Pantalla inicial
          <motion.div
            key="start"
            className="z-10 flex flex-col items-center justify-center text-center w-full h-full"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
          >
            {/* 🔥 Logo con resplandor pulsante */}
            <motion.h1
              className="text-[8vw] font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_45px_rgba(56,189,248,0.9)] animate-pulse"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              ZAYREX
            </motion.h1>

            <p className="text-gray-400 mt-4 text-xl sm:text-2xl">
              Tu asistente inteligente de Zayrox 💡
            </p>

            <motion.button
              onClick={() => setIsOpen(true)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              className="mt-10 px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-xl font-semibold shadow-lg hover:shadow-cyan-500/40 transition-all duration-300"
            >
              Comenzar a chatear 💬
            </motion.button>
          </motion.div>
        ) : (
          // 💬 Pantalla del chat completa
          <motion.div
            key="chat"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 z-10 flex flex-col bg-gradient-to-b from-[#0b1120] via-[#0a1831] to-[#020617] border-t border-cyan-500/30"
          >
            {/* Header */}
            <div className="flex justify-between items-center bg-gradient-to-r from-cyan-500 to-blue-600 p-6 shadow-md">
              <div>
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  🤖 Zayrex Asistente IA
                </h2>
                <p className="text-sm text-gray-100">
                  Potenciado por Zayrox Technologies
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Cuerpo del chat */}
            <div className="flex-1 overflow-y-auto flex flex-col items-center justify-center p-8 sm:p-12">
              <motion.h1
                className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(56,189,248,0.8)] text-center animate-pulse"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                ¡Hola! Soy ZAYREX 👋
              </motion.h1>
              <p className="text-gray-400 mt-6 text-xl max-w-3xl text-center leading-relaxed">
                Tu asistente avanzado para automatización, inteligencia
                artificial 💫 <br />
                ¿En qué puedo ayudarte hoy?
              </p>
            </div>

            {/* Footer */}
            <div className="border-t border-cyan-500/20 p-6 bg-[#0f172a]">
              <div className="flex items-center gap-4 max-w-5xl mx-auto w-full">
                <input
                  type="text"
                  placeholder="Escribe tu mensaje aquí..."
                  className="flex-1 bg-[#1e293b] text-white p-4 rounded-lg border border-cyan-500/20 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-base"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:opacity-90 transition text-white">
                  Enviar
                </button>
              </div>
            </div>

            {/* ChatKit embebido */}
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.ChatKit?.init({
                    workflowId: "wf_68fbf7f7444c48190b842693c4b3bcd320f2587",
                    version: "draft",
                    containerId: "zayrex-chat",
                    theme: {
                      color: "#38bdf8",
                      title: "Zayrex Asistente IA 🤖",
                      greeting: "Hola 👋 soy Zayrex, asistente de Zayrox. ¿Cómo puedo ayudarte hoy?",
                      showFooter: false
                    }
                  });
                `,
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ZayrexChat;
