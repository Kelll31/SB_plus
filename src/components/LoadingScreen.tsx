import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("ИНИЦИАЛИЗАЦИЯ СИСТЕМ...");

  const statuses = [
    "ИНИЦИАЛИЗАЦИЯ СИСТЕМ...",
    "ПРОВЕРКА ПРОТОКОЛОВ БЕЗОПАСНОСТИ...",
    "ПОДКЛЮЧЕНИЕ К УЗЛАМ СВЯЗИ...",
    "ЗАГРУЗКА ИНТЕРФЕЙСА...",
    "СИСТЕМА ПОД ЗАЩИТОЙ"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const statusIndex = Math.min(
      Math.floor((progress / 100) * statuses.length),
      statuses.length - 1
    );
    setStatus(statuses[statusIndex]);
  }, [progress]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-industrial-dark flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Scanning Line Effect */}
      <motion.div
        animate={{ top: ["-10%", "110%"] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-px bg-industrial-accent/50 shadow-[0_0_15px_rgba(0,255,0,0.5)] z-10"
      />

      <div className="relative z-20 flex flex-col items-center max-w-xs w-full">
        {/* Animated Logo Container */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12 relative"
        >
          <div className="w-24 h-24 p-2 relative z-10">
            <img
              src="/logo_SB+.png"
              alt="СБ+"
              className="w-full h-full object-contain"
              decoding="async"
            />
          </div>
          {/* Decorative corners */}
          <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-industrial-accent" />
          <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-industrial-accent" />
          <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-industrial-accent" />
          <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-industrial-accent" />
          
          {/* Pulsing ring */}
          <motion.div
            animate={{ scale: [1, 1.2], opacity: [0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 border border-industrial-accent rounded-sm"
          />
        </motion.div>

        {/* Technical Info */}
        <div className="w-full space-y-4">
          <div className="flex justify-between items-end font-mono text-[10px] tracking-[0.2em] text-industrial-accent uppercase">
            <motion.span
              key={status}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
            >
              {status}
            </motion.span>
            <span>{Math.floor(progress)}%</span>
          </div>

          {/* Progress Bar */}
          <div className="h-1 w-full bg-white/5 relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-industrial-accent shadow-[0_0_10px_rgba(0,255,0,0.5)]"
              animate={{ width: `${progress}%` }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
            />
          </div>

          {/* Decorative binary/hex strings */}
          <div className="flex justify-between font-mono text-[8px] text-industrial-text-muted/40 uppercase tracking-widest">
            <span>0x4A 0x6F 0x6E</span>
            <span>SEC_LEVEL_4</span>
            <span>SYS_PROTECTED</span>
          </div>
        </div>
      </div>

      {/* Corner Accents */}
      <div className="absolute top-8 left-8 font-mono text-[10px] text-industrial-text-muted/30 uppercase tracking-[0.5em] [writing-mode:vertical-rl] rotate-180">
        SB_PLUS_INDUSTRIAL_OS_V2.0
      </div>
      <div className="absolute bottom-8 right-8 font-mono text-[10px] text-industrial-text-muted/30 uppercase tracking-[0.5em] [writing-mode:vertical-rl]">
        ENCRYPTED_CONNECTION_ACTIVE
      </div>
    </motion.div>
  );
}
