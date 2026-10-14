const SCRIPT_SRC = "https://www.instagram.com/embed.js";

type InstagramWindow = Window & {
  instgrm?: { Embeds: { process: () => void } };
};

let loading: Promise<void> | null = null;

export function processInstagramEmbeds(): void {
  (window as InstagramWindow).instgrm?.Embeds.process();
}

/** Load Instagram's official embed script once. Later calls reuse the same tag. */
export function loadInstagramEmbeds(): Promise<void> {
  const w = window as InstagramWindow;
  if (w.instgrm?.Embeds) return Promise.resolve();
  if (loading) return loading;

  loading = new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`);
    const script = existing ?? document.createElement("script");

    const finish = () => {
      script.dataset.igState = "done";
      if (w.instgrm?.Embeds) resolve();
      else reject(new Error("Instagram embed script loaded without instgrm"));
    };

    if (script.dataset.igState === "done") {
      finish();
      return;
    }

    script.addEventListener("load", finish, { once: true });
    script.addEventListener(
      "error",
      () => {
        script.dataset.igState = "error";
        loading = null;
        reject(new Error("Instagram embed script failed"));
      },
      { once: true }
    );

    if (!existing) {
      script.dataset.igState = "loading";
      script.src = SCRIPT_SRC;
      script.async = true;
      document.body.appendChild(script);
    } else if (w.instgrm?.Embeds) {
      finish();
    }
  });

  return loading;
}
