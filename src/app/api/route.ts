import { NextResponse } from 'next/server';

// export async function GET(request) {
//   return NextResponse.json({ message: 'Hello World' }, { status: 200 });
// }

import { promises as fs } from 'fs';
import { NextApiRequest } from 'next';

export async function GET(req: NextApiRequest) {
  const file = await fs.readFile(`${process.cwd()}/src/_mock/data.json`, 'utf8');
  const data = JSON.parse(file);
  return NextResponse.json(data, { status: 200 });
}
