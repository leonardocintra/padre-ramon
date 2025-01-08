const url = `${process.env.NEXT_SENDGRID_API_URL}/mail/send`;
const token = process.env.NEXT_SENDGRID_API_TOKEN || "";

export async function POST(req: Request) {
  const data = await req.json();

  console.log(data);

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data.body),
  });

  if (res.status === 201 || res.status === 200) {
    return Response.json(res, {
      status: res.status,
    });
  } else {
    return Response.json(
      {
        message: res.json(),
      },
      {
        status: res.status,
      }
    );
  }
}