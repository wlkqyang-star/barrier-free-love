import React from 'react';

interface FlourishEmbedProps {
  src: string;
  title: string;
  sourceNote: string;
  crawlDate: string;
  aspectRatioPadding?: string; // e.g., '62%' for the Sankey
  fixedHeight?: string; // e.g. 'h-96' or 'h-[600px]'
}

export const FlourishEmbed: React.FC<FlourishEmbedProps> = ({
  src,
  title,
  sourceNote,
  crawlDate,
  aspectRatioPadding,
  fixedHeight
}) => {
  return (
    <div className="w-full my-8 bg-slate-800/30 rounded-lg p-4 md:p-6 border border-slate-700/50 backdrop-blur-sm">
      <h3 className="text-xl font-bold text-white mb-4 tracking-wide text-center">{title}</h3>
      
      {/* Container for the iframe */}
      <div 
        className="relative w-full overflow-hidden rounded-md bg-[#112030]"
        style={aspectRatioPadding ? { paddingTop: aspectRatioPadding } : { height: fixedHeight || '600px' }}
      >
        <iframe
          src={src}
          title={title}
          className="absolute top-0 left-0 w-full h-full border-none"
          loading="lazy"
          allowFullScreen
        />
      </div>

      <div className="mt-4 text-xs md:text-sm text-slate-400 font-light flex flex-col md:flex-row gap-4">
        <span>数据来源: {sourceNote}</span>
        <span className="opacity-70">采集时间: {crawlDate}</span>
      </div>
    </div>
  );
};
