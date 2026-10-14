export type InstagramReel = {
  id: string;
  permalink: string;
};

/**
 * Official Reel permalinks from https://www.instagram.com/ronen7437/ only.
 * Leave empty until the exact URLs are known — do not invent them.
 */
export const instagramReels: InstagramReel[] = [];

const REEL_PATH = /^\/(reel|p|tv)\/([A-Za-z0-9_-]+)\/?$/;

/** Keep only a public Instagram post or Reel permalink. */
export function normalizeInstagramPermalink(input: string): string | null {
  try {
    const url = new URL(input);
    if (url.protocol !== "https:") return null;
    if (url.hostname !== "www.instagram.com" && url.hostname !== "instagram.com") return null;
    const match = url.pathname.match(REEL_PATH);
    if (!match) return null;
    return `https://www.instagram.com/${match[1]}/${match[2]}/`;
  } catch {
    return null;
  }
}
