export const metadata = {
  title: "Research Instruments | Alex Tyulyupo",
  description:
    "Behavioral search simulation platform used by Alex Tyulyupo to study competitor identification.",
  alternates: { canonical: "/tools" },
  robots: { index: false, follow: false },
};

const sessionNotes = [
  "Participants begin from a venture idea: either one they generated themselves or a concept assigned by the study.",
  "They identify competitors on a platform built to resemble an investment information portal, with roughly half a million real company profiles.",
  "They can search by keyword, filter by industry and location, page through results, open company profiles, and mark firms as competitors.",
  "This demo shows one participant working with an assigned online career-training venture concept.",
  "The participant starts with a broad education industry filter, narrows to vocational education and a keyword, then broadens again to compare more options.",
  "At the end, the participant reviews the selected companies, rates the threat from each competitor, and submits the session.",
  "Every action is logged, which makes the search process itself available as behavioral data.",
];

export default function Tools() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
        Research Instruments
      </h1>
      <p className="text-sm text-gray-500 leading-relaxed mb-12 max-w-2xl">
        I build behavioral simulation tools for studying how people search,
        compare organizations, and identify competitors.
      </p>

      <section className="mb-14">
        <h2 className="text-base font-semibold tracking-tight text-gray-900 mb-5">
          Competitor Identification Platform
        </h2>
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
          <video
            controls
            preload="metadata"
            className="block w-full bg-black"
            aria-label="Demo of a participant identifying competitors on the research platform"
          >
            <source
              src="/videos/companyinsightshub-demo.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </section>

      <section className="mb-14">
        <h2 className="text-base font-semibold tracking-tight text-gray-900 mb-5">
          What the Session Shows
        </h2>
        <ul className="space-y-3">
          {sessionNotes.map((note) => (
            <li
              key={note}
              className="text-sm text-gray-600 leading-relaxed pl-4 border-l border-gray-200"
            >
              {note}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-base font-semibold tracking-tight text-gray-900 mb-5">
          Focal Venture Concept
        </h2>
        <blockquote className="border-l-2 border-gray-200 pl-5 text-sm text-gray-600 leading-relaxed">
          This online platform provides training courses designed to prepare
          individuals for high-paying careers in fields like finance,
          technology, consulting, healthcare, and engineering. There are
          asynchronous resources through pre-recorded training modules as well
          as practical ways to prepare for these careers. There are also more
          personalized and live methods of support included within these
          courses.
        </blockquote>
      </section>
    </div>
  );
}
