import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const data = {
    url: '/checkout',
  };
  return NextResponse.json(data, { status: 200 });
}
