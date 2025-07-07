"use client"
const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black">


      {/* Company name */}
      <h1 className="text-xl font-bold mb-4 tracking-wide" style={{ color: '#2F5A00' }}>GREENLAND PICTURES</h1>

      {/* Fast loading dots */}
      <div className="flex space-x-1">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full animate-fast-pulse"
            style={{
              background: '#2F5A00',
              animationDelay: `${index * 0.15}s`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes fast-bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes fast-pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        .animate-fast-bounce {
          animation: fast-bounce 0.6s ease-in-out infinite;
        }

        .animate-fast-pulse {
          animation: fast-pulse 0.8s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default Loader
