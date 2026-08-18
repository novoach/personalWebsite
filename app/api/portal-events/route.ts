import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const maxEventsPerSession = 500;
const maxSelectionsPerSession = 50;

type PortalSessionPayload = {
  sessionId?: unknown;
  startedAt?: unknown;
  completedAt?: unknown;
  ventureConcept?: unknown;
  events?: unknown;
  selections?: unknown;
  feedback?: unknown;
};

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

export async function POST(request: Request) {
  let payload: PortalSessionPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON payload." },
      { status: 400 },
    );
  }

  if (
    typeof payload.sessionId !== "string" ||
    !Array.isArray(payload.events) ||
    !Array.isArray(payload.selections)
  ) {
    return NextResponse.json(
      { ok: false, error: "Missing sessionId, events, or selections." },
      { status: 400 },
    );
  }

  if (
    payload.events.length > maxEventsPerSession ||
    payload.selections.length > maxSelectionsPerSession
  ) {
    return NextResponse.json(
      { ok: false, error: "Session payload is too large." },
      { status: 413 },
    );
  }

  const safeSessionId = payload.sessionId.replace(/[^a-zA-Z0-9_-]/g, "");
  if (safeSessionId.length < 8) {
    return NextResponse.json(
      { ok: false, error: "Invalid sessionId." },
      { status: 400 },
    );
  }

  const sessionBundle = {
    sessionId: safeSessionId,
    startedAt:
      typeof payload.startedAt === "string" ? payload.startedAt : null,
    completedAt:
      typeof payload.completedAt === "string" ? payload.completedAt : null,
    ventureConcept:
      typeof payload.ventureConcept === "string" ? payload.ventureConcept : "",
    events: payload.events.filter(isPlainObject),
    selections: payload.selections.filter(isPlainObject),
    feedback: isPlainObject(payload.feedback) ? payload.feedback : null,
    receivedAt: new Date().toISOString(),
    source: "portal-demo",
  };

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return NextResponse.json({
      ok: true,
      stored: false,
      reason: "BLOB_READ_WRITE_TOKEN is not configured.",
    });
  }

  const blob = await put(
    `portal-demo/sessions/${safeSessionId}.json`,
    JSON.stringify(sessionBundle, null, 2),
    {
      access: "private",
      addRandomSuffix: false,
      contentType: "application/json",
    },
  );

  return NextResponse.json({
    ok: true,
    stored: true,
    url: blob.url,
  });
}
