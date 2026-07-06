export const metadata = {
  title: "Tools | Alex Tyulyupo",
  description:
    "Behavioral search simulation platform designed by Alex Tyulyupo.",
  alternates: { canonical: "/tools" },
  robots: { index: false, follow: false },
};

const capabilities = [
  "Presents participants with a database of real companies.",
  "Lets participants explore by browsing categories or entering keywords.",
  "Records the complete search trajectory, not only the final selection.",
  "Supports both observational studies and randomized experiments.",
];

export default function Tools() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
        Tools
      </h1>
      <p className="text-sm text-gray-500 leading-relaxed mb-14 max-w-2xl">
        I build research infrastructure for studying search behavior as it
        happens.
      </p>

      <section className="mb-14">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
          Behavioral Search Simulation Platform
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            The simulation environment presents a database of real companies,
            lets participants explore it by browsing categories or entering
            keywords, and records the complete search trajectory.
          </p>
          <p>
            This makes the search process itself, not just its end result,
            available as data. It supports both observational studies and
            pre-registered experiments, and it makes it possible to compare how
            actors facing similar venture concepts construct different
            competitive landscapes.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
          What It Captures
        </h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {capabilities.map((capability) => (
            <li
              key={capability}
              className="text-sm text-gray-600 leading-relaxed border border-gray-100 rounded-lg p-4"
            >
              {capability}
            </li>
          ))}
        </ul>
      </section>

    </div>
  );
}
