export const metadata = {
  title: "CV | Alex Tyulyupo",
  description: "Curriculum vitae of Alex Tyulyupo.",
  alternates: { canonical: "/cv" },
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4 pb-2 border-b border-gray-100">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Row({
  left,
  right,
  sub,
}: {
  left: React.ReactNode;
  right?: string;
  sub?: string;
}) {
  return (
    <div className="flex justify-between items-start gap-4 mb-3">
      <div>
        <p className="text-sm text-gray-800 leading-relaxed">{left}</p>
        {sub && <p className="text-xs text-gray-500 mt-0.5">{sub}</p>}
      </div>
      {right && <span className="shrink-0 text-xs text-gray-400">{right}</span>}
    </div>
  );
}

export default function CV() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-1">
            Curriculum Vitae
          </h1>
          <p className="text-sm text-gray-500">
            Alex Tyulyupo ·{" "}
            <a
              href="mailto:alex.tyulyupo@yale.edu"
              className="hover:text-gray-900 transition-colors"
            >
              alex.tyulyupo@yale.edu
            </a>
          </p>
          <p className="text-sm text-gray-500 mt-1">
            <a
              href="https://scholar.google.com/citations?user=D-oEFq0AAAAJ&view_op=list_works&sortby=pubdate"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition-colors"
            >
              Google Scholar
            </a>
          </p>
          <p className="text-xs text-gray-400 mt-1">Updated July 2026</p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2">
          <a
            href="/docs/alex-tyulyupo-cv.pdf"
            className="inline-flex items-center justify-center px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-700 transition-colors"
          >
            Download PDF
          </a>
        </div>
      </div>

      <Section title="Current Position">
        <Row
          left={
            <>
              <span className="font-medium">Postdoctoral Associate</span>, Yale
              School of Management
            </>
          }
          right="2025-present"
        />
      </Section>

      <Section title="Education">
        <Row
          left={
            <>
              <span className="font-medium">
                PhD in Business Administration
              </span>
              , ESSEC Business School
            </>
          }
          right="2024"
        />
        <Row
          left="Visiting PhD student, Yale School of Management"
          right="2022"
        />
        <Row
          left="MSc, Higher School of Economics, Faculty of Social Sciences"
          right="2019"
        />
        <Row
          left="Specialist Degree (five-year diploma), National Research Tomsk State University, Faculty of History"
          right="2016"
        />
      </Section>

      <Section title="Selected Publications and Working Projects">
        <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
          <p>
            Tyulyupo, A., &amp; Kovács, B. (2026). Categorical Engagement and
            the Contingent Nature of Typicality Effects.{" "}
            <em>Sociological Science</em>, 13, 884-914.
          </p>
          <p>
            Kovács, B., &amp; Tyulyupo, A. (2026). Cognitive Cartography: How
            Geographic Categories and Firm Location-Typicality Shape Competitor
            Identification. <em>Industrial and Corporate Change</em>, dtag031.
          </p>
          <p>
            Tyulyupo, A., &amp; Kovács, B. Competing Against Whom? Competitor
            Identification and Opportunity Belief Revision.{" "}
            <span className="text-blue-600 text-xs font-medium">
              Third round, Journal of Business Venturing
            </span>
          </p>
          <p>
            Tyulyupo, A., &amp; Kovács, B. Organizational Reconnaissance:
            Opening the Black Box of Search with Behavioral Simulation.{" "}
            <span className="text-blue-600 text-xs font-medium">
              Reject and resubmit, Strategic Management Journal
            </span>
          </p>
        </div>
      </Section>

      <Section title="Grants and Awards">
        <Row
          left="Inaugural cohort, OpenAI Economic Research Exchange"
          right="2026"
          sub="Project with Balázs Kovács and Iris Wang, with a residency at OpenAI as the in-house researcher."
        />
      </Section>

      <Section title="Research and Professional Experience">
        <Row
          left="Research intern, Laboratory for Studies in Economic Sociology, HSE Moscow"
          right="2019-2021"
        />
        <Row
          left="Marketing and sociological research for Yandex, TalentTech, and Tretyakov Gallery"
          right="2019-2020"
        />
      </Section>

      <Section title="Additional Training">
        <Row
          left={
            <>
              <span className="font-medium">
                Teaching in the American Classroom
              </span>
              , Yale University
            </>
          }
          right="2025"
        />
        <Row
          left={
            <>
              <span className="font-medium">Entrepreneurship and Strategy</span>,
              PhD course, NHH Norwegian School of Economics
            </>
          }
          right="2024"
        />
        <Row
          left={
            <>
              <span className="font-medium">
                Contributing to the Management Literature
              </span>
              , PhD workshop, INSEAD
            </>
          }
          right="2024"
          sub="Led by Hart E. Posen."
        />
      </Section>
    </div>
  );
}
