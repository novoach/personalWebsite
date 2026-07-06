import Link from "next/link";

export const metadata = {
  title: "Research | Alex Tyulyupo",
  description:
    "Research by Alex Tyulyupo on organizational reconnaissance, categories, search, and entrepreneurship.",
  alternates: { canonical: "/research" },
};

type ResearchLink = {
  label: string;
  href: string;
};

type Project = {
  title: string;
  authors?: string;
  venue: string;
  status: string;
  abstract: string;
  keywords: string[];
  links?: ResearchLink[];
};

const projectGroups: { title: string; projects: Project[] }[] = [
  {
    title: "Published and Forthcoming",
    projects: [
      {
        title:
          "Categorical Engagement in Strategic Search: When and Why Typicality Shapes Competitor Identification",
        authors: "Alex Tyulyupo and Balázs Kovács",
        venue: "Sociological Science",
        status: "Forthcoming",
        abstract:
          "The typicality premium, the tendency of audiences to favor prototypical category members, can weaken or reverse across contexts. I show that this variation originates in the search process itself. The premium emerges only when searchers invoke industry categories and disappears under keyword search. Among category-based searches, it depends on the fit between the searcher's goal and the invoked category. Typicality effects are a contingent product of how searchers use categories, not a structural property of categories themselves.",
        keywords: ["Categories", "Typicality", "Search"],
      },
      {
        title:
          "Cognitive Cartography: How Geographic Categories and Firm Location-Typicality Shape Competitor Identification",
        authors: "Balázs Kovács and Alex Tyulyupo",
        venue: "Industrial and Corporate Change",
        status: "Published",
        abstract:
          "This paper extends the view of categories as tools of search from industry to geography. Locations qualify as categorical instruments when they carry industrial identities that orient outsiders' expectations about the firms found there. We develop venture-location congruence as a parallel to venture-industry congruence and find that classical atypicality penalties operate at low congruence but reverse at high. Geography functions as a categorical lens in its own right.",
        keywords: ["Geography", "Categories", "Competitor identification"],
        links: [{ label: "DOI", href: "https://doi.org/10.1093/icc/dtag031" }],
      },
    ],
  },
  {
    title: "Under Review",
    projects: [
      {
        title: "Competing Against Whom?",
        authors: "Alex Tyulyupo and Balázs Kovács",
        venue: "Journal of Business Venturing",
        status: "Third-round revisions",
        abstract:
          "Competition is implicit in many foundational and modern theories of entrepreneurship, yet little is known about how perceptions of competition form and shape venture development. This paper argues that competition is a uniquely uncertain ingredient in the formation of opportunity beliefs. Encountering a competitor triggers a threat assessment, updates broader perceptions of competitive pressure, and can prompt revision of the venture concept. A revised venture may face a different competitive landscape, at which point identification begins again.",
        keywords: ["Entrepreneurship", "Competition", "Opportunity beliefs"],
      },
      {
        title: "Organizational Reconnaissance",
        authors: "Alex Tyulyupo and Balázs Kovács",
        venue: "Strategic Management Journal",
        status: "Reject and resubmit",
        abstract:
          "Performance depends on searching a landscape whose dimensions are the attributes that actually matter. Organizational learning theory has modeled how actors choose among dimensions but says little about how they construct them. This paper argues that actors construct those dimensions by identifying competitors. Sessions on the simulation platform show that participants facing similar venture concepts in an identical information environment produce widely divergent competitor sets, and much of this divergence corresponds to differences in how they search.",
        keywords: ["Organizational learning", "Strategic search", "Simulation"],
      },
    ],
  },
  {
    title: "Work in Progress",
    projects: [
      {
        title: "Invited chapter on categories in the digital age",
        authors: "Paul Gouvard, Balázs Kovács, and Alex Tyulyupo",
        venue:
          "Research in the Sociology of Organizations, special issue on categories in the digital age",
        status: "In development",
        abstract:
          "This chapter generalizes a pattern my work documents at the level of individual searchers, where category effects disappear the moment searchers stop invoking categories. We argue that digital environments increasingly produce this condition at market scale, decoupling evaluation from categorical membership. If category effects persist where users are unaware of any category, the literature must specify the mechanisms that carry them.",
        keywords: ["Digital environments", "Categories", "Evaluation"],
      },
      {
        title: "Collective Learning and Category Spanning",
        venue: "Computational model in development",
        status: "In development",
        abstract:
          "This project introduces a producer-side mechanism into research on category spanning. Members of a category collectively learn the performance landscape within its boundaries, so a producer that stays inside searches with the benefit of accumulated peer experience, while one that spans beyond must learn the new landscape alone. The model generates the familiar spanning discount with no appeal to audience perceptions and predicts when violating a strong boundary may carry greater long-run upside.",
        keywords: ["Category spanning", "Collective learning", "Modeling"],
      },
    ],
  },
];

