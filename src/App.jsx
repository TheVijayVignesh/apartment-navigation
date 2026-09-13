import { useState, useMemo } from 'react';
import Map from './components/Map';
import Sidebar from './components/Sidebar';
import { findPathAStar, nodes } from './lib/pathfinding';

function App() {
  const [source, setSource] = useState(nodes[0].id);
  const [destination, setDestination] = useState(nodes[nodes.length - 1].id);
  
  const path = useMemo(() => {
    if (source === destination) return [source];
    return findPathAStar(source, destination);
  }, [source, destination]);

  return (
    <div className="flex h-screen w-full bg-slate-50 text-slate-800 overflow-hidden font-sans">
      <Sidebar 
        source={source} 
        destination={destination} 
        setSource={setSource} 
        setDestination={setDestination}
        path={path}
      />
      <main className="flex-1 p-4 md:p-8 flex flex-col h-full overflow-hidden">
        <header className="mb-6 flex justify-between items-center bg-white p-4 rounded-xl shadow-sm">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Complex Navigator</h1>
            <p className="text-sm text-slate-500">Find the shortest route using A*</p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-sm text-slate-600 bg-slate-100 py-2 px-4 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Live routing active
          </div>
        </header>
        
        <div className="flex-1 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden relative">
          <Map path={path} source={source} destination={destination} />
        </div>
      </main>
    </div>
  );
}

export default App;
