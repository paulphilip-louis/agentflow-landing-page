const problems = [
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.127 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
      </svg>
    ),
    title: "Two languages, one project",
    description:
      "AI engineers speak in loss functions and token accuracy. Domain experts speak in outcomes and quality. They're building the same agent with no shared vocabulary.",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
    title: "Technical benchmarks miss the point",
    description:
      "Passing BLEU scores or F1 thresholds says nothing about whether the agent is actually useful. Agents that ace benchmarks still fail in production.",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
    title: "Slow, unstructured iteration",
    description:
      "Without a shared evaluation framework, feedback stays informal — scattered across docs, Slack threads, and calls. Engineers can't act on it efficiently.",
  },
];

export default function Problem() {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            The gap that breaks AI agent projects
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            Most AI agent projects fail not because of engineering — but because
            the criteria for success were never clearly defined.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {problems.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                {p.icon}
              </div>
              <h3 className="mb-2 font-semibold text-slate-900">{p.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>

        {/* BVP pull quote */}
        <blockquote className="mt-16 rounded-2xl border border-indigo-100 bg-indigo-50 px-8 py-7">
          <p className="text-slate-700 leading-relaxed italic">
            &ldquo;Instead of chasing leaderboard scores, companies are building
            internal eval suites to measure how AI performs across
            privacy-sensitive workflows, customer support, document parsing, and
            agent decision-making.&rdquo;
          </p>
          <footer className="mt-4 flex items-center gap-3">
            <span className="h-px w-6 bg-indigo-300" />
            <cite className="not-italic text-sm font-medium text-indigo-600">
              Bessemer Venture Partners — The State of AI 2025
            </cite>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