const statusColors: Record<string, string> = {
  Forthcoming: "bg-green-50 text-green-700 border border-green-200",
  Published: "bg-blue-50 text-blue-700 border border-blue-200",
  "Third-round": "bg-purple-50 text-purple-700 border border-purple-200",
  Reject: "bg-yellow-50 text-yellow-800 border border-yellow-200",
  "In development": "bg-gray-100 text-gray-600 border border-gray-200",
  default: "bg-gray-100 text-gray-600 border border-gray-200",
};

function statusColor(status: string) {
  const key = Object.keys(statusColors).find((candidate) =>
    status.startsWith(candidate)
  );
  return key ? statusColors[key] : statusColors.default;
}

function ProjectEntry({ project }: { project: Project }) {
  return (
    <article className="border-t border-gray-100 pt-8 first:border-t-0 first:pt-0">
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

      {project.authors && (
        <p className="text-sm text-gray-500 mb-1">{project.authors}</p>
      )}
      <p className="text-sm text-gray-400 mb-4">{project.venue}</p>
      <p className="text-sm text-gray-600 leading-relaxed mb-4">
        {project.abstract}
      </p>

      <div className="flex flex-wrap items-center gap-2">
        {project.keywords.map((keyword) => (
          <span
            key={keyword}
            className="text-xs px-2 py-0.5 bg-gray-100 text-gray-500 rounded"
          >
            {keyword}
          </span>
        ))}
        {project.links && project.links.length > 0 && (
          <div className="flex gap-4 sm:ml-auto">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-blue-600 hover:text-blue-800 transition-colors"
              >
                {link.label} <span aria-hidden="true">-&gt;</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Research() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-5">
        Research
      </h1>

      <section className="mb-16">
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            My research studies organizational reconnaissance: how actors
            construct an understanding of their competitive environment through
            search before they compete within it.
          </p>
          <p>
            My work connects organizational categorization, organizational
            learning, and entrepreneurship. Several projects are joint with
            Balázs Kovács and grow out of my dissertation.
          </p>
          <p>
            Studying reconnaissance requires data on how it unfolds. My
            empirical work uses a behavioral simulation platform that records
            the complete search trajectory as participants browse categories,
            enter keywords, and identify competitors.
          </p>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="/docs/research-statement.docx"
            className="inline-flex items-center px-3 py-1.5 text-sm border border-gray-300 text-gray-700 rounded-md hover:border-gray-500 transition-colors"
          >
            Download full research statement
          </a>
          <Link
            href="/tools"
            className="inline-flex items-center px-3 py-1.5 text-sm border border-gray-200 text-gray-600 rounded-md hover:border-gray-400 hover:text-gray-900 transition-colors"
          >
            View simulation platform
          </Link>
        </div>
      </section>

      {projectGroups.map((group) => (
        <section key={group.title} className="mb-16 last:mb-0">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">
            {group.title}
          </h2>
          <div className="space-y-12">
            {group.projects.map((project) => (
              <ProjectEntry key={project.title} project={project} />
            ))}
          </div>
        </section>
      ))}

    </div>
  );
}
