const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0533] via-[#0c1445] to-[#0a0a2e]" />

      {/* Big colorful gradient blobs */}
      <div className="absolute top-[-15%] left-[-10%] w-[700px] h-[700px] rounded-full bg-purple-600/40 blur-[120px] animate-blob-1" />
      <div className="absolute top-[15%] right-[-15%] w-[600px] h-[600px] rounded-full bg-pink-500/30 blur-[120px] animate-blob-2" />
      <div className="absolute bottom-[5%] left-[10%] w-[550px] h-[550px] rounded-full bg-blue-500/30 blur-[120px] animate-blob-3" />
      <div className="absolute top-[45%] left-[35%] w-[500px] h-[500px] rounded-full bg-orange-400/25 blur-[120px] animate-blob-4" />
      <div className="absolute bottom-[-10%] right-[15%] w-[450px] h-[450px] rounded-full bg-cyan-400/25 blur-[100px] animate-blob-1" />
      <div className="absolute top-[70%] left-[50%] w-[400px] h-[400px] rounded-full bg-purple-400/20 blur-[100px] animate-blob-2" />

      {/* Floating spheres - bigger and more */}
      <div className="absolute top-[12%] left-[8%] w-6 h-6 rounded-full bg-pink-400/70 shadow-lg shadow-pink-400/40 animate-float" />
      <div className="absolute top-[20%] right-[12%] w-5 h-5 rounded-full bg-purple-400/70 shadow-lg shadow-purple-400/40 animate-float-slow" />
      <div className="absolute top-[55%] left-[5%] w-7 h-7 rounded-full bg-blue-400/60 shadow-lg shadow-blue-400/40 animate-float-slower" />
      <div className="absolute top-[35%] right-[6%] w-4 h-4 rounded-full bg-orange-400/60 shadow-lg shadow-orange-400/40 animate-float" />
      <div className="absolute bottom-[18%] left-[22%] w-6 h-6 rounded-full bg-cyan-400/60 shadow-lg shadow-cyan-400/40 animate-float-slow" />
      <div className="absolute top-[65%] right-[25%] w-5 h-5 rounded-full bg-pink-300/60 shadow-lg shadow-pink-300/40 animate-float-slower" />
      <div className="absolute top-[80%] left-[40%] w-4 h-4 rounded-full bg-purple-300/50 shadow-lg shadow-purple-300/30 animate-float" />
      <div className="absolute top-[8%] left-[45%] w-3 h-3 rounded-full bg-cyan-300/50 shadow-lg shadow-cyan-300/30 animate-float-slow" />

      {/* Decorative rings */}
      <div className="absolute top-[8%] right-[3%] w-40 h-40 rounded-full border-2 border-purple-400/15 animate-float-slow" />
      <div className="absolute bottom-[12%] left-[3%] w-32 h-32 rounded-full border-2 border-pink-400/15 animate-float" />
      <div className="absolute top-[40%] right-[8%] w-20 h-20 rounded-full border border-cyan-400/10 animate-float-slower" />
    </div>
  );
};

export default AnimatedBackground;
