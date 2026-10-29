// ===== Réglages =====
// Adresse qui reçoit les demandes (collectif et playtest).
const CONTACT_EMAIL = "antoinerosselli.26@gmail.com";

// Liens du collectif affichés à côté du bouton « Demander à rejoindre ». Laisse vide ce que tu n'as pas.
const OP_LINKS = [
  // { label: "Discord", url: "https://discord.gg/..." },
  // { label: "Instagram", url: "https://instagram.com/..." },
];

// ===== Équipe =====
// Pour ajouter quelqu'un, ajoute son nom à la liste.
const TEAM = [
  "Antoine Rosselli",
  "Max Guillot",
  "Pierrick Mahe",
];

// ===== Textes de la page, en français et en anglais =====
// Chaque clé correspond à un attribut data-i18n="clé" dans index.html.
const TEXTS = {
  fr: {
    skip: "Aller au contenu",
    navLabel: "Navigation principale",
    navGames: "Jeux",
    navCollective: "Le collectif",
    navTeam: "Équipe",
    navJoin: "Rejoindre",
    langLabel: "Langue",
    tagline: "Chaque voix compte,<br> <em>à chaque étape.</em>",
    introLabel: "Présentation",
    intro: "Bienvenue. On est un collectif de jeux vidéo indépendants. Ici, personne ne décide seul : de la première idée aux derniers réglages, chaque membre donne son avis, et chaque avis est vraiment pris en compte.",
    menuGames: "Voir nos jeux",
    menuPlaytest: "Tester Veilbound",
    menuJoin: "Rejoindre le collectif",
    gamesEyebrow: "Nos jeux",
    gamesTitle: "Ce qu’on fabrique",
    vbAlt: "Logo de Veilbound",
    vbStatus: "En développement",
    vbText: "Notre prochain jeu, en développement sous Godot. Toute l’équipe participe aux choix, et des sessions de playtest sont en cours.",
    vbChipPlaytest: "Playtests en cours",
    vbJoin: "Rejoindre le playtest",
    vbNotices: "Lire la notice →",
    gsGenre: "Mystère",
    gsPlatform: "Windows · Démo",
    gsText: "Un brouillard mystérieux tombe sur Rock Valley. À la radio, des inconnus disent des demi-vérités.",
    gsPlay: "Jouer à la démo sur itch.io ↗",
    collEyebrow: "Le collectif",
    collLead: "Un jeu Of Passage n’appartient pas à une seule personne : il est fait de toutes les voix de l’équipe.",
    collTitle: "Comment on travaille",
    p1Title: "Tout le monde a voix au chapitre",
    p1Text: "Programmation, son, art ou écriture : chaque membre donne son avis sur tout le jeu, pas seulement sur sa partie.",
    p2Title: "On décide ensemble",
    p2Text: "Les choix importants se discutent en groupe. Une idée ne passe pas parce qu’elle vient de quelqu’un, mais parce qu’elle convainc l’équipe.",
    p3Title: "On avance pas à pas",
    p3Text: "On fait jouer nos jeux tôt et on écoute les retours, ceux des membres comme ceux des joueurs.",
    teamEyebrow: "L’équipe",
    teamTitle: "Qui on est",
    openSeat: "Ta place ici ?",
    openSeatText: "Ici, ton avis comptera autant que celui des autres.",
    joinEyebrow: "On recrute",
    joinBandTitle: "Envie de créer un jeu où ton avis compte ?",
    joinBandLead: "On cherche des personnes motivées, quel que soit leur niveau. Chacun participe aux décisions, de la première idée à la sortie. Présente-toi, on te répond.",
    rolesLabel: "Rôles recherchés",
    opJoin: "Demander à rejoindre",
    joinTitle: "Rejoindre le collectif",
    joinHelp: "Présente-toi en quelques lignes. Le bouton prépare un email avec tes réponses, tu n’as plus qu’à l’envoyer.",
    fieldName: "Ton nom ou pseudo",
    fieldRole: "Ce que tu fais",
    rolePick: "Choisis un rôle",
    roleProg: "Programmation",
    roleWriting: "Écriture et narration",
    role2d: "Art 2D",
    role3d: "Art 3D",
    roleSound: "Son et musique",
    roleVoice: "Doublage",
    roleOther: "Autre",
    fieldLink: "Un lien vers ton travail <span>(facultatif)</span>",
    fieldWhy: "Pourquoi Of Passage ?",
    cancel: "Annuler",
    prepareEmail: "Préparer l’email",
    joinError: "Remplis ton nom, ton rôle et ton message pour continuer.",
    ptTitle: "Rejoindre le playtest",
    ptHelp: "Dis-nous qui tu es. Le bouton prépare un email avec tes réponses, tu n’as plus qu’à l’envoyer.",
    ptFieldExp: "Tu as déjà fait des playtests ?",
    ptExpPick: "Choisis une réponse",
    ptExpNever: "Jamais, ce sera le premier",
    ptExpFew: "Quelques fois",
    ptExpOften: "Souvent",
    ptExpPro: "Je suis testeur QA",
    ptFieldGames: "Tes jeux préférés <span>(facultatif)</span>",
    ptFieldMsg: "Un mot pour nous ? <span>(facultatif)</span>",
    ptError: "Remplis ton nom et dis-nous si tu as déjà fait des playtests.",
    mailDone: (email) => `Ta messagerie devrait s’ouvrir avec l’email prêt. Rien ne s’est passé ? Écris directement à <strong>${email}</strong>.`,
    mailName: "Nom",
    mailRole: "Rôle",
    mailWork: "Travail",
    mailExp: "Playtests",
    mailGames: "Jeux préférés",
    mailJoinSubject: (name, role) => `Rejoindre Of Passage : ${name} (${role})`,
    mailPlaytestSubject: (name) => `Playtest Veilbound : ${name}`,
  },
  en: {
    skip: "Skip to content",
    navLabel: "Main navigation",
    navGames: "Games",
    navCollective: "The collective",
    navTeam: "Team",
    navJoin: "Join",
    langLabel: "Language",
    tagline: "Every voice counts,<br> <em>at every step.</em>",
    introLabel: "Introduction",
    intro: "Welcome. We’re an indie game collective. Here, nobody decides alone: from the first idea to the final tweaks, every member gives their opinion, and every opinion is truly taken into account.",
    menuGames: "See our games",
    menuPlaytest: "Playtest Veilbound",
    menuJoin: "Join the collective",
    gamesEyebrow: "Our games",
    gamesTitle: "What we make",
    vbAlt: "Veilbound logo",
    vbStatus: "In development",
    vbText: "Our next game, in development with Godot. The whole team takes part in the decisions, and playtest sessions are underway.",
    vbChipPlaytest: "Playtests ongoing",
    vbJoin: "Join the playtest",
    vbNotices: "Read the manual →",
    gsGenre: "Mystery",
    gsPlatform: "Windows · Demo",
    gsText: "A mysterious fog has fallen over Rock Valley. Strangers speak half-truths over the radio.",
    gsPlay: "Play the demo on itch.io ↗",
    collEyebrow: "The collective",
    collLead: "An Of Passage game doesn’t belong to one person: it’s made of every voice on the team.",
    collTitle: "How we work",
    p1Title: "Everyone has a say",
    p1Text: "Programming, sound, art or writing: every member weighs in on the whole game, not just their own part.",
    p2Title: "We decide together",
    p2Text: "Big choices are discussed as a group. An idea doesn’t win because of who suggested it, but because it convinces the team.",
    p3Title: "Step by step",
    p3Text: "We get people playing our games early and we listen to feedback, from members and players alike.",
    teamEyebrow: "The team",
    teamTitle: "Who we are",
    openSeat: "Your seat here?",
    openSeatText: "Here, your opinion will count as much as anyone else’s.",
    joinEyebrow: "We’re recruiting",
    joinBandTitle: "Want to make a game where your opinion matters?",
    joinBandLead: "We’re looking for motivated people, whatever their level. Everyone takes part in decisions, from the first idea to release. Introduce yourself and we’ll get back to you.",
    rolesLabel: "Roles we’re looking for",
    opJoin: "Ask to join",
    joinTitle: "Join the collective",
    joinHelp: "Introduce yourself in a few lines. The button prepares an email with your answers, all you have to do is send it.",
    fieldName: "Your name or nickname",
    fieldRole: "What you do",
    rolePick: "Pick a role",
    roleProg: "Programming",
    roleWriting: "Writing and narrative",
    role2d: "2D art",
    role3d: "3D art",
    roleSound: "Sound and music",
    roleVoice: "Voice acting",
    roleOther: "Other",
    fieldLink: "A link to your work <span>(optional)</span>",
    fieldWhy: "Why Of Passage?",
    cancel: "Cancel",
    prepareEmail: "Prepare the email",
    joinError: "Fill in your name, role and message to continue.",
    ptTitle: "Join the playtest",
    ptHelp: "Tell us who you are. The button prepares an email with your answers, all you have to do is send it.",
    ptFieldExp: "Have you done playtests before?",
    ptExpPick: "Pick an answer",
    ptExpNever: "Never, this will be my first",
    ptExpFew: "A few times",
    ptExpOften: "Often",
    ptExpPro: "I’m a QA tester",
    ptFieldGames: "Your favourite games <span>(optional)</span>",
    ptFieldMsg: "Anything to add? <span>(optional)</span>",
    ptError: "Fill in your name and tell us if you’ve done playtests before.",
    mailDone: (email) => `Your email app should open with the message ready. Nothing happened? Write directly to <strong>${email}</strong>.`,
    mailName: "Name",
    mailRole: "Role",
    mailWork: "Work",
    mailExp: "Playtests",
    mailGames: "Favourite games",
    mailJoinSubject: (name, role) => `Join Of Passage: ${name} (${role})`,
    mailPlaytestSubject: (name) => `Veilbound playtest: ${name}`,
  },
};

