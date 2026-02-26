export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-slate-100">
      <div className="mx-auto max-w-6xl px-6 flex h-16 items-center justify-between">
        <span className="text-lg font-semibold tracking-tight text-slate-900">
          Agentflow
        </span>
        <a
          href="#waitlist"
          className="rounded-full bg-indigo-600 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
        >
          Join the waitlist
        </a>
      </div>
    </header>
  );
}
