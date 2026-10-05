// The agency's Telegram Mini App: pick an agent, write the task, and Telegram hands it to the bot
// (WebApp.sendData from the chat's keyboard button). team.json and avatars/ are exported by the agency
// (python -m workflows.telegram_app --export <this folder>).
(() => {
  const webApp = window.Telegram && window.Telegram.WebApp;
  const tg = webApp && webApp.platform && webApp.platform !== "unknown" ? webApp : null;
  const MAX_BYTES = 3900; // Telegram's sendData limit is 4096 bytes
  const encoder = new TextEncoder();
  const $ = (id) => document.getElementById(id);
  let team = { version: "", agents: [] };
  let chosen = null;

  if (tg) {
    tg.ready();
    tg.expand();
  }

  function photo(agent) {
    return `avatars/${encodeURIComponent(agent.slug)}.jpg?v=${encodeURIComponent(team.version)}`;
  }

  function card(agent) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "card";
    const img = document.createElement("img");
    img.className = "photo";
    img.src = photo(agent);
    img.alt = "";
    img.loading = "lazy";
    const name = document.createElement("div");
    name.className = "name";
    name.textContent = agent.name;
    const role = document.createElement("div");
    role.className = "role";
    role.textContent = agent.role;
    button.append(img, name, role);
    button.addEventListener("click", () => showCompose(agent));
    return button;
  }

  function payload() {
    return JSON.stringify({ agent: chosen.slug, text: $("task").value.trim() });
  }

  function sendable() {
    return Boolean(chosen && $("task").value.trim()) && encoder.encode(payload()).length <= MAX_BYTES;
  }

  function update() {
    const text = $("task").value.trim();
    const over = chosen && encoder.encode(payload()).length > MAX_BYTES;
    const count = $("count");
    count.className = over ? "over" : "";
    count.textContent = over
      ? "ארוך מדי לשליחה מהמסך — קצר אותה, או כתוב אותה ישירות בצ'אט."
      : text ? `${text.length} תווים` : "";
    const ok = sendable();
    if (tg) {
      ok ? tg.MainButton.enable() : tg.MainButton.disable();
      tg.MainButton.setParams({ color: ok ? tg.themeParams.button_color || "#7c3aed" : "#9e9aab" });
    } else {
      $("send").disabled = !ok;
    }
  }

  function showTeam() {
    chosen = null;
    $("compose").hidden = true;
    $("team").hidden = false;
    if (tg) {
      tg.MainButton.hide();
      tg.BackButton.hide();
    }
  }

  function showCompose(agent) {
    chosen = agent;
    if (tg && tg.HapticFeedback) tg.HapticFeedback.selectionChanged();
    $("team").hidden = true;
    $("compose").hidden = false;
    $("who-photo").src = photo(agent);
    $("who-name").textContent = agent.name;
    $("who-role").textContent = agent.detail || agent.role;
    const task = $("task");
    task.value = "";
    task.placeholder = `מה המשימה ל${agent.name}?`;
    if (tg) {
      tg.BackButton.show();
      tg.MainButton.setText(`שליחה ל${agent.name}`);
      tg.MainButton.show();
    } else {
      $("send").textContent = `שליחה ל${agent.name}`;
      $("send").hidden = false;
    }
    update();
    task.focus();
  }

  function send() {
    if (!sendable()) return;
    if (tg) {
      if (tg.HapticFeedback) tg.HapticFeedback.notificationOccurred("success");
      tg.sendData(payload());
    } else {
      $("count").textContent = "בתצוגה מקדימה (מחוץ לטלגרם) — לא נשלח.";
    }
  }

  $("task").addEventListener("input", update);
  $("back").addEventListener("click", showTeam);
  $("send").addEventListener("click", send);
  if (tg) {
    tg.MainButton.onClick(send);
    tg.BackButton.onClick(showTeam);
  }

  fetch("team.json", { cache: "no-cache" })
    .then((response) => (response.ok ? response.json() : Promise.reject(response.status)))
    .then((data) => {
      team = data;
      const grid = $("grid");
      team.agents.forEach((agent) => grid.append(card(agent)));
    })
    .catch(() => {
      $("grid").textContent = "לא הצלחתי לטעון את הצוות. סגור ופתח שוב.";
    });
})();
