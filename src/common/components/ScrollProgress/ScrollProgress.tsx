import { motion, useScroll, useSpring } from 'framer-motion'
import styled from 'styled-components'

const S = {
  ScrollProgress: styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 0.5rem;
    background-color: ${({ theme: { colors } }) => colors.primary};
    transform-origin: 0%;
    z-index: 2;
    border-radius: 0 1rem 1rem 0;
  `,
}

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return <S.ScrollProgress style={{ scaleX }} />
}
