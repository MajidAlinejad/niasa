import { NextRequest, NextResponse } from 'next/server';

// export async function GET(request) {
//   return NextResponse.json({ message: 'Hello World' }, { status: 200 });
// }

import { promises as fs } from 'fs';

export async function GET(req: NextRequest) {
  const url = new URL(req.url);

  const id = url.searchParams.get('id');
  if (id === '60') {
    const file = await fs.readFile(`${process.cwd()}/src/_mock/data-man.json`, 'utf8');
    const data = JSON.parse(file);
    return NextResponse.json(data, { status: 200 });
  }
  if (id === '30') {
    const file = await fs.readFile(`${process.cwd()}/src/_mock/data.json`, 'utf8');
    const data = JSON.parse(file);
    return NextResponse.json(data, { status: 200 });
  }
  const file = await fs.readFile(`${process.cwd()}/src/_mock/data.json`, 'utf8');
  const data = JSON.parse(file);
  return NextResponse.json(data, { status: 200 });
}
