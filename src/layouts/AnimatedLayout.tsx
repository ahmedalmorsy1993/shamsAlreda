import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

export default function AnimatedLayout({ children, ...props }: React.PropsWithChildren) {
  const location = useLocation();
  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
