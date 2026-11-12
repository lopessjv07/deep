import { NextRequest, NextResponse } from "next/server";

const GRAPH_VERSION = "v21.0";
const ALLOWED_EVENTS = new Set(["PageView", "ViewContent", "InitiateCheckout"]);

export async function POST(req: NextRequest) {
  const pixelId = process.env.KGR_META_PIXEL_ID || "1420260723593752";
  const token = process.env.KGR_META_ACCESS_TOKEN;
  if (!pixelId || !token) {
    return NextResponse.json({ ok: false, error: "missing config" }, { status: 500 });
  }

  let body: { event_name?: string; event_id?: string; event_source_url?: string; fbp?: string; fbc?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid json" }, { status: 400 });
  }

  const { event_name, event_id, event_source_url, fbp, fbc } = body;
  if (!event_name || !ALLOWED_EVENTS.has(event_name) || !event_id) {
    return NextResponse.json({ ok: false, error: "invalid event" }, { status: 400 });
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    req.headers.get("x-real-ip") ||
    undefined;

  const payload = {
    data: [
      {
        event_name,
        event_time: Math.floor(Date.now() / 1000),
        event_id, // mesmo ID do Pixel -> deduplicação
        action_source: "website",
        event_source_url,
        user_data: {
          client_ip_address: ip,
          client_user_agent: req.headers.get("user-agent") || undefined,
          fbp: fbp || undefined,
          fbc: fbc || undefined,
        },
      },
    ],
  };

  try {
    const res = await fetch(
      `https://graph.facebook.com/${GRAPH_VERSION}/${pixelId}/events?access_token=${token}`,
      { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) }
    );
    const json = await res.json();
    return NextResponse.json({ ok: res.ok, meta: json }, { status: res.ok ? 200 : 502 });
  } catch {
    return NextResponse.json({ ok: false, error: "meta request failed" }, { status: 502 });
  }
}
