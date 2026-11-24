import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ContributionDay } from '../../hooks/useGithubContributions';

interface GithubHeatmapGridProps {
  contributions: ContributionDay[];
  loading: boolean;
  language: 'es' | 'en';
}

const MONTH_NAMES: Record<'es' | 'en', string[]> = {
  es: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
};

const formatDate = (dateString: string, language: 'es' | 'en'): string => {
  const date = new Date(`${dateString}T12:00:00`);
  if (isNaN(date.getTime())) return dateString;
  return new Intl.DateTimeFormat(language === 'es' ? 'es' : 'en', { day: 'numeric', month: 'short', year: 'numeric' }).format(date);
};

const getBeachLevelColor = (level: number): string => {
  switch (level) {
    case 1:
      return 'bg-[#86efac] border-[#4ade80] hover:bg-[#4ade80]';
    case 2:
      return 'bg-[#4ade80] border-[#22c55e] hover:bg-[#22c55e]';
    case 3:
      return 'bg-[#22c55e] border-[#16a34a] hover:bg-[#16a34a]';
    case 4:
      return 'bg-[#15803d] border-[#14532d] hover:bg-[#14532d]';
    case 0:
    default:
      return 'bg-[#e4f3f8] border-[#b8d2dd] hover:border-[#cbd5e1]';
  }
};

