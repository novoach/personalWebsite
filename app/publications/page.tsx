export const metadata = {
  title: "Publications | Alex Tyulyupo",
  description:
    "Peer-reviewed articles, book chapters, working papers, and projects by Alex Tyulyupo.",
};

type PubLink = { label: string; href: string };

type Publication = {
  citation: string;
  note?: string;
  links?: PubLink[];
};

const peerReviewed: Publication[] = [
  {
    citation:
      "Tyulyupo, A., & Kovács, B. (2026). Categorical Engagement and the Contingent Nature of Typicality Effects. Sociological Science, 13, 884-914.",
    links: [{ label: "DOI", href: "https://doi.org/10.15195/v13.a34" }],
  },
  {
    citation:
      "Kovács, B., & Tyulyupo, A. (2026). Cognitive Cartography: How Geographic Categories and Firm Location-Typicality Shape Competitor Identification. Industrial and Corporate Change, dtag031.",
    links: [{ label: "DOI", href: "https://doi.org/10.1093/icc/dtag031" }],
  },
];

const underReview: Publication[] = [
  {
    citation:
      "Tyulyupo, A., & Kovács, B. Competing Against Whom? Competitor Identification and Opportunity Belief Revision.",
    note: "Conditionally accepted, Journal of Business Venturing",
  },
  {
    citation:
      "Tyulyupo, A., & Kovács, B. Organizational Reconnaissance: Opening the Black Box of Search with Behavioral Simulation.",
    note: "Reject and resubmit, Strategic Management Journal",
  },
];

const workInProgress: Publication[] = [
  {
    citation:
      "Gouvard, P., Kovács, B., & Tyulyupo, A. Invited chapter for Research in the Sociology of Organizations (special issue on categories in the digital age).",
    note: "In development",
  },
  {
    citation: "Collective Learning and Category Spanning.",
    note: "In development",
  },
];

const preDoctoral: Publication[] = [
  {
    citation:
      "Shevchuk, A., Strebkov, D., & Tyulyupo, A. (2021). Always on across Time Zones: Invisible Schedules in the Online Gig Economy. New Technology, Work and Employment, 36(1), 94-113.",
  },
  {
    citation:
      "Shevchuk, A., Strebkov, D., & Tyulyupo, A. (2021). The Geography of the Digital Freelance Economy in Russia and Beyond. In Topologies of Digital Work (Chapter 2, pp. 19-50). Palgrave Macmillan.",
  },
  {
    citation:
      "Tyulyupo, A. (2021). Factors of (Dis)Trust Towards Clients on the Online Labor Platforms. Monitoring of Public Opinion: Economic and Social Changes, 3.",
    note: "In Russian",
  },
  {
    citation:
      "Strebkov, D., Shevchuk, A., Lukina, A., Melianova, E., & Tyulyupo, A. (2019). Social Factors of Contractor Selection on Freelance Online Marketplace: A Study of Contests Using Big Data. Journal of Economic Sociology, 20(3).",
    note: "In Russian",
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
      {pub.links && pub.links.length > 0 && (
        <div className="flex gap-4 mt-2">
          {pub.links.map((link) => (
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
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <h2 className="text-base font-semibold tracking-tight text-gray-900 mb-4 mt-12 first:mt-0">
      {title}
    </h2>
  );
}

export default function Publications() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-10">
        Publications &amp; Writing
      </h1>

      <section>
        <SectionHeader title="Peer-Reviewed Articles" />
        {peerReviewed.map((pub) => (
          <PubEntry key={pub.citation} pub={pub} />
        ))}
      </section>

      <section>
        <SectionHeader title="Under Review" />
        {underReview.map((pub) => (
          <PubEntry key={pub.citation} pub={pub} />
        ))}
      </section>

      <section>
        <SectionHeader title="Work in Progress" />
        {workInProgress.map((pub) => (
          <PubEntry key={pub.citation} pub={pub} />
        ))}
      </section>

      <section>
        <SectionHeader title="Pre-Doctoral Publications" />
        {preDoctoral.map((pub) => (
          <PubEntry key={pub.citation} pub={pub} />
        ))}
      </section>
    </div>
  );
}
