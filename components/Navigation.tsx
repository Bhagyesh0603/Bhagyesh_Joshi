'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface NavigationProps {
  scrollProgress: number;
}

export default function Navigation({ scrollProgress }: NavigationProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Determine if we're on a dark or light section
    const sections = 5;
    const sectionProgress = scrollProgress * sections;
    
    // Dark sections: 1-2 (About), 3-5 (Marquee, Projects, Experience)
    const isOnDarkSection = (sectionProgress >= 1 && sectionProgress < 3) || sectionProgress >= 3;
    setIsDark(isOnDarkSection);
  }, [scrollProgress]);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Works', href: '#works' },
  ];

  const playTypeSound = () => {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.value = 800;
      oscillator.type = 'sine';
      
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
    } catch (e) {
      // Silently fail if audio context is not available
    }
  };

  return (
    <nav className="fixed top-8 right-8 z-50 flex items-center gap-8">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="relative overflow-hidden hover-target"
          onMouseEnter={() => {
            setHoveredItem(item.name);
            playTypeSound();
          }}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <div className="relative h-6 overflow-hidden">
            <div
              className={`transition-transform duration-500 ease-out ${
                hoveredItem === item.name ? '-translate-y-6' : 'translate-y-0'
              }`}
            >
              <div className={`h-6 flex items-center text-lg font-medium transition-colors duration-500 ${
                isDark ? 'text-zinc-200' : 'text-zinc-800'
              }`}>
                {item.name}
              </div>
              <div className="h-6 flex items-center text-lg font-medium text-[#c4ff0e]">
                {item.name}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </nav>
  );
}
