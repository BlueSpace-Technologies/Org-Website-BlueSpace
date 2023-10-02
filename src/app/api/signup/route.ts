import { db } from '@/db';
import { Users, users } from '@/db/schema/users';

export async function GET(req: Request) {
    let res: Users[] = await db.select().from(users);
    console.log(res);
    return new Response('ok');
}
