import { useOutlet, useLocation } from '@remix-run/react';
import { AnimatePresence, motion } from 'framer-motion';

/**
 * 路由动画组件
 */
export function AnimateRoute() {
  const outlet = useOutlet();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.main key={useLocation().pathname} initial={{ x: '10%', opacity: 0 }} animate={{ x: '0', opacity: 1 }}>
        {outlet}
      </motion.main>
    </AnimatePresence>
  );
}
