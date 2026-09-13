import { nodes } from '../lib/pathfinding';
import { MapPin, Navigation, ArrowRight, Route } from 'lucide-react';

export default function Sidebar({ source, destination, setSource, setDestination, path }) {
  
  // Quick calculation of total cost using heuristic roughly mapping to seconds/minutes
  const estimatedTime = path.length > 1 ? Math.round(path.length * 1.5) : 0;
  
  return (
    <aside className="w-full md:w-80 bg-white border-b md:border-b-0 md:border-r border-slate-200 shadow-xl z-10 flex flex-col shrink-0 sm:h-auto md:h-full overflow-y-auto">
      <div className="p-6 bg-gradient-to-b from-slate-50 to-white flex-1">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-blue-600 p-2 rounded-lg text-white shadow-lg shadow-blue-500/30">
            <Route size={24} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-800">Route Planner</h2>
            <p className="text-xs text-slate-500 font-medium">Estate Navigation System</p>
          </div>
        </div>

        <div className="space-y-6 relative">
          {/* Connecting Line styling */}
          <div className="absolute left-6 top-[2.5rem] bottom-[2.5rem] w-0.5 bg-slate-200 z-0"></div>

          {/* Source Select */}
          <div className="relative z-10">
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1">Starting Point</label>
            <div className="relative group">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-500">
                <MapPin size={20} />
              </span>
              <select 
                value={source}
                onChange={(e) => setSource(Number(e.target.value))}
                className="w-full pl-10 pr-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 appearance-none font-medium text-slate-700 transition-all cursor-pointer hover:border-slate-300"
              >
                {nodes.map(node => (
                  <option key={node.id} value={node.id}>
                    {node.name.replace(/_/g, ' ')}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Swap Button (could be added here) */}

          {/* Destination Select */}
          <div className="relative z-10">
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1">Destination</label>
            <div className="relative group">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-rose-500">
                <Navigation size={18} className="transform rotate-90" />
              </span>
              <select 
                value={destination}
                onChange={(e) => setDestination(Number(e.target.value))}
                className="w-full pl-10 pr-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 appearance-none font-medium text-slate-700 transition-all cursor-pointer hover:border-slate-300"
              >
                {nodes.map(node => (
                  <option key={node.id} value={node.id}>
                    {node.name.replace(/_/g, ' ')}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Route Info Card */}
        <div className="mt-8 bg-slate-50 rounded-2xl p-5 border border-slate-200/60 shadow-inner">
          <h3 className="text-sm font-semibold text-slate-700 mb-4 flex items-center justify-between">
            Route Details
            {path.length > 0 ? (
               <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">A* Optimal</span>
            ) : (
               <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs">No Path</span>
            )}
          </h3>
          
          <div className="flex gap-4 mb-4">
            <div className="flex-1 bg-white p-3 rounded-xl border border-slate-100 shadow-sm text-center">
              <div className="text-2xl font-bold text-slate-800">{path.length > 0 ? path.length - 1 : 0}</div>
              <div className="text-[10px] uppercase tracking-wider text-slate-500 mt-1 font-semibold">Nodes</div>
            </div>
            <div className="flex-1 bg-white p-3 rounded-xl border border-slate-100 shadow-sm text-center relative overflow-hidden">
              <div className="absolute -right-2 -top-2 w-8 h-8 bg-green-500/10 rounded-full blur-md"></div>
              <div className="text-2xl font-bold text-slate-800">{path.length > 0 ? `${estimatedTime}` : '-'}</div>
              <div className="text-[10px] uppercase tracking-wider text-slate-500 mt-1 font-semibold">Min Est</div>
            </div>
          </div>
          
          {/* Path Turn by Turn (simplified) */}
          {path.length > 1 && (
            <div className="mt-4 pt-4 border-t border-slate-200 max-h-[30vh] md:max-h-[40vh] overflow-y-auto pr-2">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Path Sequence</div>
              <div className="space-y-3">
                {path.map((nodeId, idx) => {
                  const node = nodes.find(n => n.id === nodeId);
                  const isLast = idx === path.length - 1;
                  return (
                    <div key={`${nodeId}-${idx}`} className="flex items-start gap-3">
                      <div className="mt-0.5 relative flex flex-col items-center">
                        <div className={`w-3 h-3 rounded-full border-2 ${idx === 0 ? 'bg-emerald-500 border-emerald-600' : isLast ? 'bg-rose-500 border-rose-600' : 'bg-white border-blue-400'}`}></div>
                        {!isLast && <div className="w-0.5 h-6 bg-slate-200 mt-1"></div>}
                      </div>
                      <div className="flex-1 pb-2">
                        <div className={`text-sm ${idx === 0 || isLast ? 'font-semibold text-slate-800' : 'text-slate-600'}`}>
                          {node.name.replace(/_/g, ' ')}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
