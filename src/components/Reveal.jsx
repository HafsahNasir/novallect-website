// Scroll-triggered reveal wrapper using framer-motion.
// Fades + lifts children into view once, as they enter the viewport.
import { motion } from 'framer-motion'

export default function Reveal({ children, delay = 0, y = 24, as = 'div', ...rest }) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
