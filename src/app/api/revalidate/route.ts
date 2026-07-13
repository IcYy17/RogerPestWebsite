import { revalidatePath } from "next/cache";

// Optional on-demand revalidation endpoint. The Drumroll fleet normally
// revalidates via a Vercel deploy hook (set as the company's `revalidate_url`),
// which rebuilds the site and picks up new posts — so this route isn't required.
// It's provided as a lighter-weight alternative: point the company's
// `revalidate_url` here instead to refresh just the affected paths (instant,
// no build minutes).
//
// Security: if AEO_REVALIDATE_SECRET is set, the request's `secret` must match.
// If it's unset, revalidation is open (low-risk — it only refreshes a cache).

export async function POST(req: Request) {
  let body: { path?: string; secret?: string };
  try {
    body = (await req.json()) as { path?: string; secret?: string };
  } catch {
    return new Response("bad request", { status: 400 });
  }

  const secretEnv = process.env.AEO_REVALIDATE_SECRET;
  if (secretEnv && body.secret !== secretEnv) {
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
