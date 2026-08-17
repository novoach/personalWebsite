import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const profileJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: "https://alextyulyupo.com",
  mainEntity: {
    "@type": "Person",
    "@id": "https://alextyulyupo.com/#alex-tyulyupo",
    name: "Alex Tyulyupo",
    url: "https://alextyulyupo.com",
    image: "https://alextyulyupo.com/alex-tyulyupo.jpg",
    jobTitle: "Postdoctoral Associate",
    affiliation: {
      "@type": "Organization",
      name: "Yale School of Management",
    },
    sameAs: [
      "https://scholar.google.com/citations?user=D-oEFq0AAAAJ&view_op=list_works&sortby=pubdate",
    ],
    knowsAbout: [
      "Categorization",
      "Organizational learning",
      "Entrepreneurial opportunities",
    ],
  },
};

const links = [
  {
    label: "alex.tyulyupo@yale.edu",
    href: "mailto:alex.tyulyupo@yale.edu",
    external: false,
  },
  { label: "CV", href: "/docs/alex-tyulyupo-cv.pdf", external: false },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=D-oEFq0AAAAJ&view_op=list_works&sortby=pubdate",
    external: true,
  },
];

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profileJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <section className="mb-16 grid gap-10 md:grid-cols-[1fr_260px] md:items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
            Yale School of Management
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-3">
            Alex Tyulyupo
          </h1>
          <p className="text-base text-gray-500 mb-6">
            Postdoctoral Associate studying organizational behavior, categories,
            and entrepreneurship.
          </p>

          <div className="space-y-5 text-gray-600 leading-relaxed mb-8">
            <p className="text-xl leading-relaxed text-gray-800">
              It is my firm conviction that many strategic exploratory moves are
              preceded by a cognitive investigation of the environment. I call
              this process Organizational Reconnaissance.
            </p>
            <p>
              Researchers looking up prior literature, workers looking for
              jobs, organizations expanding an existing business, and many other
              actors have this in common. Most of my research focuses on the
              case of competitor identification for new venture concepts.
            </p>
            <p>
              No one needs convincing that perceptions of competition matter.
              Substantial research shows that cognitive maps of competition look
              nothing like an abstract representation of the industry. While the
              process of building these maps is rarely observed, their shape is
              usually explained by a history of market clashes and social
              contacts. But what about novel ventures? Are entrepreneurs
              confined to areas where they have personal expertise? That would
              be a very static economy, far from what we actually observe.
            </p>
            <p>
              So how do entrepreneurs and other actors do this? Social networks
              research seems to provide the answer. Scientists are more likely
              to collaborate with colleagues who attended the same conference,
              and workers are more likely to apply to a company where a friend
              works. But again, this is an overly static picture. Does no one
              ever browse job boards or Google Scholar? And if they do, how do
              they do it?
            </p>
            <p>
              In the broadest terms, this is done by navigating the cognitive
              infrastructure of categories. In an ideal world, categories would
              operate as a market interface that makes the process simple.
              Graduate from college with an X degree, apply to X jobs. Want to
              start a Y business, research companies in the Y industry. This is
              not what I mean by &quot;navigating,&quot; and this is not how
              things work.
            </p>
            <p>
              I have built an information portal to observe the process of
              competitor identification for venture concepts. I can already say
              that actors hold very different mental maps of the industries
              where competitors of a given venture can be found. Searchers
              gravitate toward items typical of the searched category and
              location. And what searchers find is likely to change the original
              intention of the reconnaissance.
            </p>
          </div>

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

        <aside className="order-first space-y-6 md:order-none">
          <Image
            src="/alex-tyulyupo.jpg"
            alt="Alex Tyulyupo"
            width={1122}
            height={1402}
            priority
            sizes="(min-width: 768px) 260px, 70vw"
            className="h-auto w-full max-w-[260px] mx-auto rounded-lg object-cover"
          />
          <div className="rounded-lg border border-gray-200 p-4 text-sm leading-relaxed text-gray-600">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
              Organizational Reconnaissance
            </h2>
            <p>
              Organizational Reconnaissance is the cognitive search and study of
              distant environments. It is focused on objects that have
              consequences for the future strategy the agent will take.
            </p>
          </div>
        </aside>
      </section>

      <section className="mb-16">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
          How I Got Here
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            Before my PhD, I worked as a freelance researcher at a large
            technology company, helping build a new online education platform
            for programmers. The task sounded simple. Use job-board data to
            describe the field&apos;s specializations.
          </p>
          <p>
            But the first question turned out to be the hard one. What counts
            as a specialization? The boundaries I drew would shape which
            skills people chose to learn, where they applied, and how they
            labeled themselves. I was drawing the map they would later use to
            search the field.
          </p>
          <p>
            I did not have the vocabulary for it then, but that was my
            introduction to the questions I now study. Categories are
            instruments that structure how people search a market.
          </p>
        </div>
      </section>
    </div>
  );
}
