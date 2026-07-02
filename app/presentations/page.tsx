export const metadata = {
  title: "Presentations | Alex Tyulyupo",
  description: "Conference presentations by Alex Tyulyupo.",
};

const presentations = [
  {
    title:
      "Organizational Reconnaissance: Opening the Black Box of Search with Behavioral Simulation",
    venue: "Academy of Management Annual Meeting",
    year: "2026",
  },
  {
    title:
      "Organizational Reconnaissance: How Initial Competitive Search Shapes Strategic Understanding and Action",
    venue: "Carnegie School of Organizational Learning",
    year: "2026",
  },
  {
    title:
      "Beyond Administrative Categories: Industry Mental Maps and Competition Identification",
    venue: "Nagymaros Conference",
    year: "2025",
  },
  {
    title:
      "The Search for Competitors: Investigating Early-Stage Entrepreneurial Search Strategies and Market Perceptions",
    venue: "Nagymaros Conference",
    year: "2024",
  },
  {
    title:
      "A Journey that Matters: Search with Categorization Systems as a Moderator of Categorical Biases",
    venue: "Nagymaros Conference",
    year: "2023",
  },
];

export default function Presentations() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-10">
        Presentations
      </h1>

      <section>
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
          Conference Presentations
        </h2>
        <div className="space-y-6">
          {presentations.map((presentation) => (
            <article
              key={`${presentation.title}-${presentation.year}`}
              className="border-t border-gray-100 pt-5 first:border-t-0 first:pt-0"
            >
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 leading-snug">
                    {presentation.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {presentation.venue}
                  </p>
                </div>
                <span className="shrink-0 text-xs text-gray-400">
                  {presentation.year}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
