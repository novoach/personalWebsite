export const metadata = {
  title: "Publications | Your Name",
  description: "Peer-reviewed articles, working papers, and other writing.",
};

type PubLink = { label: string; href: string };

type Publication = {
  citation: string;
  note?: string;
  links: PubLink[];
};

const peerReviewed: { published: Publication[]; forthcoming: Publication[] } = {
  published: [
    {
      citation:
        "Smith, J. (2024). Title of paper. Journal Name, 12(3), 45–67.",
      links: [
        { label: "PDF", href: "#" },
        { label: "Journal page", href: "#" },
        { label: "Replication data", href: "#" },
      ],
    },
    {
      citation:
        "Smith, J., & Jones, A. (2023). Another paper. Another Journal, 8(1), 1–22.",
      links: [
        { label: "PDF", href: "#" },
        { label: "DOI", href: "#" },
      ],
    },
  ],
  forthcoming: [
    {
      citation: "Smith, J. (forthcoming). Title. Journal Name. Accepted Month 2024.",
      links: [{ label: "PDF", href: "#" }],
    },
  ],
};

const bookChapters: Publication[] = [
  {
    citation:
      "Smith, J. (2023). Chapter title. In A. Editor (Ed.), Book Title (pp. 10–30). Publisher.",
    links: [
      { label: "PDF", href: "#" },
      { label: "Publisher page", href: "#" },
    ],
  },
];

const workingPapers: Publication[] = [
  {
    citation: "Smith, J. (2024). Title of working paper.",
    note: "Under review at Journal X",
    links: [
      { label: "PDF", href: "#" },
      { label: "SSRN", href: "#" },
    ],
  },
  {
    citation: "Smith, J. (2024). Another working paper.",
    note: "Manuscript available on request",
    links: [],
  },
];

const workInProgress: { title: string; coauthor?: string }[] = [
  { title: "Title of project in early stage", coauthor: "with Co-Author Name" },
  { title: "Title of project — data collection phase" },
  { title: "Title of dissertation chapter in drafting" },
];

const otherWriting: Publication[] = [
  {
    citation: "Smith, J. (2023). 'Op-ed title.' Publication Name.",
    links: [{ label: "Link", href: "#" }],
  },
  {
    citation: "Smith, J. (2022). 'Policy brief title.' Institution / Think Tank.",
    links: [{ label: "PDF", href: "#" }],
  },
];

function PubEntry({ pub }: { pub: Publication }) {
  return (
    <div className="py-4 border-t border-gray-100 first:border-t-0 first:pt-0">
      <p className="text-sm text-gray-700 leading-relaxed">
        {pub.citation}
        {pub.note && (
          <span className="ml-2 text-xs font-medium text-blue-600 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-full">
            {pub.note}
          </span>
        )}
      </p>
      {pub.links.length > 0 && (
        <div className="flex gap-4 mt-2">
          {pub.links.map((link) => (
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
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4 mt-12 first:mt-0">
      {title}
    </h2>
  );
}

function SubHeader({ title }: { title: string }) {
  return (
    <h3 className="text-xs font-medium uppercase tracking-widest text-gray-300 mb-3 mt-6">
      {title}
    </h3>
  );
}

export default function Publications() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-10">
        Publications &amp; Writing
      </h1>

      {/* Peer-Reviewed */}
      <section>
        <SectionHeader title="Peer-Reviewed Articles" />
        <SubHeader title="Published" />
        {peerReviewed.published.map((pub) => (
          <PubEntry key={pub.citation} pub={pub} />
        ))}
        <SubHeader title="Forthcoming / Accepted" />
        {peerReviewed.forthcoming.map((pub) => (
          <PubEntry key={pub.citation} pub={pub} />
        ))}
      </section>

      {/* Book Chapters */}
      <section>
        <SectionHeader title="Book Chapters" />
        {bookChapters.map((pub) => (
          <PubEntry key={pub.citation} pub={pub} />
        ))}
      </section>

      {/* Working Papers */}
      <section>
        <SectionHeader title="Working Papers" />
        {workingPapers.map((pub) => (
          <PubEntry key={pub.citation} pub={pub} />
        ))}
      </section>

      {/* Work in Progress */}
      <section>
        <SectionHeader title="Work in Progress" />
        <ul className="space-y-2">
          {workInProgress.map((item) => (
            <li key={item.title} className="text-sm text-gray-600 flex gap-2">
              <span className="text-gray-300 mt-0.5">•</span>
              <span>
                {item.title}
                {item.coauthor && (
                  <span className="text-gray-400"> {item.coauthor}</span>
                )}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Other Writing */}
      <section>
        <SectionHeader title="Other Writing" />
        {otherWriting.map((pub) => (
          <PubEntry key={pub.citation} pub={pub} />
        ))}
      </section>
    </div>
  );
}
