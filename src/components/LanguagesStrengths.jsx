function LanguagesStrengths() {
  const languages = ["English", "Telugu"];

  const strengths = ["Quick Learner", "Leadership", "Communication", "Adaptability", "Problem Solving"];

  return (
    <section id="languages-strengths" className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200/80">
            Languages & Strengths
          </p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Communication and soft skills that support my technical work.
          </h2>
          <p className="text-base leading-8 text-slate-300 sm:text-lg">
            These are the personal strengths and language skills listed in my resume
            and reflected in how I work with teams, projects, and clients.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-lg shadow-slate-950/10 backdrop-blur">
            <h3 className="text-lg font-semibold text-white">Languages</h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {languages.map((language) => (
                <span
                  key={language}
                  className="rounded-full border border-white/10 bg-slate-950/50 px-4 py-2 text-sm text-slate-200"
                >
                  {language}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-lg shadow-slate-950/10 backdrop-blur">
            <h3 className="text-lg font-semibold text-white">Strengths</h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {strengths.map((strength) => (
                <span
                  key={strength}
                  className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100"
                >
                  {strength}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LanguagesStrengths;