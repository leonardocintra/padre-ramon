import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: string;
};

const url = `${process.env.NEXT_SENDGRID_API_URL}/mail/send`;
const token = process.env.NEXT_SENDGRID_API_TOKEN || "";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const config = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req.body),
  };

  try {
    const response = await fetch(url, config);
    res.status(202).json({ status: response.statusText });
  } catch (error) {
    res.status(500).json({ status: 'Ocorreu um erro ' + error});
  }
}
