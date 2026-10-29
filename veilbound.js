// ===== Page Veilbound : présentation du jeu + sa notice =====
// La notice est le fichier notice.pdf. Pour la changer, remplace ce fichier en gardant son nom.
// En ligne, elle s'ouvre comme un livre. Si la page est ouverte en double-clic depuis
// l'ordinateur, le navigateur bloque la lecture du PDF : on l'ouvre alors dans un nouvel onglet.
const NOTICE_PDF = "notice.pdf";

// ===== Textes de la page, en français et en anglais =====
const TEXTS = {
  fr: {
    skip: "Aller à la notice",
    navLabel: "Navigation principale",
    navGames: "Jeux",
    navCollective: "Le collectif",
    navTeam: "Équipe",
    navJoin: "Rejoindre",
    langLabel: "Langue",
    vbAlt: "Logo de Veilbound",
    vbStatus: "En développement",
    vbText: "Notre prochain jeu, en développement sous Godot. Toute l’équipe participe aux choix, et des sessions de playtest sont en cours.",
    vbChipPlaytest: "Playtests en cours",
    vbJoin: "Rejoindre le playtest",
    vbSeeNotice: "Lire la notice ↓",
    noticeTitle: "La notice",
    noticeName: "Notice de Veilbound",
    read: "Lire →",
    readerHelp: "← → pour tourner les pages · Échap pour fermer",
    close: "Fermer",
    loading: "Chargement de la notice…",
    loadError: "Impossible d’afficher la notice ici.",
    openPdf: "Ouvrir le PDF ↗",
    backHome: "Retour au collectif",
  },
  en: {
    skip: "Skip to the manual",
    navLabel: "Main navigation",
    navGames: "Games",
    navCollective: "The collective",
    navTeam: "Team",
    navJoin: "Join",
    langLabel: "Language",
    vbAlt: "Veilbound logo",
    vbStatus: "In development",
    vbText: "Our next game, in development with Godot. The whole team takes part in the decisions, and playtest sessions are underway.",
    vbChipPlaytest: "Playtests ongoing",
    vbJoin: "Join the playtest",
    vbSeeNotice: "Read the manual ↓",
    noticeTitle: "The manual",
    noticeName: "Veilbound manual",
    read: "Read →",
    readerHelp: "← → to turn pages · Esc to close",
    close: "Close",
    loading: "Loading the manual…",
    loadError: "Couldn’t display the manual here.",
    openPdf: "Open the PDF ↗",
    backHome: "Back to the collective",
  },
};

// ===== Langue (la même que sur la page d'accueil) =====
const LANG_KEY = "ofpassage-lang";
const browserLang = () => ((navigator.language || "fr").toLowerCase().startsWith("fr") ? "fr" : "en");
let lang = browserLang();
try {
  const saved = localStorage.getItem(LANG_KEY);
  if (saved === "fr" || saved === "en") lang = saved;
} catch (e) { /* stockage indisponible : on garde la langue du navigateur */ }
const t = (key) => TEXTS[lang][key];

function applyTexts() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = t(el.dataset.i18n);
    if (typeof value === "string") el.textContent = value;
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => el.setAttribute("aria-label", t(el.dataset.i18nAria)));
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => el.setAttribute("alt", t(el.dataset.i18nAlt)));
  document.querySelectorAll(".lang-btn").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
}

// ===== Bouton « Lire » =====
// Page ouverte en double-clic (file://) : le livre ne peut pas lire le PDF
const isLocalFile = location.protocol === "file:";

document.getElementById("notice-open").addEventListener("click", (e) => {
  if (isLocalFile) window.open(NOTICE_PDF, "_blank", "noopener");
  else openNotice(e.currentTarget);
});

// ===== Lecteur : chaque page du PDF devient une page de livre =====
pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

const reader = document.getElementById("reader");
const loading = document.getElementById("reader-loading");
let book = null;
let opener = null;   // bouton à refocaliser à la fermeture
let openId = 0;      // évite qu'une notice lente s'affiche après fermeture

async function openNotice(fromBtn) {
  const id = ++openId;
  opener = fromBtn;
  document.getElementById("reader-title").textContent = t("noticeName");
  loading.textContent = t("loading");
  loading.hidden = false;
  reader.hidden = false;
  document.body.style.overflow = "hidden";
  document.getElementById("reader-close").focus();

  try {
    const pdf = await pdfjsLib.getDocument(NOTICE_PDF).promise;
    const pages = [];
    let ratio;
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const viewport = page.getViewport({ scale: 2 });
      ratio ??= viewport.width / viewport.height;
      const canvas = document.createElement("canvas");
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      await page.render({ canvasContext: canvas.getContext("2d"), viewport }).promise;
      pages.push(canvas.toDataURL("image/jpeg", 0.9));
    }
    if (id !== openId) return; // fermé entre-temps

    // Taille d'une page pour tenir dans l'écran (2 pages côte à côte si assez large)
    const stage = document.getElementById("reader-stage");
    const perRow = innerWidth > 800 && pages.length > 1 ? 2 : 1;
    let height = stage.clientHeight - 24;
    let width = height * ratio;
    if (width * perRow > innerWidth - 32) { width = (innerWidth - 32) / perRow; height = width / ratio; }

    loading.hidden = true;
    book = new St.PageFlip(document.getElementById("book"), {
      width, height, showCover: true, usePortrait: perRow === 1,
    });
    book.loadFromImages(pages);
  } catch (err) {
    // Plan B : lien direct vers le PDF
    if (id === openId) {
      loading.innerHTML = `${t("loadError")} <a class="reader-pdf" href="${NOTICE_PDF}" target="_blank" rel="noopener">${t("openPdf")}</a>`;
    }
  }
}

function closeNotice() {
  openId++;
  reader.hidden = true;
  document.body.style.overflow = "";
  book?.destroy();
  book = null;
  // PageFlip supprime son conteneur : on en remet un neuf
  document.getElementById("book")?.remove();
  document.getElementById("reader-stage").insertAdjacentHTML("beforeend", '<div id="book"></div>');
  opener?.focus();
}

document.getElementById("reader-close").addEventListener("click", closeNotice);
document.addEventListener("keydown", (e) => {
  if (reader.hidden) return;
  if (e.key === "Escape") closeNotice();
  if (e.key === "ArrowLeft") book?.flipPrev();
  if (e.key === "ArrowRight") book?.flipNext();
});

// ===== Démarrage =====
function renderAll() {
  applyTexts();
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    lang = btn.dataset.lang;
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* stockage indisponible */ }
    renderAll();
  });
});

renderAll();
// Arrivée avec veilbound.html#lire (lien du portfolio) : on ouvre directement la notice
if (location.hash === "#lire") {
  document.getElementById("notice").scrollIntoView();
  if (!isLocalFile) openNotice(document.getElementById("notice-open"));
}
document.getElementById("year").textContent = new Date().getFullYear();
