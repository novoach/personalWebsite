import Link from "next/link";

export const metadata = {
  title: "Research Philosophy | Your Name",
  description: "The intellectual motivations and approach behind my research agenda.",
};

export default function ResearchPhilosophy() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <div className="mb-12">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
          Research Philosophy
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
          Why This Question Matters to Me
        </h1>
        <p className="text-sm text-gray-400">
          This page is not in the main navigation. It is here for those who want depth.
        </p>
      </div>

      {/* Origin story */}
      <section className="mb-12">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
          The Intellectual Origin Story
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            I became interested in [broad phenomenon] while [context — course,
            experience, observation]. What struck me initially was not the
            phenomenon itself but [specific puzzle or tension that made it
            interesting].
          </p>
          <p>
            What struck me as unsatisfying about existing accounts was [gap or
            limitation]. Most scholarship treated [assumption], but I found
            myself wondering whether [alternative framing].
          </p>
          <p>
            [Third paragraph: how that early fascination evolved into the
            research agenda you have now.]
          </p>
          <p>
            [Optional fourth paragraph: a formative experience — fieldwork,
            dataset, conversation, failure — that shaped your approach.]
          </p>
        </div>
      </section>

      {/* Approach to evidence */}
      <section className="mb-12">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
          My Approach to Evidence
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            I believe that rigorous empirical work requires [your philosophy of
            causal inference / measurement / interpretation]. This means
            [concrete implication for how you design studies or interpret
            results].
          </p>
          <p>
            I am drawn to [methods] because they allow me to [advantage] while
            acknowledging that they cannot [limitation]. This epistemological
            honesty is not a weakness but a precondition for cumulative
            knowledge.
          </p>
          <p>
            [Optional: how you triangulate across methods, or why you are
            skeptical of a dominant approach in your field.]
          </p>
        </div>
      </section>

      {/* Role of theory */}
      <section className="mb-12">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
          The Role of Theory
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            My empirical work is guided by [theoretical tradition or
            framework]. I approach theory [inductively / deductively /
            abductively], which means [concrete implication for how you develop
            and test claims].
          </p>
          <p>
            [Second paragraph: how you relate formal models, interpretive
            frameworks, or middle-range theories to your data. What makes a
            theory useful for you?]
          </p>
        </div>
      </section>

      {/* Norms & values */}
      <section className="mb-12">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
          Norms and Values in My Research
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            I am committed to open science practices — pre-registration,
            replication archives, and transparent reporting of null results —
            because [reason: accountability, cumulative science, trust].
          </p>
          <p>
            [Optional: ethics of data collection, engaged scholarship,
            reproducibility commitments, or anything that distinguishes your
            practice from a purely extractive research model.]
          </p>
        </div>
      </section>

      {/* Where I want to go */}
      <section className="mb-16">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
          Where I Want to Go
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            The questions that remain open and keep me up at night are
            [unanswered puzzles]. Answering them will require [new data /
            methods / collaborations / theoretical frameworks].
          </p>
          <p>
            In the longer run, I hope my research will contribute to [vision]:
            not just advancing [sub-field], but [broader impact — policy,
            public understanding, the discipline].
          </p>
        </div>
      </section>

      {/* Navigation back */}
      <div className="border-t border-gray-100 pt-8 flex gap-6 text-sm">
        <Link
          href="/research"
          className="text-gray-500 hover:text-gray-900 transition-colors"
        >
          ← Back to Research
        </Link>
        <Link
          href="/"
          className="text-gray-500 hover:text-gray-900 transition-colors"
        >
          ← Back to About
        </Link>
      </div>
    </div>
  );
}
