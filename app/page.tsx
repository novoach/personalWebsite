import Link from "next/link";

export default function About() {
  const interests = [
    "Computational Text Analysis",
    "Legislative Politics",
    "Natural Language Processing",
    "Comparative Politics",
  ];

  const links = [
    { label: "Email", href: "mailto:your@email.edu", external: true },
    { label: "CV", href: "/cv", external: false },
    { label: "Google Scholar", href: "#", external: true },
    { label: "GitHub", href: "#", external: true },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="mb-16 flex flex-col-reverse md:flex-row md:items-start md:gap-12">
        <div className="flex-1 mt-8 md:mt-0">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-2">
            Your Full Name
          </h1>
          <p className="text-base text-gray-500 mb-4">
            PhD Candidate · Department of X, University of Y
          </p>
          <p className="text-gray-700 leading-relaxed italic mb-6">
            I study how language shapes political behaviour using computational
            text analysis.
          </p>

          {/* Short Bio */}
          <div className="space-y-3 text-gray-600 leading-relaxed text-sm mb-8">
            <p>
              Jane Smith is a PhD candidate in Political Science at the
              University of Y, where she studies the computational analysis of
              legislative discourse.
            </p>
            <p>
              Her work draws on large-scale text corpora and applies natural
              language processing to questions of political representation and
              agenda-setting.
            </p>
            <p>
              Her research has been published in / supported by [journals /
              grants / awards].
            </p>
          </div>

          {/* Contact links */}
          <div className="flex flex-wrap gap-3">
            {links.map(({ label, href, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="inline-flex items-center px-3 py-1.5 text-sm border border-gray-300 text-gray-700 rounded-md hover:border-gray-500 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Photo placeholder */}
        <div className="shrink-0 w-40 h-40 md:w-48 md:h-48 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
          Photo
        </div>
      </section>

      {/* Research Interests */}
      <section className="mb-16">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
          Research Interests
        </h2>
        <div className="flex flex-wrap gap-2">
          {interests.map((interest) => (
            <span
              key={interest}
              className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
            >
              {interest}
            </span>
          ))}
        </div>
      </section>

      {/* Office / Contact */}
      <section className="mb-16 text-sm text-gray-500 space-y-1">
        <p>
          <span className="font-medium text-gray-700">Office:</span> Room X,
          Building Y, University Z
        </p>
        <p>
          <span className="font-medium text-gray-700">Email:</span>{" "}
          <a
            href="mailto:your@email.edu"
            className="hover:text-gray-900 transition-colors"
          >
            your@email.edu
          </a>
        </p>
      </section>

      {/* Soft link to Research Philosophy */}
      <section className="border-t border-gray-100 pt-8">
        <p className="text-sm text-gray-500">
          Curious about the thinking behind my research agenda?{" "}
          <Link
            href="/research-philosophy"
            className="text-gray-700 underline underline-offset-2 hover:text-gray-900 transition-colors"
          >
            Read my Research Philosophy →
          </Link>
        </p>
      </section>
    </div>
  );
}
