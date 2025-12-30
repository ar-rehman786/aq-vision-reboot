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

  // Particle animation with canvas
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
      // More particles for visibility
      const particleCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 15000));
      particles = [];
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2.5 + 1,
          // Diagonal movement
          speedY: Math.random() * 0.4 + 0.1,
          speedX: Math.random() * 0.3 - 0.15,
          opacity: Math.random() * 0.4 + 0.15,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle) => {
        // Slow diagonal drift
        particle.y -= particle.speedY;
        particle.x += particle.speedX;
        
        // Wrap around edges
        if (particle.y < -10) {
          particle.y = canvas.height + 10;
          particle.x = Math.random() * canvas.width;
        }
        if (particle.x < -10) particle.x = canvas.width + 10;
        if (particle.x > canvas.width + 10) particle.x = -10;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        
        // Theme-aware particle color - more visible
        const color = isDark 
          ? `rgba(56, 189, 248, ${particle.opacity})` // cyan for dark
          : `rgba(99, 102, 241, ${particle.opacity * 0.8})`; // indigo for light
        
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
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base background - deep navy for dark, off-white for light */}
      <div 
        className="absolute inset-0 transition-colors duration-500"
        style={{
          backgroundColor: isDark ? 'hsl(222 47% 5%)' : 'hsl(210 40% 98%)',
        }}
      />
      
      {/* Mesh gradient layer - more visible blobs */}
      <div className="absolute inset-0">
        {/* Blob 1 - Primary large cyan/blue */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: '50vw',
            height: '50vw',
            maxWidth: '800px',
            maxHeight: '800px',
            filter: 'blur(100px)',
            background: isDark 
              ? 'radial-gradient(circle, hsl(199 89% 48% / 0.35) 0%, hsl(199 89% 48% / 0.1) 50%, transparent 70%)'
              : 'radial-gradient(circle, hsl(217 91% 60% / 0.25) 0%, hsl(217 91% 60% / 0.08) 50%, transparent 70%)',
            top: '-5%',
            left: '10%',
          }}
          animate={{
            x: ['0%', '15%', '0%'],
            y: ['0%', '20%', '0%'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Blob 2 - Secondary blue/purple */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: '45vw',
            height: '45vw',
            maxWidth: '700px',
            maxHeight: '700px',
            filter: 'blur(90px)',
            background: isDark 
              ? 'radial-gradient(circle, hsl(217 91% 55% / 0.3) 0%, hsl(217 91% 55% / 0.08) 50%, transparent 70%)'
              : 'radial-gradient(circle, hsl(280 70% 60% / 0.18) 0%, hsl(280 70% 60% / 0.05) 50%, transparent 70%)',
            bottom: '5%',
            right: '5%',
          }}
          animate={{
            x: ['0%', '-20%', '0%'],
            y: ['0%', '-15%', '0%'],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Blob 3 - Accent (subtle warm for dark, cyan for light) */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: '35vw',
            height: '35vw',
            maxWidth: '550px',
            maxHeight: '550px',
            filter: 'blur(80px)',
            background: isDark 
              ? 'radial-gradient(circle, hsl(199 70% 45% / 0.25) 0%, hsl(199 70% 45% / 0.05) 50%, transparent 70%)'
              : 'radial-gradient(circle, hsl(199 89% 55% / 0.15) 0%, hsl(199 89% 55% / 0.03) 50%, transparent 70%)',
            top: '40%',
            left: '55%',
          }}
          animate={{
            x: ['-10%', '10%', '-10%'],
            y: ['10%', '-10%', '10%'],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
      
      {/* Particle layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
      />
    </div>
  );
};

export default BackgroundAnimation;
