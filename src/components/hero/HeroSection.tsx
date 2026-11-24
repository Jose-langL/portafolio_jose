import React, { useRef } from 'react';
import { ArrowDown, Download, ExternalLink } from 'lucide-react';
import { OceanHeroCanvas } from './OceanHeroCanvas';
import type { OceanHeroHandle } from './OceanHeroCanvas';
import { HeroPhysicsStage } from './HeroPhysicsStage';
import { AntarcticaDecorations } from './AntarcticaDecorations';
import { TactileButton } from '../ui/TactileButton';
import { profileData } from '../../data/portfolioData';
import { scrollToTarget } from '../../hooks/useLenisSmoothScroll';

interface HeroSectionProps { language?: 'es' | 'en' }

export const HeroSection: React.FC<HeroSectionProps> = ({ language = 'es' }) => {
  const oceanRef = useRef<OceanHeroHandle | null>(null);

  const handleSplash = (clientX: number, clientY: number, intensity: number) => {
    if (oceanRef.current) {
      oceanRef.current.triggerSplash(clientX, clientY, intensity);
    }
  };

  const handleRipple = (clientX: number, clientY: number, size?: number) => {
    if (oceanRef.current) {
      oceanRef.current.triggerRipple(clientX, clientY, size);
    }
  };

  const handleScrollToProjects = () => {
    scrollToTarget('#projects', -80);
  };

  return (
    <section id="hero" className="relative w-full h-screen min-h-[700px] flex flex-col justify-between pt-16 pb-10 overflow-hidden select-none">
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <OceanHeroCanvas ref={oceanRef} />
      </div>

      <AntarcticaDecorations />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full flex-1 flex flex-col items-center justify-center -translate-y-16 sm:-translate-y-24">
        <div className="w-full flex flex-col items-center text-center">
          <HeroPhysicsStage
            onSplash={handleSplash}
            onRipple={handleRipple}
          />

          <p className="mt-3 sm:mt-4 max-w-xl text-center text-xs sm:text-base text-[#f8fafc] font-medium leading-relaxed drop-shadow-md px-2">
            {language === 'es'
              ? 'Técnico en Desarrollo de Software. Enfocado en desarrollo web y backend, creando soluciones útiles y eficientes.'
              : 'Software Development Technician focused on web and backend development, building useful and efficient solutions.'}
          </p>

          <div className="mt-4 sm:mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3.5 px-2">
            <TactileButton
              variant="primary"
              onClick={handleScrollToProjects}
              icon={<ArrowDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
            >
              {language === 'es' ? 'Ver proyectos' : 'View projects'}
            </TactileButton>

            <a
              href="/Jose_Luis_Tot_Herrera.pdf"
              download="Jose_Luis_Tot_Herrera.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-[#0d2844] hover:bg-[#123559] text-[#f8fafc] border border-[#224c75] hover:border-[#a8cbd8]/60 font-medium text-xs sm:text-sm transition-all select-none cursor-pointer hover:-translate-y-0.5"
            >
              <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#38bdf8]" />
              <span>{language === 'es' ? 'Descargar CV' : 'Download CV'}</span>
            </a>

            <a
              href={profileData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-[#0d2844] hover:bg-[#123559] text-[#f8fafc] border border-[#224c75] hover:border-[#a8cbd8]/60 font-medium text-xs sm:text-sm transition-all select-none cursor-pointer hover:-translate-y-0.5"
            >
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#a8cbd8]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
