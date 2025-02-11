'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useLoadingStore } from '@/store/loading-store';
import styles from './RouteLoader.module.css';

const LOADER_DURATION = 1000;

const RouteLoader = () => {
  const pathname = usePathname();
  const { isLoading, setIsLoading } = useLoadingStore();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, LOADER_DURATION);

    return () => clearTimeout(timer);
  }, [pathname, setIsLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className={styles.loaderWrapper}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div className={styles.car}>
            🚙
          </motion.div>
          <motion.div className={styles.glitch1}></motion.div>
          <motion.div className={styles.glitch2}></motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RouteLoader;
