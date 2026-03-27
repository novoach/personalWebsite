export const metadata = {
  title: "Projects | Your Name",
  description: "Research projects and working papers.",
};

const projects = [
  {
    title: "Project / Paper Title One",
    status: "Job Market Paper",
    year: "2024",
    coauthors: "",
    abstract:
      "This paper examines [topic]. Using [method/data], I find that [key result]. The findings contribute to [field] by [contribution].",
    tags: ["Topic A", "Topic B"],
    links: [
      { label: "PDF", href: "#" },
      { label: "SSRN", href: "#" },
    ],
  },
  {
    title: "Project / Paper Title Two",
    status: "Working Paper",
    year: "2023",
    coauthors: "with Co-Author Name",
    abstract:
      "This paper examines [topic]. Using [method/data], we find that [key result]. The findings contribute to [field] by [contribution].",
    tags: ["Topic B", "Topic C"],
    links: [{ label: "PDF", href: "#" }],
  },
  {
    title: "Project / Paper Title Three",
    status: "Work in Progress",
    year: "2024",
    coauthors: "",
    abstract: "Brief description of the project direction and motivation.",
    tags: ["Topic A", "Topic D"],
    links: [],
  },
];

const statusColors: Record<string, string> = {
  "Job Market Paper": "bg-blue-50 text-blue-700 border border-blue-200",
  "Working Paper": "bg-green-50 text-green-700 border border-green-200",
  "Work in Progress": "bg-gray-100 text-gray-600 border border-gray-200",
};

export default function Projects() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-2">
        Research
      </h1>
      <p className="text-gray-500 mb-14">Working papers and projects.</p>

      <div className="space-y-12">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border-t border-gray-100 pt-10 first:border-t-0 first:pt-0"
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <h2 className="text-lg font-semibold text-gray-900 leading-snug">
                {project.title}
              </h2>
              <span
                className={`shrink-0 text-xs font-medium px-2.5 py-1 rounded-full ${
                  statusColors[project.status] ?? statusColors["Work in Progress"]
                }`}
              >
                {project.status}
              </span>
            </div>

            <p className="text-sm text-gray-400 mb-3">
              {project.year}
              {project.coauthors && ` · ${project.coauthors}`}
            </p>

            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              {project.abstract}
            </p>

            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 bg-gray-100 text-gray-500 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.links.length > 0 && (
                <div className="flex gap-3 ml-auto">
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
    </div>
  );
}
