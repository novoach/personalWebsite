export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="mb-20">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
          Your Name
        </h1>
        <p className="text-lg text-gray-500 mb-6 leading-relaxed">
          PhD Candidate in Management · [Your University]
        </p>
        <p className="text-gray-600 leading-relaxed max-w-2xl">
          I study [your research area]. My work examines [brief description of
          research interests]. I am on the job market for academic positions in
          [year].
        </p>
        <div className="flex gap-4 mt-8">
          <a
            href="/cv.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-700 transition-colors"
          >
            Curriculum Vitae
          </a>
          <a
            href="mailto:you@university.edu"
            className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:border-gray-500 transition-colors"
          >
            Contact
          </a>
        </div>
      </section>

      {/* Research Interests */}
      <section className="mb-20">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-6">
          Research Interests
        </h2>
        <div className="flex flex-wrap gap-2">
          {[
            "Topic One",
            "Topic Two",
            "Topic Three",
            "Topic Four",
          ].map((interest) => (
            <span
              key={interest}
              className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
            >
              {interest}
            </span>
          ))}
        </div>
      </section>

      {/* Recent Work */}
      <section>
        <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-6">
          Recent Work
        </h2>
        <div className="space-y-6">
          <div className="group">
            <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
              Paper Title One
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              <em>Journal / Working Paper</em> · 2024
            </p>
            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
              Brief abstract or one-sentence description of the paper.
            </p>
          </div>
          <div className="group">
            <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
              Paper Title Two
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              <em>Journal / Working Paper</em> · 2023
            </p>
            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
              Brief abstract or one-sentence description of the paper.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
