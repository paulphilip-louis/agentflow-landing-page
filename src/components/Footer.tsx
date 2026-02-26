export default function Footer() {
  return (
    <footer className="border-t border-slate-100 py-8 px-6">
      <div className="mx-auto max-w-6xl flex flex-col items-center justify-between gap-4 sm:flex-row">
        <span className="text-sm font-semibold text-slate-900">Agentflow</span>
        <p className="text-xs text-slate-400">
          © {new Date().getFullYear()} Agentflow. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
