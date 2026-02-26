import WaitlistForm from "@/components/WaitlistForm";

export default function WaitlistCTA() {
  return (
    <section id="waitlist" className="py-24 px-6">
      <div className="mx-auto max-w-2xl flex flex-col items-center text-center gap-8">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Ready to build agents that actually work?
        </h2>
        <p className="text-slate-500 max-w-lg">
          Join the waitlist and be the first to align your AI engineers and
          domain experts around what truly matters.
        </p>
        <WaitlistForm />
      </div>
    </section>
  );
}
