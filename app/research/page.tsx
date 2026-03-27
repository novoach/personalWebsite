import Link from "next/link";

export const metadata = {
  title: "Research | Your Name",
  description: "Active research projects and interests.",
};

const projects = [
  {
    title: "Full Working Title of Project One",
    status: "Under review at Journal X",
    coauthors: "Sole author",
    abstract:
      "This paper examines [topic] using data from [source]. I find that [key result]. The findings contribute to [field] by [contribution]. Implications for [broader area] are discussed.",
    keywords: ["Keyword One", "Keyword Two", "Keyword Three"],
    links: [
      { label: "PDF", href: "#" },
      { label: "Pre-registration", href: "#" },
      { label: "Replication code", href: "#" },
    ],
  },
  {
    title: "Full Working Title of Project Two",
    status: "Data collection phase",
    coauthors: "with Co-Author Name",
    abstract:
      "This project investigates [topic]. Using [method/data], we aim to understand [research question]. Preliminary findings suggest [tentative result].",
    keywords: ["Keyword A", "Keyword B"],
    links: [
      { label: "Slides", href: "#" },
      { label: "Pre-registration", href: "#" },
    ],
  },
  {
    title: "Full Working Title of Project Three",
    status: "Dissertation chapter",
    coauthors: "Sole author",
    abstract:
      "This chapter addresses [topic] within the broader dissertation framework. The core argument is that [claim], which I test by [method].",
    keywords: ["Keyword X"],
    links: [],
  },
];

const statusColors: Record<string, string> = {
  "R&R": "bg-purple-50 text-purple-700 border border-purple-200",
  "Under review": "bg-blue-50 text-blue-700 border border-blue-200",
  "In preparation": "bg-green-50 text-green-700 border border-green-200",
  "Dissertation chapter": "bg-yellow-50 text-yellow-700 border border-yellow-200",
  default: "bg-gray-100 text-gray-600 border border-gray-200",
};

function statusColor(status: string) {
  const key = Object.keys(statusColors).find((k) => status.startsWith(k));
  return key ? statusColors[key] : statusColors.default;
}

export default function Research() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-10">
        Research
      </h1>

      {/* Research Statement */}
      <section className="mb-16">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
          Research Statement
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            My research addresses the following puzzle: [overarching question
            that unifies your work]. Existing scholarship has largely focused on
            [existing approach], leaving [gap] underexplored.
          </p>
          <p>
            To answer these questions, I use [methodological approach] because
            it allows me to [advantage]. My primary data sources include
            [sources], and I draw on tools from [fields/disciplines] to analyse
            them.
          </p>
          <p>
            My current dissertation / book project [title or description] argues
            that [core claim]. I am also developing a longer-term agenda
            around [future direction].
          </p>
        </div>
      </section>

      {/* Active Projects */}
      <section className="mb-16">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">
          Active Projects
        </h2>
        <div className="space-y-12">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border-t border-gray-100 pt-8 first:border-t-0 first:pt-0"
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="text-base font-semibold text-gray-900 leading-snug">
                  {project.title}
                </h3>
                <span
                  className={`shrink-0 text-xs font-medium px-2.5 py-1 rounded-full ${statusColor(
                    project.status
                  )}`}
                >
                  {project.status}
                </span>
              </div>

              <p className="text-sm text-gray-400 mb-3">{project.coauthors}</p>

              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                {project.abstract}
              </p>

              <div className="flex flex-wrap items-center gap-2">
                {project.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="text-xs px-2 py-0.5 bg-gray-100 text-gray-500 rounded"
                  >
                    {kw}
                  </span>
                ))}
                {project.links.length > 0 && (
                  <div className="flex gap-4 ml-auto">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="text-xs font-medium text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        {link.label} →
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Soft link */}
      <section className="border-t border-gray-100 pt-8">
        <p className="text-sm text-gray-500">
          Interested in the broader intellectual motivations behind this agenda?{" "}
          <Link
            href="/research-philosophy"
            className="text-gray-700 underline underline-offset-2 hover:text-gray-900 transition-colors"
          >
            See my Research Philosophy →
          </Link>
        </p>
      </section>
    </div>
  );
}
