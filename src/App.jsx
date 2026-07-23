import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      {/* Background Layer */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Top Glow */}
        <div
          className="
            absolute
            left-1/2
            top-[-250px]
            h-[700px]
            w-[700px]
            -translate-x-1/2
            rounded-full
            blur-[140px]
            opacity-20
          "
          style={{
            background:
              "radial-gradient(circle, rgba(58,122,255,0.7) 0%, transparent 70%)",
          }}
        />

        {/* Bottom Glow */}
        <div
          className="
            absolute
            bottom-[-350px]
            right-[-150px]
            h-[600px]
            w-[600px]
            rounded-full
            blur-[160px]
            opacity-10
          "
          style={{
            background:
              "radial-gradient(circle, rgba(58,122,255,0.6) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Website */}
      <main className="relative min-h-screen bg-transparent text-[color:var(--text)] transition-colors duration-500">
        <Navbar />

        {/* Hero */}

        {/* About */}

        {/* Experience */}

        {/* Projects */}

        {/* Research */}

        {/* Skills */}

        {/* Contact */}

        {/* Footer */}
      </main>
    </>
  );
}

export default App;