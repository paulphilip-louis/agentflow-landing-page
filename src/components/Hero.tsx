import WaitlistForm from "@/components/WaitlistForm";

export default function Hero() {
  return (
    <section className="pt-40 pb-24 px-6">
      <div className="mx-auto max-w-3xl flex flex-col items-center text-center gap-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1.5 text-xs font-medium text-indigo-600">
          Now in private beta
        </div>

        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-tight">
          Evaluate AI agents on{" "}
          <span className="text-indigo-600">what actually matters</span>
        </h1>

        <p className="max-w-xl text-lg text-slate-500 leading-relaxed">
          Agentflow is a collaborative platform that lets AI engineers and
          subject matter experts define semantic evaluation criteria together —
          so your agents are measured on domain outcomes, not just technical
          metrics.
        </p>

        <WaitlistForm />

        <p className="text-xs text-slate-400">
          Be among the first teams to shape how AI agents are evaluated.
        </p>
      </div>
    </section>
  );
}
