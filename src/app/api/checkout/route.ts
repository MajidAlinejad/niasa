import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';

export async function POST(req: NextApiRequest) {
  const data = {
    url: '/checkout',
  };
  return NextResponse.json(data, { status: 200 });
}
