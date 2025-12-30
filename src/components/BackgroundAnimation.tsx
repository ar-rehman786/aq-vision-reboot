import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const BackgroundAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isDark, setIsDark] = useState(true);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Check for dark mode
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    
    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    return () => observer.disconnect();
  }, []);

  // Particle animation
  useEffect(() => {
    if (reducedMotion) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      const particleCount = Math.min(50, Math.floor((canvas.width * canvas.height) / 25000));
      particles = [];
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedY: (Math.random() - 0.5) * 0.3,
          speedX: (Math.random() - 0.5) * 0.15,
          opacity: Math.random() * 0.3 + 0.1,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle) => {
        particle.y += particle.speedY;
        particle.x += particle.speedX;
        
        // Wrap around edges
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        
        // Theme-aware particle color
        const color = isDark 
          ? `rgba(56, 189, 248, ${particle.opacity})` // cyan for dark
          : `rgba(99, 102, 241, ${particle.opacity * 0.6})`; // indigo for light
        
        ctx.fillStyle = color;
        ctx.fill();
      });
      
      animationId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();
    
    window.addEventListener('resize', resizeCanvas);
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [reducedMotion, isDark]);

  if (reducedMotion) {
    return (
      <div className="fixed inset-0 -z-10 bg-background" />
    );
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Mesh gradient layer */}
      <div className="absolute inset-0">
        {/* Blob 1 - Primary */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-30 dark:opacity-20"
          style={{
            background: isDark 
              ? 'radial-gradient(circle, hsl(199 89% 48% / 0.4) 0%, transparent 70%)'
              : 'radial-gradient(circle, hsl(217 91% 60% / 0.3) 0%, transparent 70%)',
          }}
          animate={{
            x: ['-10%', '5%', '-10%'],
            y: ['-5%', '10%', '-5%'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          initial={{ top: '10%', left: '20%' }}
        />
        
        {/* Blob 2 - Secondary */}
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full blur-[100px] opacity-25 dark:opacity-15"
          style={{
            background: isDark 
              ? 'radial-gradient(circle, hsl(217 91% 60% / 0.35) 0%, transparent 70%)'
              : 'radial-gradient(circle, hsl(280 70% 60% / 0.2) 0%, transparent 70%)',
          }}
          animate={{
            x: ['5%', '-8%', '5%'],
            y: ['8%', '-5%', '8%'],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          initial={{ bottom: '15%', right: '10%' }}
        />
        
        {/* Blob 3 - Accent */}
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full blur-[80px] opacity-20 dark:opacity-10"
          style={{
            background: isDark 
              ? 'radial-gradient(circle, hsl(45 93% 58% / 0.2) 0%, transparent 70%)'
              : 'radial-gradient(circle, hsl(199 89% 48% / 0.2) 0%, transparent 70%)',
          }}
          animate={{
            x: ['-5%', '10%', '-5%'],
            y: ['5%', '-8%', '5%'],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          initial={{ top: '50%', left: '60%' }}
        />
      </div>
      
      {/* Particle layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />
    </div>
  );
};

export default BackgroundAnimation;
