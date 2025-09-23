import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  let payload = await request.json();
  payload = { ...payload, type: "registro-graca" };

  const response = await fetch(process.env.LEONARDO_CINTRA_API_WEBHOOK!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    return new Response(JSON.stringify({ success: true }), { status: 201 });
  } else {
    return new Response(JSON.stringify({ success: false }), {
      status: response.status,
    });
  }
}