// ===== Langue =====
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
    if (typeof value !== "string") return;
    if (value.includes("<") || value.includes("&")) el.innerHTML = value;
    else el.textContent = value;
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => el.setAttribute("aria-label", t(el.dataset.i18nAria)));
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => el.setAttribute("alt", t(el.dataset.i18nAlt)));
  document.querySelectorAll(".lang-btn").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
}

// ===== Équipe =====
const initials = (name) => name.split(/\s+/).map((w) => w[0]).slice(0, 2).join("").toUpperCase();

function renderTeam() {
  const members = TEAM.map((name) => `
    <li class="member">
      <span class="member-avatar" aria-hidden="true">${initials(name)}</span>
      <h3 translate="no">${name}</h3>
    </li>`).join("");
  // Dernière carte : ouvre le formulaire pour rejoindre
  const openSeat = `
    <li>
      <button type="button" class="member member-open" data-open="op-join">
        <span class="member-avatar" aria-hidden="true">+</span>
        <span class="member-name">${t("openSeat")}</span>
        <p>${t("openSeatText")}</p>
      </button>
    </li>`;
  document.getElementById("team-list").innerHTML = members + openSeat;
}

function renderAll() {
  applyTexts();
  renderTeam();
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    lang = btn.dataset.lang;
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* stockage indisponible */ }
    renderAll();
  });
});

