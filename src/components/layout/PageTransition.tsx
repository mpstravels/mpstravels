'use client'

import { motion, AnimatePresence } from 'framer-motion';
import { useLoadingStore } from '@/store/loading-store';

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const { isLoading } = useLoadingStore();

  return (
    <AnimatePresence mode="wait">
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.3, 
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageTransition;
