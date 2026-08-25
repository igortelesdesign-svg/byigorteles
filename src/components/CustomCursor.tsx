import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [cursorText, setCursorText] = useState<string>('');
  const [cursorVariant, setCursorVariant] = useState<'default' | 'project' | 'link'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    // Check if device has touch primary
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }
    setIsTouchDevice(false);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectTarget = target.closest('[data-cursor="view"]');
      const linkTarget = target.closest('a[target="_blank"], [data-cursor="link"]');
      const interactiveTarget = target.closest('button, a, input, textarea, select');

      if (projectTarget) {
        setCursorVariant('project');
        setCursorText('VIEW');
      } else if (linkTarget) {
        setCursorVariant('link');
        setCursorText('↗');
      } else if (interactiveTarget) {
        setCursorVariant('link');
        setCursorText('');
      } else {
        setCursorVariant('default');
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center -translate-x-1/2 -translate-y-1/2 will-change-transform"
      style={{
        x: mouseX,
        y: mouseY,
      }}
    >
      <motion.div
        animate={{
          width: cursorVariant === 'project' ? 72 : cursorVariant === 'link' ? 44 : 20,
          height: cursorVariant === 'project' ? 72 : cursorVariant === 'link' ? 44 : 20,
          backgroundColor:
            cursorVariant === 'project'
              ? 'rgba(0, 213, 255, 0.92)'
              : cursorVariant === 'link'
              ? 'rgba(22, 139, 255, 0.25)'
              : 'rgba(255, 255, 255, 0.15)',
          borderColor:
            cursorVariant === 'project'
              ? 'rgba(0, 213, 255, 1)'
              : cursorVariant === 'link'
              ? 'rgba(0, 213, 255, 0.8)'
              : 'rgba(255, 255, 255, 0.35)',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 350 }}
        className="rounded-full flex items-center justify-center border backdrop-blur-xs text-center select-none"
      >
        {cursorText && (
          <span
            className={`font-mono font-semibold tracking-wider ${
              cursorVariant === 'project'
                ? 'text-[#07090D] text-[11px]'
                : 'text-[#00D5FF] text-[14px]'
            }`}
          >
            {cursorText}
          </span>
        )}
      </motion.div>
    </motion.div>
  );
};