renderAll();
document.getElementById("year").textContent = new Date().getFullYear();

// ===== Liens =====
document.getElementById("op-links").innerHTML = OP_LINKS
  .map((l) => `<li><a href="${l.url}" target="_blank" rel="noopener">${l.label} ↗</a></li>`)
  .join("");


// ===== Formulaires qui préparent un email =====
// required : champs obligatoires, dans l'ordre où le curseur va s'il en manque un.
function setupMailForm({ dialogId, openId, closeId, errorId, doneId, required, errorKey, buildMail }) {
  const dialog = document.getElementById(dialogId);
  const form = dialog.querySelector("form");
  const error = document.getElementById(errorId);
  const done = document.getElementById(doneId);

  const open = () => {
    error.hidden = true;
    done.hidden = true;
    dialog.showModal();
  };
  document.getElementById(openId).addEventListener("click", open);
  // Autres boutons qui ouvrent ce formulaire (ex. la carte « Ta place ici ? », recréée à chaque changement de langue)
  document.addEventListener("click", (e) => {
    if (e.target.closest(`[data-open="${dialogId}"]`)) open();
  });
  document.getElementById(closeId).addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) dialog.close(); // clic en dehors de la boîte
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const missing = required.find((id) => !document.getElementById(id).value.trim());
    if (missing) {
      error.textContent = t(errorKey);
      error.hidden = false;
      done.hidden = true;
      document.getElementById(missing).focus();
      return;
    }
    error.hidden = true;

    const data = new FormData(form);
    const get = (name) => (data.get(name) || "").toString().trim();
    const { subject, lines, message } = buildMail(get);
    const body = lines.filter(Boolean).join("\n") + (message ? "\n\n" + message : "");

    window.location.href =
      `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    // Si la messagerie du visiteur ne s'ouvre pas, il a l'adresse sous les yeux.
    done.innerHTML = t("mailDone")(CONTACT_EMAIL);
    done.hidden = false;
  });
}

// Rejoindre Of Passage
setupMailForm({
  dialogId: "op-join",
  openId: "op-join-open",
  closeId: "op-join-close",
  errorId: "join-error",
  doneId: "join-done",
  required: ["join-name", "join-role", "join-msg"],
  errorKey: "joinError",
  buildMail: (get) => ({
    subject: t("mailJoinSubject")(get("name"), get("role")),
    lines: [
      `${t("mailName")} : ${get("name")}`,
      `${t("mailRole")} : ${get("role")}`,
      get("link") && `${t("mailWork")} : ${get("link")}`,
    ],
    message: get("message"),
  }),
});

// Rejoindre le playtest de Veilbound
setupMailForm({
  dialogId: "pt-join",
  openId: "pt-join-open",
  closeId: "pt-join-close",
  errorId: "pt-error",
  doneId: "pt-done",
  required: ["pt-name", "pt-exp"],
  errorKey: "ptError",
  buildMail: (get) => ({
    subject: t("mailPlaytestSubject")(get("name")),
    lines: [
      `${t("mailName")} : ${get("name")}`,
      `${t("mailExp")} : ${get("experience")}`,
      get("games") && `${t("mailGames")} : ${get("games")}`,
    ],
    message: get("message"),
  }),
});

// Arrivée depuis la page Veilbound (veilbound.html → index.html#playtest) : on ouvre le formulaire
if (location.hash === "#playtest") document.getElementById("pt-join-open").click();
