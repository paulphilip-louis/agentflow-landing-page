const steps = [
  {
    number: "01",
    persona: "Subject matter experts",
    title: "Define what good looks like",
    description:
      "Domain experts describe expected outputs, edge cases, and quality criteria in plain language — no technical knowledge required.",
  },
  {
    number: "02",
    persona: "Agentflow",
    title: "Structure it into an evaluation environment",
    description:
      "Agentflow translates domain knowledge into a structured set of semantic evaluation criteria that can be run programmatically against your agent.",
  },
  {
    number: "03",
    persona: "AI engineers",
    title: "Iterate with clarity",
    description:
      "Engineers run their agent against criteria that reflect real-world success. Every iteration is grounded in what the domain actually requires.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            A shared workspace that turns domain expertise into measurable
            agent benchmarks.
          </p>
        </div>

        <div className="relative grid gap-8 sm:grid-cols-3">
          {/* Connector line (desktop only) */}
          <div className="absolute top-8 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] hidden h-px bg-slate-200 sm:block" />

          {steps.map((step) => (
            <div key={step.number} className="flex flex-col gap-4">
              <div className="relative inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-white text-xl font-semibold text-indigo-600 shadow-sm">
                {step.number}
              </div>
              <div>
                <p className="mb-1 text-xs font-medium uppercase tracking-widest text-indigo-400">
                  {step.persona}
                </p>
                <h3 className="mb-2 font-semibold text-slate-900">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
