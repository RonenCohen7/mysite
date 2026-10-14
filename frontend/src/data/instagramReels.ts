export type PersonalPost = {
  id: string;
  /** Instagram post or Reel this card opens. */
  href: string;
  type: "image" | "video";
  src: string;
  poster?: string;
  alt: { he: string; en: string };
};

/**
 * Newest first. Homepage shows these in rows of up to 4.
 * Add a file under public/personal/ and a real Instagram post URL — do not invent either.
 */
export const personalPosts: PersonalPost[] = [];
