import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-base"
    >
      <motion.span
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet to-cyan font-display text-2xl font-bold text-base shadow-glow"
      >
        AM
      </motion.span>
    </motion.div>
  );
}
