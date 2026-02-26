const stats = [
  {
    figure: "25%",
    description: "of AI initiatives deliver expected ROI",
    source: "IBM",
  },
  {
    figure: "40%",
    description:
      "of agentic AI projects at risk of cancellation by 2027 without governance and ROI clarity",
    source: "Gartner",
  },
  {
    figure: "<5% → 40%",
    description:
      "of enterprise apps will feature task-specific AI agents by end of 2026",
    source: "Gartner",
  },
];

export default function Stats() {
  return (
    <section className="border-y border-slate-100 py-16 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-slate-100">
          {stats.map((s) => (
            <div
              key={s.figure}
              className="flex flex-col gap-2 sm:px-12 first:pl-0 last:pr-0"
            >
              <span className="text-4xl font-semibold tracking-tight text-indigo-600">
                {s.figure}
              </span>
              <p className="text-sm text-slate-600 leading-relaxed">
                {s.description}
              </p>
              <span className="mt-1 text-xs font-medium text-slate-400 uppercase tracking-widest">
                {s.source}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
