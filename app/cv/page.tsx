export const metadata = {
  title: "CV | Your Name",
  description: "Curriculum Vitae of Your Name.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
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
        <p className="text-sm text-gray-800">{left}</p>
        {sub && <p className="text-xs text-gray-500 mt-0.5">{sub}</p>}
      </div>
      {right && <span className="shrink-0 text-xs text-gray-400">{right}</span>}
    </div>
  );
}

export default function CV() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="mb-10 flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-1">
            Your Full Name
          </h1>
          <p className="text-sm text-gray-500">
            Department of X, University of Y ·{" "}
            <a
              href="mailto:your@email.edu"
              className="hover:text-gray-900 transition-colors"
            >
              your@email.edu
            </a>
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Last updated: Month Year
          </p>
        </div>
        <a
          href="/cv.pdf"
          className="shrink-0 inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-700 transition-colors"
        >
          Download PDF
        </a>
      </div>

      {/* Academic Positions */}
      <Section title="Academic Positions">
        <Row
          left={<><span className="font-medium">Job Title</span>, Department, University</>}
          right="2023 – present"
        />
        <Row
          left={<><span className="font-medium">Previous Title</span>, Department, University</>}
          right="2021 – 2023"
        />
      </Section>

      {/* Education */}
      <Section title="Education">
        <Row
          left={<><span className="font-medium">PhD Political Science</span>, University of Y</>}
          right="Expected 2025"
          sub="Dissertation: Title · Committee: Chair, Member 1, Member 2"
        />
        <Row
          left={<><span className="font-medium">MA Political Science</span>, University of Y</>}
          right="2021"
        />
        <Row
          left={<><span className="font-medium">BA Political Science</span>, University of X</>}
          right="2019"
        />
      </Section>

      {/* Publications */}
      <Section title="Publications">
        <p className="text-xs text-gray-400 mb-3 italic">
          See{" "}
          <a href="/publications" className="underline underline-offset-2 hover:text-gray-700 transition-colors">
            Publications page
          </a>{" "}
          for full details and links.
        </p>
        <p className="text-sm font-medium text-gray-600 mb-2">Peer-Reviewed</p>
        <p className="text-sm text-gray-600 mb-4">
          Smith, J. (2024). Title. <em>Journal Name</em>, 12(3), 45–67.
        </p>
        <p className="text-sm font-medium text-gray-600 mb-2">Working Papers</p>
        <p className="text-sm text-gray-600 mb-1">
          Smith, J. (2024). Title.{" "}
          <span className="text-blue-600 text-xs font-medium">Under review</span>
        </p>
        <p className="text-sm font-medium text-gray-600 mt-4 mb-2">Work in Progress</p>
        <ul className="space-y-1">
          {["Title of project one", "Title of project two"].map((t) => (
            <li key={t} className="text-sm text-gray-600 flex gap-2">
              <span className="text-gray-300">•</span> {t}
            </li>
          ))}
        </ul>
      </Section>

      {/* Grants & Awards */}
      <Section title="Grants, Fellowships & Awards">
        <Row
          left="Award Name, Granting Body"
          right="2024"
          sub="$X,XXX"
        />
        <Row
          left="Fellowship Name, Institution"
          right="2023"
        />
      </Section>

      {/* Conferences */}
      <Section title="Conference Presentations">
        {[
          { title: "Paper title", conf: "Conference Name, Location", date: "June 2024" },
          { title: "Paper title", conf: "Conference Name, Location", date: "Aug 2023" },
        ].map((p, i) => (
          <p key={i} className="text-sm text-gray-600 mb-2">
            &lsquo;{p.title},&rsquo; <em>{p.conf}</em>. {p.date}.
          </p>
        ))}
      </Section>

      {/* Teaching */}
      <Section title="Teaching">
        <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
          Instructor of Record
        </p>
        <Row
          left={<><span className="font-medium">Course Title</span>, Undergraduate, University</>}
          right="Spring 2024"
        />
        <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2 mt-4">
          Teaching Assistant
        </p>
        <Row
          left={<><span className="font-medium">Course Title</span>, Instructor Name, University</>}
          right="Fall 2023"
        />
      </Section>

      {/* Service */}
      <Section title="Service">
        <p className="text-sm font-medium text-gray-600 mb-1">Peer Review</p>
        <p className="text-sm text-gray-600 mb-4">
          Reviewer for: Journal One · Journal Two · Conference Name
        </p>
        <p className="text-sm font-medium text-gray-600 mb-1">Departmental &amp; Professional</p>
        <ul className="space-y-1">
          <li className="text-sm text-gray-600 flex gap-2">
            <span className="text-gray-300">•</span> Committee Name, Department, 2023
          </li>
        </ul>
      </Section>

      {/* Skills */}
      <Section title="Software & Technical Skills">
        <div className="space-y-1 text-sm text-gray-600">
          <p><span className="font-medium text-gray-700">Statistical / programming:</span> R · Python · Stata · Stan</p>
          <p><span className="font-medium text-gray-700">Data &amp; text analysis:</span> tidytext · quanteda · spaCy</p>
          <p><span className="font-medium text-gray-700">Visualisation &amp; apps:</span> ggplot2 · Shiny</p>
          <p><span className="font-medium text-gray-700">Other:</span> LaTeX · Git · QGIS</p>
        </div>
      </Section>

      {/* Languages */}
      <Section title="Languages">
        <p className="text-sm text-gray-600">
          English (native) · Language Two (fluent) · Language Three (reading)
        </p>
      </Section>

      {/* References */}
      <Section title="References">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { name: "Prof. A Name", dept: "Department, University", email: "a@inst.edu" },
            { name: "Prof. B Name", dept: "Department, University", email: "b@inst.edu" },
          ].map((ref) => (
            <div key={ref.name} className="text-sm text-gray-600">
              <p className="font-medium text-gray-800">{ref.name}</p>
              <p className="text-gray-500">{ref.dept}</p>
              <a href={`mailto:${ref.email}`} className="text-blue-600 hover:text-blue-800 transition-colors text-xs">
                {ref.email}
              </a>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
