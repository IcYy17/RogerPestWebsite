import { revalidatePath } from "next/cache";

// The Drumroll AEO engine pings this endpoint on publish so new/updated posts
// go live in seconds without a redeploy. Guarded by a shared secret that must
// match the company's `revalidate_secret` in the engine's brand settings.
//
// Env required: AEO_REVALIDATE_SECRET  (set on the Vercel project)
// Configure the engine: set this company's `revalidate_url` to
//   https://rogerstermiteandpest.com/api/revalidate

export async function POST(req: Request) {
  const secretEnv = process.env.AEO_REVALIDATE_SECRET;
  if (!secretEnv) {
    return new Response("revalidation not configured", { status: 503 });
  }

  let body: { path?: string; secret?: string };
  try {
    body = (await req.json()) as { path?: string; secret?: string };
  } catch {
    return new Response("bad request", { status: 400 });
  }

  if (!body.secret || body.secret !== secretEnv) {
    return new Response("forbidden", { status: 403 });
  }

  const path = body.path || "/blog";
  revalidatePath(path);
  // Always refresh the index too, so a new post shows up in the listing.
  if (path !== "/blog") revalidatePath("/blog");
  // Refresh the sitemap so search engines pick up the new URL.
  revalidatePath("/sitemap.xml");

  return Response.json({ revalidated: true, path });
}
