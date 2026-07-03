export const metadata = {
  title: "Teaching | Alex Tyulyupo",
  description: "Teaching experience and interests of Alex Tyulyupo.",
};

type Course = {
  title: string;
  context: string;
  year: string;
};

const instructorCourses: Course[] = [
  {
    title: "Strategy and Management",
    context: "Master's-level core course, Grande École, ESSEC Business School",
    year: "2024",
  },
  {
    title: "Economic Sociology",
    context: "Undergraduate, Higher School of Economics, Moscow",
    year: "2020",
  },
];

const teachingAssistantCourses: Course[] = [
  {
    title: "Strategy and Management",
    context: "ESSEC Business School",
    year: "2023",
  },
  {
    title:
      "Managing Business Networks: Leading Through Social Relations and Networks",
    context: "ESSEC Business School",
    year: "2023",
  },
  {
    title: "Introduction to R Programming",
    context: "Higher School of Economics, Moscow",
    year: "2018",
  },
];

function CourseList({ title, courses }: { title: string; courses: Course[] }) {
  return (
    <section className="mb-12 last:mb-0">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
        {title}
      </h2>
      <div className="divide-y divide-gray-100">
        {courses.map((course) => (
          <article
            key={`${course.title}-${course.context}-${course.year}`}
            className="py-5 first:pt-0"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-semibold text-gray-900 leading-snug">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{course.context}</p>
              </div>
              <span className="shrink-0 text-xs text-gray-400">
                {course.year}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function Teaching() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
        Teaching
      </h1>
      <p className="text-sm text-gray-500 leading-relaxed mb-10 max-w-2xl">
        My teaching interests are strategy, entrepreneurship, and organizational
        theory.
      </p>

      <div className="flex flex-wrap gap-2 mb-14">
        {["Strategy", "Entrepreneurship", "Organizational theory"].map(
          (interest) => (
            <span
              key={interest}
              className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
            >
              {interest}
            </span>
          )
        )}
      </div>

      <CourseList title="Instructor" courses={instructorCourses} />
      <CourseList
        title="Teaching Assistant"
        courses={teachingAssistantCourses}
      />
    </div>
  );
}