export const GithubHeatmapGrid: React.FC<GithubHeatmapGridProps> = ({ contributions, loading, language }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hoveredCell, setHoveredCell] = useState<{
    date: string;
    count: number;
    posX: number;
    posY: number;
  } | null>(null);

  // auto scroll to latest contribution weeks on mobile screen
  useEffect(() => {
    if (containerRef.current) {
      const scrollEl = containerRef.current.querySelector('.heatmap-scroll-wrapper');
      if (scrollEl && window.innerWidth < 640) {
        scrollEl.scrollLeft = scrollEl.scrollWidth;
      }
    }
  }, [contributions, loading]);

  if (loading) {
    return (
      <div className="w-full overflow-x-auto py-8">
        <div className="min-w-[750px] flex flex-col gap-2.5 animate-pulse">
          <div className="h-4 w-40 bg-[#c6dce5]/60 rounded-md mb-2" />
          <div className="grid grid-flow-col grid-rows-7 gap-1.5">
            {Array.from({ length: 364 }).map((_, idx) => (
              <div key={idx} className="w-3.5 h-3.5 rounded-[3px] bg-[#e4f3f8] border border-[#b8d2dd]" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // group contributions into calendar weeks
  const weeks: ContributionDay[][] = [];
  let currentWeek: ContributionDay[] = [];

  contributions.forEach((day, index) => {
    currentWeek.push(day);
    const dayOfWeek = new Date(day.date).getDay();
    if (dayOfWeek === 6 || index === contributions.length - 1) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  });

  // calculate column positions for month labels with minimum spacing to prevent collision
  const monthLabels: { month: string; colIndex: number }[] = [];
  let previousMonth = -1;
  let lastColIdx = -10;

  weeks.forEach((week, colIdx) => {
    const firstDayOfWeek = week[0];
    if (firstDayOfWeek) {
          const monthIndex = new Date(firstDayOfWeek.date).getMonth();
      if (monthIndex !== previousMonth && colIdx - lastColIdx >= 3) {
        monthLabels.push({
          month: MONTH_NAMES[language][monthIndex],
          colIndex: colIdx
        });
        previousMonth = monthIndex;
        lastColIdx = colIdx;
      }
    }
  });

  const handleCellMouseEnter = (day: ContributionDay, event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const cellRect = event.currentTarget.getBoundingClientRect();

    setHoveredCell({
      date: day.date,
      count: day.count,
      posX: cellRect.left - containerRect.left + cellRect.width / 2,
      posY: cellRect.top - containerRect.top
    });
  };

  return (
    <div ref={containerRef} className="relative w-full rounded-2xl bg-[#eaf8fc]/70 border-2 border-[#0f172a] p-3.5 sm:p-6 shadow-[3px_3px_0px_#0f172a]">
      <AnimatePresence>
        {hoveredCell && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.12 }}
            style={{
              left: `${hoveredCell.posX}px`,
              top: `${hoveredCell.posY - 44}px`,
              transform: 'translateX(-50%)'
            }}
            className="pointer-events-none absolute z-50 px-3 py-1.5 rounded-xl bg-[#0f172a] text-white text-[11px] font-mono shadow-2xl border border-[#38bdf8]/40 whitespace-nowrap"
          >
            <span className="font-bold text-[#4ade80]">
              {hoveredCell.count === 0 ? (language === 'es' ? 'Sin contribuciones' : 'No contributions') : `${hoveredCell.count} ${language === 'es' ? 'contribuciones' : 'contributions'}`}
            </span>
            <span className="text-[#64748b] mx-1.5">•</span>
            <span className="text-[#cbd5e1]">{formatDate(hoveredCell.date, language)}</span>
            {/* tooltip caret */}
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-[6px] border-t-[#0f172a]" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="heatmap-scroll-wrapper overflow-x-auto pb-2 select-none no-scrollbar sm:scrollbar-thin">
        <div className="min-w-[760px] flex flex-col">
          {/* month headers */}
          <div className="flex text-[11px] font-mono font-bold text-[#456879] mb-2.5 pl-8">
            {weeks.map((_, colIdx) => {
              const matchedMonth = monthLabels.find((m) => m.colIndex === colIdx);
              return (
                <div key={colIdx} className="w-3.5 shrink-0 mr-1 text-center">
                  {matchedMonth ? matchedMonth.month : ''}
                </div>
              );
            })}
          </div>

          {/* grid body with day labels */}
          <div className="flex items-start">
            {/* day of week indicators */}
            <div className="flex flex-col justify-between h-[116px] pr-3 text-[10px] font-mono font-bold text-[#456879]">
              <span>{language === 'es' ? 'Lun' : 'Mon'}</span>
              <span>{language === 'es' ? 'Mié' : 'Wed'}</span>
              <span>{language === 'es' ? 'Vie' : 'Fri'}</span>
            </div>

            {/* calendar */}
            <div className="flex gap-1">
              {weeks.map((week, weekIdx) => (
                <div key={weekIdx} className="flex flex-col gap-1 shrink-0">
                  {week.map((day) => {
                    const isHovered = hoveredCell?.date === day.date;
                    return (
                      <div
                        key={day.date}
                        className={`w-3.5 h-3.5 rounded-[3px] border cursor-pointer transition-transform duration-100 ${getBeachLevelColor(
                          day.level
                        )} ${isHovered ? 'scale-125 ring-2 ring-[#0f172a] z-20' : 'z-10'}`}
                        onMouseEnter={(e) => handleCellMouseEnter(day, e)}
                        onMouseLeave={() => setHoveredCell(null)}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="mt-3.5 sm:mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#64748b] font-mono pt-3 border-t border-[#c6dce5]">
          <span className="text-[10px] sm:text-[11px] text-[#456879] font-medium">
          {language === 'es' ? 'Actividad sincronizada con el historial de GitHub' : 'Activity synced with GitHub history'}
        </span>

        <div className="flex items-center gap-1.5 self-end sm:self-auto">
          <span className="text-[10px] sm:text-[11px] mr-1 text-[#456879]">{language === 'es' ? 'Menos' : 'Less'}</span>
          {[0, 1, 2, 3, 4].map((level) => (
            <div
              key={level}
              className={`w-3 h-3 rounded-[3px] border ${getBeachLevelColor(level)}`}
            />
          ))}
          <span className="text-[10px] sm:text-[11px] ml-1 text-[#456879]">{language === 'es' ? 'Más' : 'More'}</span>
        </div>
      </div>
    </div>
  );
};
