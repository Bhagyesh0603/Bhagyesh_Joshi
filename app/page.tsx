'use client';

import LiquidEther from '@/components/LiquidEther';
import CustomCursor from '@/components/CustomCursor';
import Navigation from '@/components/Navigation';
import { Github, Linkedin, Send } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = window.scrollY / scrollHeight;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate section backgrounds based on scroll
  const getBackgroundColor = (sectionIndex: number) => {
    const sections = 5; // Total sections
    const sectionProgress = scrollProgress * sections;
    
    if (sectionIndex === 0 && sectionProgress < 1) {
      // Hero: white
      return 'bg-white';
    } else if (sectionIndex === 1 && sectionProgress >= 1 && sectionProgress < 2) {
      // About: black
      return 'bg-zinc-900';
    } else if (sectionIndex === 2 && sectionProgress >= 2 && sectionProgress < 3) {
      // Expertise: white
      return 'bg-white';
    } else if (sectionIndex === 3 && sectionProgress >= 3 && sectionProgress < 4) {
      // Projects: black
      return 'bg-zinc-900';
    } else if (sectionIndex === 4 && sectionProgress >= 4) {
      // Experience: black
      return 'bg-zinc-900';
    }
    return 'bg-white';
  };

  return (
    <div className="relative min-h-screen">
      <CustomCursor />
      <Navigation scrollProgress={scrollProgress} />

      {/* Hero Section - WHITE */}
      <section id="home" className="relative h-screen w-full overflow-hidden bg-white transition-colors duration-1000">
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
            <div className="text-4xl font-bold text-zinc-900 hover-target">
              BJ
            </div>
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
            <h1 className="text-7xl md:text-8xl font-bold text-zinc-900 mb-4">
              Full-stack Developer
            </h1>
            <h2 className="text-7xl md:text-8xl font-bold text-zinc-900">
              UI & UX Designer.
            </h2>
          </div>

          {/* Scroll Down */}
          <div className="absolute bottom-12">
            <p className="text-sm text-zinc-900 animate-bounce">scroll down</p>
          </div>
        </div>
      </section>

      {/* About Section - BLACK with curved top */}
      <section id="about" className="section-curved relative min-h-screen w-full bg-zinc-900 flex items-center justify-center px-8 py-24">
        <div className="max-w-6xl w-full">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-5xl md:text-6xl font-light text-white leading-tight mb-8">
                I&apos;m Bhagyesh – a Full Stack Developer crafting fast, scalable, and immersive digital experiences that merge creativity with engineering precision.
              </p>
              <div className="h-px w-32 bg-white mb-8"></div>
              <p className="text-xl text-zinc-400">
                I specialize in developing SaaS platforms, AI-driven products, and interactive 3D web experiences using technologies like Next.js, Node.js, and Three.js.
              </p>
              <button className="mt-12 px-8 py-4 bg-[#c4ff0e] text-black rounded-full font-medium hover-target transition-all hover:scale-105">
                About Me →
              </button>
            </div>
            <div className="relative h-96 bg-zinc-800 rounded-lg overflow-hidden">
              {/* Placeholder for image */}
              <div className="absolute inset-0 flex items-center justify-center text-zinc-600">
                <div className="text-center">
                  <p className="text-sm">Your photo here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section - WHITE with curved top */}
      <section className="section-curved relative min-h-screen w-full bg-white py-24 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Large Text Animation */}
          <div className="mb-24 overflow-hidden">
            <div className="tech-marquee">
              <div className="tech-marquee-content text-7xl md:text-[10rem] font-bold text-zinc-900 whitespace-nowrap">
                <span>FULL-STACK DEVELOPER • </span>
                <span>REACT • </span>
                <span>NODE.JS • </span>
                <span>TYPESCRIPT • </span>
                <span>DATABASE • </span>
                <span>DSA • </span>
                <span>NEXT.JS • </span>
                <span>MONGODB • </span>
                <span>POSTGRESQL • </span>
                <span>API DESIGN • </span>
                <span>PRISMA • </span>
                <span>THREE.JS • </span>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-zinc-50 p-12 rounded-lg border border-zinc-200 hover:border-[#c4ff0e] transition-all">
              <div className="w-16 h-16 bg-[#c4ff0e] rounded-full flex items-center justify-center mb-8">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                </svg>
              </div>
              <div className="text-sm text-zinc-500 mb-2">01</div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">
                UI/UX Design & Frontend
              </h3>
              <p className="text-zinc-600">
                Designing modern, responsive interfaces with Figma, Tailwind CSS, and Framer Motion. Creating intuitive experiences with clean design systems and pixel-perfect implementations.
              </p>
            </div>

            <div className="group bg-zinc-50 p-12 rounded-lg border border-zinc-200 hover:border-[#c4ff0e] transition-all">
              <div className="w-16 h-16 bg-[#c4ff0e] rounded-full flex items-center justify-center mb-8">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <div className="text-sm text-zinc-500 mb-2">02</div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">
                SaaS Platform Development
              </h3>
              <p className="text-zinc-600">
                Developing end-to-end SaaS solutions with subscription systems, Stripe billing, and multi-tenant management. Ensuring scalability and secure user management.
              </p>
            </div>

            <div className="group bg-zinc-50 p-12 rounded-lg border border-zinc-200 hover:border-[#c4ff0e] transition-all">
              <div className="w-16 h-16 bg-[#c4ff0e] rounded-full flex items-center justify-center mb-8">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="text-sm text-zinc-500 mb-2">03</div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">
                API & System Architecture
              </h3>
              <p className="text-zinc-600">
                Designing maintainable APIs with PostgreSQL, Prisma, and MongoDB. Focusing on performance optimization, security best practices, and reliable data flow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section - WHITE/BLACK TRANSITION with curved top */}
      <section className="section-curved relative w-full bg-zinc-900 py-32 overflow-hidden">
        <div className="marquee-container">
          <div className="marquee-content text-6xl font-light text-white whitespace-nowrap">
            <span>Innovative Self-Made Creations ✦ </span>
            <span>Driven by Passion, Built with Code ✦ </span>
            <span>Custom Web Experiences ✦ </span>
            <span>Tailored Web Development for You ✦ </span>
          </div>
        </div>
      </section>

      {/* Projects Section - BLACK (continues from marquee, no curve) */}
      <section id="works" className="relative min-h-screen w-full bg-zinc-900 py-24 px-8 transition-colors duration-1000">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-bold text-white mb-4">
            solutions that bring ideas to life
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {/* Project 1 */}
            <div className="group relative aspect-video bg-zinc-800 rounded-lg overflow-hidden hover-target cursor-pointer">
              <div className="absolute inset-0 bg-linear-to-br from-zinc-700 to-zinc-800"></div>
              <div className="absolute top-4 left-4 text-sm text-zinc-400">AI Assistant</div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <p className="text-sm mb-2">Project Image</p>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative aspect-video bg-amber-900 rounded-lg overflow-hidden hover-target cursor-pointer">
              <div className="absolute inset-0 bg-linear-to-br from-amber-800 to-amber-900"></div>
              <div className="absolute top-4 left-4 text-sm text-zinc-200">Business</div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-4xl font-light">My Business</h3>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group relative aspect-video bg-zinc-800 rounded-lg overflow-hidden hover-target cursor-pointer">
              <div className="absolute inset-0 bg-linear-to-br from-zinc-700 to-zinc-800"></div>
              <div className="absolute top-4 left-4 text-sm text-zinc-400">3D Visualisation</div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <p className="text-sm">Project Preview</p>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="group relative aspect-video bg-zinc-800 rounded-lg overflow-hidden hover-target cursor-pointer">
              <div className="absolute inset-0 bg-linear-to-br from-zinc-700 to-zinc-800"></div>
              <div className="absolute top-4 left-4 text-sm text-zinc-400">Property Booking</div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <p className="text-sm">Project Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section - BLACK */}
      <section className="relative w-full bg-zinc-900 py-24 px-8 transition-colors duration-1000">
        <div className="max-w-4xl mx-auto">
          <div className="border-l-2 border-[#c4ff0e] pl-12">
            <div className="mb-16">
              <h3 className="text-4xl font-light text-white mb-4">Comra AI</h3>
              <p className="text-xl text-zinc-400 mb-2">Full Stack Developer (Full-time)</p>
              <p className="text-sm text-zinc-500 mb-4">Nov 2024 – Present</p>
              <p className="text-zinc-400">
                Building immersive 3D virtual tour systems using React Three Fiber, Prisma, and PostgreSQL for real estate and architecture.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        * {
          cursor: none !important;
        }

        html {
          scroll-behavior: smooth;
        }

        .marquee-container {
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        .marquee-content {
          display: flex;
          animation: marquee 30s linear infinite;
        }

        .marquee-content span {
          padding-right: 4rem;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (pointer: coarse) {
          * {
            cursor: auto !important;
          }
        }

        .tech-marquee {
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        .tech-marquee-content {
          display: flex;
          animation: tech-scroll 15s linear infinite;
        }

        .tech-marquee-content span {
          padding-right: 2rem;
        }

        @keyframes tech-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Section curved transitions */
        .section-curved {
          position: relative;
          border-top-left-radius: 50px;
          border-top-right-radius: 50px;
          margin-top: -50px;
          z-index: 10;
        }

        section {
          position: relative;
        }

        @media (prefers-reduced-motion: no-preference) {
          .section-curved {
            animation: slideUp linear;
            animation-timeline: view();
            animation-range: entry 0% cover 30%;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(100px);
            opacity: 0.8;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
