import { motion } from 'framer-motion';
import { useWindowHeight } from '@react-hook/window-size';

export default function HeroSection() {
  const onlyHeight = useWindowHeight();
  let height = onlyHeight > 1200 ? 1200 : onlyHeight;
  console.log(height);
  return (
    <>
      <motion.h1
        animate={{ scale: [0, 1] }}
        transition={{ duration: 0.5 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        style={{ height: height, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        Hi, I'm okojomoeko!!!
      </motion.h1>
    </>
  );
}
