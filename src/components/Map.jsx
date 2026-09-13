import { nodes } from '../lib/pathfinding';
import { MapPin, Navigation } from 'lucide-react';

export default function Map({ path, source, destination }) {
  // SVG points string for the path polyline
  const polylinePoints = path.map(nodeId => {
    const node = nodes.find(n => n.id === nodeId);
    // Convert 0-1000 coordinate system to percentages for SVG viewBox (0 0 1000 1000)
    return `${node.x},${node.y}`;
  }).join(' ');

  return (
    <div className="w-full h-full relative bg-slate-100 border-2 border-slate-200 rounded-xl overflow-hidden shadow-inner">
      {/* Background visual elements representing the apartment map abstracted */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-200 via-slate-300 to-slate-400"></div>
      
      {/* The Map Container with a 1000x1000 coordinate system using viewBox */}
      <div className="absolute inset-0 w-full h-full p-4 md:p-12 pb-20">
        <div className="relative w-full h-full" style={{ maxWidth: '800px', margin: '0 auto' }}>
          
          {/* SVG Layer for Drawing Paths */}
          <svg 
            viewBox="0 0 1000 1000" 
            className="absolute inset-0 w-full h-full overflow-visible z-10 drop-shadow-md"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Draw all valid edges as faint lines to show adjacency matrix connections? Optional. But path is required. */}
            {path.length > 1 && (
              <polyline
                points={polylinePoints}
                fill="none"
                stroke="#3b82f6" // blue-500
                strokeWidth="12"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="path-animate"
                style={{
                  strokeDasharray: '20, 10',
                  animation: 'dash 1s linear infinite'
                }}
              />
            )}
          </svg>

          {/* Nodes Layer */}
          <div className="absolute inset-0 w-full h-full z-20" style={{ containerType: 'size' }}>
            {nodes.map(node => {
              const isSource = node.id === source;
              const isDestination = node.id === destination;
              const inPath = path.includes(node.id);
              
              // Base coordinates 0-1000 to percentages
              const leftPercent = `${(node.x / 1000) * 100}%`;
              const topPercent = `${(node.y / 1000) * 100}%`;

              return (
                <div
                  key={node.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer"
                  style={{ left: leftPercent, top: topPercent }}
                >
                  <div className={`
                    w-4 h-4 md:w-5 md:h-5 rounded-full border-2 transition-all duration-300 shadow-sm
                    ${isSource ? 'bg-emerald-500 border-white scale-150 z-30 shadow-emerald-500/50' : 
                      isDestination ? 'bg-rose-500 border-white scale-150 z-30 shadow-rose-500/50' : 
                      inPath ? 'bg-blue-500 border-white scale-125 z-20' : 
                      'bg-white border-slate-300 group-hover:bg-slate-200 group-hover:scale-125'}
                  `}>
                    {isSource && <div className="absolute -top-6 -left-2 text-emerald-600 drop-shadow-md"><MapPin size={20} fill="currentColor"/></div>}
                    {isDestination && <div className="absolute -top-6 -left-2 text-rose-600 drop-shadow-md"><Navigation size={18} fill="currentColor" stroke="white" className="rotate-180"/></div>}
                  </div>
                  
                  {/* Tooltip/Label */}
                  <div className={`
                    mt-1 px-2 py-1 rounded text-[10px] md:text-xs font-medium whitespace-nowrap transition-all
                    ${(isSource || isDestination || inPath) ? 'bg-slate-800 text-white opacity-100 shadow-md' : 'bg-white/80 text-slate-600 opacity-0 group-hover:opacity-100 shadow-sm'}
                  `}>
                    {node.name.replace(/_/g, ' ')}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -30;
          }
        }
        .path-animate {
          animation: dash 1s linear infinite;
        }
      `}</style>
    </div>
  );
}
