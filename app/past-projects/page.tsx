export const metadata = {
  title: "Past Projects | Your Name",
  description: "Archive of earlier research projects, publications, and interactive tools.",
};

type PastProject = {
  title: string;
  description: string;
  publication?: string;
  links: { label: string; href: string }[];
};

type ShinyApp = {
  name: string;
  purpose: string;
  audience: string;
  stack: string[];
  description: string;
  link: string;
};

const projects: PastProject[] = [
  {
    title: "Short Descriptive Title A",
    description:
      "This project examined [topic] using [method]. The key finding was [result] with implications for [broader area].",
    publication: "Smith, J. (2022). Title. Journal Name, 10(2), 100–120.",
    links: [
      { label: "PDF", href: "#" },
      { label: "DOI", href: "#" },
      { label: "Replication code", href: "#" },
    ],
  },
  {
    title: "Short Descriptive Title B",
    description:
      "This project investigated [topic] across [scope]. Using [data source], I found that [result], contributing to debates on [subject].",
    publication: "Smith, J., & Jones, A. (2021). Title. Journal Name, 7(4), 55–78.",
    links: [
      { label: "PDF", href: "#" },
      { label: "DOI", href: "#" },
    ],
  },
  {
    title: "Short Descriptive Title C",
    description:
      "Exploratory project examining [topic]. Findings remain preliminary; the project was superseded by [later work].",
    links: [],
  },
];

const shinyApps: ShinyApp[] = [
  {
    name: "App Name One",
    purpose: "One-sentence description of what the tool does.",
    audience: "Researchers / Students",
    stack: ["R Shiny", "ggplot2", "tidyverse"],
    description:
      "This app allows users to [interaction]. It was built in connection with [paper/project]. Users can [capability] and explore [data/results] interactively.",
    link: "https://yourshinyapp.shinyapps.io/appname",
  },
  {
    name: "App Name Two",
    purpose: "One-sentence description of what the tool does.",
    audience: "Policy analysts / General public",
    stack: ["R Shiny", "Leaflet"],
    description:
      "This app visualises [topic] across [geography/time]. It was developed as a companion to [paper/course] and has been used by [audience].",
    link: "https://yourshinyapp.shinyapps.io/appname2",
  },
];

export default function PastProjects() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-3">
        Past Projects
      </h1>
      <p className="text-sm text-gray-500 mb-14 max-w-2xl leading-relaxed">
        An archive of earlier work spanning methodology, applied statistics, and
        data visualisation. These projects reflect earlier stages of my research
        agenda and, in some cases, tools I built for the community.
      </p>

      {/* Projects with publications */}
      <section className="mb-16">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">
          Projects with Publications
        </h2>
        <div className="space-y-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border-t border-gray-100 pt-8 first:border-t-0 first:pt-0"
            >
              <h3 className="font-semibold text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                {project.description}
              </p>
              {project.publication && (
                <p className="text-sm text-gray-500 mb-3 italic">
                  {project.publication}
                </p>
              )}
              {project.links.length > 0 && (
                <div className="flex gap-4">
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
          ))}
        </div>
      </section>

      {/* Shiny Apps */}
      <section>
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">
          Interactive Tools &amp; Shiny Apps
        </h2>
        <div className="space-y-12">
          {shinyApps.map((app) => (
            <div
              key={app.name}
              className="border-t border-gray-100 pt-8 first:border-t-0 first:pt-0"
            >
              <div className="md:flex md:gap-8">
                {/* Screenshot placeholder */}
                <div className="shrink-0 w-full md:w-64 h-40 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-sm mb-6 md:mb-0">
                  Screenshot
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {app.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">{app.purpose}</p>

                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-xs text-gray-400">
                      Audience: {app.audience}
                    </span>
                    <span className="text-gray-200">·</span>
                    <span className="text-xs text-gray-400">
                      Stack: {app.stack.join(", ")}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {app.description}
                  </p>

                  <a
                    href={app.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Open app →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
