'use client';

import LiquidEther from '@/components/LiquidEther';
import CustomCursor from '@/components/CustomCursor';
import Navigation from '@/components/Navigation';
import { Github, Linkedin, Send } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = window.scrollY / scrollHeight;
      setScrollProgress(progress);

      // Animate About section - Smooth Horizon Rising Effect
      if (aboutRef.current) {
        const rect = aboutRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight * 1.3 && rect.top > -rect.height) {
          // Progress from 0 to 1 as section comes into view
          const rawProgress = Math.max(0, Math.min(1, 1 - (rect.top / (windowHeight))));
          
          // Smooth easing curve for more natural reveal
          const clipProgress = rawProgress < 0.5 
            ? 4 * rawProgress * rawProgress * rawProgress 
            : 1 - Math.pow(-2 * rawProgress + 2, 3) / 2; // Cubic ease-in-out
          
          // More dramatic horizon curve that flattens as it rises
          const horizontalRadius = 60 + (clipProgress * 90); // 60% to 150%
          const verticalRadius = 5 + (clipProgress * 115); // Start with small curve, expand fully
          const centerY = 100 - (clipProgress * 50); // Rise from bottom
          
          aboutRef.current.style.clipPath = `ellipse(${horizontalRadius}% ${verticalRadius}% at 50% ${centerY}%)`;
          aboutRef.current.style.opacity = '1';
        } else if (rect.top >= windowHeight * 1.3) {
          // Reset when section is below viewport - small visible curve
          aboutRef.current.style.clipPath = 'ellipse(60% 5% at 50% 100%)';
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-white">
      <CustomCursor />
      <Navigation scrollProgress={scrollProgress} />

      {/* Hero Section - WHITE with LiquidEther */}
      <section id="home" className="relative h-screen w-full overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <LiquidEther
            colors={['#5227FF', '#FF9FFC', '#B19EEF']}
            mouseForce={20}
            cursorSize={100}
            resolution={0.5}
            autoDemo={true}
            autoSpeed={0.5}
            autoIntensity={2.2}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
          {/* Logo */}
          <div className="absolute top-8 left-8">
            <div className="text-4xl font-bold text-zinc-900 hover-target">BJ</div>
          </div>

          {/* Social Links - Left Side */}
          <div className="absolute left-8 top-1/2 -translate-y-1/2 flex flex-col gap-6">
            <a href="https://linkedin.com" className="hover-target text-zinc-900 transition-colors hover:text-[#c4ff0e]">
              <Linkedin size={24} />
            </a>
            <a href="https://wa.me" className="hover-target text-zinc-900 transition-colors hover:text-[#c4ff0e]">
              <Send size={24} />
            </a>
            <a href="https://github.com" className="hover-target text-zinc-900 transition-colors hover:text-[#c4ff0e]">
              <Github size={24} />
            </a>
          </div>

          {/* Vertical Text - Right Side */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2">
            <div className="text-sm tracking-widest text-zinc-900 [writing-mode:vertical-lr] rotate-180">
              BHAGYESH JOSHI
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center">
            <p className="text-lg mb-4 text-zinc-900">Hi! I&apos;m Bhagyesh</p>
            <h1 className="text-7xl md:text-8xl font-bold text-zinc-900 mb-4">Full-stack Developer</h1>
            <h2 className="text-7xl md:text-8xl font-bold text-zinc-900">UI & UX Designer.</h2>
          </div>

          {/* Scroll Down */}
          <div className="absolute bottom-12">
            <p className="text-sm text-zinc-900 animate-bounce">scroll down</p>
          </div>
        </div>
      </section>

      {/* About Section - BLACK with horizon rising effect */}
      <div 
        ref={aboutRef}
        className="relative z-20 will-change-transform"
        style={{ 
          clipPath: 'ellipse(60% 5% at 50% 100%)',
          transition: 'clip-path 0.08s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <section 
          id="about" 
          className="relative min-h-screen w-full bg-zinc-900 flex items-center justify-center px-8 py-32"
        >
          <div className="max-w-4xl w-full text-center">
            <p className="text-4xl md:text-5xl font-light text-white leading-relaxed mb-12">
              I&apos;m Bhagyesh – a Full Stack Developer crafting fast, scalable, and immersive digital experiences that merge creativity with engineering precision.
            </p>
            <p className="text-lg text-zinc-400 mb-12 max-w-2xl mx-auto">
              I specialize in developing SaaS platforms, AI-driven products, and interactive 3D web experiences using technologies like Next.js, Node.js, and Three.js.
            </p>
            <button className="px-8 py-4 bg-[#c4ff0e] text-black rounded-full font-medium hover-target transition-all hover:scale-105 inline-flex items-center gap-3">
              About Me
              <span className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-[#c4ff0e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </span>
            </button>
            
            {/* Bottom info */}
            <div className="flex justify-between items-center mt-32 text-zinc-500 text-sm">
              <div className="flex items-center gap-2">
                <span>↓</span>
                <span>Scroll to Explore</span>
              </div>
              <span>My Short Story</span>
            </div>
          </div>
        </section>
      </div>

      {/* Expertise Section - WHITE floating card */}
      <div className="relative bg-zinc-900 px-4 md:px-12 lg:px-20 pb-20">
        <div>
          <section className="relative w-full bg-zinc-100 py-24 px-8 rounded-[40px] shadow-2xl">
            <div className="max-w-7xl mx-auto">
              {/* Large Text Animation */}
              <div className="mb-24 overflow-hidden">
                <div className="tech-marquee">
                  <div className="tech-marquee-content">
                    <span>FULL-STACK DEVELOPER • </span>
                    <span>UI & UX DESIGNER • </span>
                    <span>REACT • </span>
                    <span>NODE.JS • </span>
                    <span>TYPESCRIPT • </span>
                    <span>DATABASE • </span>
                    <span>DSA • </span>
                    <span>NEXT.JS • </span>
                    <span>FULL-STACK DEVELOPER • </span>
                    <span>UI & UX DESIGNER • </span>
                    <span>REACT • </span>
                    <span>NODE.JS • </span>
                  </div>
                </div>
              </div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-3 gap-8">
                <div className="group bg-white p-12 rounded-2xl border border-zinc-200 hover:border-[#c4ff0e] transition-all duration-300 hover:shadow-xl">
                  <div className="w-16 h-16 bg-[#c4ff0e] rounded-full flex items-center justify-center mb-8">
                    <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                    </svg>
                  </div>
                  <div className="text-sm text-zinc-500 mb-2">01</div>
                  <h3 className="text-2xl font-bold text-zinc-900 mb-4">UI/UX Design & Frontend</h3>
                  <p className="text-zinc-600">Designing modern, responsive interfaces with Figma, Tailwind CSS, and Framer Motion.</p>
                </div>

                <div className="group bg-white p-12 rounded-2xl border border-zinc-200 hover:border-[#c4ff0e] transition-all duration-300 hover:shadow-xl">
                  <div className="w-16 h-16 bg-[#c4ff0e] rounded-full flex items-center justify-center mb-8">
                    <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <div className="text-sm text-zinc-500 mb-2">02</div>
                  <h3 className="text-2xl font-bold text-zinc-900 mb-4">SaaS Platform Development</h3>
                  <p className="text-zinc-600">Developing end-to-end SaaS solutions with subscription systems and Stripe billing.</p>
                </div>

                <div className="group bg-white p-12 rounded-2xl border border-zinc-200 hover:border-[#c4ff0e] transition-all duration-300 hover:shadow-xl">
                  <div className="w-16 h-16 bg-[#c4ff0e] rounded-full flex items-center justify-center mb-8">
                    <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="text-sm text-zinc-500 mb-2">03</div>
                  <h3 className="text-2xl font-bold text-zinc-900 mb-4">API & System Architecture</h3>
                  <p className="text-zinc-600">Designing maintainable APIs with PostgreSQL, Prisma, and MongoDB.</p>
                </div>
              </div>
            
              {/* Photo section */}
              <div className="mt-24 max-w-4xl mx-auto">
                <div className="relative h-[500px] bg-zinc-800 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-zinc-800 flex items-end justify-center">
                    <div className="text-center text-white pb-8">
                      <p className="text-sm opacity-50">Your photo here</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Projects Section */}
      <section id="works" className="relative w-full bg-zinc-900 py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-16">
            Solutions that bring ideas to life
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative aspect-video bg-zinc-800 rounded-2xl overflow-hidden hover-target cursor-pointer transition-transform duration-300 hover:scale-[1.02]">
              <div className="absolute top-4 left-4 text-sm text-zinc-400">AI Assistant</div>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-sm text-zinc-500">Project Image</p>
              </div>
            </div>

            <div className="group relative aspect-video bg-amber-900 rounded-2xl overflow-hidden hover-target cursor-pointer transition-transform duration-300 hover:scale-[1.02]">
              <div className="absolute top-4 left-4 text-sm text-zinc-200">Business</div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-3xl font-light text-white">My Business</h3>
              </div>
            </div>

            <div className="group relative aspect-video bg-zinc-800 rounded-2xl overflow-hidden hover-target cursor-pointer transition-transform duration-300 hover:scale-[1.02]">
              <div className="absolute top-4 left-4 text-sm text-zinc-400">3D Visualisation</div>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-sm text-zinc-500">Project Preview</p>
              </div>
            </div>

            <div className="group relative aspect-video bg-zinc-800 rounded-2xl overflow-hidden hover-target cursor-pointer transition-transform duration-300 hover:scale-[1.02]">
              <div className="absolute top-4 left-4 text-sm text-zinc-400">Property Booking</div>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-sm text-zinc-500">Project Preview</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative w-full bg-zinc-900 py-24 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="border-l-4 border-[#c4ff0e] pl-12">
            <h3 className="text-4xl font-light text-white mb-4">Comra AI</h3>
            <p className="text-xl text-zinc-400 mb-2">Full Stack Developer (Full-time)</p>
            <p className="text-sm text-zinc-500 mb-4">Nov 2024 – Present</p>
            <p className="text-zinc-400">
              Building immersive 3D virtual tour systems using React Three Fiber, Prisma, and PostgreSQL for real estate and architecture.
            </p>
          </div>
        </div>
      </section>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        * {
          cursor: none;
        }

        .tech-marquee {
          width: 100%;
          overflow: hidden;
        }

        .tech-marquee-content {
          display: flex;
          font-size: clamp(4rem, 10vw, 10rem);
          font-weight: bold;
          color: #18181b;
          white-space: nowrap;
          animation: marquee 20s linear infinite;
        }

        .tech-marquee-content span {
          padding-right: 2rem;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
