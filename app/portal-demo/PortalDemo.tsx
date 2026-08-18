"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type Company = {
  id: string;
  name: string;
  description: string;
  country: string;
  location: string;
  employees: string;
};

type PortalEvent = {
  type: string;
  at: string;
  offsetMs: number;
  payload?: Record<string, unknown>;
};

type Selection = Company & {
  rating: number | null;
  selectedAt: string;
};

type Feedback = {
  searchCount: number;
  openedCount: number;
  selectedCount: number;
  averageThreat: number | null;
  queryTerms: string[];
  selectedCountries: string[];
  mode: string;
};

const ventureConcept =
  "This online platform provides training courses designed to prepare individuals for high-paying careers in fields like finance, technology, consulting, healthcare, and engineering. There are asynchronous resources through pre-recorded training modules as well as practical ways to prepare for these careers. There are also more personalized and live methods of support included within these courses.";

const resultsPerPage = 12;

function createSessionId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `portal-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function normalize(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function tokenize(text: string) {
  return normalize(text)
    .split(/\s+/)
    .filter((term) => term.length > 1);
}

function scoreCompany(company: Company, terms: string[]) {
  if (terms.length === 0) return 0;

  const name = normalize(company.name);
  const description = normalize(company.description);
  const location = normalize(`${company.location} ${company.country}`);
  let score = 0;

  for (const term of terms) {
    if (name.includes(term)) score += 5;
    if (description.includes(term)) score += 3;
    if (location.includes(term)) score += 1;
  }

  return score;
}

function summarizeFeedback(
  events: PortalEvent[],
  selections: Selection[],
): Feedback {
  const searchEvents = events.filter((event) => event.type === "search");
  const openedCompanies = new Set(
    events
      .filter((event) => event.type === "open_company")
      .map((event) => String(event.payload?.companyId ?? "")),
  );
  const queryTerms = Array.from(
    new Set(
      searchEvents.flatMap((event) =>
        tokenize(String(event.payload?.query ?? "")),
      ),
    ),
  ).slice(0, 12);
  const ratings = selections
    .map((selection) => selection.rating)
    .filter((rating): rating is number => typeof rating === "number");
  const averageThreat =
    ratings.length > 0
      ? Number(
          (
            ratings.reduce((total, rating) => total + rating, 0) /
            ratings.length
          ).toFixed(1),
        )
      : null;
  const selectedCountries = Array.from(
    new Set(selections.map((selection) => selection.country).filter(Boolean)),
  );

  let mode = "early scan";
  if (searchEvents.length >= 4 && selections.length >= 4) {
    mode = "iterative competitor reconnaissance";
  } else if (searchEvents.length >= 3) {
    mode = "broad search before commitment";
  } else if (selections.length >= 3) {
    mode = "quick convergence on candidates";
  }

  return {
    searchCount: searchEvents.length,
    openedCount: openedCompanies.size,
    selectedCount: selections.length,
    averageThreat,
    queryTerms,
    selectedCountries,
    mode,
  };
}

export default function PortalDemo() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [dataError, setDataError] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");
  const [page, setPage] = useState(1);
  const [activeCompanyId, setActiveCompanyId] = useState<string | null>(null);
  const [selections, setSelections] = useState<Selection[]>([]);
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [storageStatus, setStorageStatus] = useState<string | null>(null);
  const sessionIdRef = useRef(createSessionId());
  const startedAtRef = useRef(new Date().toISOString());
  const startedMsRef = useRef(Date.now());
  const eventsRef = useRef<PortalEvent[]>([]);

  const logEvent = useCallback((type: string, payload?: Record<string, unknown>) => {
    eventsRef.current = [
      ...eventsRef.current,
      {
        type,
        at: new Date().toISOString(),
        offsetMs: Date.now() - startedMsRef.current,
        payload,
      },
    ];
  }, []);

  useEffect(() => {
    fetch("/portal/companies.json")
      .then((response) => {
        if (!response.ok) throw new Error("Could not load company data.");
        return response.json() as Promise<Company[]>;
      })
      .then((records) => {
        setCompanies(records);
        logEvent("session_started", { companyCount: records.length });
      })
      .catch((error) => {
        setDataError(
          error instanceof Error ? error.message : "Could not load data.",
        );
      });
  }, [logEvent]);

  const results = useMemo(() => {
    const terms = tokenize(submittedQuery);
    if (terms.length === 0) return [];

    return companies
      .map((company) => ({ company, score: scoreCompany(company, terms) }))
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score || a.company.name.localeCompare(b.company.name))
      .map(({ company }) => company);
  }, [companies, submittedQuery]);

  const totalPages = Math.max(1, Math.ceil(results.length / resultsPerPage));
  const visiblePages = useMemo(() => {
    const start = Math.max(1, Math.min(page - 3, totalPages - 7));
    const end = Math.min(totalPages, start + 7);
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  }, [page, totalPages]);
  const pageResults = results.slice(
    (page - 1) * resultsPerPage,
    page * resultsPerPage,
  );
  const activeCompany = companies.find((company) => company.id === activeCompanyId);
  const selectedIds = new Set(selections.map((selection) => selection.id));

  function submitSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const cleanedQuery = query.trim();
    setSubmittedQuery(cleanedQuery);
    setPage(1);
    setActiveCompanyId(null);
    setFeedback(null);
    logEvent("search", { query: cleanedQuery });
  }

  function openCompany(company: Company) {
    setActiveCompanyId(company.id);
    logEvent("open_company", {
      companyId: company.id,
      companyName: company.name,
      fromQuery: submittedQuery,
    });
  }

  function setPageWithLog(nextPage: number) {
    setPage(nextPage);
    logEvent("paginate", {
      page: nextPage,
      query: submittedQuery,
    });
  }

  function toggleSelection(company: Company) {
    setFeedback(null);
    setSelections((current) => {
      const exists = current.some((selection) => selection.id === company.id);
      if (exists) {
        logEvent("remove_company", {
          companyId: company.id,
          companyName: company.name,
        });
        return current.filter((selection) => selection.id !== company.id);
      }

      logEvent("select_company", {
        companyId: company.id,
        companyName: company.name,
      });
      return [
        ...current,
        {
          ...company,
          rating: null,
          selectedAt: new Date().toISOString(),
        },
      ];
    });
  }

  function rateSelection(companyId: string, rating: number) {
    setFeedback(null);
    setSelections((current) =>
      current.map((selection) =>
        selection.id === companyId ? { ...selection, rating } : selection,
      ),
    );
    logEvent("rate_company", { companyId, rating });
  }

  async function finishSession() {
    const summary = summarizeFeedback(eventsRef.current, selections);
    setFeedback(summary);
    logEvent("feedback_generated", summary);
    setStorageStatus("Saving session trace...");

    try {
      const response = await fetch("/api/portal-events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId: sessionIdRef.current,
          startedAt: startedAtRef.current,
          completedAt: new Date().toISOString(),
          ventureConcept,
          events: eventsRef.current,
          selections,
          feedback: summary,
        }),
      });
      const result = (await response.json()) as {
        ok?: boolean;
        stored?: boolean;
        reason?: string;
        error?: string;
      };

      if (!response.ok || !result.ok) {
        setStorageStatus(result.error ?? "Session trace was not saved.");
      } else if (result.stored) {
        setStorageStatus("Session trace saved.");
      } else {
        setStorageStatus(
          result.reason ??
            "Session trace is available in this browser, but storage is not configured.",
        );
      }
    } catch {
      setStorageStatus("Session trace could not be sent from this browser.");
    }
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-8 border-b border-gray-200 pb-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-400">
          Hidden research instrument demo
        </p>
        <h1 className="mb-3 text-3xl font-semibold tracking-tight text-gray-900">
          Competitor Identification Portal
        </h1>
        <p className="max-w-3xl text-sm leading-relaxed text-gray-600">
          This simplified portal approximates the search task used to study
          organizational reconnaissance. It uses a stripped 5,000-company
          corpus, keyword matching, local selection state, and session-level
          event logging.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
        <aside className="space-y-5">
          <section className="rounded-lg border border-gray-200 p-4">
            <h2 className="mb-2 text-xs font-semibold uppercase tracking-widest text-gray-400">
              Venture Concept
            </h2>
            <p className="text-sm leading-relaxed text-gray-600">
              {ventureConcept}
            </p>
          </section>

          <section className="rounded-lg border border-gray-200 p-4">
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-400">
              Search
            </h2>
            <form onSubmit={submitSearch} className="space-y-3">
              <label className="block text-sm font-medium text-gray-700">
                Keywords
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="career training, consulting, finance"
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-gray-500 focus:outline-none"
                />
              </label>
              <button
                type="submit"
                className="w-full rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700"
              >
                Search Companies
              </button>
            </form>
          </section>

          <section className="rounded-lg border border-gray-200 p-4">
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-400">
              Selected Competitors
            </h2>
            {selections.length === 0 ? (
              <p className="text-sm text-gray-500">
                Selected companies will appear here.
              </p>
            ) : (
              <div className="space-y-3">
                {selections.map((selection) => (
                  <div key={selection.id} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                    <div className="mb-2 flex items-start justify-between gap-3">
                      <p className="text-sm font-medium text-gray-800">
                        {selection.name}
                      </p>
                      <button
                        type="button"
                        onClick={() => toggleSelection(selection)}
                        className="text-xs text-gray-400 hover:text-gray-900"
                      >
                        Remove
                      </button>
                    </div>
                    <label className="block text-xs text-gray-500">
                      Threat rating
                      <select
                        value={selection.rating ?? ""}
                        onChange={(event) =>
                          rateSelection(selection.id, Number(event.target.value))
                        }
                        className="mt-1 w-full rounded-md border border-gray-300 px-2 py-1 text-sm"
                      >
                        <option value="">Not rated</option>
                        {[1, 2, 3, 4, 5, 6, 7].map((rating) => (
                          <option key={rating} value={rating}>
                            {rating}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>
                ))}
              </div>
            )}
            <button
              type="button"
              onClick={finishSession}
              className="mt-4 w-full rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-gray-500"
            >
              Finish and Generate Feedback
            </button>
            {storageStatus && (
              <p className="mt-3 text-xs leading-relaxed text-gray-500">
                {storageStatus}
              </p>
            )}
          </section>
        </aside>

        <main className="min-w-0 space-y-6">
          {dataError && (
            <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
              {dataError}
            </div>
          )}

          <section className="rounded-lg border border-gray-200">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-200 px-4 py-3">
              <div>
                <h2 className="text-sm font-semibold text-gray-900">
                  Company Results
                </h2>
                <p className="text-xs text-gray-500">
                  {submittedQuery
                    ? `${results.length.toLocaleString()} matches for "${submittedQuery}"`
                    : `${companies.length.toLocaleString()} companies loaded. Start with a keyword search.`}
                </p>
              </div>
              {submittedQuery && results.length > 0 && (
                <p className="text-xs text-gray-500">
                  Page {page} of {totalPages}
                </p>
              )}
            </div>

            {submittedQuery && pageResults.length === 0 && (
              <div className="p-6 text-sm text-gray-500">
                No matching records found. Try broader search terms.
              </div>
            )}

            {!submittedQuery && (
              <div className="p-6 text-sm text-gray-500">
                Search examples: “career training,” “professional coaching,”
                “finance course,” “job skills,” or “online learning.”
              </div>
            )}

            {pageResults.length > 0 && (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                      <th className="px-4 py-3">Organization</th>
                      <th className="px-4 py-3">Headquarters</th>
                      <th className="px-4 py-3">Description</th>
                      <th className="px-4 py-3">Employees</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pageResults.map((company) => (
                      <tr
                        key={company.id}
                        className="border-b border-gray-100 last:border-0 hover:bg-gray-50"
                      >
                        <td className="px-4 py-3 align-top">
                          <button
                            type="button"
                            onClick={() => openCompany(company)}
                            className="text-left font-medium text-blue-700 hover:underline"
                          >
                            {company.name}
                          </button>
                        </td>
                        <td className="px-4 py-3 align-top text-gray-600">
                          {company.location || company.country || "Unknown"}
                        </td>
                        <td className="max-w-md px-4 py-3 align-top text-gray-600">
                          {company.description}
                        </td>
                        <td className="px-4 py-3 align-top text-gray-600">
                          {company.employees || "Unknown"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {submittedQuery && totalPages > 1 && (
              <div className="flex flex-wrap justify-end gap-2 border-t border-gray-200 px-4 py-3">
                <button
                  type="button"
                  disabled={page === 1}
                  onClick={() => setPageWithLog(page - 1)}
                  className="rounded-md border border-gray-300 px-3 py-1 text-sm text-gray-700 hover:border-gray-500 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Previous
                </button>
                {visiblePages.map((pageNumber) => (
                  <button
                    key={pageNumber}
                    type="button"
                    onClick={() => setPageWithLog(pageNumber)}
                    className={`rounded-md border px-3 py-1 text-sm ${
                      pageNumber === page
                        ? "border-gray-900 bg-gray-900 text-white"
                        : "border-gray-300 text-gray-700 hover:border-gray-500"
                    }`}
                  >
                    {pageNumber}
                  </button>
                ))}
                <button
                  type="button"
                  disabled={page === totalPages}
                  onClick={() => setPageWithLog(page + 1)}
                  className="rounded-md border border-gray-300 px-3 py-1 text-sm text-gray-700 hover:border-gray-500 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Next
                </button>
              </div>
            )}
          </section>

          {activeCompany && (
            <section className="rounded-lg border border-gray-200 p-5">
              <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
                    {activeCompany.name}
                  </h2>
                  <p className="mt-1 text-sm text-gray-500">
                    {[activeCompany.location, activeCompany.employees]
                      .filter(Boolean)
                      .join(" · ")}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => toggleSelection(activeCompany)}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    selectedIds.has(activeCompany.id)
                      ? "border border-gray-300 text-gray-700 hover:border-gray-500"
                      : "bg-blue-700 text-white hover:bg-blue-600"
                  }`}
                >
                  {selectedIds.has(activeCompany.id)
                    ? "Remove from competitors"
                    : "Select as competitor"}
                </button>
              </div>
              <p className="text-sm leading-relaxed text-gray-700">
                {activeCompany.description}
              </p>
            </section>
          )}

          {feedback && (
            <section className="rounded-lg border border-gray-200 bg-gray-50 p-5">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-500">
                Initial Reconnaissance Feedback
              </h2>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <Metric label="Searches" value={feedback.searchCount} />
                <Metric label="Companies Opened" value={feedback.openedCount} />
                <Metric label="Selected" value={feedback.selectedCount} />
                <Metric
                  label="Avg. Threat"
                  value={feedback.averageThreat ?? "Not rated"}
                />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-700">
                Your session currently looks like{" "}
                <span className="font-medium">{feedback.mode}</span>. Your
                search language emphasized{" "}
                {feedback.queryTerms.length > 0
                  ? feedback.queryTerms.join(", ")
                  : "no recorded keyword terms"}
                .
              </p>
              {feedback.selectedCountries.length > 0 && (
                <p className="mt-2 text-sm leading-relaxed text-gray-700">
                  Selected companies came from{" "}
                  {feedback.selectedCountries.join(", ")}.
                </p>
              )}
            </section>
          )}
        </main>
      </div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-md border border-gray-200 bg-white p-3">
      <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
        {label}
      </p>
      <p className="mt-1 text-xl font-semibold text-gray-900">{value}</p>
    </div>
  );
}
